<template>
  <div class="cuerpo">
    <form>
      <input type="text" name="Nombre" id="NombreID">
      <input type="text" name="Origen" id="OrigenID">
      <input type="text" name="HabilidadEspecial" id="HabilidadEspecialID">
      <input type="text" name="Aliados" id="AliadosID">
      <input type="checkbox" name="Mision" id="MisionID">
    </form>
      
</div>
</template>

<script>
import {defineComponent} from 'vue';
    export default defineComponent({
        name: 'ArcaneComponent',

        data(){
          let listaPersonajes = [];

        },
        methods:{
          pillarInfo(){

          }
        }
    })

</script>

<style scoped>

</style>
