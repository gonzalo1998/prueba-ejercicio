/*const prompt= require('prompt-sync')();
function matrizSuma(){*/

let filas = parseInt(prompt("Ingrese el número de filas: "));
let columnas = parseInt(prompt("Ingrese el número de columnas: "));
let sumaFila = 0;
let sumaColumna = 0;
let matriz = [];
    for (let i = 0; i < filas; i++) {
        matriz[i] = [];
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] = parseInt(prompt("Ingrese el valor para la posicion ["+i+"]["+j+"]:"));
        }
    }

    document.write("Matriz que ingreso el usuario");
    document.write("<table border='1'>");
    for (let i = 0; i < filas; i++) {
        document.write(" <tr>")
        for (let j = 0; j < columnas; j++) {
            document.writeln("<td>" + matriz[i][j] + "</td>");
            
        }
        document.write("</tr>")
    }
    document.write("</table>");
   

    for (let i = 0; i < filas; i++) {
        sumaFila=0;
        for (let j = 0; j < columnas; j++) {
            sumaFila += matriz[i][j];            
        }
   
        document.write("<br> La suma de la fila "+(i+1)+" es: "+sumaFila+"<br>");
    }


    for (let j = 0; j < columnas; j++) {
        sumaColumna = 0;
        for (let i = 0; i < filas; i++) {
            sumaColumna += matriz[i][j];            
        }
        document.write("<br> La suma de la columna "+(j+1)+" es: "+sumaColumna+"<br>");
        
    }
   
   
   
   
   
   /* console.log("Matriz 3x4:");
    for (let i = 0; i < 3; i++) {
        console.log(matriz[i].join(" "));
        ;
    }

    console.log("Suma de filas:");
    for (let i = 0; i < 3; i++) {
        let sumaFila = 0;
        for (let j = 0; j < 4; j++) {
            sumaFila += matriz[i][j];            
        }
        console.log(`Fila ${i+1}: ${sumaFila}`);
    }

    console.log("Suma de columnas:");
    for (let j = 0; j < 4; j++) {
        let sumaColumna = 0;
        for (let i = 0; i < 3; i++) {
            sumaColumna += matriz[i][j];            
        }
        console.log(`Columna ${j+1}: ${sumaColumna}`);
        
    }

  return matriz;
}

matrizSuma();*/