// Copiado para estudos do colega Lucas de Oliveira Campos
    // Meu primeiro código JS!
    console.log('Hello World');

    let nome = 'Nome'; // String literal
    console.log (nome);
   
       // Não podem ser palavra chave
       // Tem que ser significativas
       // Não pode começar com numeros
       // Não pode conter espaço ou hifen
       // Maiusculas e minusculas fazem diferença
   
   let primeiroNome = 'Nome';
   let ultimoNome = 'Sobrenome';
   
   let interestRate = 0.3; // Numeral
   interestRate = 1;
   console.log (interestRate);
   
   let aprovado = false; // Booleano, sim ou não
   

// Objeto
let pessoa = {
    nome: 'Lucas',
    idade: 19
};
console.log (pessoa);

// Array
let coresSelecionadas = ['red', 'blue'];
coresSelecionadas[2]= 'green';
console.log (coresSelecionadas);

// Função exibindo
function exibir(priNome, ultNome) {
    console.log('Olá ' + priNome + ' ' + ultNome);
}

exibir('Lucas', 'Campos');

// Função calculando
function calculo(numero) {
    return numero * numero;
}


console.log(calculo(2)); //Valor e exibindo

// Calculando

let x = 10;
let y = 3;

console.log (x + y);
console.log (x - y);
console.log (x * y);
console.log (x / y);
console.log (x % y);
console.log (x ** y);

    // x++ = x +1;

console.log (x > 0); // booleano
console.log (x >= 1);
console.log (x < 1);
console.log (x <= 1);

// Se um cliente tem mais de 100 pontos, é ouro. caso não, é prata.

let pontos = 101;
let type = pontos > 100 ? 'ouro': 'prata';

console.log(type);

// && retorna true caso todos operadores sejam true

let bomDesempenho = true;
let bomCredito = true;
let elegivel = bomDesempenho && bomCredito;

console.log (elegivel);

// || retorna true caso um dos operadores sejam true

let bomCarro = true;
let boaRoda = false;
let multa = bomCarro || boaRoda;

console.log (multa);

        // Caso tenha a corUsuario, ela sera usada, caso não, será a corPadrao.
        let corUsuario = undefined;
        let corPadrao = 'blue';
        let corAgora = corUsuario || corPadrao;

        console.log (corAgora);

// ! se o operador for true, o "!" transformara ele em false

let boaAtividade = true;
let boaNota = !boaAtividade;

console.log (boaNota);

//Inverter a para blue, e b para red
let a = 'red'
let b = 'blue'

    //Resolução
    let c = a;
    a = b;
    b = c;

console.log(a);
console.log(b);

                // IF-ELSE

// Se o horário estiver entre 6 as 12: Bom dia!
// Se o horario estiver entre 12 e 18: Boa tarde!
// Se não: Boa noite!


let hora = 10;

if (hora >= 6 && hora < 12) 
    console.log ('Bom dia!');

else if (hora >= 12 && hora < 18) 
    console.log ('Boa tarde!');

else 
    console.log ('Boa noite!');



            // SWITCH-CASE
// Se o usuario for convidado: Usuario convidado
// Se o usuario for moderador: Usuario moderador
// Se não: Usuario desconhecido


let posicao = 'convidado';

switch (posicao) {
    case 'convidado':
        console.log ('Usuario convidado');
        break;

    case 'moderador':
        console.log ('Usuario moderador');
        break;
        
    default:
        console.log ('Usuario desconhecido');
}

        // Mesmo exercicio em IF-ELSE
        if (posicao === 'convidado') console.log('Convidado');
        else if (posicao === 'moderador') console.log ('Moderador');
        else console.log ('Usuario desconhecido')


                // FOR LOOP

for (let i = 0; i < 5; i++) { //Setando a variavel i para 0, enquanto a variavel i for menor que 5, acrescentar +1
    console.log ('Ola mundo'); // O que acontece enquanto a variavel i for <5
}

for (let i = 0; i <=5; i++) {
    if (i % 2 !== 0) // Se o que sobrou da divisão de i por 2, não for 0 (quer dizer que o numero é impar) irá mostrar a mensagem a seguir:
     console.log ('Ola');
}

                // WHILE LOOP

let i = 0;
while (i <= 5) { // Enquanto i for menor e igual a 5
    if (i % 2 !== 0) // E se for numero impar
    console.log ('Olá denovo!'); // Mostrar mensagem
    i++; // Acrescentar de volta no while, subindo novamente pro loop
}


                // DO-WHILE LOOP

let p = 0;  // Neste loop irá analisar o numero da variavel, e executar no minimo 1 vez.
do {
    if (p % 2 !==0)
    console.log ('Olá!!!');
    p++
} while (p <= 5); // Caso o número da variavel não se encaixe na condição while, o loop irá acabar, mostrando a mensagem apenas uma vez.


            // Exemplos de LOOP infinito, e como corrigi-los.
