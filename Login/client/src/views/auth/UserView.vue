<template>
  <div id="user">
    <div class="card card-body mt-8">
      <!--<h1 class="text-center">Programación en C</h1>-->
      <h1 class="text-center">Variables y operaciones</h1>
      <br>
      <h2>Concepto de variable</h2>
      <p class="texto-personalizado">Una variable es un espacio donde se almacena la información que el programa necesita o va a necesitar, además de ello, una variable permite recuperar esa información en cualquier momento.</p>
      <p><span style="font-weight: bold;">Nota:</span> Recordar que para un programa en el lenguaje C la declaración de variables es de las primeras cosas que se digita.</p>
      <p class="texto-personalizado">Antes de hablar de los tipos de variables que se suelen implementar a menudo, se debe de tener en cuenta que en el lenguaje de programación C el uso de una variable sin definir su valor dará como resultado un error de sintaxis, es decir, que no se puede hacer uso de una variable que no tenga definido el valor.</p>
      <h2>Tipos de variables</h2>
      <p class="texto-personalizado">Entre los tipos de variables se puede encontrar los siguientes tres grupos:</p>
      <p class="texto-personalizado"><span style="font-weight: bold;">1. Variables para valores numéricos:</span> Son variables a las que se les asignan valores pertenecientes a los números reales. Están divididas en dos tipos:</p>
      <ul>
        <li><p class="texto-personalizado">Varaibles para números enteros <span style="font-weight: bold">(int)</span></p></li>
        <li><p class="texto-personalizado">Varaibles para números decimales <span style="font-weight: bold">(float)</span></p></li>
        <li><p class="texto-personalizado">Varaibles para números decimales <span style="font-weight: bold">(double)</span></p></li>
      </ul>
      <p class="texto-personalizado"><span style="font-weight: bold;">2. Variables para valores tipo carácter:</span> Estas variables permiten guardar y asignarles carácteres, los cuales son símbolos como las letras del abecedario. Solo existe un tipo de esta variable y se representa con la palabra reservada <strong>(Char)</strong>.</p>
      <p><span style="font-weight: bold;">Nota:</span> Char solo permite la declaración de un carácter, más adelante se tratará la forma en la cual se puede definir una palabra <strong>(cadena de carácteres)</strong>.</p>
      <p class="texto-personalizado"><span style="font-weight: bold;">3. Variables para valores de tipo estado:</span> Una variable de este tipo es la que permite definirse su propio estado verdadero o falso <strong>(true/false)</strong>. Se representa con la palabra reservada <strong>(bool)</strong>.</p>
      <h2>Declaración de una variable</h2>
      <p class="texto-personalizado">Para declarar una variable se debe de tener en cuenta su estructura básica:</p>
      <p class="text-center"><span style="font-weight: bold;">Nombre_de_la_variable = Valor_de_la_variable</span></p>
      <p class="texto-personalizado">El nombre de la variable puede ser cualquiera y puede estar conformado por números y letras al mismo tiempo, pero no puede tener ninguna de las siguientes restricciones:</p>
      <ul>
        <li class="texto-personalizado">Empezar por un número.</li>
        <li class="texto-personalizado">Tener espacios.</li>
        <li class="texto-personalizado">Utilizar palabras reservadas.</li>
        <li class="texto-personalizado">Tener carácteres especiales como tildes, comas, etc.</li>
      </ul>
      <img class="centrada" src="/imagenes/Definir variables.PNG?url" alt="">
      <br> 
      <p class="texto-personalizado">El valor de la variable debe de ir asociado al tipo de variable que se declare.</p>
      <h2>Concepto de operación</h2>
      <p class="texto-personalizado">Un operador es un elemento que permite realizar acciones entre operandos <strong>(variables)</strong>.</p>
      <p><span style="font-weight: bold;">Nota:</span> El operador más importante que se usa es el de asignación, el cual se representa por el símbolo<strong>(=)</strong>.</p>
      <h2>Tipos de operadores</h2>
      <p class="texto-personalizado">Los tipos de operadores son seis según su función, los cuales son aritméticos, relacionales, de asignación, lógicos, de manejo de dirección y de Bits.</p>
      <p class="texto-personalizado"><span style="font-weight: bold;">1. Operadores aritméticos:</span> Son aquellos que se usan para realizar cálculos y operaciones con números reales. Entre los más comunes se pueden encontrar:</p>
      <img class="centrada" src="/imagenes/Operadores aritméticos.PNG?url" alt="">
      <br>
      <p><span style="font-weight: bold;">Nota:</span> Los operadores de incremento y decremento son más comunes en el uso de estructuras de repetición <strong>(ciclos)</strong>.</p>
      <p class="texto-personalizado"><span style="font-weight: bold;">2. Operadores relacionales:</span> También llamados operadores lógicos y de comparación, son utilizados para validar la veracidad o falsedad de las propuestas de relación. Las expresiones relacionales <strong>(operadores relacionales)</strong> aceptan diversos tipos de argumentos y su respuesta siempre es verdadero <strong>(true)</strong> o falso <strong>(false)</strong>, es decir, un resultado booleano.</p>
      <img class="centrada" src="/imagenes/Oper relacionales.PNG?url" alt="">
      <br>
      <p class="texto-personalizado"><span style="font-weight: bold;">3. Operadores de asignación:</span> Como su nombre lo dice estos operadores se usan para asignar un valor determinado a una variable. Los más comunes son:</p>
      <p><span style="font-weight: bold;">Nota:</span> Los operadores de asignación no deben tener espacios entre el medio y los últimos cuatro de la lista solo permiten el uso de variables del tipo entero <strong>(int)</strong>.</p>
      <p class="texto-personalizado"><span style="font-weight: bold;">4. Operadores lógicos:</span> Estos operadores son utilizados para hacer preguntas, en donde la respuesta es booleana, es decir, del tipo verdadero <strong>(true)</strong> y falso <strong>(false)</strong>. Existen solo tres tipos de estos operadores:</p>
      <img class="centrada" src="/imagenes/Oper lógicos.PNG?url" alt="">
      <br>
      <p><span style="font-weight: bold;">Nota:</span> Los operadores lógicos se suelen usar en estructuras de control <strong>(if else)</strong>.</p>
      <p class="texto-personalizado"><span style="font-weight: bold;">5. Operadores de manejo de dirección:</span> En C existen operadores específicos de dirección <strong>(punteros)</strong> y referencia, los cuales permiten obtener datos o dirigir alguna información a alguna parte.</p>
      <img class="centrada" src="/imagenes/Oper management.PNG?url" alt="">
      <br>
      <p><span style="font-weight: bold;">Nota:</span> Los operadores de manejo de dirección son utilizados cuando se imprime por pantalla algún dato, o en las estructuras de datos.</p>
      <p class="texto-personalizado"><span style="font-weight: bold;">6. Operadores de Bits:</span> Son operadores de movimiento a nivel de Bits, lo que significa que una cantidad determinada es convertida a su equivalente en Bits y luego se realiza el desplazamiento de dicho valor.</p>
      <img class="centrada" src="/imagenes/Oper bits.PNG?url" alt="">
      <br>
      <p><span style="font-weight: bold;">Nota:</span> Los operandos de este tipo de operadores tienen que ser del tipo entero <strong>(int)</strong>, esto debido a que el desplazamiento siempre dará como resultado un número entero.</p>
      <br>
      <h2>Video explicativo y demostrativo: Agregar cualquier video</h2>
      <br>
      <h3>Ejemplo 1:</h3>
      <p class="texto-personalizado">Hacer un programa que calcule el área de las siguientes figuras: un rectángulo que tiene dos lados de 12 cm y otros dos lados de 6 cm y el área de un triángulo de base 12 cm y altura 8 cm (no usar fórmula de Herón).</p>
      <br>
      <h3>Descomposición:</h3>
      <div class="options-container">
        <p class="texto-personalizado">De las siguientes palabras, ¿cuál es la que define lo que el problema está solicitando?</p>
        <div v-for="(option, index) in options" :key="index" class="form-check">
          <input
            class="form-check-input"
            type="radio"
            :id="`option${index}`"
            :value="option"
            v-model="selectedOption"
          >
          <label class="form-check-label" :for="`option${index}`">
            {{ option }}
          </label>
        </div>
      </div>

      <p class="texto-personalizado">Respuesta seleccionada: {{ selectedOption }}</p>
      <button @click="submitForm" class="btn btn-primary">Submit</button>
      <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
        {{ errorMessage }}
      </div>

      <div class="options-container">
        <p class="texto-personalizado">Selecciona cuántos subproblemas hay en este problema y cuáles son:</p>
        <div v-for="(option, index) in optionsa" :key="index" class="form-check">
          <input
            class="form-check-input"
            type="radio"
            :id="`option${index}`"
            :value="option"
            v-model="selectedOptiona"
          >
          <label class="form-check-label" :for="`option${index}`">
            {{ option }}
          </label>
        </div>
      </div>

      <p class="texto-personalizado">Respuesta seleccionada: {{ selectedOptiona }}</p>
      <button @click="submitForma" class="btn btn-primary">Submit</button>
      <div v-if="errorMessagea" class="alert alert-danger mt-3" role="alert">
        {{ errorMessagea }}
      </div>
    <div>
    <br> 
    <p class="texto-personalizado">Organiza como crees que sería la jerarquia de los subproblemas: </p>
    <div 
      v-for="(item, index) in items"
      :key="index"
      class="draggable-container"
      :class="{ dragging: index === dragIndex }"
      @mousedown="startDrag(index, $event)"
      @touchstart="startDrag(index, $event)"
    >
      <div class="list" :style="{
        transition: index === dragIndex ? 'none' : dragTransition,
        position: index === dragIndex ? 'fixed' : 'relative',
        boxShadow: index === dragIndex ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none'}">
        {{ item }}
      </div>
    </div>
    <button @click="submitOrder" class="btn btn-primary">Enviar Orden</button>
    <div v-if="errorMessageDrag" class="alert alert-danger mt-3" role="alert">
        {{ errorMessageDrag }}
      </div>
  </div>
  <br>
  <h3>Algoritmo:</h3>
  <br>
  <h3>Abstracción:</h3>
    <div>
      <p class="texto-personalizado">Codifica tu algoritmo al lenguaje C de la forma en la que creas que es correcto:</p>
        <textarea v-model="codigo" placeholder="Escribe aquí" style="width: 100%; height: 200px;"></textarea>
        <button @click="validarTexto" class="btn btn-primary">Validar Texto</button>
        <p v-if="respuestaServidor" :class="{ 'mensaje-error': !esTextoValido }">
          {{ respuestaServidor }}
        </p>
    </div>
  <br>
  <h3>Generalización:</h3>
  <br>
  <h3>Ejemplo 2:</h3>
  <p class="texto-personalizado">Hacer un programa que calcule el área de las siguientes figuras: un rectángulo que tiene dos lados de 12 cm y otros dos lados de 6 cm y el área de un triángulo de base 12 cm y altura 8 cm (no usar fórmula de Herón).</p>
  <h3>Descomposición:</h3>
  <p class="texto-personalizado">Resuelva el siguiente crucigrama con pistas y encuentra la palabra que define lo que el problema está solicitando</p>
  <div class="crossword-board, crossword-container">
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="crossword-row">
      <div v-for="(cell, colIndex) in row" :key="colIndex" :class="['crossword-cell', { 'editable-cell': cell.editable }, { 'default-value': cell.defaultValue }]">
        <input
          v-if="cell.editable"
          type="text"
          v-model="cell.value"
          maxlength="1"
          @input="handleInput(rowIndex, colIndex)"
          class="bold-text"
        />
        <div v-else class="crossword-cell-text">{{ cell.value || ' ' }}</div>
      </div>
    </div>
  </div>
  <h3>Pistas:</h3>
    <ul>
      <p class="texto-personalizado">Palabras horizontales:</p>
      <li v-for="(clue, index) in cluesh" :key="index" class="texto-personalizado">
        <p><strong>{{ index + 1 }}.</strong> {{ clue }}</p>
      </li>
    </ul>
    <ul>
      <p class="texto-personalizado">Palabras verticales:</p>
      <li v-for="(clue, index) in cluesv" :key="index" class="texto-personalizado">
        <p><strong>{{ index + 1 }}.</strong> {{ clue }}</p>
      </li>
    </ul>
    <button @click="validarPalabra" class="btn btn-primary">Validar crucigrama</button>
    <P>{{ validationMessage }}</P>
  <p class="texto-personalizado">Añade el número de subproblemas que tiene el problema usando el acumulador:</p>
  <div>
    <h4>Acumulador</h4>
    <p class="texto-personalizado">Valor acumulado: {{ acumulado }}</p>
    <button @click="incrementar">Incrementar</button>
    <button @click="resetear">Resetear</button>
  </div>
  <br>
  <button @click="submitOrder" class="btn btn-primary">Enviar acumulación</button>
  <br>
  <p class="texto-personalizado">Completa la linea de prioridad definiendo el orden correcto</p>
  <div id="timeline">
    <div v-for="(stage, index) in stages" :key="stage.id"
       class="stage, list"
       :draggable="true"
       @dragstart="dragStart(stage, index)"
       @dragover.prevent
       @drop="dropLine(index)">
    {{ stage.name }}
    </div>
   <div class="line"></div>
  </div>
  <br>
  <button @click="submitOrder" class="btn btn-primary">Enviar Orden</button>
  <br>
  <h3>Algoritmo:</h3>
  <br>
  <h3>Abstracción:</h3>
  <div>
      <p class="texto-personalizado">Codifica tu algoritmo al lenguaje C de la forma en la que creas que es correcto:</p>
        <textarea v-model="codigo" placeholder="Escribe aquí" style="width: 100%; height: 200px;"></textarea>
        <button @click="validarTexto" class="btn btn-primary">Validar Texto</button>
        <p v-if="respuestaServidor" :class="{ 'mensaje-error': !esTextoValido }">
          {{ respuestaServidor }}
        </p>
    </div>
  <br>
  <h3>Generalización:</h3>
  <br>
