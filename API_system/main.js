function getLocation() {
    const output = document.getElementById('output');

    if (!navigator.geolocation) {
      output.textContent = "Geolocalização não é suportada neste navegador.";
      return;
    }

    output.textContent = "Obtendo localização...";

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        output.innerHTML = `
          Latitude: ${latitude.toFixed(6)}<br>
          Longitude: ${longitude.toFixed(6)}<br>
          <a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank">
            Ver no Google Maps
          </a>
        `;
      },
      (error) => {
        output.textContent = "Erro ao obter localização: " + error.message;
      }
    );
  }