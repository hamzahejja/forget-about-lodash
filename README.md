# lodash-recreated
[![Inline docs](http://inch-ci.org/github/hamzahejja/lodash-recreated.svg?branch=master)](http://inch-ci.org/github/hamzahejja/lodash-recreated)
[![Build Status](https://travis-ci.org/hamzahejja/lodash-recreated.svg?branch=master)](https://travis-ci.org/hamzahejja/lodash-recreated)
[![codecov](https://codecov.io/gh/hamzahejja/lodash-recreated/branch/master/graph/badge.svg?token=RF0GRWWMTW)](https://codecov.io/gh/hamzahejja/lodash-recreated)
[![contributions](https://img.shields.io/badge/Contributions-Welcome-informational)](https://img.shields.io/badge/Contributions-Welcome-informational)


__lodash-recreated__ is a vanilla JavaScript Re-Creation of the popular library [Lodash](https://lodash.com/) with `Array`, `Object`, `Collection`, `Util` and `Lang` utility methods, along with unit-tests written for each of the implemented methods.

-------

## Implemented Methods:
+ ### Array

   + difference(array, [values])
   > creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.<br>
   https://lodash.com/docs/4.17.15#difference
   
   + differenceBy(array, [values], [iteratee=_.identity])
   > This method is like difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array.<br>
   https://lodash.com/docs/4.17.15#differenceBy
   
   + pull(array, [values])
   > Removes all given values from array using SameValueZero for equality comparisons.<br>
   https://lodash.com/docs/4.17.15#pull
   
   + dropWhile(array, [predicate=_.identity])
   > Creates a slice of array excluding elements dropped from the beginning, Elements are dropped until the predicate returns falsey.<br>
   https://lodash.com/docs/4.17.15#dropWhile
   
   + drop(array, n = 1)
   > creates a slice of an array with n elements dropped from the beginning.<br>
   https://lodash.com/docs/4.17.15#drop
   
   + dropRight(array, [n = 1])
   > Creates a slice of array with n elements dropped from the end.<br>
   https://lodash.com/docs/4.17.15#dropRight
   
   + dropRightWhile(array, predicate)
   > Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey.<br>
   https://lodash.com/docs/4.17.15#dropRightWhile


## Running Tests
The projects uses [Jest](https://jestjs.io/en/) JavaScript Testing Framework. to run all tests, all you have to do is run the command:


`npm run test`



## License (MIT)
```
MIT License

Copyright (c) 2020 Hamza Hejja

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
