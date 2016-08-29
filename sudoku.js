var sudokujs = {

    isSolved : false,

    solve: function(matrixArrayOrigin, done, fail) {
        var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.sudoRecur(matrixArrayOrigin, numberArray, 0, done, fail);
    },

    sudoRecur: function(matrixArray, numberArray, position, done, fail) {
        
        if (!this.isSolved) {
            if (position == 81) {
                this.isSolved = true;
                done(matrixArray);
            } else {
                if (matrixArray[position] == 0) {
                    for (var i = 0; i < 9; i++) {
                        if (this.checkAll(matrixArray, position, numberArray[i])) {
                            matrixArray[position] = numberArray[i];
                            this.sudoRecur(matrixArray, numberArray, position + 1, done, fail);
                        } 
                    }
                    matrixArray[position] = 0;
                } else {
                    this.sudoRecur(matrixArray, numberArray, position + 1, done, fail);
                }
            }
        }
        
    },

    // position: 0 -> 80

    checkRow: function(matrixArray, row, number) {
        // row: from 0 to 8
        
        var from = row * 9;
        var to = from + 8;

        for (var i = from; i <= to; i++) {
            if (matrixArray[i] == number) return false;
        }

        return true;
    },

    checkColumn: function(matrixArray, column, number) {
        // column: from 0 to 8
    
        for (var i = 0; i < 9; i++) {
            if (matrixArray[column + (i * 9)] == number) return false;
        }

        return true;
    },

    checkZone: function(matrixArray, row, column, number){
        // zone: from 0 to 8

        var from = 0;
        var zone = 0;

        if (row <= 2) {
            if (column <= 2) zone = 0;
            else if (column <= 5) zone = 1;
            else zone = 2;
        } else if (row <= 5) {
            if (column <= 2) zone = 3;
            else if (column <= 5) zone = 4;
            else zone = 5;
        } else {
            if (column <= 2) zone = 6;
            else if (column <= 5) zone = 7;
            else zone = 8;
        }

        switch(zone){
            case 0: from = 0; break;
            case 1: from = 3; break;
            case 2: from = 6; break;
            case 3: from = 27; break;
            case 4: from = 30; break;
            case 5: from = 33; break;
            case 6: from = 54; break;
            case 7: from = 57; break;
            case 8: from = 60; break;
        }

        for(var i = 0; i < 3; i++){
            for (var j = from, to = from + 2; j <= to; j++) {
                if (matrixArray[j + (i * 9)] == number) return false;
            }
        }
        
        return true;

    },

    checkAll: function(matrixArray, position, number) {
        var row = Math.floor(position / 9);
        var column = position % 9;

        return this.checkRow(matrixArray, row, number) && this.checkColumn(matrixArray, column, number) && this.checkZone(matrixArray, row, column, number);
    },

}