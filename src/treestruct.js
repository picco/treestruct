/*jslint node: true */

'use strict';

function TreeStruct() {
  this.tree = {};
}

var prototype = {

  // Public API

  set: function() {
    var args = this._args(arguments);

    if (args.all.length >= 2) {
      this._apply(this.tree, 'set', args.front, args.last);
    }
    else {
      return null;
    }
  },
  get: function() {
    var args = this._args(arguments);
    return this._find(this.tree, args.all);
  },
  getArray: function() {
    var args = this._args(arguments);
    var value = this._find(this.tree, args.all);

    if (args.all.length) {
      if (!value instanceof Array) {
        return value;
      }
      else if (value === null) {
        return [];
      }
      else {
        return [value];
      }
    }
    else {
      return null;
    }
  },
  keys: function() {
    var args = this._args(arguments);
    return this._keys(this.tree, args.all);
  },
  push: function() {
    var args = this._args(arguments);
    if (args.all.length >= 2) this._apply(this.tree, 'push', args.front, args.last);
  },
  increment: function() {
    var args = this._args(arguments);
    if (args.all.length >= 1) this._apply(this.tree, 'increment', args.all);
  },
  add: function() {
    var args = this._args(arguments);
    if (args.all.length >= 2) this._apply(this.tree, 'add', args.front, args.last);
  },

  // Private

  _args: function(input) {
    input = this._clean(input);
    return {
      all: input,
      last: input[input.length - 1],
      front: input.slice(0, input.length -1 ),
     };
  },
  _apply: function(source, action, path, value) {
    var key = path[0];

    if (!source[key]) source[key] = {value: null, children: {}};

    if (path.length == 1) {
      if (action == 'set') {
        source[key].value = value;
      }
      else if (action == 'push') {
        if (!(source[key].value instanceof Array)) source[key].value = [];
        source[key].value.push(value);
      }
      else if (action == 'increment') {
        if (typeof source[key].value !== 'number') source[key].value = 0;
        source[key].value += 1;
      }
      else if (action == 'add') {
        if (typeof source[key].value !== 'number') source[key].value = 0;
        source[key].value += value;
      }
    }
    else {
      this._apply(source[key].children, action, path.slice(1), value);
    }
  },
  _keys: function(tree, path) {
    if (path.length) {
      if (tree[path[0]] && tree[path[0]].children) {
        return this._keys(tree[path[0]].children, Array.prototype.slice.call(path, 1));
      }
      else {
        return [];
      }
    }
    else {
      return Object.keys(tree);
    }
  },
  _find: function(source, path) {
    var key = path[0];

    if (path.length == 1) {
      return source[key] ? source[key].value : null;
    }
    else {
      if (source[key] && source[key].children) {
        return this._find(source[key].children, path.slice(1));
      }
      else {
        return null;
      }
    }
  },
  _clean: function(args) {
    var newArgs = [];
    for (var i in args) {
      if (typeof args[i] !== 'undefined' && typeof args[i] !== 'function') {
        newArgs.push(args[i]);
      }
    }
    return newArgs;
  }
};

TreeStruct.prototype = prototype;
module.exports = TreeStruct;
