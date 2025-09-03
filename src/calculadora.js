function somarDoisNumeros(valor1, valor2) {
   const resultado = valor1 + valor2;
   return resultado;

}

function calcularMedia(valor1, valor2) {
   // 1. Somar os dois números
   const ResultadoSomaDeDoisNumeros = somarDoisNumeros(valor1, valor2);

   // 2. Dividir o resultado da soma por 2
   const MediaDeDoisValores = ResultadoSomaDeDoisNumeros / 2;

   // 3. Retornar a média
   return MediaDeDoisValores;
}

module.exports = {
   somarDoisNumeros,
   calcularMedia,
}