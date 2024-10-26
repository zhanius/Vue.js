<template>
  <Header></Header>
  <div class="favorites">
    <h1 class="title">Favorites</h1>
    <div class="item" v-for="user of users">
      <img src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg">
      <h1>{{user}}</h1>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {Header},
  data(){
    return{
      users: '',
    }
  },
  mounted() {
    const email = localStorage.getItem("email");
    this.users= JSON.parse(localStorage.getItem(`${email}_reviews`));
  }
}
</script>

<style>
.favorites {
  width: 74%;
  min-height: 50vh;
  padding: 200px;
  background: linear-gradient(160deg, #f3be32 0%, #e48d21 47%, #915712 84%, #884f0f 100%);
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.item{
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #e39031;
  display: flex;
  flex-direction: row;
  align-items: center;
  img{
    width: 100px;
    border-radius: 50%;
    border: 1px solid #333333;
  }
  gap: 30px;
}


</style>