let n = 0;
while (n < 5) {
    console.log (n);
     n++;   //<<<<< Caso não implementado aqui, o loop se tornará infinito.
}

//for (let o = 0; o > 0; i++); // Caso "o" seja maior que 0, acrescentar mais um, rodando infinitamente.

                // FOR-IN LOOP

const person = {  // Definindo um objeto "pessoa"
    nome1: 'Nome',
    idade1: 30
};

for (let key in person)
    console.log(key, person[key]);

const cores = ['red', 'green', 'blue']; // Criando um array

for (let index in cores)
    console.log (index, cores[index]);




                // FOR-OF LOOP Versões atualizadas de JS

//for (let cores of cores) puxando a variavel cores do exemplo acima
    //console.log (cores);



                //BREAK-CONTINUE

let q = 0;
while (q <= 10){
    if(q === 5) break; // Se a variavel for igual a 5, quebrar o loop.

    console.log ('Variavel Q');
    q++;
}

let k = 0;
while (k <= 10){
    if(k % 2 === 0){ // Se a variavel for par
    k++; // adicionar mais um
    continue; // continuar de volta para o inicio do loop
    }
    
    console.log (k);
    k++;
}


                    // Função para retornar o maior numero, de uma forma pratica e resumida
let num = maximo(1, 2);
console.log(num);

function maximo(numero1, numero2) {
    return (numero1 > numero2) ? numero1 : numero2; //Verifique se o numero 1 é maior que 2, se sim, retorne numero1, se não, numero2.
}



                    // Exercicio FizzBuzz
// 1 Se o numero for divisivel por 3, aparece 'Fizz' 
// 2 Se divisivel por 5, aparece 'Buzz' 
// 3 Divisivel pelos dois, 'FizzBuzz'.                     
// 4 Caso não for divisivel por nenhum, aparece o numero.
// 5 Se não for numero, 'Not a number'
const output = fizzBuzz(10); 

console.log (output);

function fizzBuzz (input) {
    //5
    if (typeof input !== 'number')
    return NaN;

    //3
    if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';
    //1
    if(input % 3 === 0)
    return 'Fizz';
    //2
    if (input % 5 === 0)
    return 'Buzz';
    //4
    return input;
}


// Limite de velocidade = 70
// 5km = 1 ponto
// Math.floor = transformar numero quebrado em numero inteiro
// 12 pontos = carteira suspensa

checkVel(80);

function checkVel(vel) {
const limiteVel = 70;
const kmporponto = 5;

    if (vel < limiteVel + kmporponto)
    console.log ('Ok');
    else {
        const pontos = Math.floor( (vel- limiteVel) / kmporponto);
        if (pontos >= 12)
        console.log ('Carteira suspensa');
        else
        console.log('Pontos', pontos);
    }


}
// Mostrar lista de 0 até o numero desejado, mostranndo se eles são pares ou impares.

mostrarNum(10);
function mostrarNum (limit) {
    for (let x = 0; x <= limit; x++) {
        const mensagem = (x % 2 === 0) ? 'PAR' : 'IMPAR';
        console.log (x, mensagem)
    }
}


                // ORIENTAÇÃO A OBJETOS


const circulo = {    // DEFININDO OBJETO
    radius: 1,
    location: { 
        x: 1,           // CARACTERISTICAS
        y: 1,       
    },
    isVisible: true,
    draw: function (){
        console.log ('draw');
    }
};

circulo.draw();   // CHAMANDO A FUNCAO DRAW DO OBJETO DE QUALQUER LUGAR DO CÓDIGO


// Factory Function : Simplificando 
function criarCirculo (radius){

return {    // DEFININDO OBJETO
    radius,        // Definindo RADIUS : RADIUS
    draw () {
        console.log ('draw');
    }
};
}

// Criando novas constantes atraves da função criar circulo acima. (Criando novos "circulos")

const circulo1 = criarCirculo(1);
console.log (circulo1);

const circulo2 = criarCirculo(2);
console.log (circulo2);

// Constuctor Function

function Circulo(radius) {
    this.radius = radius;
    this.draw = function (){
        console.log('draw');

    }
}

const circulO = new Circulo(1) // Criando novas constantes atraves da função acima


// String primitiva
const message = 'oi';

// String Objeto
const outra = new String('ola');


// Objeto Date

const now = new Date();
const date1 = new Date('Dezembro 13 2022 16:00');
const date2 = new Date(2022, 12, 13, 16, 0)   // Ano, Mes, Dia, Hora, Minuto

now.setFullYear(2022);


// Rua
// Cidade
// CEP

let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
};

function mostrarEndereco(endereco){
    for (let chave in endereco)
    console.log(chave, endereco[chave]);
}

mostrarEndereco(endereco);


