<script setup lang="ts">
import { onMounted } from 'vue'
import { useProgresoCurso } from '@/composables/useProgresoCurso'

const { curso, cargando, error, cargarCurso } = useProgresoCurso()

onMounted(() => {
  cargarCurso()
})

function formatearFecha(fecha: string | null) {
  if (!fecha) return '—'
  return new Date(fecha).toLocaleDateString('es-CO', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

function claseNota(nota: number | null) {
  if (nota === null || nota === undefined) return 'text-gray-500'
  if (nota >= 3) return 'text-green-600 font-bold'
  return 'text-red-600 font-bold'
}
</script>

<template>
  <div class="bg-gray-50 min-h-screen py-10 flex justify-center">
    <div class="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold mb-8 text-blue-900 text-center">
        📊 Progreso del Curso
      </h1>

      <div v-if="cargando">Cargando progreso...</div>
      <div v-else-if="error" class="text-red-600">{{ error }}</div>

      <div v-else-if="curso">
        <div v-for="(modulo, mi) in curso.modulos" :key="mi" class="mb-6 border rounded-md bg-white shadow">
          <details>
            <summary class="cursor-pointer p-3 bg-indigo-100 text-indigo-800 text-lg font-semibold">
              {{ modulo.nombre }}
            </summary>

            <!-- SUBMÓDULOS -->
            <div class="pl-6 mt-3">
              <div v-for="(submodulo, si) in modulo.submodulos" :key="si" class="mb-4">
                <details>
                  <summary class="cursor-pointer text-indigo-700 font-medium bg-indigo-50 px-3 py-2 rounded">
                    {{ submodulo.nombre }}
                  </summary>

                  <!-- EJERCICIOS -->
                  <div class="pl-6 mt-2">
                    <div v-for="(ejercicio, ei) in submodulo.ejercicios" :key="ei" class="mb-3">
                      <details>
                        <summary class="cursor-pointer text-gray-700 font-semibold bg-gray-100 px-2 py-1 rounded">
                          {{ ejercicio.nombre }}
                        </summary>

                        <!-- CATEGORÍAS -->
                        <div class="pl-6 mt-2">
                          <div v-for="(categoria, catNombre) in ejercicio.categorias" :key="catNombre" class="mb-4">
                            <details>
                              <summary class="cursor-pointer text-gray-800 bg-white rounded px-2 py-1 border">
                                {{ String(catNombre).toUpperCase() }} –
                                <span :class="claseNota(categoria.nota)">
                                  Nota: {{ categoria.nota?.toFixed(2) ?? '—' }}
                                </span>
                                –
                                Último intento: {{ formatearFecha(categoria.ultimo_intento) }}
                              </summary>

                              <!-- TABLA -->
                              <div class="pl-6 mt-3">
                                <table class="w-full table-auto border-collapse text-sm rounded overflow-hidden shadow-sm">
                                  <thead class="bg-gray-200 text-gray-700">
                                    <tr>
                                      <th class="p-2 border text-left">Subejercicio</th>
                                      <th class="p-2 border text-center">Nota</th>
                                      <th class="p-2 border text-center">Intentos restantes</th>
                                      <th class="p-2 border text-center">Último intento</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr
                                      v-for="(sub, idx) in categoria.subejercicios"
                                      :key="idx"
                                      class="bg-white even:bg-gray-50"
                                    >
                                      <td class="p-2 border">{{ sub.nombre }}</td>
                                      <td class="p-2 border text-center" :class="claseNota(sub.nota)">{{ sub.nota }}</td>
                                      <td class="p-2 border text-center">{{ sub.intentos_restantes }}</td>
                                      <td class="p-2 border text-center">{{ formatearFecha(sub.ultimo_intento) }}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </details>
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>

