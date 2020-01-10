import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { TestServiceService } from '../../services/test-service.service';
import { InternalListItem } from './internal-list-item';
import GetItemsListResponse = Api.Messages.GetItemsListResponse;

@Component({
  selector: 'app-ngforissue',
  templateUrl: './ngforissue.component.html',
  styleUrls: []
})
export class NgforissueComponent implements OnInit {

  public items$: Observable<InternalListItem[]>;


  constructor(private service: TestServiceService) { }

  ngOnInit() {
    this.doLoad();
  }

  doLoad() {

    this.items$ = this.service
                     .getAll()
                     .pipe(
                       map((x: GetItemsListResponse) => NgforissueComponent.convert(x)),
                       catchError((error) => {
                         console.log(error);

                         return of([]);
                       }),
                       finalize(() => {
                         console.log('some logic here');
                       })
                     );
  }


  static convert(response: GetItemsListResponse): InternalListItem[] {
    let result: InternalListItem[] = [];

    for (let i = 0; i < response.items.length; i++) {
      result.push(new InternalListItem(response.items[i].name, response.items[i].code));
    }

    return result;
  }

}
