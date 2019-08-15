// test.js
// Joel Anyanti | 08/12/2019
'use strict'

/*            Imports            */

const assert = require('chai').assert;


/*             Tests             */

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});