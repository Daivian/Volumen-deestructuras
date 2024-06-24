const ctx = document.getElementById('volumeChart').getContext('2d');
let volumeChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Volumen'],
        datasets: [{
            label: 'Volumen (unidades cúbicas)',
            data: [0],
            backgroundColor: ['rgba(255, 152, 0, 0.5)'],
            borderColor: ['rgba(255, 152, 0, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function calculateVolume() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const volume = length * width * height;

    document.getElementById('result').innerText = `Volumen: ${volume.toFixed(2)} unidades cúbicas`;
    updateChart(volume);
}

function updateChart(volume) {
    volumeChart.data.datasets[0].data[0] = volume;
    volumeChart.update();
}

function resetForm() {
    document.getElementById('volumeForm').reset();
    document.getElementById('result').innerText = '';
    updateChart(0);
}
