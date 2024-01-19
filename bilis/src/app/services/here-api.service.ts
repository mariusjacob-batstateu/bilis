import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HereApiService {
  private autoSuggestUrl = 'https://autosuggest.search.hereapi.com/v1/autosuggest';
  constructor(private http: HttpClient) { }


  // AUTO SUGGEST funcs
  autoSuggestgetResult(
    query:string,
    lat:any,
    long:any
    ): Observable<any> {
    const params = new HttpParams()
      .set('apiKey', "BJxg_5MLxlzfcQZUKTebPozH3pu6rHPUFBBOjh8DYUs")
      .set('q', query)
      .set('at',lat+','+long)
      ;

    // Make GET request with parameters
    console.log(`${this.autoSuggestUrl}`, { params })
    return this.http.get(`${this.autoSuggestUrl}`, { params });
  }
  autoSuggestpostResult(data: any): Observable<any> {
    return this.http.post(`${this.autoSuggestUrl}/post-endpoint`, data);
  }
}
