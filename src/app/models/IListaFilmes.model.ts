import { IFilmeApi } from "./IFilmeApi.model";

export interface IListaFilmes {
  page: number;
  results: IFilmeApi[];
  total_results: number;
  total_pages: number;
}
