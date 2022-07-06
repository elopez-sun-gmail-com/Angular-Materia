import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

/**
* Clase base para los Servicios de datos.
*/
export abstract class CallService {

    /**
     *
     * @param http
     */
    constructor(protected http: HttpClient) {
        console.log('CallService -->> ', new Date())
    }

    /**
    *
    * @param url
    * @param parametros
    */
  public get<T>(url: string, parametros?: HttpParams) {

    console.log('url -->> ', url);
    console.log('parametros -->> ', parametros);

    const httpHeaders = new HttpHeaders()
          .set('Accept', 'application/json');

    return this.http.get<T>(url, { headers: httpHeaders, params: parametros, responseType: 'json' });

    }

    /**
     *
     * @param url
     * @param parametros
     */
    public post<T>(url: string, entity: any) {

        console.log('url -->> ', url);
        console.log('parametros -->> ', JSON.stringify(entity));

        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

        return this.http.post<T>(url, JSON.stringify(entity), { headers: headers });
    }

    /**
     *
     * @param url
     * @param parametros
     * @param httpHeaders
     */
    public postFile<T>(url: string, parametros: FormData) {
        // httpHeaders: any

        console.log('url -->> ', url);
        console.log('parametros -->> ', parametros);

        return this.http.post<T>(url, parametros);

    }


    /**
     *
     * @param parametros
     * @param nombreParametro
     * @param valorParametro
     */
    protected addParameter(parametros: HttpParams, nombreParametro: string, valorParametro: any) {

      if (nombreParametro != undefined && valorParametro != undefined) {
        parametros.append(nombreParametro, valorParametro);
      }

    }

}