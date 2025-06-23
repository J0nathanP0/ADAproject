/**
 * Genera una secuencia de Fibonacci hasta el índice especificado.
 * @param {number} count - El índice máximo hasta el cual generar la secuencia (debe ser un entero ≥ 0).
 * @returns {bigint[]} Un array conteniendo la secuencia de Fibonacci hasta el índice especificado.
 * @throws {Error} Si el parámetro no es un entero no negativo.
 */
function generateFibonacci(count) {
  // 1) Validación del parámetro de entrada
  if (!Number.isInteger(count) || count < 0) {
    throw new Error('El número debe ser un entero ≥ 0');
  }

  // 2) Casos base de la secuencia de Fibonacci
  if (count === 0) return [0n];       
  if (count === 1) return [0n, 1n];    

  const sequence = [0n, 1n];
  for (let i = 2; i <= count; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  
  return sequence;
}

/**
 * Función principal que calcula y muestra la secuencia de Fibonacci en la interfaz.
 * Obtiene el valor de entrada del usuario, valida, genera la secuencia y la muestra.
 */
function calcularFibonacci() {
  try {
    // 1) Obtener y validar la entrada del usuario
    const input = document.getElementById('indicesInput').value.trim();
    if (!input) {
      throw new Error('Por favor ingresa un número');
    }

    // 2) Convertir a número entero y validar
    const maxIndex = parseInt(input, 10);
    if (isNaN(maxIndex) || maxIndex < 0) {
      throw new Error('Debes ingresar un número entero positivo');
    }

    // 3) Generar la secuencia de Fibonacci
    const sequence = generateFibonacci(maxIndex);
    
    // 4) Mostrar los resultados en la lista HTML
    const list = document.getElementById('fibonacciSequence');
    list.innerHTML = ''; // Limpiar resultados anteriores

    // Crear un elemento <li> para cada número en la secuencia
    sequence.forEach((value, index) => {
      const li = document.createElement('li');
      li.textContent = `F(${index}) = ${value.toString()}`;
      list.appendChild(li);
    });

    document.querySelector('.results-container').scrollTo(0, 0);

  } catch (error) {
    alert(error.message); 
  }
}

// Event Listeners para manejar la interacción del usuario:

document.getElementById('calcBtn').addEventListener('click', calcularFibonacci);
document.getElementById('indicesInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    calcularFibonacci();
  }
});