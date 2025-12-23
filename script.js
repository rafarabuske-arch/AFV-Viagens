function buscar() {
  const results = document.getElementById("results");
  results.innerHTML = `
    <div class="card">
      ✈️ <strong>LATAM</strong><br>
      💰 Dinheiro: R$ 1.850<br>
      🌟 Milhas: 38.000 + R$120<br>
      🏆 <strong>Melhor custo-benefício</strong><br>
      <a href="https://www.latam.com" target="_blank">Ver no site da companhia</a>
    </div>

    <div class="card">
      ✈️ <strong>GOL</strong><br>
      💰 Dinheiro: R$ 2.050<br>
      🌟 Milhas: 42.000 + R$95<br>
      ⭐ Melhor em dinheiro<br>
      <a href="https://www.voegol.com.br" target="_blank">Ver no site da companhia</a>
    </div>
  `;
}
