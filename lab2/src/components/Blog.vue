<template>
  <section>
    <div>
      <span class="spann">{{ this.date }}</span>
    </div>

    <div class="filters-block">
      <span class="spann">{{ this.blogName }}</span>
      <div class="right">
        <select v-model="sortCriteria">
          <option value="date">Date</option>
          <option value="rating">Rating</option>
        </select>
        <button class="arrow" @click="prevPage()" v-show="currentPage > 1" style="transform: rotate(180deg); display: flex; align-items: center;">
          <img src="@/assets/right-arrow.png">
        </button>
        <button class="arrow" @click="nextPage()" :disabled="currentPage >= totalPages" style="display: flex; align-items: center;">
          <img src="@/assets/right-arrow.png">
        </button>
      </div>
    </div>

    <main>
      <div class="item" v-for="(review, index) in currentReviews" :key="index">
        <div class="date-name">
          <div class="name">{{ review.name }}</div>
          <div class="date">{{ review.date }}</div>
        </div>

        <div class="rating">
          <h3>Rating</h3>
          <div class="stars">
            <span v-for="star in 5" :key="star" class="star"
                  :class="{ 'filled': star <= Math.floor(review.rating), 'half-filled': star === Math.ceil(review.rating) }">
              ★
            </span>
          </div>
        </div>

        <img v-if="review.gender === 'male'" src="https://cdn-icons-png.flaticon.com/512/3233/3233508.png" alt="Male" />
        <img v-else-if="review.gender === 'female'" src="https://cdn-icons-png.flaticon.com/512/4086/4086577.png" alt="Female" />

        <h3 class="review-text">{{ review.comment }}</h3>

        <button class="like" @click="toggleLike(review)">
          {{ review.liked ? 'Dislike' : 'Like' }}
        </button>      </div>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      reviews: [],
      currentPage: 1,
      itemsPerPage: 4,
      sortCriteria: 'date',
    };
  },
  props: {
    blogName: '',
  },
  computed: {
    totalPages() {
      return Math.ceil(this.reviews.length / this.itemsPerPage);
    },
    sortedReviews() {
      const sorted = [...this.reviews]; 
      if (this.sortCriteria === 'date') {
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (this.sortCriteria === 'rating') {
        sorted.sort((a, b) => b.rating - a.rating);
      }
      return sorted;
    },
    currentReviews() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.sortedReviews.slice(start, end);
    }
  },
  methods: {
    formatDate(date) {
      const formattedDate = date.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
      this.date = formattedDate;
    },
    async loadReviews(blogName) {
      try {
        const response = await fetch("/src/reviews.json");
        const data = await response.json();
        if (blogName === "Adventure") {
          this.reviews = data.adventure_blog_reviews;
        } else if(blogName === "Nature") {
          this.reviews = data.nature_blog_reviews;
        } else if(blogName === "Modern") {
          this.reviews = data.modern_blog_reviews;
        } else {
          this.reviews = data.fashion_blog_reviews;
        }
        this.currentPage = 1; 
      } catch (e) {
        console.log(e);
      }
    },
    toggleLike(review) {
      if (review.liked) {
        review.rating = Math.max(0, review.rating - 0.5);
      } else {
        review.rating = Math.min(100, review.rating + 0.5);
      }
      review.liked = !review.liked;

    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  },
  mounted() {
    this.formatDate(this.date);
    this.loadReviews(this.blogName);
  },
  watch: {
    blogName(newBlogName) {
      this.loadReviews(newBlogName);
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
*{
  font-family: 'Montserrat', sans-serif;
}
.review-text {
  font-size: 16px;
  color: #333;
  margin-top: 10px;
  margin-left: 11px;
}

.star {
  color: gray;
  font-size: 30px;
  position: relative;
}

.star.half-filled::before {
  content: '★';
  position: absolute;
  color: gold;
  width: 50%;
  overflow: hidden;
}

.like{
  background-color: darkgreen;
  color: #dddddd;
  font-weight: bold;
  margin-right: 5px;
  padding: 10px 20px;
  border-radius: 10px;
}

.star {
  color: gray; 
  font-size: 24px; 
}
.star.filled {
  color: gold;
}

.date-name{
  width: 150px;
  padding: 10px;
  .name{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  .date{
    font-size: 14px;
  }
}

.rating{
  text-align: center;
  .stars{
    margin-bottom: 10px;
  }
}
main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  list-style-type: none;
  padding: 0;
  img{
    width: 80px;
  }
}

.item {
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #fffcf3;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}
select{
  background-color: rgba(218, 170, 98, 0.89);
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 10px;
  color: white;
}
.right{
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 50px;
}
.arrow{
  outline: none;
  border: none;
  background-color: transparent;
  img{
    width: 60px;
    height: 50px;
  }
}
.filters-block{
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
section{
  padding: 110px;
  width: 1080px;
  height: 550px;
  clip-path: polygon(50% 0, 100% 8%, 100% 100%, 50% 92%, 0 100%, 0 8%);
  background-color: rgba(255, 255, 255, 0.45);
  margin-bottom: 50px;
  color: black;
  display: flex;
  flex-direction: column;
}

.spann{
  font-family: Cookie, cursive;
  padding: 8px;
  background-color: rgba(218, 170, 98, 0.89);
  font-weight: 600;
  font-size: 30px;
  color: white;
  border-radius: 10px;
  border: 1px solid dimgrey;
}
</style>
