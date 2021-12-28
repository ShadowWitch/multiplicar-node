
// requireds
const fs = require('fs');
const colors = require('colors')
// const { resolve } = require('path/posix');

let mostrarTabla = (base, limite = 10) =>{ // "limita = 10" lo hara es asignarle el valor de "10" al limite, en caso de que NO se le pase un valor por argumento...

    console.log('============================'.green);
    console.log(`Tabla de ${base}`.green);
    console.log('============================'.green);


    if(!Number(base) || !Number(limite)){
        console.log(`Uno de los siguientes valores introducidos NO es un numero: ${base} o ${limite}`)
        return;
    }

    for(let i=1;i<(limite+1);i++){
        console.log(`${i} x ${base} = ${i * base}`)
    }
}



let crearArchivo = (base, limite) =>{

    return new Promise( (resolve, reject) => {
        // console.log(base, limite);

        if(!Number(base) || !Number(limite)){
            // console.log('ACA', limite)
            reject(`El valor introducido en la base "${base} "o en el limite "${limite}" no es un numero`);
            return;
        }


        // console.log('HOLAAAAAAAAAA') //Esto NO se ejecutara si entra en el error de "!Number(base)"
        // console.log('HOLAAAAAAAAAA')
        // console.log('HOLAAAAAAAAAA')

        let contenido = '';

        for(let i=1;i<(limite+1);i++){
            contenido += `${base} x ${i} = ${i * base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, contenido, (err) => {
            // if(err) 
            //     reject(err);
            // else 
            //     resolve(`tabla-${base}.txt`);

            if(err){
                reject(err)
                return;
            }else{
                resolve(`tabla-${base}`.green)
            }

        });
    })
}




module.exports = {
    crearArchivo,
    mostrarTabla
};




// qwe