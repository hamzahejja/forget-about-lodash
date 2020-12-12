const _differenceWith = require('lodash/differenceWith');
const { differenceWith } = require('../../functions/array');
const { difference } = require('lodash');

describe('_.differenceWith(array, [values], [comparator])', () => {
  it('It Should Match Result with _.differenceWith with Equality Comparator', () => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

    const comparator = (arrVal, otherVal) => {
      if (typeof(arrVal) !== typeof(otherVal)) return false;

      return typeof(arrVal) === 'object' ?
        JSON.stringify(arrVal) === JSON.stringify(otherVal):
        arrVal === otherVal;
    }

    expect(_differenceWith(objects, [{ 'x': 1, 'y': 2 }], comparator))
      .toEqual(differenceWith(objects, [{ 'x': 1, 'y': 2 }], comparator));
  });

  it ('It Should Match Result with _.differenceWith with a Custom Defined Comparator', () => {
    const students = [
      { gpa: 3.85, isGradute: true },
      { gpa: 3.5, isGraduate: false },
      { gpa: 3.7, isGradute: true },
      { gpa: 4.0, isGraduate: false}
    ];

    const excludedValues = [
      { gpa: 4.0, isGraduate: true },
      { gpa: 3.85, isGraduate: false}
    ];

    const comparator = (student, otherStudent) => {
      return student['isGraduate'] === otherStudent['isGraduate'] &&
        otherStudent['gpa'] > student['gpa'];
    };

    expect(_differenceWith(students, excludedValues, comparator))
      .toEqual(differenceWith(students, excludedValues, comparator));
  });
});
