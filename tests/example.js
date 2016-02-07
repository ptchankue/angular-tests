/*
Using jasmine as test framework

karma init: specifies where to find files to test

karma start
*/

describe('example test', function() {
  it('should be true', function() {
    expect('foo').toBe('foo');
  });
});