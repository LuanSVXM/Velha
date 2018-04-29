const l1 = document.getElementById('1');
const l2 = document.getElementById('2');
const l3 = document.getElementById('3');
const l4 = document.getElementById('4');
const l5 = document.getElementById('5');
const l6 = document.getElementById('6');
const l7 = document.getElementById('7');
const l8 = document.getElementById('8');
const l9 = document.getElementById('9');
const reset = document.getElementById('reset');
let vr = 2;
const zerar = document.getElementById('zerar');
let j1 = [];
let j2 = [];
let vj1 = 0;
let vj2 = 0;
let fim = 0;
let pj1 = 0;
let pj2 = 0;
let imp = 0;
document.getElementById('vitorias').textContent = 'Vitorias:'+' '+'X '+pj1+' '+'O '+pj2;
document.getElementById('impates').textContent = 'Impate:'+' '+imp;

l1.addEventListener('click', function() {
    let a = '';
    const b = 1;
    if (j1.indexOf(b) === -1 && j2.indexOf(b) === -1 && fim === 0 ) {
        if (vr%2 ===0 ) {
            a = 'X';
            j1[vj1] = b;
            vj1++;
            if (j1.indexOf(7) > -1 && j1.indexOf(8) > -1 && j1.indexOf(9) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(4) > -1 && j1.indexOf(5) > -1 && j1.indexOf(6) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(1) > -1 && j1.indexOf(2) > -1 && j1.indexOf(3) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(7) > -1 && j1.indexOf(4) > -1 && j1.indexOf(1) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(5) > -1 && j1.indexOf(8) > -1 && j1.indexOf(2) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(9) > -1 && j1.indexOf(6) > -1 && j1.indexOf(3) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(1) > -1 && j1.indexOf(5) > -1 && j1.indexOf(9) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(5) > -1 && j1.indexOf(3) > -1 && j1.indexOf(7) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
        } else {
            a = 'O';
            j2[vj2] = b;
            vj2++;

            if (j2.indexOf(7) > -1 && j2.indexOf(8) > -1 && j2.indexOf(9) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(4) > -1 && j2.indexOf(5) > -1 && j2.indexOf(6) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(1) > -1 && j2.indexOf(2) > -1 && j2.indexOf(3) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(7) > -1 && j2.indexOf(4) > -1 && j2.indexOf(1) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(5) > -1 && j2.indexOf(8) > -1 && j2.indexOf(2) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(9) > -1 && j2.indexOf(6) > -1 && j2.indexOf(3) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(1) > -1 && j2.indexOf(5) > -1 && j2.indexOf(9) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(5) > -1 && j2.indexOf(3) > -1 && j2.indexOf(7) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
        }
        l1.textContent = a;
        vr++;
        if (vr=== 11 && fim === 0) {
            fim = 1;
            imp++;
            document.getElementById('impates').textContent = 'Impate:'+' '+imp;
        }
    }
});
l2.addEventListener('click', function() {
    let a = '';
    const b = 2;
    if (j1.indexOf(b) === -1 && j2.indexOf(b) === -1 && fim === 0) {
        if (vr % 2 === 0) {
            a = 'X';
            j1[vj1] = b;
            vj1++;
            if (j1.indexOf(7) > -1 && j1.indexOf(8) > -1 && j1.indexOf(9) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(4) > -1 && j1.indexOf(5) > -1 && j1.indexOf(6) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(1) > -1 && j1.indexOf(2) > -1 && j1.indexOf(3) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(7) > -1 && j1.indexOf(4) > -1 && j1.indexOf(1) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(5) > -1 && j1.indexOf(8) > -1 && j1.indexOf(2) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(9) > -1 && j1.indexOf(6) > -1 && j1.indexOf(3) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(1) > -1 && j1.indexOf(5) > -1 && j1.indexOf(9) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(5) > -1 && j1.indexOf(3) > -1 && j1.indexOf(7) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
        } else {
            a = 'O';
            j2[vj2] = b;
            vj2++;

            if (j2.indexOf(7) > -1 && j2.indexOf(8) > -1 && j2.indexOf(9) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(4) > -1 && j2.indexOf(5) > -1 && j2.indexOf(6) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(1) > -1 && j2.indexOf(2) > -1 && j2.indexOf(3) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(7) > -1 && j2.indexOf(4) > -1 && j2.indexOf(1) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(5) > -1 && j2.indexOf(8) > -1 && j2.indexOf(2) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(9) > -1 && j2.indexOf(6) > -1 && j2.indexOf(3) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(1) > -1 && j2.indexOf(5) > -1 && j2.indexOf(9) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(5) > -1 && j2.indexOf(3) > -1 && j2.indexOf(7) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
        }
        l2.textContent = a;
        vr++;
        if (vr=== 11 && fim === 0) {
            fim = 1;
            imp++;
            document.getElementById('impates').textContent = 'Impate:'+' '+imp;
        }
    }
});
l3.addEventListener('click', function() {
    let a = '';
    const b = 3;
    if (j1.indexOf(b) === -1 && j2.indexOf(b) === -1 && fim === 0) {
        if (vr % 2 === 0) {
            a = 'X';
            j1[vj1] = b;
            vj1++;
            if (j1.indexOf(7) > -1 && j1.indexOf(8) > -1 && j1.indexOf(9) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(4) > -1 && j1.indexOf(5) > -1 && j1.indexOf(6) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(1) > -1 && j1.indexOf(2) > -1 && j1.indexOf(3) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(7) > -1 && j1.indexOf(4) > -1 && j1.indexOf(1) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(5) > -1 && j1.indexOf(8) > -1 && j1.indexOf(2) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(9) > -1 && j1.indexOf(6) > -1 && j1.indexOf(3) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(1) > -1 && j1.indexOf(5) > -1 && j1.indexOf(9) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(5) > -1 && j1.indexOf(3) > -1 && j1.indexOf(7) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
        } else {
            a = 'O';
            j2[vj2] = b;
            vj2++;

            if (j2.indexOf(7) > -1 && j2.indexOf(8) > -1 && j2.indexOf(9) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(4) > -1 && j2.indexOf(5) > -1 && j2.indexOf(6) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(1) > -1 && j2.indexOf(2) > -1 && j2.indexOf(3) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(7) > -1 && j2.indexOf(4) > -1 && j2.indexOf(1) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(5) > -1 && j2.indexOf(8) > -1 && j2.indexOf(2) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(9) > -1 && j2.indexOf(6) > -1 && j2.indexOf(3) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(1) > -1 && j2.indexOf(5) > -1 && j2.indexOf(9) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(5) > -1 && j2.indexOf(3) > -1 && j2.indexOf(7) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
        }
        l3.textContent = a;
        vr++;
        if (vr=== 11 && fim === 0) {
            fim = 1;
            imp++;
            document.getElementById('impates').textContent = 'Impate:'+' '+imp;
        }
    }
});
l4.addEventListener('click', function() {
    let a = '';
    const b = 4;
    if (j1.indexOf(b) === -1 && j2.indexOf(b) === -1 && fim === 0) {
        if (vr % 2 === 0) {
            a = 'X';
            j1[vj1] = b;
            vj1++;
            if (j1.indexOf(7) > -1 && j1.indexOf(8) > -1 && j1.indexOf(9) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(4) > -1 && j1.indexOf(5) > -1 && j1.indexOf(6) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(1) > -1 && j1.indexOf(2) > -1 && j1.indexOf(3) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(7) > -1 && j1.indexOf(4) > -1 && j1.indexOf(1) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(5) > -1 && j1.indexOf(8) > -1 && j1.indexOf(2) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(9) > -1 && j1.indexOf(6) > -1 && j1.indexOf(3) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(1) > -1 && j1.indexOf(5) > -1 && j1.indexOf(9) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(5) > -1 && j1.indexOf(3) > -1 && j1.indexOf(7) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
        } else {
            a = 'O';
            j2[vj2] = b;
            vj2++;

            if (j2.indexOf(7) > -1 && j2.indexOf(8) > -1 && j2.indexOf(9) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(4) > -1 && j2.indexOf(5) > -1 && j2.indexOf(6) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(1) > -1 && j2.indexOf(2) > -1 && j2.indexOf(3) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(7) > -1 && j2.indexOf(4) > -1 && j2.indexOf(1) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(5) > -1 && j2.indexOf(8) > -1 && j2.indexOf(2) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(9) > -1 && j2.indexOf(6) > -1 && j2.indexOf(3) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(1) > -1 && j2.indexOf(5) > -1 && j2.indexOf(9) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(5) > -1 && j2.indexOf(3) > -1 && j2.indexOf(7) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
        }
        l4.textContent = a;
        vr++;
        if (vr=== 11 && fim === 0) {
            fim = 1;
            imp++;
            document.getElementById('impates').textContent = 'Impate:'+' '+imp;
        }
    }
});
l5.addEventListener('click', function() {
    let a = '';
    const b = 5;
    if (j1.indexOf(b) === -1 && j2.indexOf(b) === -1 && fim === 0) {
        if (vr % 2 === 0) {
            a = 'X';
            j1[vj1] = b;
            vj1++;
            if (j1.indexOf(7) > -1 && j1.indexOf(8) > -1 && j1.indexOf(9) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(4) > -1 && j1.indexOf(5) > -1 && j1.indexOf(6) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(1) > -1 && j1.indexOf(2) > -1 && j1.indexOf(3) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(7) > -1 && j1.indexOf(4) > -1 && j1.indexOf(1) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(5) > -1 && j1.indexOf(8) > -1 && j1.indexOf(2) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(9) > -1 && j1.indexOf(6) > -1 && j1.indexOf(3) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(1) > -1 && j1.indexOf(5) > -1 && j1.indexOf(9) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(5) > -1 && j1.indexOf(3) > -1 && j1.indexOf(7) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
        } else {
            a = 'O';
            j2[vj2] = b;
            vj2++;

            if (j2.indexOf(7) > -1 && j2.indexOf(8) > -1 && j2.indexOf(9) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(4) > -1 && j2.indexOf(5) > -1 && j2.indexOf(6) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(1) > -1 && j2.indexOf(2) > -1 && j2.indexOf(3) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(7) > -1 && j2.indexOf(4) > -1 && j2.indexOf(1) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(5) > -1 && j2.indexOf(8) > -1 && j2.indexOf(2) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(9) > -1 && j2.indexOf(6) > -1 && j2.indexOf(3) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(1) > -1 && j2.indexOf(5) > -1 && j2.indexOf(9) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(5) > -1 && j2.indexOf(3) > -1 && j2.indexOf(7) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
        }
        vr++;
        if (vr=== 11 && fim === 0) {
            fim = 1;
            imp++;
            document.getElementById('impates').textContent = 'Impate:'+' '+imp;
        }
        l5.textContent = a;
    }
});
l6.addEventListener('click', function() {
    let a = '';
    const b = 6;
    if (j1.indexOf(b) === -1 && j2.indexOf(b) === -1 && fim === 0) {
        if (vr % 2 === 0) {
            a = 'X';
            j1[vj1] = b;
            vj1++;
            if (j1.indexOf(7) > -1 && j1.indexOf(8) > -1 && j1.indexOf(9) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(4) > -1 && j1.indexOf(5) > -1 && j1.indexOf(6) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(1) > -1 && j1.indexOf(2) > -1 && j1.indexOf(3) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(7) > -1 && j1.indexOf(4) > -1 && j1.indexOf(1) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(5) > -1 && j1.indexOf(8) > -1 && j1.indexOf(2) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(9) > -1 && j1.indexOf(6) > -1 && j1.indexOf(3) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(1) > -1 && j1.indexOf(5) > -1 && j1.indexOf(9) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(5) > -1 && j1.indexOf(3) > -1 && j1.indexOf(7) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
        } else {
            a = 'O';
            j2[vj2] = b;
            vj2++;

            if (j2.indexOf(7) > -1 && j2.indexOf(8) > -1 && j2.indexOf(9) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(4) > -1 && j2.indexOf(5) > -1 && j2.indexOf(6) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(1) > -1 && j2.indexOf(2) > -1 && j2.indexOf(3) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(7) > -1 && j2.indexOf(4) > -1 && j2.indexOf(1) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(5) > -1 && j2.indexOf(8) > -1 && j2.indexOf(2) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(9) > -1 && j2.indexOf(6) > -1 && j2.indexOf(3) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(1) > -1 && j2.indexOf(5) > -1 && j2.indexOf(9) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(5) > -1 && j2.indexOf(3) > -1 && j2.indexOf(7) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
        }
        vr++;
        if (vr=== 11 && fim === 0) {
            fim = 1;
            imp++;
            document.getElementById('impates').textContent = 'Impate:'+' '+imp;
        }
        l6.textContent = a;
    }
});
l7.addEventListener('click', function() {
    let a = '';
    const b = 7;
    if (j1.indexOf(b) === -1 && j2.indexOf(b) === -1 && fim === 0) {
        if (vr % 2 === 0) {
            a = 'X';
            j1[vj1] = b;
            vj1++;
            if (j1.indexOf(7) > -1 && j1.indexOf(8) > -1 && j1.indexOf(9) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(4) > -1 && j1.indexOf(5) > -1 && j1.indexOf(6) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(1) > -1 && j1.indexOf(2) > -1 && j1.indexOf(3) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(7) > -1 && j1.indexOf(4) > -1 && j1.indexOf(1) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(5) > -1 && j1.indexOf(8) > -1 && j1.indexOf(2) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(9) > -1 && j1.indexOf(6) > -1 && j1.indexOf(3) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(1) > -1 && j1.indexOf(5) > -1 && j1.indexOf(9) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(5) > -1 && j1.indexOf(3) > -1 && j1.indexOf(7) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
        } else {
            a = 'O';
            j2[vj2] = b;
            vj2++;

            if (j2.indexOf(7) > -1 && j2.indexOf(8) > -1 && j2.indexOf(9) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(4) > -1 && j2.indexOf(5) > -1 && j2.indexOf(6) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(1) > -1 && j2.indexOf(2) > -1 && j2.indexOf(3) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(7) > -1 && j2.indexOf(4) > -1 && j2.indexOf(1) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(5) > -1 && j2.indexOf(8) > -1 && j2.indexOf(2) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(9) > -1 && j2.indexOf(6) > -1 && j2.indexOf(3) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(1) > -1 && j2.indexOf(5) > -1 && j2.indexOf(9) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(5) > -1 && j2.indexOf(3) > -1 && j2.indexOf(7) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
        }
        vr++;
        if (vr=== 11 && fim === 0) {
            fim = 1;
            imp++;
            document.getElementById('impates').textContent = 'Impate:'+' '+imp;
        }
        l7.textContent = a;
    }
});
l8.addEventListener('click', function() {
    let a = '';
    const b = 8;
    if (j1.indexOf(b) === -1 && j2.indexOf(b) === -1 && fim === 0) {
        if (vr % 2 === 0) {
            a = 'X';
            j1[vj1] = b;
            vj1++;
            if (j1.indexOf(7) > -1 && j1.indexOf(8) > -1 && j1.indexOf(9) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(4) > -1 && j1.indexOf(5) > -1 && j1.indexOf(6) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(1) > -1 && j1.indexOf(2) > -1 && j1.indexOf(3) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(7) > -1 && j1.indexOf(4) > -1 && j1.indexOf(1) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(5) > -1 && j1.indexOf(8) > -1 && j1.indexOf(2) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(9) > -1 && j1.indexOf(6) > -1 && j1.indexOf(3) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(1) > -1 && j1.indexOf(5) > -1 && j1.indexOf(9) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(5) > -1 && j1.indexOf(3) > -1 && j1.indexOf(7) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
        } else {
            a = 'O';
            j2[vj2] = b;
            vj2++;

            if (j2.indexOf(7) > -1 && j2.indexOf(8) > -1 && j2.indexOf(9) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(4) > -1 && j2.indexOf(5) > -1 && j2.indexOf(6) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(1) > -1 && j2.indexOf(2) > -1 && j2.indexOf(3) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(7) > -1 && j2.indexOf(4) > -1 && j2.indexOf(1) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(5) > -1 && j2.indexOf(8) > -1 && j2.indexOf(2) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(9) > -1 && j2.indexOf(6) > -1 && j2.indexOf(3) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(1) > -1 && j2.indexOf(5) > -1 && j2.indexOf(9) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(5) > -1 && j2.indexOf(3) > -1 && j2.indexOf(7) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
        }
        vr++;
        if (vr=== 11 && fim === 0) {
            fim = 1;
            imp++;
            document.getElementById('impates').textContent = 'Impate:'+' '+imp;
        }
        l8.textContent = a;
    }
});
l9.addEventListener('click', function() {
    let a = '';
    const b = 9;
    if (j1.indexOf(b) === -1 && j2.indexOf(b) === -1 && fim === 0) {
        if (vr % 2 === 0) {
            a = 'X';
            j1[vj1] = b;
            vj1++;
            if (j1.indexOf(7) > -1 && j1.indexOf(8) > -1 && j1.indexOf(9) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(4) > -1 && j1.indexOf(5) > -1 && j1.indexOf(6) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(1) > -1 && j1.indexOf(2) > -1 && j1.indexOf(3) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(7) > -1 && j1.indexOf(4) > -1 && j1.indexOf(1) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(5) > -1 && j1.indexOf(8) > -1 && j1.indexOf(2) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(9) > -1 && j1.indexOf(6) > -1 && j1.indexOf(3) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(1) > -1 && j1.indexOf(5) > -1 && j1.indexOf(9) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j1.indexOf(5) > -1 && j1.indexOf(3) > -1 && j1.indexOf(7) > -1) {
                fim = 1;
                pj1++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
        } else {
            a = 'O';
            j2[vj2] = b;
            vj2++;

            if (j2.indexOf(7) > -1 && j2.indexOf(8) > -1 && j2.indexOf(9) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(4) > -1 && j2.indexOf(5) > -1 && j2.indexOf(6) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(1) > -1 && j2.indexOf(2) > -1 && j2.indexOf(3) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(7) > -1 && j2.indexOf(4) > -1 && j2.indexOf(1) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(5) > -1 && j2.indexOf(8) > -1 && j2.indexOf(2) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(9) > -1 && j2.indexOf(6) > -1 && j2.indexOf(3) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(1) > -1 && j2.indexOf(5) > -1 && j2.indexOf(9) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
            if (j2.indexOf(5) > -1 && j2.indexOf(3) > -1 && j2.indexOf(7) > -1) {
                fim = 1;
                pj2++;
                document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
            }
        }
        vr++;
        if (vr=== 11 && fim === 0) {
            fim = 1;
            imp++;
            document.getElementById('impates').textContent = 'Impate:'+' '+imp;
        }
        l9.textContent = a;
    }
});
zerar.addEventListener('click', function() {
    l1.textContent = '';
    l2.textContent = '';
    l3.textContent = '';
    l4.textContent = '';
    l5.textContent = '';
    l6.textContent = '';
    l7.textContent = '';
    l8.textContent = '';
    l9.textContent = '';
    vr = 2;
    vj1 = 0;
    vj2 = 0;
    j1 = [];
    j2 = [];
    fim = 0;
});

reset.addEventListener('click', function() {
    pj1 = 0;
    pj2 = 0;
    imp = 0;
    document.getElementById('jo1').value = '';
    document.getElementById('jo2').value = '';
    document.getElementById('vitorias').textContent = 'Vitorias:' + ' ' + 'X ' + pj1 + ' ' + 'O ' + pj2;
    document.getElementById('impates').textContent = 'Impate:' + ' ' + imp;
});
