<template>
  <div class="container">
    <Header />
    <MainProfile
        :name="name"
        :age="age"
        :country="country"
        :lastActivity="lastActivity"
        :profileImage="profileImage"
        :ratings="ratings"
    />
  </div>
</template>

<script>
import MainProfile from "@/components/MainProfile.vue";
import Header from "@/components/Header.vue";

export default {
  components: { Header, MainProfile },
  mounted() {
    const log = localStorage.getItem("account");
    if(log === "gabajohn"){
      this.$router.push("/reviews");
    }
  },
  data() {
    return {
      name: '',
      age: 0,
      country: '',
      lastActivity: '',
      profileImage: 'https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg',
      ratings: 0,
    };
  },
  created() {
    const email = localStorage.getItem('email');
    const savedProfile = JSON.parse(localStorage.getItem(email));
    console.log(email, savedProfile);
    if (savedProfile) {
      Object.assign(this, savedProfile);
    }
  },
  watch: {
    $route(to, from) {
      if (from.name === 'UpdateInfo') {
        const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (savedProfile) {
          Object.assign(this, savedProfile);
        }
      }
    }
  }
}
</script>

<style scoped>
.container {
  background: linear-gradient(160deg, #f3be32 0%, #e48d21 47%, #915712 84%, #884f0f 100%);
  width: 100%;
  min-height: 100vh;

}
</style>