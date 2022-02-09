import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Phone } from './phone/phone.interface';
import { Phones } from './phones/phones.interfaces';

@Injectable({
  providedIn: 'root'
})

export class PhoneService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPhones():Observable<Phones[]> {
    return this.http.get<Phones[]>("assets/phones/phones.json");
  }

  getOnePhone(id: String): any {
   return this.http.get<Phone[]>("assets/phones/" + id + ".json");
  }
}
