function verticesAleatorios(max, quant) {
  var numeros = [];
  while (numeros.length < quant) {
    e = Math.ceil(Math.random() * max);
    if (numeros.indexOf(e) == -1) {
      numeros.push(e);
    }
  }
  return numeros;
}

function insertWeightedUndirectedEdge(matriz, origem, destino, peso) {
  matriz[origem, destino] = peso;
  matriz[destino,origem]= peso;
}

function insertsDirectedUnweightedEdge(matriz, origem, destino) {
  matriz[origem,destino] = 1;
}

function insertsUnweightedUndirectedEdge(matriz, origem, destino) {
  matriz[origem,destino] = 1;
  matriz[destino, origem]= 1;
}

function insertsWeightedDirectedEdge(matriz, origem, destino, peso) {
  matriz[origem, destino] = peso;
}

function getOrigen(element) {
  return element[0];
}

function getDestiny(element) {
  return element[1];
}

function generate_dr_np(grafo, origem, destino, qnt){
  let vertices = verticesAleatorios(qnt, qnt)
  vertices.forEach((point)=>{
  origem = getOrigen(point);
  destino = getDestiny(point);
  insertsDirectedUnweightedEdge(grafo, origem, destino);
  })
}

function generate_nd_np(grafo, origem, destino, qnt){
  let vertices = verticesAleatorios(qnt, qnt)
  vertices.forEach((point)=>{
    origem = getOrigen(point);
    destino = getDestiny(point);
    insertsUnweightedUndirectedEdge(grafo, origem, destino);
  })
}

function generate_dr_pn(grafo, origem, destino, qnt){
  let vertices = verticesAleatorios(qnt, qnt)
  vertices.forEach((point)=>{
  origem = getOrigen(point);
  destino = getDestiny(point);
  insertsWeightedDirectedEdge(grafo, origem, destino);
  })
}

function generate_nd_pn(grafo, origem, destino, qnt){
  let vertices = verticesAleatorios(qnt, qnt)
  vertices.forEach((point)=>{
  origem = getOrigen(point);
  destino = getDestiny(point);
  insertWeightedUndirectedEdge(grafo, origem, destino);
  })
}