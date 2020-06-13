console.log("testrx.js");

import { of } from "rxjs";
import { map } from "rxjs/operators";

map(x => x * x)(of(1, 2, 3)).subscribe(v => {
  console.log(`Output is: ${v}`);
});

/**
 * In this case, when you go to execute testrx.js using command- node testrx.js, you will see the error because the node doesn't know what to do with import.
 * So, we have to install ES6 modules package using npm to fix above problems.
 */

import { Observable } from "rxjs";
var observable = new Observable(function subscribe(subscribe) {
  try {
    subscribe.next("My First Observable");
    subscribe.next("Testing Observable");
    subscribe.complete();
  } catch (err) {
    subscribe.error(err);
  }
});

observable.subscribe(
  x => console.log(x),
  e => console.log(e),
  () => console.log("Observable is complete")
);
