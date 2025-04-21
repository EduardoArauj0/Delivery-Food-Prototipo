function mostrarFormulario(tipo) {
    document.querySelectorAll('.formulario').forEach(f => f.classList.remove('ativo'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('ativo'));
    document.getElementById(`form-${tipo}`).classList.add('ativo');
    document.querySelector(`.tab[onclick*="${tipo}"]`).classList.add('ativo');
  }

  const params = new URLSearchParams(window.location.search);
  const tab = params.get('tab') || 'login';
  mostrarFormulario(tab);