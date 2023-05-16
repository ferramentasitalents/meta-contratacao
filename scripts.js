function calculateMeta() {
  const numContratacoes = parseFloat(document.getElementById("num-contratacoes").value);
  const metaContratacoes = parseFloat(document.getElementById("meta-contratacoes").value);
  const metaPercent = (numContratacoes / metaContratacoes) * 100;
  document.getElementById("result").innerHTML = `Meta de Contratação: ${metaPercent.toFixed(2)}%`;
}

