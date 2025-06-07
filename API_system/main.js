function getLocation() {
  const output = document.getElementById('output');

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;

      output.innerHTML = `
        <a href="https://www.google.com/maps?q=${latitude},${longitude}" 
           target="_blank" rel="noopener noreferrer" class="link-location">
          Analisar Localização
        </a>
      `;
    },
    (error) => {
      output.textContent = 'Não foi possível obter a localização.';
    }
  );
}
