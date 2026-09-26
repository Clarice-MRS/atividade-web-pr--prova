const noticiasParalelas = [
    {
        id: "1",
        manchete: "O gótico volta às tendências em 2026: como usar preto no verão",
        categoria: "Opinião",
        data: "28 set"
    },

    {
        id: "2",
        manchete: "Lançamento! Perapad 11: O que há de novo? Novas cores...",
        categoria: "Tecnologia",
        data: "13 set"
    },

    {
        id: "3",
        manchete: "Frankenstein avança em sua pesquisa sobre ressurreição; entenda",
        categoria: "Ciência",
        data: "01 set"
    }
]

const ultimasNoticias = [
    {
        imagem: "img/tomholland.jpg",
        categoria: "Cultura",
        manchete: "morre o ator Tom Holland, aos 30 anos de idade",
        autor: "Breno Santana",
        data: "21 set",
        tempo: "5 min"
    },

    {
        imagem: "img/relampagomcqueen.jpg",
        categoria: "Ciência",
        manchete: "Relâmpago Mcqueen descobre um novo combústivel.",
        autor: "Matheus Feitosa",
        data: "19 set",
        tempo: "8 min"
    },

    {
        imagem: "",
        categoria: "",
        manchete: "",
        autor: "",
        data: "",
        tempo: ""
    },

    {
        imagem: "i",
        categoria: "",
        manchete: "",
        autor: "",
        data: "",
        tempo: ""
    },

    {
        imagem: "i",
        categoria: "",
        manchete: "",
        autor: "",
        data: "",
        tempo: ""
    },

    {
        imagem: "i",
        categoria: "",
        manchete: "",
        autor: "",
        data: "",
        tempo: ""
    },

    {
        imagem: "imgs/gojonograjau.jpeg",
        categoria: "Cultura",
        manchete: "Descubra: Gojo está vivo e morando no Grajaú",
        autor: "Joyce Gomes",
        data: "01 agosto",
        tempo: "4 min"
    },
]

function criarNoticiasPararelas() {

    for(const noticiaPararela of noticiasParalelas) {

        const cardsPararelo = document.getElementById("grid-not-paralela");
        cardsPararelo.innerHTML += ` 
        <aside class="noticia-info"> 
            <h1 class="id">${noticiaPararela.id}</h1>
            <div class="conteudo-noticia">
                <h2 class="manchete">${noticiaPararela.manchete}</h2>
                <div class="informacoes">
                    <span class="categoria">${noticiaPararela.categoria} •</span>
                    <span class="data">${noticiaPararela.data}</span>
                </div>
            </div> 
        </aside>
    `;
    }    
}

criarNoticiasPararelas();