</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      options: ["consultar", "hallar", "calcular", "plantear"],
      optionsa: ["3: calcular el área de un rectangulo, calcular el área de un trapecio y calcular el área de un cuadrado", 
                "1: calcular el área de un rectángulo", 
                "2: calcular el área de un rectángulo y un trapecio", 
                "2: calcular el área de un rectángulo y un triángulo"],
      items: ["hallar el área de un triángulo", "hallar el área de un rectángulo", "Fin"],
      validOrder: ["hallar el área de un rectángulo", "hallar el área de un triángulo", "Fin"],
      selectedOption: null,
      selectedOptiona: null,
      errorMessage: null,
      errorMessagea: null,
      errorMessageDrag: null,
      dragging: false,
      dragIndex: null,
      initialPosition: { x: 0, y: 0 },
      offset: { x: 0, y: 0 },
      dragTransition: "none", 
      textoParaValidar: '',
      respuestaServidor: '',
      codigo: '',
      esTextoValido: false,
      acumulado: 0,
      textoEsperado: `#include <stdio.h>
int main(){
float Largo = 12.0;
float Ancho = 6.0;
return 0;
}`,   
      board: [
        [{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '2', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false }],
        [{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: true },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false }],
        [{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: true },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false }],
        [{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: true },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false }],
        [{ value: '1', editable: false },{ value: '', editable: true },{ value: '', editable: true },{ value: '', editable: true },{ value: '', editable: true },{ value: '', editable: true },{ value: '', editable: false },{ value: '', editable: false }],
        [{ value: '', editable: false },{ value: '', editable: true },{ value: '', editable: false },{ value: '', editable: true },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false }],
        [{ value: '', editable: false },{ value: '', editable: true },{ value: '', editable: false },{ value: '', editable: true },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false }],
        [{ value: '2', editable: false },{ value: '', editable: true },{ value: '', editable: true },{ value: '', editable: true },{ value: '', editable: true },{ value: '', editable: true },{ value: '', editable: true },{ value: '', editable: true }],
        [{ value: '', editable: false },{ value: '1', editable: false },{ value: '', editable: false },{ value: '', editable: true },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false }],
      ],

      cluesh: ["Lenguaje en el cual se desarrolló Java",
              "Elemento de programación en el cual se guarda algún dato",
      ],

      cluesv: ["Motor de videojuegos 3D que usa el lenguaje de programación C#",
              "Palabra que define el problema presentado",
      ],

      stages: [
        { id: 1, name: 'Hallar área trapecio' }, 
        { id: 2, name: 'hallar área triángulo' }, 
        { id: 3, name: 'hallar área rectángulo' },
        // Agrega más etapas según sea necesario
      ],

      timelineSpaces: [{id: 1, stage: null}, {id: 2, stage: null}, {id: 3, stage: null}],

    };
  },

  methods: {
    submitForm() {
      this.errorMessage = null;

      if (this.selectedOption === 'calcular') {
        // Si la respuesta es correcta, imprime el mensaje
        this.errorMessage='Respuesta correcta';
      } else {
        // La respuesta no es correcta, puedes mostrar un mensaje o tomar alguna acción
        this.errorMessage='Vuelve a intentarlo!';
      }
    },

    submitForma() {
      this.errorMessagea = null;

      if (this.selectedOptiona === '2: calcular el área de un rectángulo y un triángulo') {
        // Si la respuesta es correcta, imprime el mensaje
        this.errorMessagea='Respuesta correcta';
      } else {
        // La respuesta no es correcta, puedes mostrar un mensaje o tomar alguna acción
        this.errorMessagea='Vuelve a intentarlo!';
      }
    },

    startDrag(index, event) {
      // Inicia el proceso de arrastrar
      this.dragging = true;
      this.dragIndex = index;
      this.initialPosition = { x: event.clientX, y: event.clientY };
      this.offset = { x: 0, y: 0 };

      // Agrega los listeners de eventos
      window.addEventListener('mousemove', this.handleDrag);
      window.addEventListener('touchmove', this.handleDrag, { passive: false });
      window.addEventListener('mouseup', this.stopDrag);
      window.addEventListener('touchend', this.stopDrag);
    },
    handleDrag(event) {
      if (this.dragging) {
        // Calcula el desplazamiento
        this.offset = {
          x: event.clientX - this.initialPosition.x,
          y: event.clientY - this.initialPosition.y,
        };

        // Mueve el elemento arrastrado
        this.dragTransition = "transform 0.1s ease"; 
        this.items.splice(
          this.dragIndex + Math.round(this.offset.y / 50),
          0,
          this.items.splice(this.dragIndex, 1)[0]
        );
      }
    },
    stopDrag() {
      // Detiene el proceso de arrastrar
      this.dragging = false;
      this.dragIndex = null;

      this.dragTransition = "none";

      // Remueve los listeners de eventos
      window.removeEventListener('mousemove', this.handleDrag);
      window.removeEventListener('touchmove', this.handleDrag);
      window.removeEventListener('mouseup', this.stopDrag);
      window.removeEventListener('touchend', this.stopDrag);
    },

    submitOrder() {
      this.errorMessageDrag = null;
      // Verificar si el orden actual es igual al orden válido
      const currentOrder = this.items.map(item => item);
      const isValid = this.validOrder.every((item, index) => item === currentOrder[index]);

      if (isValid) {
        this.errorMessageDrag = 'Respuesta correcta';
      } else {
        this.errorMessageDrag = 'Vuelve a intentarlo';
      }
    },

    validarTexto() {
      console.log('Código a enviar al servidor:', this.codigo);
      // Realiza una solicitud POST al servidor con el código del text area
      axios.post('http://localhost:5000/api/auth/analyze-code', {
        codigo: this.codigo
      })
      .then(response => {
        // Maneja la respuesta del servidor
        this.respuestaServidor = response.data;
      })
      .catch(error => {
        // Maneja los errores de la solicitud
        console.error('Error al enviar código al servidor:', error);
        if (error.response && error.response.data && error.response.data.error) {
            const errorMessage = error.response.data.error;
            // Traducción de los mensajes de error
            const translatedError = this.translateError(errorMessage);
            this.respuestaServidor = translatedError;
        } else {
            this.respuestaServidor = 'Error al enviar el código al servidor';
        }
      });
    },

    translateError(errorMessage) {
    const errorTranslations = {
        'Error al compilar el código': 'Error al compilar el código',
        'GCC reportó un error': 'GCC reportó un error',
        'expected \',\' or \';\' before ...': 'se esperaba \',\' o \';\' antes de ...',
        // Agrega más traducciones según sea necesario
        "expected ')' before 'return'": "se esperaba ')' antes de 'return'",
        "expected ';' before '}' token": "se esperaba ';' antes del token '}'",
        "error: expected ':' or '...' before '}' token": "error: se esperaba ':' o '...' antes del token '}'"
    };

    // Verifica si el mensaje de error incluye el parte del comando gcc
    const gccCommand = 'Command failed: gcc -Wall -o output codigo.c';
    if (errorMessage.includes(gccCommand)) {
        errorMessage = errorMessage.replace(gccCommand, '');
    }

    // Busca el mensaje de error en el objeto de traducción
    for (const [key, value] of Object.entries(errorTranslations)) {
        if (errorMessage.includes(key)) {
            // Si el mensaje está en el objeto de traducción, lo devuelve
            return `${value}\n${errorMessage}`;
        }
    }
    // Si el mensaje de error no está en el objeto de traducción, devuelve el mensaje original
    return errorMessage;
    },

    initializeBoard() {
      // Inicializa el tablero con celdas vacías
      for (let i = 0; i < this.size.rows; i++) {
        const row = [];
        for (let j = 0; j < this.size.cols; j++) {
          row.push('');
        }
        this.board.push(row);
      }
    },

    dragStart(index) {
      // Guardar el índice del elemento arrastrado en el evento de arrastre
      event.dataTransfer.setData("text/plain", index);
    },

    drop(index) {
      // Obtener el índice del elemento soltado
      const droppedIndex = event.dataTransfer.getData("text/plain");
      // Reordenar las etapas
      const movedStage = this.stages.splice(droppedIndex, 1)[0];
      this.stages.splice(index, 0, movedStage);
    },

    dropLine(index) {
    const droppedIndex = event.dataTransfer.getData("text/plain");
    this.stages.splice(index, 0, this.stages.splice(droppedIndex, 1)[0]);
  },

  dropSpace(space) {
    const droppedIndex = event.dataTransfer.getData("text/plain");
    // Asignar la etapa al espacio correspondiente
    this.$set(this.timelineSpaces, space.id - 1, { id: space.id, stage: this.stages[droppedIndex] });
  },

  incrementar() {
      this.acumulado++; // Incrementa el valor acumulado en 1
    },
    resetear() {
      this.acumulado = 0; // Reinicia el valor acumulado a 0
  },
  
  },
};
</script>

