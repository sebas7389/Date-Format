
          //DD/MM/YYYY
function formatearFecha (fechaTimestamp){

    const fecha = new Date (fechaTimestamp)
    
    let dia = fecha.getDate() //Dia de la semana 20
    let mes = fecha.getMonth() +1 // Get month me devuelve el numero del mes pero comenzando como un array por lo tanto Enero es 0, diciembre 11, etc.
    const year = fecha.getFullYear(); //2022
    
    //Corregir la falta de digito cuando el valor de dia o mes sea menor que 10
    if(dia <10) {dia ='0' + dia} ;
    
    mes=String(mes).padStart(2,'0')
    //Retorno la fecha formateada para guardar en una variable y utilizar al pintar mi fila de la tabla 
    
    return `${dia}/${mes}/${year}`;
}

const fecha = formatearFecha(1642708268000)

console.log (fecha);

const formatter = Intl.DateTimeFormat('sp-AR', {day: '2-digit', month: '2-digit', year:'numeric'})

function formatDateIntl(date) {
    return formatter.format(date);
}

const fechaIntl = formatDateIntl(1642708268000)

console.warn (fechaIntl)






function calcularDiferenciaEntreFechas(fechaAnterior) {
    // Obtengo la fecha actua; con date now y calculo la diferencia con la fechaAnterior
 let diff = Date.now() - fechaAnterior; // 1681863696777 En la calculadora se resta por el numero que tengo 1642708268000
// Transformo la diferencia a dias me dejo la parte entera
 let diffDias = Math.floor(diff / 1000 /60 /60 /24 );
 // Si la dif en dias es menor a 1 mes, entonces devuelvo x dias

 if (diffDias <= 30) {
    return `Hace ${diffDias} ${diffDias > 1 ? 'dias' : 'dia'}` // Divido por 12 para pasarlo a dias
 }
// Si no ingrese al if anterior calculo la cantidad de meses
 let diffMeses = Math.floor( diffDias / 30); //Divido por 30 para pasarlo a meses

 if(diffMeses < 12) {
    return `Hace ${diffMeses} ${diffMeses > 1 ? 'meses' : ' mes'}`
 }
 // Obtengo la cantidad de años y los meses restantes
 let diffAños = Math.floor( diffMeses/ 12);
 let mesesRestantes = diffMeses %12;
 // Si no tengo meses restantes !false retorno solo cantidad de años
 if(!mesesRestantes) {
    return `Hace ${diffAños} ${diffAños > 1 ? 'años' : ' año'}`
 }
// Finalmente si no es ninguno de los casos anteriores devuelvo el detalle de la diferencia en años y meses
 return `Hace ${diffAños} ${diffAños > 1 ? 'años' : ' año'} y ${mesesRestantes} ${mesesRestantes > 1 ? 'meses' : ' mes'}`;


}
// LLamo a la funcion pasando un parametro de fecha y espero que me retorne un resultado asi almaceno en mi variable diferencia.
const diferencia = calcularDiferenciaEntreFechas(1642708268000)

console.log (diferencia);