// Factory Function do exercicio acima

let enderecO = criarEndereco ('a', 'b', 'c');

function criarEndereco(rua, cidade, cep){
    return{
        rua,
        cidade,
        cep
    };
}

const infoEndereco = criarEndereco(1);
console.log (infoEndereco);

// Constructor Function do exercicio acima

let enderEco = new Endereco('a', 'b', 'c');

function Endereco (rua, cidade, cep){
    this.rua = rua;
    this. cidade = cidade;
    this. cep = cep;
}

const novoEndereco = Endereco(1);
console.log (Endereco);


// Criar objeto de postagens de blog
// Titulo
// Corpo
// Autor
// Visualizacoes
// Comentarios

let post = {
    titulo: 'a',
    corpo: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios: [
        {autor: 'a', corpo: 'b'},
        {autor: 'c', corpo: 'd'},
    ],
    estaON: true
};

// Mesmo exercicio acima, porem com Constructor Function.

let postagem = new Post('a', 'b', 'c');

console.log(postagem);

function Post(titulo, corpo, autor) {
    this.titulo = titulo;
    this.corpo = corpo;
    this.autor = autor;
    this.visualizacoes = 0;
    this.comentarios = [];
    this.estaON = false;
}


// Adicionando novos elementos no começo, meio e fim de um Array

const numbers = [3, 4]; // Lembrando que array também é um objeto.

// Adicionando no fim

numbers.push(5,6);
//console.log(numbers);

// Adicionando no começo

numbers.unshift(1, 2);
//console.log(numbers);

// Adicionando no meio

numbers.splice(2, 0, 'a', 'b' );
//console.log(numbers);

// Achando elementos em uma array

const numero = [1, 2, 3, 4];

console.log(numero.indexOf('1')); // Verificando se uma string existe no array

console.log(numero.lastIndexOf(1)); // Mostra a posição mais elevada onde o numero se encontra, contando apartir de 0.

console.log(numero.includes(1)); // Verificando se o numero existe no array

// Achando elementos por referencia

const cursos = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'},
];

// Utilizando do método .find, que é necessario criar uma variavel para amostra
let curso = cursos.find(curso => curso.nome === 'a');
console.log(curso);





// Removendo elementos de uma array

const elementos = [1, 2, 3, 4];

// No fim da array
const ult = elementos.pop();
//console.log(elementos);


// No começo da array
const pri = elementos.shift();
//console.log(elementos);

// No meio da array
elementos.splice(2, 1);
//console.log(elementos);





// Deixando uma array vazia
let vazio = [1, 2, 3, 4];
let outro = vazio;

// Solução 1
vazio = [];   // menos indicada

// Solução 2
vazio.lenght = 0;  // mais indicada

// Solução 3
vazio.splice(0, vazio.lenght);

// Solução 4
while (vazio.lenght > 0)
vazio.pop();  // não recomendado




// Combinar e particionar arrays

const primeira = [1, 2, 3, 4];
const segunda = [4, 5, 6];

const combinadas = [...primeira, ...segunda];

const particionar = combinadas.slice(2);

console.log(combinadas);
console.log(particionar);



// Unir o conteudo da array

const s = [1, 2, 3];
const unir = s.join (',');  // Unindo os numeros com uma virgula entre eles
console.log(unir);


// Organizar arrays

const d = [1, 3, 2];     // Organizar numeros
d.sort();
console.log(d);


const ling = [           // Organizar objetos string
    {id: 1, nome: 'Node.js'},
    {id: 2, nome: 'JavaScript'},
];

ling.sort(function(a, b){

    const nomeA = a.nome.toLowerCase();   // Eliminar o padrao ASCII de numeração de letras.
    const nomeB = b.nome.toLowerCase();


    if (nomeA < nomeB) return -1;   // Se B for maior que A, retornar -1
    if (nomeA > nomeB) return 1;    // Se A maior que B, retornar 1
    return 0;                         // Se igual, retornar 0
});





// Filtrando array

const fil = [1, -1, 2, 3];

const filtrado = fil.filter(valor => valor >= 0);   // Mostrar os valores maior e igual a 0

console.log(filtrado);


// Mapeando array do exercicio acima

const items = filtrado.map(valor => '<li>' + valor + '</li>');   // Adicionando <li> no começo do valor e </li> no final do valor
console.log(items);






// Reduzindo uma array

const w = [1, -1, 2, 3];

const sum = w.reduce((acumulador, valorAtual) => {
    return acumulador, valorAtual;
});

console.log(sum);



// Declarando uma função

function andar() {
    console.log('andar');
}

// Expressão de função - Não pode ser chamada antes de ser declarada
let correr = function() {;
    console.log('correr');
};
let mover = correr; 
correr();  // Chamando a função
mover(); // Chamando a variavel mover que é igual a função correr





//