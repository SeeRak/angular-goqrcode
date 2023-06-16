import { Component } from '@angular/core';
import { QrcodeService } from 'src/app/services/qrcode.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-simple-qrcode',
  templateUrl: './simple-qrcode.component.html',
  styleUrls: ['./simple-qrcode.component.css']
})
export class SimpleQrcodeComponent {

  urlQrCode : string = ""

  constructor(){}

  getSimpleQrCode(urlData : string){
    this.urlQrCode = environment.API_URL_QRCODESIMPLE+urlData
  } 
}
