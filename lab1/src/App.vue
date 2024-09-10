<template>
  <div class="container">
    <header>
      <div class="left-part">
        Mini Blog
      </div>
      <nav class="right-part">
        <a href="#">Home</a>
        <a href="#">Politics</a>
        <a href="#">Tech</a>
        <a href="#">Entertainment</a>
        <a href="#">Travel</a>
        <a href="#">Sports</a>
        <button>
          <img src="https://img.icons8.com/?size=256&id=112468&format=png" alt="Icon">
        </button>
      </nav>
    </header>
    <main class="grid">
      <BlogList></BlogList>
    </main>
  </div>
</template>

<style scoped>
*{
  font-family: Bahnschrift;
}

.container{
  width: 100%;
  min-height: 100vh;
  background-color: #f3f2f2;
}

header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 30px;
  font-size: 20px;
  background-color: white;
}

.left-part {
  font-size: 30px;
  font-weight: bold;
}

nav {
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: space-between;
}

img {
  width: 40px;
}

button {
  background-color: transparent;
  border: none;
  border-radius: 50%;
  transition: all 400ms ease;
}

button:hover {
  background-color: rgba(0,0,0,0.1);
}

a {
  text-decoration: none;
  color: black;
}

a::after {
  content: '';
  display: block;
  width: 0;
  height: 3px;
  background: #818080;
  transition: width 0.3s;
}

a:hover::after {
  width: 100%;
}

main{
    padding: 50px 0 50px 0;
    justify-content: center;
    align-items: center;

}
</style>
<script setup lang="ts">
import BlogList from "@/components/BlogList.vue";
</script>