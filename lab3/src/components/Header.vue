<template>
  <div class="container">
    <div class="nav-bar" :class="{ open: menuOpen }">
      <h1>
        <router-link style="text-decoration: none !important;color: black" to="/reviews">Menu</router-link>
      </h1>
      <div class="nav-items">
        <div class="nav-list">
          <h2 @click="selectBlog('Adventure')" :class="{ active: selectedBlogName === 'Adventure' }">Adventure Blog</h2>
          <h2 @click="selectBlog('Nature')" :class="{ active: selectedBlogName === 'Nature' }">Nature Blog</h2>
          <h2 @click="selectBlog('Fashion')" :class="{ active: selectedBlogName === 'Fashion' }">Fashion Blog</h2>
          <h2 @click="selectBlog('Modern')" :class="{ active: selectedBlogName === 'Modern' }">Modern Blog</h2>
        </div>
        <div class="contacts">
          <h1>Contacts</h1>
          <h3>PHONE: +1(234)-23-45-22</h3>
          <h3>ADDRESS: Green st., Yalow park</h3>
          <h3>EMAIL: Yallow@park.info</h3>
        </div>
      </div>
    </div>

    <div class="userIcon-menu" v-show="userMenu" v-if="isLoggedIn() === true">
      <router-link to="/my-profile">My Profile</router-link>
      <router-link to="/favorites">Favorites</router-link>
      <router-link to="/authorization" @click="logOut()">Log out</router-link>
    </div>

    <div class="userIcon-menu" v-show="userMenu" v-else-if="isLoggedIn() === false">
      <router-link to="/authorization" @click="logOut()">Authorize</router-link>
    </div>

    <div class="overlay" v-show="menuOpen" @click="closeMenu"></div>

    <header>
      <button class="menu" @click="toggleMenu">
        <img src="https://icons.veryicon.com/png/o/miscellaneous/taobao-global-app/menu-149.png">
      </button>
      <div>
        <h1>New trips on Fall season! Full details on our Instagram accounts.</h1>
      </div>
      <button @click="toggleUserIcon">
        <img src="https://icons.veryicon.com/png/o/miscellaneous/forestry-in-yiliang/person-11.png">
      </button>
    </header>

  </div>
  <BlogList v-show="false" :blogName="selectedBlogName" />

</template>

<script>
import Profile from "@/components/Profile.vue";
import BlogList from "@/components/BlogList.vue";
import router from "@/router.js";

export default {
  components: { Profile, BlogList },
  data() {
    return {
      menuOpen: false,
      selectedBlogName: 'Adventure',
      userMenu: false,
    };
  },
  methods: {
    toggleUserIcon() {
      this.userMenu = !this.userMenu;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    selectBlog(blogName) {
      this.$emit('blog-selected', blogName);
      this.selectedBlogName = blogName;
      this.closeMenu();
    },
    async logOut() {
      localStorage.setItem("account", "gabajohn")
      localStorage.setItem("email", "")
      console.log(localStorage.getItem("account"))

    },
    isLoggedIn(){
      return localStorage.getItem("email") != "";
    }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
.userIcon-menu {
  font-family: "Montserrat", sans-serif;
  position: absolute;
  top: 89.5px;
  right: 10px;
  background-color: rgb(253, 224, 149);
  border: 1px solid #000;
  border-radius: 8px;
  padding: 10px;
  width: 150px;
  text-align: center;
  z-index: 1001;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.hidden {
  display: none;
}

.userIcon-menu a {
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-weight: bold;
  font-size: 18px;
}

.userIcon-menu a:hover {
  background-color: rgba(241, 126, 45, 0.5);
}
.overlay {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
}
.block{
  display: block;
}

.container {
  overflow-x: hidden;
  //width: 100%;
  //min-height: 100vh;
  //background-position: center;
  //background-image: url("@/assets/ruvim-miksanskiy-7XlCgdrENVU-unsplash.jpg");
  //background-size: cover;
  //background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  //gap: 30px;
}

header{
  position: absolute;
  background-color: rgba(255,255,255,0.45);
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1455px;

  button {
    border-radius: 100%;
    height: 58px;
    width: 60px;
    background-color: rgb(248, 166, 108);
    border: 1px solid dimgrey;

    img{
      width: 45px;
    }
  }

  div{
    background: linear-gradient(to top right, rgb(250, 166, 98), rgba(254, 252, 191));
    padding: 18px 340px;
    border-radius: 15px;
    h1{
      font-size: 30px;
      font-family: "Cookie", cursive;
    }
  }
}
.nav-bar{
  text-align: center;
  font-family: "Montserrat",sans-serif;
  font-weight: 100;
  position: fixed;
  z-index: 1000;
  left: -100%;
  transition: left 0.5s ease-in-out;
  background: linear-gradient(to top right, rgba(241, 112, 6), rgb(250, 248, 200));
  width: 25%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  .contacts{
    padding: 10px 10px 25px 10px;
    background-color: rgba(255, 255, 255, 0.4);
    line-height: 40px;
    border-radius: 10px;
  }
  .nav-items{
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-bottom: 50px;
  }
  .nav-list{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
    h2{
      font-size: 20px;
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.4);
      border-radius: 10px;
    }
    h2:hover{
      background-color: rgb(243, 242, 242);
    }
  }
}
.open{
  left: 0;
}

.nav-list h2.active {
  background-color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
}
</style>

