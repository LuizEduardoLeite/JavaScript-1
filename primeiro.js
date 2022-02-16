let a = parseInt(prompt('Digite a primeira medida do triangulo'))
let b = parseInt(prompt('Digite a segundo segunda medida do triangulo'))
let c = parseInt(prompt('Digite a terceira terceira medida'))

if(a==b && b==c){
    alert('A medida deste triangulo é um equilátero')
}else if(a==b && b!=c ||a!=b && b==c || a!=b && a==c){
    alert('A medida deste triangulo é um isosceles')
}else{
    alert('Este triangulo é escaleno')
}
