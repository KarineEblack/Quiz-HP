const quizData = [
    {
        questao:'Qual o nome completo do Dumbledore?',
        a:'Marcelinho Carioca',
        b:'Alvo Percival Wulfrico Brian Dumbledore',
        c:'Regina Maria Loureiro Barreto Casé',
        d:'Fausto Corrêa da Silva',
        correct:'b'
     },{
         questao: 'Severus Snape foi de qual casa?',
         a: 'Casa da Moeda',
         b: 'Discrucios',
         c: 'Grifinória',
         d: 'Sonserina',
         correct:'d'
     },{
         questao: 'Qual a função de Harry no quadribol?',
         a:'Líder de torcida',
         b:'Gandula',
         c:'Ele não participava do time',
         d: 'Apanhador',
         correct:'d'
     },{
         questao:'Qual a cor do cabelo de Ronald Weasley?',
         a:'Verde água',
         b:'Ruivo',
         c:'Ele não tem cabelo',
         d:'Preto e Branco',
         correct:'b'
     },{
        questao: 'Rúbeo Hagrid é?',
        a:'Meio-unicórnio',
        b:'Meio-cobra',
        c:'Meio-gigante',
        d:'Meio-dragão',
        correct:'c'
     },
];
 const quiz = document.getElementById("quiz");
 
 
 const respostaEls = document.querySelectorAll(".resposta");
 
 
 const questaoEl = document.getElementById("questao");
 
 
 const a_text = document.getElementById("a_text");
 
 
 const b_text = document.getElementById("b_text");
 
 
 const c_text = document.getElementById("c_text");
 
 
 const d_text = document.getElementById("d_text");
 
 
 const submitBtn = document.getElementById("submit");
 
 let currentQuiz = 0;
 
 
 let score = 0;
 
 
 loadQuiz();
 
    function loadQuiz() {
 
 
        deselectRespostas();
 
     const currentQuizData = quizData[currentQuiz];
 
 
    questaoEl.innerText = currentQuizData.questao;
 
 
    a_text.innerText = currentQuizData.a;
 
 
    b_text.innerText = currentQuizData.b;
 
 
    c_text.innerText = currentQuizData.c;
 
 
    d_text.innerText = currentQuizData.d;
 }
 
    function getSelected() {
 
        let resposta = undefined;
 
 
 
    respostaEls.forEach((respostaEl) => {
 
 
        if (respostaEl.checked) {
 
 
            resposta = respostaEl.id;
 
        }
 
     });
 
        return resposta;
    }
 
 function deselectRespostas() {
 
 
    respostaEls.forEach((respostaEl) => {
 
 
        respostaEl.checked = false;
 
    });
 
 }
 
 
submitBtn.addEventListener("click", () => {  
 
    const resposta = getSelected();
 
     if (resposta) {
 
         if (resposta === quizData[currentQuiz].correct) {
 
            score++;
        }
 
        currentQuiz++;
 
 
        if (currentQuiz < quizData.length) {
 
            loadQuiz();
 
            } else {
                quiz.innerHTML = `
 
 
                <h2>Você respondeu corretamente a ${score}/${quizData.length} questões.</h2>
 
                <button onclick="location.reload()">Reload</button>
 
 
            `;
 
 
        }
 
 
    }
 
 
 });
