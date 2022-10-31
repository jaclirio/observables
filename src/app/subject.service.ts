import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private http: HttpClient;

  name$ = new BehaviorSubject('John');

  constructor(http: HttpClient) {
    this.http = http;
  }

  createTimer() {
    return new Observable<number>(Subscriber => {
      let count = 0;
      setInterval(() => {
        Subscriber.next(count);
        count++;
      }, 1000);
    })
  }

  setName(name: string) {
    this.name$.next(name);
  }

  getProducts() {
    return this.http.get('https://pw-uiewg-walletapp.firebaseio.com/products.json');
  }

}
