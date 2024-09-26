<template>
  <div class="container">
    <div class="nav-bar">
      <h1>Menu</h1>
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

    <div class="overlay" @click="closeMenu"></div>

    <header>
      <button class="menu" @click="toggleMenu()">
        <img src="https://icons.veryicon.com/png/o/miscellaneous/taobao-global-app/menu-149.png">
      </button>
      <div>
        <h1>New trips on Fall season! Full details on our Instagram accounts.</h1>
      </div>
      <button>
        <img src="https://icons.veryicon.com/png/o/miscellaneous/forestry-in-yiliang/person-11.png">
      </button>
    </header>

    <Blog :blogName="selectedBlogName"></Blog>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  .overlay{
    position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: none;
    z-index: 999;
  }
  .block{
    display: block;
  }
  .container {
    width: 100%;
    min-height: 100vh;
    background-position: center;
    background-image: url("./assets/ruvim-miksanskiy-7XlCgdrENVU-unsplash.jpg");
    //background-size: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  header{
    background-color: rgba(255,255,255,0.45);
    padding: 10px 40px 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
    width: 100%;
    max-width: 1430px;

    button {
      border-radius: 100%;
      height: 52px;
      background-color: rgba(241, 126, 45, 0.61);
      border: 1px solid dimgrey;
      img{
        width: 40px;
      }
    }
    div{
      background: linear-gradient(to top right, rgba(241, 112, 6, 0.4), rgba(254, 252, 191, 0.4));
    padding: 0px 340px;
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
      border-radius: 10px;
    }
    .nav-items{
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 50px;
    }
    .nav-list{
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

<script>
import Blog from "@/components/Blog.vue";

export default {
  components: { Blog },
  data() {
    return {
      menuOpen: false,
      selectedBlogName: 'Adventure',
      activeBlog: 'Adventure',
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      this.updateMenuState();
    },
    closeMenu() {
      this.menuOpen = false;
      this.updateMenuState();
    },
    updateMenuState() {
      const navBar = document.querySelector(".nav-bar");
      const overlay = document.querySelector(".overlay");

      if (this.menuOpen) {
        navBar.classList.add("open");
        overlay.classList.add("block");
      } else {
        navBar.classList.remove("open");
        overlay.classList.remove("block");
      }
    },
    selectBlog(blogName) {
      this.selectedBlogName = blogName;
      this.closeMenu();
    },
  },
};
</script>
