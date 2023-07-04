import { Observable, map, interval } from 'rxjs';

//async analogy 
const p = new Promise((resolve, reject) => {
    console.log('from promise invoked');
    setTimeout(() => {
      resolve(1200)
    }, 4000)
  });
  
  //p.then((data) => console.log('promise', data))
  //  .then()
  //  .then();
  
  //sync analogy Promise
  [1].map((x) => x * 2).map((x) => x * 10);
  
  //async analogy Promise
  Promise.resolve(100)
    .then((d) => d * 1.2)
    .then((x) => console.log(x));
  
  //sync analogy Observables
  [1, 2, 3, 4].map((x) => x * 2).map((x) => x * 10);
  
  //async analogy Observables
  //Observables, когато е в setInterval е async
  /*
  function interval(intervalValue: number) {
    return new Observable<number>((observer) => {
      //observer.next(1000);
      //observer.next(2000);
      //observer.next(3000);
      let counter = 0;
      let timer = setInterval(() => {
        observer.next(counter++)
      }, intervalValue);
  
      //this code is invoked on destroy
      return () => {
        clearInterval(timer);
        //observer.unsubscribe()
      };
    });
  }
  */
   
  
  const stream$ = interval(3000).pipe(map((x) => x * 2));
  
  setTimeout(() => {
    stream$.subscribe({
      next: (x) => console.log('data', x),
      error: (err) => console.error(`Error ocured ${err}`),
      complete: () => console.log('Stream has been completed!'),
    });
  }, 3000)
  