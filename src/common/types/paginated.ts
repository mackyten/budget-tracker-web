export type Paginated<T> = {
  data: T;
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};