<style scoped>
#user {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
}

.card {
  max-width: 50vw;
  margin: auto;
}

.options-container {
  text-align: left; 
  margin-top: 30px; 
}

.draggable-container {
  display: flex;
  align-items: center;
}

.list {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  cursor: grab;
  user-select: none;
  background-color: #f0f0f0;
  transform: translate(0, 0);
}

.dragging {
  cursor: grabbing;
  transform: translate(0, 0);
}

.mensaje-error {
  color: red;
}

.texto-personalizado {
    font-family: Arial, sans-serif; /* Tipo de letra */
    font-size: 18px; /* Tamaño de fuente */
    text-align: justify; /* Alineación justificada */
}

.crossword-board {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
}

.crossword-cell {
  width: 30px;
  height: 30px;
  border: 1px solid #11111196;
  display: flex;
  align-items: center;
  justify-content: center;
}

.crossword-cell input {
  width: 100%;
  height: 100%;
  border: none;
  text-align: center;
  background-color: rgb(112, 99, 231);
  font-weight: bold;
}

.crossword-cell-text {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.crossword-cell-text::selection {
  background-color: transparent;
}

.crossword-cell-text::-moz-selection {
  background-color: transparent;
}

.default-value {
  font-weight: bold; /* Establece el texto en negrita */
}

.crossword-container {
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  height: 40vh; /* Opcional: ajusta el alto del contenedor al 100% de la altura de la ventana del navegador */
}

#timeline {
  width: 100%;
  height: 200px;
  border: 1px solid #ccc;
  padding: 10px;
}

.stage {
  width: 100px;
  height: 50px;
  background-color: #f0f0f0;
  border: 1px solid #999;
  text-align: center;
  line-height: 50px;
  margin-bottom: 10px;
  cursor: pointer;
}

.line {
  flex: 1; /* La línea ocupa todo el espacio restante */
  height: 5px; /* Grosor de la línea */
  background-color: rgba(47, 24, 128, 0.589); /* Color de la línea */
}

.centrada {
    display: block;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 80%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
  }

</style>
