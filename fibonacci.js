// Genera la secuencia de Fibonacci hasta el índice 'count' (incluyéndolo)
// Usa BigInt para poder manejar índices grandes sin overflow.
function generateFibonacci(count) {
  // 1) Validación: debe ser entero ≥ 0
  if (!Number.isInteger(count) || count < 0) {
    throw new Error('El número debe ser un entero ≥ 0');
  }

  // 2) Casos base
  if (count === 0) return [0n];         // Solo F(0)
  if (count === 1) return [0n, 1n];     // F(0) y F(1)

  // 3) Construcción de la secuencia
  const sequence = [0n, 1n];
  for (let i = 2; i <= count; i++) {
    // Suma de los dos valores anteriores
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// Toma el valor del input, valida, genera la secuencia y la muestra en el DOM
function calcularFibonacci() {
  try {
    const input = document.getElementById('indicesInput').value.trim();
    if (!input) {
      throw new Error('Por favor ingresa un número');
    }

    const maxIndex = parseInt(input, 10);
    if (isNaN(maxIndex) || maxIndex < 0) {
      throw new Error('Debes ingresar un número entero positivo');
    }

    // 4) Generar y limpiar resultados previos
    const sequence = generateFibonacci(maxIndex);
    const list = document.getElementById('fibonacciSequence');
    list.innerHTML = '';

    // 5) Renderizar cada término como <li>
    sequence.forEach((value, index) => {
      const li = document.createElement('li');
      li.textContent = `F(${index}) = ${value.toString()}`;
      list.appendChild(li);
    });

    // 6) Opcional: desplaza al inicio del contenedor
    document.querySelector('.results-container').scrollTo(0, 0);

  } catch (error) {
    alert(error.message);  // Mostrar error al usuario
  }
}

// 7) Asociar los listeners
document.getElementById('calcBtn').addEventListener('click', calcularFibonacci);
document.getElementById('indicesInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    calcularFibonacci();
  }
});
