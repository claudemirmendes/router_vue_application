<template>
  <div style="width:80%; margin: 18%;">
    <navbar/>
    <h1>Pacientes</h1>
    <div style="" class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text"><md-icon class="md-size-1x">contact_mail</md-icon></span>
      </div>
      <input v-model="patient.email" type="text" class="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon2">
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text"><md-icon class="md-size-1x">contacts</md-icon></span>
      </div>
      <input v-model="patient.name" type="text" class="form-control" placeholder="nome" aria-label="name" aria-describedby="basic-addon2">
    </div>
    <button type="submit" @click="CreatePatient()" class="btn btn-primary">Salvar</button>
  </div>
</template>

<style scoped>

</style>

<script>
import Navbar from "@/components/Navbar.vue";
import Swal from 'sweetalert2'
import axios from 'axios';
export default {
  data () {
      return {
          patient: {
              email: '',
              name: ''
          }
      }
  },
  components:{
      Navbar
  },
  methods: {
      CreatePatient() {
        const patient = this.patient
        axios({ method: 'post', url: `${this.$store.getters.url}private/patients/create`, 
         params:{email: patient.email, nome: patient.name},
         headers: {  Authorization: this.$store.getters.token } })
          .then((response) => {
              if(response.data.id){
               Swal.fire('Sucesso!','Paciente criado com sucesso!','success')
           }
        })
        .catch(function (error) {
            Swal.fire({title: 'Ops', text: error,icon: 'error', confirmButtonText: 'Fechar'})
        });
      }
  }
}
</script>