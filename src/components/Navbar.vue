<template>
<div class="sidenav">
  <a @click="logout()" ><md-icon class="md-size-2x">exit_to_app</md-icon></a> <br>
  <router-link to="agenda"><md-icon class="md-size-2x">today</md-icon></router-link>
  <router-link to="pacientes" ><md-icon class="md-size-2x">face</md-icon></router-link>
</div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'navbar',
  methods: {
      logout() {
            Swal.fire({
               title: 'Deseja sair?',
               icon: 'question',
               confirmButtonText: 'Sim',
               showCancelButton: true,
               cancelButtonText: 'Não',
             }).then((result)=> {
               if (result.value) {
                 this.$store.commit('change',null)
                 this.$router.push('login')
               }
             })
      }
  }  
}
</script>

<style scoped>
/* The sidebar menu */
.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 17%; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
}

/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Style page content */
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>