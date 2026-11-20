// =========================================
// JAVASCRIPT - SANTA CRUZ DE LA SIERRA
// =========================================

document.addEventListener('DOMContentLoaded', () => {
  const btnComidas = document.getElementById('btnComidas');
  const listaComidas = document.getElementById('listaComidas');

  // Verifica que los elementos existan antes de agregar el evento
  if (!btnComidas || !listaComidas) {
    return;
  }

  // Mostrar u ocultar la lista de comidas típicas
  btnComidas.addEventListener('click', () => {
    if (listaComidas.classList.contains('hidden')) {
      listaComidas.classList.remove('hidden');
      btnComidas.textContent = 'Ocultar Comidas Típicas 🔼';
    } else {
      listaComidas.classList.add('hidden');
      btnComidas.textContent = 'Ver Comidas Típicas 🍲';
    }
  });
});
