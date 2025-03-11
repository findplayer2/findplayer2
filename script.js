function flipCoin() {
    const coinResult = document.getElementById('coin-result');
    const result = Math.random() > 0.5 ? 'Heads' : 'Tails';
    coinResult.innerHTML = `The coin landed on: <strong>${result}</strong>`;
}
