/*
Una función que devuelva la diferencia en días entre dos fechas del mismo año 
(sólo tenemos en cuenta dia y mes)
*/
//-------------------------
//BIEN

alert("Voy a necesitar que me des unas fechas a continuación");

var primerDia = parseInt(prompt("Dime el día"));
var primerMes = parseInt(prompt("Dime el el mes"));
var segundoDia = parseInt(prompt("Dime el día"));
var segundoMes = parseInt(prompt("Dime el mes"));
var resultadodia = segundoDia - primerDia
var resultado2dia = segundoDia - primerDia
var mestreintayuno = 31
var obtenermes;
var febrero = 28
var treinta = 30
var cont = 0;

alert("Tu primera fechas es " + primerDia + " de " + primerMes + " y tu segunda fecha es " + segundoDia + " de " + segundoMes);

while (primerMes <= segundoMes) {
    if (primerMes == 1 || primerMes == 3 || primerMes == 5 || primerMes == 7 || primerMes == 8 || primerMes == 10 || primerMes == 12) {
        cont = cont + mestreintayuno
        console.log('Valor de primer mes' + primerMes)
        console.log(cont)
    }
    if (primerMes == 2) {
        cont = cont + febrero;
        console.log('Valor de primer mes' + primerMes)
        console.log(cont)
    }
    if (primerMes == 4 || primerMes == 6 || primerMes == 9 || primerMes == 11) {
        cont = cont + treinta
        console.log('Valor de primer mes' + primerMes)
        console.log(cont)
    }
    primerMes++
}

//console.log('El resultado de días es de ' + (cont - 1))

if (segundoMes == 12 && segundoDia != 31 && primerDia != 1) {
    cont = cont - mestreintayuno
    cont = cont + segundoDia
    cont = cont - primerDia;
    console.log('La diferencia de dias es de' + cont)
}
if (segundoMes == 11 && segundoDia != 30 && primerDia != 1) {
    cont = cont - treinta
    cont = cont + segundoDia
    cont = cont - primerDia;
    console.log('La diferencia de dias es de' + cont)
}
if (segundoMes == 10 && segundoDia != 31) {
    cont = cont - mestreintayuno
    cont = cont + segundoDia
    cont = cont - primerDia;
    console.log('La diferencia de dias es de' + cont)
}
if (segundoMes == 9 && segundoDia != 30) {
    cont = cont - treinta
    cont = cont + segundoDia
    cont = cont - primerDia;
    console.log('La diferencia de dias es de' + cont)
}
if (segundoMes == 8 && segundoDia != 31) {
    cont = cont - mestreintayuno
    cont = cont + segundoDia
    cont = cont - primerDia;
    console.log('La diferencia de dias es de' + cont)
}
if (segundoMes == 7 && segundoDia != 31) {
    cont = cont - mestreintayuno
    cont = cont + segundoDia
    cont = cont - primerDia;
    console.log('La diferencia de dias es de' + cont)
}
if (segundoMes == 6 && segundoDia != 30) {
    cont = cont - treinta
    cont = cont + segundoDia
    cont = cont - primerDia;
    console.log('La diferencia de dias es de' + cont)
}
if (segundoMes == 5 && segundoDia != 31) {
    cont = cont - mestreintayuno
    cont = cont + segundoDia
    cont = cont - primerDia;
    console.log('La diferencia de dias es de' + cont)
}
if (segundoMes == 4 && segundoDia != 30) {
    cont = cont - treinta
    cont = cont + segundoDia
    cont = cont - primerDia;
    console.log('La diferencia de dias es de' + cont)
}
if (segundoMes == 3 && segundoDia != 31) {
    cont = cont - mestreintayuno
    cont = cont + segundoDia
    cont = cont - primerDia;
    console.log('La diferencia de dias es de' + cont)
}
if (segundoMes == 2 && segundoDia != 28 && primerDia != 1) {
    cont = cont - febrero
    cont = cont + segundoDia
    cont = cont - primerDia;
    console.log('La diferencia de dias es de' + cont)
}
if (segundoMes == 1 && segundoDia != 31) {
    cont = cont - mestreintayuno
    cont = cont + segundoDia
    cont = cont - primerDia;
    console.log('La diferencia de dias es de' + cont)
}


alert('La diferencia de dias es de' + cont)
//BIEN
//------------------------------------
/*

*/
/*
if (primerMes != segundoMes) {
    
        resultadodias = segundoDia - primerDia;
    
        do {
            if(primerMes == 1 || primerMes == 3 || primerMes == 5 || primerMes == 7 || primerMes == 8 || primerMes == 10 || primerMes == 12) {
                cont = cont + mestreintayuno
                primerMes++
            }
            if(primerMes=2){
                cont = cont + febrero;
                primerMes++;
            }
            if (primerMes==4 || primerMes == 6 || primerMes== 9 || primerMes == 11) {
                cont = cont + treinta
                primerMes++
            }
            break
        } while (primerMes < segundoMes);
        console.log('El resultado de días es de ' + (cont + resultadodias))
   

    resultadodias = primerDia - segundoDia
    while (primerMes < segundoMes) {
        if (primerMes == 1 || primerMes == 3 || primerMes == 5 || primerMes == 7 || primerMes == 8 || primerMes == 10 || primerMes == 12) {
            cont = cont + mestreintayuno
            primerMes++
        }
        if (primerMes = 2) {
            cont = cont + febrero;
            primerMes++;
        }
        if (primerMes == 4 || primerMes == 6 || primerMes == 9 || primerMes == 11) {
            cont = cont + treinta
            primerMes++
        }
        console.log('La diferencia de dias es ' + (resultadodias + cont) + ' dias')
    }

} */