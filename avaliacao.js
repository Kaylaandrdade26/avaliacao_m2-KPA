
const catalogo = [
  { id: 1, titulo: "Matrix", ano: 1999, nota: 8.7, genero: "Ficção Científica" },
  { id: 2, titulo: "O Poderoso Chefão", ano: 1972, nota: 9.2, genero: "Drama" },
  { id: 3, titulo: "A Origem", ano: 2010, nota: 8.8, genero: "Ficção Científica" },
  { id: 4, titulo: "Interestelar", ano: 2014, nota: 8.6, genero: "Ficção Científica" },
  { id: 5, titulo: "Pulp Fiction", ano: 1994, nota: 8.9, genero: "Crime" },
];



// exercicio 01
/*
const nomeCatalogo = "CineTech";


totalFilmes = filmes.length;


console.log ("o total de filmes é: " + totalFilmes);




// exercicio 02


 function classificarNota (filmes) {
        let = "excelente";
    if (notaFilme >=9 ){
        return "excelente";
    }
    else if (notaFilme >=8 || 8.9){
        return "Muito Bom";
 };
 };


console.log(filmes);
*\


// Exercício 03

const listarFilmesDeGenero = (genero) => {
  return catalogo.filter(filme => filme.genero === genero);
};

const gerarListaDeTitulos = (filmes) => {
 return filmes.map(filme => filme.titulo);
};

const gerarRelatorioDeFilmes = (anoMinimo) => {
  return catalogo
    .filter(filme => filme.ano >= anoMinimo)
    .map(filme => filme.titulo);
};

console.log(listarFilmesDeGenero("Ficção Científica"));
console.log(gerarListaDeTitulos(catalogo));
console.log(gerarRelatorioDeFilmes(2000));
*/
// Exercício 04

/*const filmesClassicos = filmes.filter(filme => filme.ano < 2000);
console.log("Filmes Clássicos:", filmesClassicos)
*/

// Exercício 05

/*const titulosFilmes = filmes.map(filme => filme.titulo);
console.log("Títulos dos Filmes:", titulosFilmes);
*/

// Exercício 6
/*const ficcaoCientificaExcelentes = filmes.filter(
  filme => filme.genero === "Ficção Científica" && filme.nota >= 8.5
);
console.log("Ficção Científica Excelentes:", ficcaoCientificaExcelentes);
*/

// Exercício 07
/*const titulosDrama = filmes
  .filter(filme => filme.genero === "Drama")
  .map(filme => filme.titulo);

console.log("Títulos de Drama:", titulosDrama);
*/

// Exercício 08
/*function existeFilmeDoGenero(genero) {
  return filmes.some(filme => filme.genero === genero);
}

console.log("Existe filme de Ação?", existeFilmeDoGenero("Ação"));
console.log("Existe filme de Drama?", existeFilmeDoGenero("Drama"));
*/


// Exercício 09

/*function buscarEnderecoPorCEP(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => console.log("Endereço encontrado:", data))
    .catch(error => console.error("Erro ao buscar o CEP:", error));
}
*/


//
// Exercício 10
/*function encontrarFilmePorId(id) {
  return filmes.find(filme => filme.id === id);
}

console.log("Filme com ID 3:", encontrarFilmePorId(3));
*/
/*function contarFilmesPorGenero(filmes) {
  return filmes.reduce((acumulador, filme) => {
    // se o gênero já existe, soma +1, senão inicia em 1
    acumulador[filme.genero] = (acumulador[filme.genero] || 0) + 1;
    return acumulador;
  }, {});
}

const relatorioGeneros = contarFilmesPorGenero(filmes);
console.log("Relatório de Gêneros:", relatorioGeneros);*/