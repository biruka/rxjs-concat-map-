import './style.css';
import { concatMap } from 'rxjs/operators';
import { of, map, Observable } from 'rxjs';

let srcObservable= of(1,2,3,4)
let innerObservable= of('A','B','C','D')
 
srcObservable.pipe(
  concatMap( val => {
    console.log('Source value '+val)
    console.log('starting new observable')
    return innerObservable
  })
)
.subscribe(ret=> {
  console.log('Recd ' + ret);
})
