import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obs1',
  templateUrl: './obs1.component.html',
  styleUrls: ['./obs1.component.css']
})
export class Obs1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getData(2, 5).subscribe(
      (res) => {
        console.log('the response is', res)
      },
      (err) => {
        console.log('the error is', err)
      }
    )

    this.getSData().subscribe(
      (res)=>{
        console.log('the result is',res)
      },
      (err)=>{
        console.log('the error is',err)
      },
      ()=>{
        console.log('the observable is complete')
      }
    )
  }

  getData(a, b) {
    return new Observable((observer) => {
      var c = 0;
      setTimeout(() => {
        c = a + b;
        observer.next(c)
      }, 3000)
    })
  }


  getSData(){
    return new Observable((observer)=>{
      setTimeout(()=>{
        observer.next(1000)
      },1000)

      setTimeout(()=>{
        observer.next(2000)
      },2000)

      // setTimeout(()=>{
      //   observer.error('the error is')
      // },3000)

      setTimeout(()=>{
        observer.complete( )
      },3000)

      setTimeout(()=>{
        observer.next(4000)
      },4000)
    })
  }
}
