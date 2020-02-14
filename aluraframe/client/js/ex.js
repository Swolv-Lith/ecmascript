        // versão não funcional
        let numeros = [3,2,11,20,8,7]

        let numbers = []

        numeros.forEach(item => {
            if (item % 2) {
                numbers.push(item * 2)
            } else {
                numbers.push(item)
            }
        })

        console.log (numbers)

        // versão com if ternário

        let novosNumeros = numeros.map(item =>  item % 2 ? item * 2 : item)

        console.log(novosNumeros)
        /*
            Veja que usamos um if ternário para decidir se retornamos o item multiplicado por 
            2 ou o item em si. Um outro ponto importante é o seguinte: 0 é considerado falso 
            em JavaScript e qualquer número diferente de 0 é considerado verdadeiro.
            Então, quando fazemos item % 2, se o resultado for 0, é porque o item é divisível por
            dois, ou seja, é par. Como 0 é falso, ele retornará o item sem qualquer modificação.
            Agora, se o resto da divisão de item % 2 for diferente de zero, é porque é impar.
            Como o resultado é diferente de zero, será verdadeiro e o que vem depois do interrogação
            será processado, no caso, item vezes dois.

            Outra maneira de se conseguir o mesmo resultado,
            sem entretanto utilizar o operador ternário, é:
        */

        let nuevosNumeros = numeros.map((item)=> (item%2 +1 ) * item)
        console.log(nuevosNumeros)

        /*
            Quando fazemos o módulo de dois um número par, o que sobra é 0, somando-se 1, 
            e depois multiplicando pelo item, obtemos o mesmo item. Quando o número é impar, 
            o modulo obtido é um, o qual incrementado dá 2.
        */


        /* ~ Exemplo de spread operator ~ */

        function somaDoisNumeros(numero1, numero2) {
            return numero1 + numero2                                   
        }

        console.log(somaDoisNumeros(10,30)) // exibe 40!

        let numeros = [10, 30]
        console.log(somaDoisNumeros(numeros[0], numeros[1]))

        numeros = [10,30]
        console.log(somaDoisNumeros(...numeros))

        /* ~ Exemplo de filtro nome aluno ~ */
        // Alterando para arrow functions

        // classe para construir a matricula do aluno
        class Aluno {

            constructor(matricula, nome) {
                this.matricula = matricula
                this.nome = nome
            }
        }
        
        // classe para construir a nota e atrelar ao aluno
        class Prova {
        
            constructor(aluno, nota) {
                this.aluno = aluno
                this.nota = nota
            }
        }

        // cria a matricula do aluno e sua nota da prova
        let avaliacoes = [
            new Prova(new Aluno(1, 'Luana'), 8),
            new Prova(new Aluno(2, 'Cássio'), 6),
            new Prova(new Aluno(3, 'Barney'), 9),
            new Prova(new Aluno(4, 'Bira'), 5)
        ]

        // filtra os alunos pela nota maior que 7, e retorna apenas seus nomes
        let aprovados = avaliacoes
        .filter((prova) =>  prova.nota >= 7)
        .map((prova) =>  prova.aluno.nome)

        console.log(aprovados)

        // versão com function

        let aprovados = avaliacoes
        .filter(function(prova) { return prova.nota >= 7; })
        .map(function(prova) { return prova.aluno.nome;}) 

        console.log(aprovados)