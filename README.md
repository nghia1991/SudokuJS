# sudokujs

sudokujs is a javascript library to **solve** and **generate random** sudoku puzzle

[link text itself]: https://nghiatrx.github.io/test/

## Installation

Add the below code into your HTML file

```HTML
<script src="../sudoku.js"></script> 
```

## Usage

### Solve

![alt text](/test/sudoku.jpg "")

You must convert to array, example: 

```javascript
var array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 8, 5, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 5, 0, 7, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 7, 3, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 9];
```

```javascript
sudokujs.solve(array, function(result){
    // callback for done
    console.log(result);
}, function() {
    // callback for fail
    console.log('Input is not valid');
});
```

result will be look like:

```javascript
result = [9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 4, 6, 1, 7, 3, 9, 8, 5, 3, 5, 1, 9, 2, 8, 7, 4, 6, 1, 2, 8, 5, 3, 7, 6, 9, 4, 6, 3, 4, 8, 9, 2, 1, 5, 7, 7, 9, 5, 4, 6, 1, 8, 3, 2, 5, 1, 9, 2, 8, 6, 4, 7, 3, 4, 7, 2, 3, 1, 9, 5, 6, 8, 8, 6, 3, 7, 4, 5, 2, 1, 9]
```

### Generate random sudoku puzzle

```javascript
sudokujs.generate(function(result) {
    console.log(result);
});
```

