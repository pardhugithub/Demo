import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, interval, timer } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.sass'],
})
export class RxjsComponent implements OnInit {
  data: number = 0;
  data1: number = 0;
  constructor(private httpclient: HttpClient) {}

  ngOnInit(): void {
    this.interval();
    this.timer();
    this.callAPIs();
  }

  timer() {
    const obsT$ = timer(5000, 1000);
    obsT$.subscribe((d) => {
      this.data1 = d;
    });
  }

  interval() {
    const obsI$ = interval(1000);

    obsI$.subscribe((d) => {
      this.data = d;
    });
  }

  shareReplay() {
    const obsData$ = this.httpclient
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe();

    obsData$.subscribe((data) => {
      console.log(data);
    });
    obsData$.subscribe((data) => {
      console.log(data);
    });
  }

  callAPIs() {
    const obsData$ = this.httpclient.get(
      'https://baconipsum.com/api/?type=meat-and-filler'
    ).pipe(delay(5000))
    const obsData1$ = this.httpclient.get(
      'https://baconipsum.com/api/?type=meat-and-filler'
    );

    forkJoin([obsData$,obsData1$]).subscribe( data =>{
      console.log(data);
    })
  }
}
