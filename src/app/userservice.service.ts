import { Injectable } from '@angular/core';
import  {HttpClient, HttpRequest, HttpHeaders, HttpEvent} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

 

  constructor(private httpClient: HttpClient) { }

  private user = new BehaviorSubject<any>("1111");
  changeState(myChange:any) {
    this.user.next(myChange);
}

getState() {
    return this.user.asObservable();
}

  login(user:any) {
    return this.httpClient.post('http://localhost:8080/Login/connect',user)
        .toPromise();
}
}
