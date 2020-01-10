
declare namespace Api.Messages {
  interface ApiListItem {
    email: string;
    name: string;
    code: string;
  }

  interface GetItemsListResponse {
    items: ApiListItem[];
  }
}
