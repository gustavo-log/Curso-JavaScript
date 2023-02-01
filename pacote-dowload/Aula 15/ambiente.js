let num = [5, 8, 2, 9, 3]
num.push(1) // Adicionar elemento no array
num.sort() //Colocar em ordem crescente
console.log(num)
console.log(`Nosso vetor é ${num}`)
console.log(`O vetor tem ${num.length} posições`) // num.length mostra o comprimento do vetor
console.log(`O primeiro valor do nosso Array é ${num[0]}`) // num[0] significa q queremos mostrar o indice 0 do vetor, no caso 1

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)
