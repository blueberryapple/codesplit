import { propOr } from 'ramda';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const obj = {
    hi: 5,
};

of(obj)
    .pipe(map(() => propOr(12, 'hi', obj) * 3))
    .subscribe(val => console.log(val));
