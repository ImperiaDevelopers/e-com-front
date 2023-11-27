<template>
  <div class="wrapper h-screen">
    <div class="container2">
      <div class="container">
        <h1>Welcome</h1>

        <form class="form" @submit.prevent="handleSubmit">
          <p v-if="error" class="error-message">{{ error }}</p>
          <br />
          <input type="text" placeholder="+998-91-234-56-78" v-model="phone" />
          <button type="submit" id="login-button">Login</button>
          <a href="/otp-">31231</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const phone = ref("");
const error = ref(null);

const handleSubmit = () => {
  if (phone.value.length !== 13) {
    error.value = "Phone number must be 13 characters long";
  } else {
    error.value = null;
    console.log("Phone Number:", phone.value);
  }
};
</script>
<style lang="scss">
$prim: #09aae0;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-weight: 300;
}

body {
  font-family: "Source Sans Pro", sans-serif;
  color: white;
  font-weight: 300;
}
.error-message {
  color: red;
  margin-top: 5px;
}
.wrapper {
  background: #134e9b;
  background: -webkit-linear-gradient(top left, #134e9b 0%, #09aae0 100%);
  background: -moz-linear-gradient(top left, #134e9b 0%, #09aae0 100%);
  background: -o-linear-gradient(top left, #134e9b 0%, #09aae0 100%);
  background: linear-gradient(to bottom right, #134e9b 0%, #09aae0 100%);

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &.form-success {
    .container {
      h1 {
        transform: translateY(85px);
      }
    }
  }
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 80px 0;
  height: 400px;
  text-align: center;

  h1 {
    font-size: 40px;
    transition-duration: 1s;
    transition-timing-function: ease-in-put;
    font-weight: 200;
  }
}
.container2 {
  background: #000;
  width: 30%;
  border-radius: 2%;
}
form {
  padding: 20px 0;
  position: relative;
  z-index: 2;

  input {
    display: block;
    appearance: none;
    outline: 0;
    border: 1px solid fade(white, 40%);
    background-color: fade(white, 20%);
    width: 250px;

    border-radius: 3px;
    padding: 10px 15px;
    margin: 0 auto 10px auto;
    display: block;
    text-align: center;
    font-size: 18px;

    color: white;

    transition-duration: 0.25s;
    font-weight: 300;

    &:hover {
      background-color: fade(white, 40%);
    }

    &:focus {
      background-color: white;
      width: 300px;

      color: $prim;
    }
  }

  button {
    appearance: none;
    outline: 0;
    background-color: white;
    border: 0;
    padding: 10px 15px;
    color: $prim;
    border-radius: 3px;
    width: 250px;
    cursor: pointer;
    font-size: 18px;
    transition-duration: 0.25s;

    &:hover {
      background-color: rgb(245, 247, 249);
    }
  }
}

@-webkit-keyframes square {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-700px) rotate(600deg);
  }
}
@keyframes square {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-700px) rotate(600deg);
  }
}
</style>
