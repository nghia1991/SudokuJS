var htmlTable = '';

for (var i = 0; i < 81; i++) {
    if (i % 27 == 0) htmlTable += '<tbody>';
    if (i % 9 == 0) htmlTable += '<tr>';
    htmlTable += '<td onmouseover="tdMouseover(this)" onmouseout="tdMouseout(this)" class="number" id="td' + i + '"></td>';
}

document.getElementById("sudoku-table").innerHTML = document.getElementById("sudoku-table").innerHTML + htmlTable;

function randomBtnClicked() {
    sudokujs.generate(function(result) {
        for (var i = 0; i < 81; i++) {
            document.getElementById("td" + i).innerHTML = result[i];
        }
    });
}

function resetBtnClicked() {
    for (var i = 0; i < 81; i++) {
        document.getElementById("td" + i).innerHTML = '';
    }
}

function solveBtnClicked() {
    var matrix = [];
    
    for (var i = 0; i < 81; i++) {
        var n = document.getElementById("td" + i).innerHTML.trim();
        if (n == '') matrix.push(0);
        else matrix.push(parseInt(n));
    }

    sudokujs.solve(matrix, function(result){
        for (var i = 0; i < 81; i++) {
            document.getElementById("td" + i).innerHTML = result[i];
        }
    }, function() {
        alert('Input is not valid');
    });
}

function tdMouseover(td) {
    td.className += " active";
}

function tdMouseout(td){
    td.className = td.className.replace(" active", '');
}

function keyPressed(event) {
    var n  = parseInt(event.key);
    if (n >= 1 && n <= 9) {
        document.getElementsByClassName("number active")[0].innerHTML = n;
    }
    if (n == 0) {
        document.getElementsByClassName("number active")[0].innerHTML = '';
    }
}