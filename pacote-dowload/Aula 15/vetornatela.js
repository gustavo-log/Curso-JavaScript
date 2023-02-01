let valores = [3,6,9,8,5,2]

for(let pos = 0; pos < valores.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//maneira mais simplificada

for(let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
