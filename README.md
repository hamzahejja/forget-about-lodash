# lodash-recreated
[![Inline docs](http://inch-ci.org/github/hamzahejja/lodash-recreated.svg?branch=master)](http://inch-ci.org/github/hamzahejja/lodash-recreated)
[![Build Status](https://travis-ci.org/hamzahejja/lodash-recreated.svg?branch=master)](https://travis-ci.org/hamzahejja/lodash-recreated)
[![codecov](https://codecov.io/gh/hamzahejja/lodash-recreated/branch/master/graph/badge.svg?token=RF0GRWWMTW)](https://codecov.io/gh/hamzahejja/lodash-recreated)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![contributions](https://img.shields.io/badge/Contributions-Welcome-informational)](https://img.shields.io/badge/Contributions-Welcome-informational)


__lodash-recreated__ is a vanilla JavaScript Re-Creation of the popular library [Lodash](https://lodash.com/) with `Array`, `Object`, `Collection`, `Util` and `Lang` utility methods, along with unit-tests written for each of the implemented methods.

-------

## Implemented Methods:
+ ## Array
   + __chunk(array, [size=1])__
   > Creates an array of elements split into groups the length of size.<br>
   If array can't be split evenly, the final chunk will be the remaining elements.<br>
   https://lodash.com/docs/4.17.15#chunk
   
   + __compact(array)__
   > Creates an array with all falsey values removed.<br>
   The values `false, null, 0, "", undefined, and NaN` are falsey.<br>
   https://lodash.com/docs/4.17.15#compact
   
   + __concat(array, [values])__
   > Creates a new array concatenating array with any additional arrays and/or values.<br>
   https://lodash.com/docs/4.17.15#concat
   
   + __difference(array, [values])__
   > creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.<br>
   https://lodash.com/docs/4.17.15#difference
   
   + __differenceBy(array, [values], [iteratee=_.identity])__
   > This method is like difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array.<br>
   https://lodash.com/docs/4.17.15#differenceBy
   
   + __differenceWith(array, [values], [comparator])__
   > This method is like \_.difference except that it accepts comparator which is invoked to compare elements of array to values.
   The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).<br>
   https://lodash.com/docs/4.17.15#differenceWith
   
    + __drop(array, n = 1)__
   > creates a slice of an array with n elements dropped from the beginning.<br>
   https://lodash.com/docs/4.17.15#drop
   
   + __dropWhile(array, [predicate=_.identity])__
   > Creates a slice of array excluding elements dropped from the beginning, Elements are dropped until the predicate returns falsey.<br>
   https://lodash.com/docs/4.17.15#dropWhile
   
   + __dropRight(array, [n = 1])__
   > Creates a slice of array with n elements dropped from the end.<br>
   https://lodash.com/docs/4.17.15#dropRight
   
   + __dropRightWhile(array, predicate)__
   > Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey.<br>
   https://lodash.com/docs/4.17.15#dropRightWhile
   
   + __flatten(array)__
   > Flattens array a single level deep.<br>
   https://lodash.com/docs/4.17.15#flatten
   
   + __flattenDeep(array)__
   > Recursively flattens array.<br>
   https://lodash.com/docs/4.17.15#flattenDeep
   
   + __fromPairs(pairs)__
   > this method returns an object composed from key-value pairs(arrays).<br>
   https://lodash.com/docs/4.17.15#fromPairs
   
   + __intersection([arrays])__
   > Write a function that creates an array of values found within all given arrays.<br>
   The first array will serve as the base from which the remaining arrays will be checked to see if they have the matching values.<br>
   https://lodash.com/docs/4.17.15#intersection
   
   + __pull(array, [values])__
   > Removes all given values from array using SameValueZero for equality comparisons.<br>
   https://lodash.com/docs/4.17.15#pull
   
   + __tail(array)__
   > Gets all but the first element of array.<br>
   https://lodash.com/docs/4.17.15#tail
   
   + __uniq(array)__
   > Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, <br>
   in which only the first occurrence of each element is kept. The order of result values<br>
   is determined by the order they occur in the array.
   https://lodash.com/docs/4.17.15#uniq
   
+ ## Object
   + __get(object, path, [defaultValue])__
   > Gets the value at path of object.<br>
   If the resolved value is undefined, the defaultValue is returned in its place.<br>
   https://lodash.com/docs/4.17.15#get
   
+ ## Collection
   + __find (collection, predicate, startIndex)__
   > Iterates over elements of collection, returning the first element predicate returns truthy for.<br>
   The predicate is invoked with three arguments: (value, index|key, collection).<br>
   https://lodash.com/docs/4.17.15#find


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
