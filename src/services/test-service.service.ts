import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import GetItemsListResponse = Api.Messages.GetItemsListResponse;

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }

  public getAll(): Observable<GetItemsListResponse> {
    const response: GetItemsListResponse = {items: []};

    response.items.push({name: 'First', email: 'f@irst.com', code: '1'});
    response.items.push({name: 'Second', email: 's@econd.com', code: '2'});

    return of(response);
  }
}
