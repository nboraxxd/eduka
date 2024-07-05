export type SearchParamsProps = {
  searchParams: { [key: string]: string | undefined }
}

export interface SuccessResponse<Data> {
  message: string
  data: Data
}
