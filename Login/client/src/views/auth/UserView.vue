<template>
  <div id="user">
    <div class="card card-body mt-8">
      <h1 class="text-center">Programación en C</h1>
      <h2>Variables y operaciones:</h2>
      <h3>Ejercicio 1:</h3>
      <p>Hacer un programa que calcule el área de las siguientes figuras: un rectángulo que tiene dos lados de 12 cm y otros dos lados de 6 cm y el área de un triángulo de base 12 cm y altura 8 cm (no usar fórmula de Herón).</p>
      <h3>Descomposición:</h3>
      <div class="options-container">
        <p>De las siguientes palabras, ¿cuál es la que define lo que el problema está solicitando?</p>
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

      <p>Respuesta seleccionada: {{ selectedOption }}</p>
      <button @click="submitForm" class="btn btn-primary">Submit</button>
      <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ["consultar", "hallar", "calcular", "plantear"],
      selectedOption: null,
      errorMessage: null,
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
  },
};
</script>

<style>
/* Agrega estilos según sea necesario */
</style>


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
  text-align: left; /* Centrar las opciones horizontalmente */
  margin-top: 30px; /* Espacio superior entre el texto y las opciones */
}
</style>
