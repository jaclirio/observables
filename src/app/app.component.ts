import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'observables';

  subject: SubjectService;
  value = 0;
  //name!: string;
  //timer$!:Observable<number>;
  //subscription: Subscription;
  products:any=[];

  constructor(subject:SubjectService) {
    this.subject = subject;
  }

  ngOnInit(): void {
    //this.timer$=this.subject.createTimer();
    //this.timer$.subscribe(message =>{
    //this.subscription = this.timer$.subscribe(message => { });
    this.subject.createTimer().subscribe(message => {
      this.value = message;
    });

    this.subject.getProducts().subscribe(products => {
      this.products = products;
    });

    /*this.subject.name$.subscribe(name => {
      this.name = name;
    });*/
  }

  /*ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }*/

  changeName() {
    const names = [
      'Jim', 'Julius', 'Joan', 'James', 'Joe', 'Jane', 'Jack', 'Jill'
    ]
    this.subject.setName(names[Math.floor(Math.random()*names.length)]);
  }

}
