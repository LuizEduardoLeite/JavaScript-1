let a = parseInt(prompt('Digite o primeiro numero'))
let b = parseInt(prompt('Digite o segundo numero'))
let c = parseInt(prompt('Digite o terceiro numero'))
if(a > b && a>c){
    alert('O primeiro numero '+a+' é o maior')
    
}else if(b>a && b>c){
    alert('O segundo numero '+b+' é o maior')
}else{
    alert('O terceiro numero é o maior')
}