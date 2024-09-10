<template>
  <div class="bloglist-container">
    <div v-for="(blog, index) in blogList" :key="index" class="bloglist-item" :class="'item-' + (index + 1)">
      <div class="image-container">
        <img :src="blog.img" />
        <div class="overlay">
          <h2>{{ blog.title }}</h2>
          <p id="publication_date">{{ blog.publDate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bloglist-container {
  display: grid;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: repeat(2, auto);
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.bloglist-item {
  color: #f3f2f2;
  width: 400px;
  border-radius: 8px;
  overflow: hidden;
}

img {
  width: 100%;
}

h2 {
  font-size: 20px;
}

p {
  font-size: 18px;
  opacity: 0.8;
}

.image-container {
  position: relative;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.item-1, .item-2 {
  grid-column: 1;
}
.item-1, .item-3, .item-4{
  grid-row: 1;
}
.item-2, .item-5{
  grid-row: 2;
}
.item-3 {
  grid-column: 2;
  grid-row: span 2;
  img{
    height: 480px;
  }
}

.item-4, .item-5 {
  grid-column: 3;
}
</style>

<script>
export default {
  data() {
    return {
      blogList: [
        { title: 'Trump’s claim terrorists are pouring over southern border does not stand up to scrutiny', publDate: 'Sun September 8, 2024', img: 'https://media.cnn.com/api/v1/images/stellar/prod/c-gettyimages-2167172665.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp'},
        { title: '2024 NFL season preview: a potential historic three-peat, rookie quarterbacks and first foray into South America', publDate: 'Thu September 5, 2024', img: 'https://media.cnn.com/api/v1/images/stellar/prod/240211225757-73-super-bowl-58.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp'},
        { title: 'This hurricane season is confounding experts and defying forecasts. What the heck is going on?', publDate: 'Fri September 6, 2024', img: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/69/39/6e/lakhta-center.jpg'},
        { title: 'Everything you need to know about prepping your home for hurricane season', publDate: 'Wed August 21, 2024', img: 'https://media.cnn.com/api/v1/images/stellar/prod/lead-1.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp'},
        { title: 'The fall forecast is in and there’s some bad news for fall lovers', publDate: 'Wed August 28, 2024', img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1244301968.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp'}
      ]
    };
  }
};
</script>
