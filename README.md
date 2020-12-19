<p align="center"><a href="https://github.com/hamzahejja/lodash-recreated" target="_blank"><img src="https://raw.githubusercontent.com/hamzahejja/lodash-recreated/master/LODASH_RECREATED_LOGO.png" width="600" alt="Lodash Recreated"></a></p>

<p align="center">
   <a href="http://inch-ci.org/github/hamzahejja/lodash-recreated"><img src="http://inch-ci.org/github/hamzahejja/lodash-recreated.svg?branch=master" alt="Documentation"></a>
   <a href="https://github.com/hamzahejja/lodash-recreated/actions?query=branch%3Amaster"><img src="https://github.com/hamzahejja/lodash-recreated/workflows/Build/badge.svg" alt="Build Status"></a>
   <a href="https://codecov.io/gh/hamzahejja/lodash-recreated"><img src="https://codecov.io/gh/hamzahejja/lodash-recreated/branch/master/graph/badge.svg?token=RF0GRWWMTW" alt="Code Coverage"></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-brightgreen.svg" alt="License"></a>
   <a href="https://img.shields.io/badge/Contributions-Welcome-informational"><img src="https://img.shields.io/badge/Contributions-Welcome-informational" alt="Contributions"></a>

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

   + __flattenDepth(array, [depth = 1])__
   > Recursively flatten array up to depth times.<br>
   [_.flattenDepth(array, [depth=1])](https://lodash.com/docs/4.17.15#flattenDepth)

   + __fromPairs(pairs)__
   > this method returns an object composed from key-value pairs(arrays).<br>
   https://lodash.com/docs/4.17.15#fromPairs

   + __intersection([arrays])__
   > Write a function that creates an array of values found within all given arrays.<br>
   The first array will serve as the base from which the remaining arrays will be checked to see if they have the matching values.<br>
   https://lodash.com/docs/4.17.15#intersection

   + __nth(array, [n=0])__
   > Gets the element at index n of array.<br>
   If n is negative, the nth element from the end is returned.<br>
   [_.nth(array, [n=0])](https://lodash.com/docs/4.17.15#nth)

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

    + __groupBy(collection, [iteratee=_.identity])__
   > Creates an object composed of keys generated from the results of running each element of collection thru iteratee.<br>
   The order of grouped values is determined by the order they occur in collection.<br>
   https://lodash.com/docs/4.17.15#groupBy

    + __countBy(collection, [iteratee=_.identity])__
   > Creates an object composed of keys generated from the results of running each element of collection thru iteratee.<br>
    The corresponding value of each key is the number of times the key was returned by iteratee.<br>
    https://lodash.com/docs/4.17.15#countBy

    + __every(collection, [predicate=_.identity])__
    > Checks if predicate returns truthy for all elements of collection.<br>
    Iteration is stopped once predicate returns falsey <br>
    https://lodash.com/docs/4.17.15#every

    + __invokeMap(collection, path, [args])__
    > Invokes the method at path of each element in collection, returning an array of <br>
    the results of each invoked method. Any additional arguments are provided to each invoked method.<br>. If path is a function, it's invoked for, and this bound to, each element in collection.<br>
    https://lodash.com/docs/4.17.15#invokeMap

    + __keyBy(collection, iteratee)__
    > Creates an object composed of keys generated from the results of <br>
    running each element of collection thru iteratee. The corresponding value of each key is <br>
    the last element responsible for generating the key.<br>
    The iteratee is invoked with one argument: (value).<br>
    https://lodash.com/docs/4.17.15#keyBy

+ ## Number
    + __clamp(number, [lower], upper)__
    > Clamps number within the inclusive lower and upper bounds.<br>
    https://lodash.com/docs/4.17.15#clamp

    + __random(lower = 0, upper = 1, floating = false)__
    > Produces a random number between the inclusive lower and upper bounds.<br>
    If only one argument is provided a number between 0 and the given number is returned.<br>
    If floating is true, or either lower or upper are floats, a floating-point number is returned.<br>
    https://lodash.com/docs/4.17.15#random

    + __inRange(number, [start=0], end)__
    > Checks if n is between start and up to, but not including, end.<br>
    If end is not specified, it's set to start with start then set to 0.<br>
    If start is greater than end the params are swapped to support negative ranges.<br>
    https://lodash.com/docs/4.17.15#inRange


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
