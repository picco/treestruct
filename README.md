# treestruct
Makes working with unstructured data in JavaScript more convenient and elegant. 
With this tree structure, you can access your data without worrying about property initialization or error checking. 

[![Build Status](https://travis-ci.org/picco/treestruct.svg?branch=master)](https://travis-ci.org/picco/treestruct)

## Installation
```bash
$ npm install treestruct --save
```

## Usage
```javascript
var tree = new TreeStruct();

tree.set('root', 1);
tree.get('root'); // returns: 1

tree.set('some', 'random', 'element', 42);
tree.get('some' 'random' 'element'); // returns: 42

tree.keys(); // returns: ['root', 'some']
tree.keys('some'); // returns: ['random']

tree.push('it', 'can', 'hold', 'array', 'oak');
tree.push('it', 'can', 'hold', 'array', 'pine');
tree.get('it', 'can', 'hold', 'array'); // returns: ['oak', 'pine']

tree.get('does', 'this', 'value', 'exist?'); // returns: null
```
## API

### set(node, [node, ...], value)
### get(node, [node, ...])
```javascript
// Set a value to a given node
tree.set('any', 'name', 'here', 42);
// Get the value back
tree.get('any', 'name', 'here'); // returns: 42
```
### push(node, [node, ...], value)
```javascript
// Push a value to a any node. It will be convereted to an array automatically
tree.push('array', 'first');
// Push another item
tree.push('array', 'second');
// Get the value back
tree.get('array'); // returns: ['first', 'second']
```
### increment(node, [node, ...], value)
```javascript
// Set a node to a numeric value
tree.set('numeric', 'value', 10);
// Increment the value
tree.increment('numeric', 'value');
// Get the value back
tree.get('numeric', 'value'); // returns: 11
```
### add(node, [node, ...], value)
```javascript
// Set a node to a numeric value
tree.set('numeric', 'value', 10);
// Add a given number to the value
tree.add('numeric', 'value', 10);
// Get the value back
tree.get('numeric', 'value'); // returns: 20
```
### keys(node, [node, ...])
```javascript
tree.set('root', 'child one', 1);
tree.set('root', 'child two', 2);
tree.set('root', 'child three', 3);
// Get the existing keys of root nodes
tree.keys(); // returns: ['root']
// Get the existing keys of nodes under 'root'
tree.keys('root'); // returns: ['child one', 'child two', 'child three']
```
