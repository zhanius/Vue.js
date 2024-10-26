<template>
  <div class="container">
    <div class="right-side">
      <h1 class="heading">Explore Our Reviews on Various Topics!</h1>

      <div class="authorization">
        <div class="sign-in">
          <h3><a class="stroke">Sign up</a> if you're not registered yet </h3>
          <div class="btn">
            <button @click.prevent="selectType('Sign up')" :class="{ active: selectedType === 'Sign up' }">
              Sign up
            </button>
          </div>
        </div>

        <div class="log-in">
          <h3><a class="stroke">Log in</a> if you're already registered</h3>
          <div class="btn">
            <button @click.prevent="selectType('Log in')" :class="{active: selectedType==='Log in'}">
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="left-side">
      <transition name="fade">
        <div v-if="selectedType === 'Log in'" class="login-form">
          <h2 class="login-heading">Log in</h2>
          <div class="inputs">
            <input type="text" placeholder="Enter email" v-model="email">
            <input type="password" placeholder="Enter password" v-model="password">
          </div>
          <div class="login-btn">
            <a href="#">Forgot password?</a>
            <button @click="logIn()">Log in</button>
          </div>
        </div>
      </transition>

      <transition name="fade">
        <div v-if="selectedType === 'Sign up'" class="signin-form">
          <h2 class="signin-heading">Sign up</h2>
          <div class="inputs">
            <input type="text" placeholder="Create email" v-model="email">
            <input type="password" placeholder="Create password" v-model="password">
            <input type="password" placeholder="Confirm password" v-model="confirmPassword">
            <p class="confirm" v-show="this.confirm===false">Passwords do not match</p>
          </div>
          <button class="signin-btn" @click="signUp()">Sign up</button>
        </div>
      </transition>
    </div>
  </div>
</template>



<script>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import router from "@/router.js";

export default {
  data() {
    return {
      selectedType: '',
      email: ref(''),  // Initialize with an empty string
      password: ref(''), // Initialize with an empty string
      confirmPassword: '',
      confirm: true
    };
  },
  methods: {
    selectType(type) {
      this.selectedType = type;
    },
    signUp() {
      if(this.confirmPassword === this.password) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((data) => {
            console.log("Successfully registered", data);
          })
          .catch((err) => {
            console.error(err.message);
          });
      localStorage.setItem('email', this.email);
      console.log(localStorage.getItem("account"), localStorage.getItem('email'));
      }else {
        this.confirm = false;
      }
    },
    logIn() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
          .then((data) => {
            console.log("Successfully logged in", data);
            router.push("/reviews");
          })
          .catch((err) => {
            console.error(err.message);
          });
      localStorage.setItem("account", this.email);
      localStorage.setItem('email', this.email);
      console.log(localStorage.getItem("account"), localStorage.getItem('email'));
    }
  }
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out; /* Increased duration to 0.8s */
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0; /* Fully transparent */
}

.confirm{
  color: darkred;
  align-self: center;
  font-size: 18px;
}
*{
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  color: beige;
  font-weight: 600;
}
.left-side {
  a{
    font-size: 15px;
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  a:hover{
    color: darkslateblue;
    text-decoration: underline;
  }
  .login-btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .inputs{
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }
  button{
    width: 400px;
    background-color: #D07D17;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
    padding: 8px 30px;
  }
  input{
    font-size: 17px;
    width: 400px;
    padding: 10px 30px;
    border-radius: 10px;
    background-color: #FFDB8F;
    color: black;
  }
  .login-heading, .signin-heading {
    font-size: 24px;
    font-weight: bold;
    color: black;
  }
  color: black;
  .login-form, .signin-form {
    position: absolute;
    border-radius: 10px;
    border: 1px solid black;
    gap: 50px;
    width: 500px;
    height: 450px;
    background-color: beige;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 50px 30px 90px 30px;
    button{

    }
  }
  .login-heading, .signin-heading {
    font-size: 24px;
    font-weight: bold;
  }
}
.right-side{
  display: flex;
  flex-direction: column;
  gap: 100px;
}
a{
  font-size: 20px;
  color: #884f0f;
  text-underline: none;
}
button.active {
  background-color: rgba(210, 105, 30, 0.89) !important;
  border: 2px solid black !important; ;
  transition: ease-out 0.5s;
}
.authorization{
  display: flex;
  gap:30px;
  justify-content: space-between;
  flex-direction: column;
}
.sign-in, .log-in{
  width: 350px;
  gap: 20px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  img{
    transform: rotate(180deg);
    width: 55px;
  }
  button{
    border: 1px solid black;
    border-radius: 10px;
    background-color: #FFDB8F;
    font-size: 19px;
    color: black;
    padding: 6px 20px;
  }
  .btn{
    display: flex;
    align-items: center;
    gap: 30px;
  }
  button:active{
    background-color: #f4f4cf;
    border: 2px solid black;
  }
}
.stroke, .heading{
  text-shadow:
      1px 1px 0px #000,
      -1px -1px 0px #000,
      1px -1px 0px #000,
      -1px 1px 0px #000;
}
.heading {
  font-size: 2.8rem;
  font-weight: bold;
  color: #edede3;
  width: 450px;

}

.container{
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
      160deg,
      #f3be32 0%,
      #e48d21 47%,
      #915712 84%,
      #884f0f 100%
  );
  padding: 120px 250px;
  display: flex;
  flex-direction: row;
  gap: 90px;

}
</style>