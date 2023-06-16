import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  constructor(private http : HttpClient) { }

  getSimpleQrCode(urlData : string) : Observable<string>{
    return this.http.get<string>(environment.API_URL_QRCODESIMPLE+urlData)
  }
}
