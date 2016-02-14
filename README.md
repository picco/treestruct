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
tree.set('some', 'random', 'element', 42);
tree.push('it', 'can', 'hold', 'array', 10);

tree.get('root'); // returns: 1
tree.get('some' 'random' 'element'); // returns: 42
tree.get('it', 'can', 'hold', 'array'); // returns: [10]
tree.get('does', 'this', 'value', 'exist?'); // returns: null
tree.keys(); // returns: ['root', 'some', 'it']
tree.keys('some'); // returns: ['random']

```
## API

### set(node, [node, ...], value)
```javascript
// Set a value to a given node
tree.set('any', 'name', 'here', 42);
// Get the value back
tree.get('any', 'name', 'here'); // returns: 42
```
### get(node, [node, ...])
```javascript
// Set a value to a node
tree.set('some', 'deep', 'node', 42);
// Get the value back
tree.get('some', 'deep', 'node'); // returns: 42
```
### push(node, [node, ...], value)
```javascript
// Push a value to a any node which will be convereted to an array automatically.
tree.push('array', 'first');
// Push anouther item
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
