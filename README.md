# tree

Makes manipulating unstructured data in JavaScript more elegant. 
With this tree structure, you can access your data without worrying about property initialization or error checking. 

## Usage
```javascript
var tree = new Tree();

tree.set('root', 1);
tree.set('some' 'random' 'element', 42);
tree.push('it', 'can', 'be', 'array', 10);

tree.get('root'); // returns: 1
tree.get('some' 'random' 'element'); // returns: 42
tree.get('it', 'can', 'be', 'array'); // returns: [10]
tree.get('does', 'this', 'value', 'exist?'); // returns: null
tree.keys(); // returns: ['root', 'some', 'it']
tree.keys('some'); // returns: ['random']

```
## API

### set(node, [node, ...], value)
```javascript
tree.set('some' 'random' 'element', 42);
tree.get('some' 'random' 'element'); // returns: 42
```
### push(node, [node, ...], value)
```javascript
tree.push('array', 'first');
tree.push('array', 'second');
tree.get('array'); // returns: ['first', 'second']
```
### increment(node, [node, ...], value)
```javascript
tree.set('numeric', 'value', 10);
tree.increment('numeric', 'value');
tree.get('numeric', 'value'); // returns: 11
```
### add(node, [node, ...], value)
```javascript
tree.set('numeric', 'value', 10);
tree.add('numeric', 'value', 10);
tree.get('numeric', 'value'); // returns: 20
```
### get(node, [node, ...])
```javascript
tree.set('some', 'deep', 'node', 'value');
tree.get('some', 'deep', 'node'); // returns: 'value'
```
### keys(node, [node, ...])
```javascript
tree.set('root', 'child one', 1);
tree.set('root', 'child two', 2);
tree.set('root', 'child three', 3);
tree.keys(); // returns: ['root']
tree.keys('root'); // returns: ['child one', 'child two', 'child three']
```
