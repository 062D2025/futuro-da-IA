const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:  "Um grupo de amigos decidiu criar um projeto para ajudar o meio ambiente no bairro. Qual é a melhor iniciativa para eles começarem a gerar impacto comunitário?",
        alternativas: [
            {
                texto: "Organizar um mutirão de reciclagem e criar uma horta comunitária na praça do bairro.",
afirmacao: "A união de pessoas em prol da natureza fortalece os laços da comunidade e transforma pequenos espaços em áreas verdes sustentáveis.",
            },
            {
                texto: "Esperar que a prefeitura resolva todos os problemas ambientais da região sem intervir.",
                afirmacao: "Embora o poder público tenha responsabilidades, a iniciativa jovem mobiliza a vizinhança e acelera transformações ecológicas urgentes."
            }
        ]
    },
    {
        enunciado: "Durante as férias, o grupo de amigos percebeu que a praia local estava cheia de resíduos plásticos. Como eles devem agir para resolver o problema de forma conscientizadora?",
        alternativas: [
            {
                texto: "Realizar uma limpeza na praia e produzir vídeos para as redes sociais ensinando a reduzir o uso de plástico.",
                afirmacao: "Usar a comunicação e a ação prática inspira outros jovens a adotarem hábitos mais limpos e protetores da vida marinha."
            },
            {
                texto: "Recolher o lixo sozinhos em segredo sem contar para ninguém sobre a situação do local.",
                afirmacao: "Apesar de ajudar na limpeza imediata, não conscientizar a comunidade impede que as pessoas mudem suas atitudes a longo prazo."
            }
        ]
    },
    {
        enunciado: "Para comemorar o aniversário do grupo, os amigos querem fazer uma festa, mas estão preocupados com o impacto ambiental dos descartáveis e do desperdício. Qual atitude eles devem tomar?",
        alternativas: [
            {
                texto: "Planejar uma festa 'lixo zero', usando pratos reutilizáveis, decoração biodegradável e separando os orgânicos para compostagem.",
                afirmacao: "Demonstrar que é possível celebrar sem agredir a natureza inspira um estilo de vida sustentável em todos os convidados."
            },
            {
                texto: "Usar copos e pratos plásticos descartáveis por ser mais prático, jogando tudo no lixo comum depois.",
                afirmacao: "Optar pela conveniência em vez da sustentabilidade gera resíduos que levarão séculos para se decompor no meio ambiente."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre a leitura...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
