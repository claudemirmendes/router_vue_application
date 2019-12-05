<template>
<html lang="en">
  <head>
   <meta name="Clinica Dra caroline Lotife" content="sistema de controle de agenda">
  </head>
<body>
  <div class="imgcontainer">
    <img src="../assets/images.jpeg"  alt="logo" class="avatar">
  </div>
  <div class="container">
    <div>
      <label for="email"><b>Email</b></label>
      <input type="text" v-model="user.email" placeholder="Entre com seu email" name="email" id="email" required>
    </div>
    <div>
      <label for="password"><b>Senha</b></label>
      <input type="password" v-model="user.password" placeholder="Entre com sua senha"  id="password" name="password" required>
    </div>
    <button @click="tryLogin()" type="submit">Login</button>
  </div>
</body>
</html>
</template>

<style scoped>
  /* Bordered form */
form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

h2 {
    text-align: center;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>

<script>
import axios from 'axios';
import Swal from 'sweetalert2'

export default {
    data () {
         return {
           user:{
             email: '',
             password: '',
           }
         }
    },
    methods: {
      async tryLogin(){
        const user = this.user
        axios.post(`${this.$store.getters.url}public/users/login`,{
           email: user.email,
           password: user.password
        })
          .then( (response) => {
           if (response.data.message) {
             Swal.fire({title: 'Ops', text: response.data.message,icon: 'error', confirmButtonText: 'Fechar'
             })
           } else {
             this.$store.commit('change',response.data)
             this.$router.push('home')
           }
        })
        .catch(function (error) {
           Swal.fire({title: 'Ops', text: error,icon: 'error', confirmButtonText: 'Fechar'})
        });
      },
    }
}
</script>