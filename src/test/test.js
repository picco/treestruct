var assert = require('assert');
var TreeStruct = require('../treestruct.js');

describe('TreeStruct', function() {

  describe('#constructor()', function () {
    it('should initialize the tree with empty object', function () {
      var tree = new TreeStruct();
      assert.deepEqual(tree.tree, {});
    });
  });

  describe('#set()', function () {
    it('should overwrite the value on multiple assignments', function () {
      var tree = new TreeStruct();
      tree.set('test', 'testString');
      tree.set('test', 'testStringOverriden');
      assert.equal(tree.get('test'), 'testStringOverriden');
    });
    it('should do nothing when called without arguments', function () {
      var tree = new TreeStruct();
      tree.set();
      assert.deepEqual(tree.tree, {});
    });
    it('should do nothing when called with a single argument', function () {
      var tree = new TreeStruct();
      tree.set('what?');
      assert.deepEqual(tree.tree, {});
    });
  });

  describe('#get()', function () {
    it('should return the correct existing string value in a root node', function () {
      var tree = new TreeStruct();
      tree.set('test', 'testString');
      assert.equal(tree.get('test'), 'testString');
    });
    it('should return the correct existing string value in a child node', function () {
      var tree = new TreeStruct();
      tree.set('test', 'sub', 'testString');
      assert.equal(tree.get('test', 'sub'), 'testString');
    });
    it('should return null for unexisting path', function () {
      var tree = new TreeStruct();
      assert.equal(tree.get('does not exist'), null);
    });
    it('should return null when called without arguments', function () {
      var tree = new TreeStruct();
      assert.equal(tree.get(), null);
    });
  });

  describe('#keys()', function () {
    it('should return the correct root keys', function () {
      var tree = new TreeStruct();
      tree.set('test1', 'testString');
      tree.set('test2', 'testString');
      assert.deepEqual(tree.keys(), ['test1', 'test2']);
    });
    it('should return the correct keys in child nodes', function () {
      var tree = new TreeStruct();
      tree.set('test', 'test1', 'testString');
      tree.set('test', 'test2', 'testString');
      assert.deepEqual(tree.keys('test'), ['test1', 'test2']);
    });
    it('should return empty array for an unexisting path', function () {
      var tree = new TreeStruct();
      tree.set('test', [1, 2, 3]);
      assert.deepEqual(tree.keys('does not exist'), []);
    });
  });

  describe('#push()', function () {
    it('should create a new array when the existing value is not an array', function () {
      var tree = new TreeStruct();
      tree.set('test', 'testString');
      tree.push('test', 'element');
      assert.deepEqual(tree.get('test'), ['element']);
    });
    it('should work with array values assigned with set()', function () {
      var tree = new TreeStruct();
      tree.set('arr', ['a']);
      tree.push('arr', 'b');
      assert.deepEqual(tree.get('arr'), ['a', 'b']);
    });
    it('should do nothing when called with a single argument', function () {
      var tree = new TreeStruct();
      tree.push('arr');
      assert.deepEqual(tree.tree, {});
    });
    it('should do nothing when called without arguments', function () {
      var tree = new TreeStruct();
      tree.push();
      assert.deepEqual(tree.tree, {});
    });
  });

  describe('#increment()', function () {
    it('should increment numeric values by one', function () {
      var tree = new TreeStruct();
      tree.set('number', 5);
      tree.increment('number');
      assert.equal(tree.get('number'), 6);
    });
    it('should set existing non-numeric values to one', function () {
      var tree = new TreeStruct();
      tree.set('test', 'testString');
      tree.increment('test');
      assert.equal(tree.get('test'), 1);
    });
    it('should be able to increment floats', function () {
      var tree = new TreeStruct();
      tree.set('test', 1.5);
      tree.increment('test');
      assert.equal(tree.get('test'), 2.5);
    });
    it('should set non-existing values to one', function () {
      var tree = new TreeStruct();
      tree.increment('test');
      assert.equal(tree.get('test'), 1);
    });
    it('should do nothing when called without arguments', function () {
      var tree = new TreeStruct();
      tree.increment();
      assert.deepEqual(tree.tree, {});
    });
  });

  describe('#add()', function () {
    it('should increment existing numeric values', function () {
      var tree = new TreeStruct();
      tree.set('number', 5);
      tree.add('number', 5);
      assert.equal(tree.get('number'), 10);
    });
    it('should set existing non-numeric values to given value', function () {
      var tree = new TreeStruct();
      tree.set('test', 'testString');
      tree.add('test', 5);
      assert.equal(tree.get('test'), 5);
    });
    it('should be able to work with floats', function () {
      var tree = new TreeStruct();
      tree.set('test', 1.5);
      tree.add('test', 1.5);
      assert.equal(tree.get('test'), 3);
    });
    it('should set non-existing values to given value', function () {
      var tree = new TreeStruct();
      tree.add('test', 5);
      assert.equal(tree.get('test'), 5);
    });
    it('should do nothing when called with a single argument', function () {
      var tree = new TreeStruct();
      tree.add('where?');
      assert.deepEqual(tree.tree, {});
    });
    it('should do nothing when called without arguments', function () {
      var tree = new TreeStruct();
      tree.add();
      assert.deepEqual(tree.tree, {});
    });
  });

});
