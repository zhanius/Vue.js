<template>
  <div class="user-profile">
    <div class="profile-header">
      <img :src="user.profileImage" :alt="user.name" class="profile-image">
      <div class="profile-info">
        <h1>{{ user.name }}</h1>
        <p class="user-stats">
          <span>Age: {{ user.age }}</span>
          <span>Country: {{ user.country }}</span>
          <span>Activity: {{ user.lastActivity }}</span>
        </p>
        <div class="rating">
          <span>Current Rating:</span>
          <div class="stars">
            <span v-for="star in 5" :key="star" class="star"
                  :class="{ 'filled': star <= Math.floor(user.rating), 'half-filled': star === Math.ceil(user.rating) }">
              ★
            </span>
          </div>
        </div>
        <button class="follow-btn" @click="toggleFollow">
          {{ user.isFollowing ? 'Unfollow' : 'Follow' }}
        </button>
      </div>
    </div>
    <div class="user-posts">
      <h2>Latest Posts</h2>
      <div v-if="posts.length" class="post-list">
        <div v-for="post in posts" :key="post.id" class="post">
          <h3>{{ post.title }}</h3>
          <p>{{ post.content }}</p>
        </div>
      </div>
      <p v-else class="no-posts">No posts yet.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    name: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    isFollowing: Boolean,
  },

  data() {
    return {
      user: {
        id: this.id,
        name: this.name,
        age: 29,
        country: 'USA',
        lastActivity: 'Active 3 minutes ago',
        profileImage: 'https://cdn-icons-png.flaticon.com/512/6997/6997662.png',
        rating: this.rating,
        isFollowing: this.isFollowing,
      },
      posts: []
    }
  },
  methods: {
    toggleFollow() {
      this.user.isFollowing = !this.user.isFollowing;
      const email = localStorage.getItem('email');
      let names = JSON.parse(localStorage.getItem(`${email}_reviews`)) || [];
      if (this.user.isFollowing === true) {
        if (!names.includes(this.user.name)) {
          names.push(this.user.name);
          console.log(names);
        }
      } else {
        names = names.filter(name => name !== this.user.name);
        console.log(names);
      }
      localStorage.setItem(`${email}_reviews`, JSON.stringify(names));
    },
    fetchPosts() {
      setTimeout(() => {
        this.posts = [
          { id: 1, title: 'My First Adventure', content: 'It was an amazing experience!' },
          { id: 2, title: 'Travel Tips', content: 'Here are some tips for your next trip...' }
        ];
      }, 1000);
    },
  },
  mounted() {
    this.fetchPosts();
    console.log(`Loaded profile for user: ${this.name} with rating: ${this.rating}`);
    console.log(this);
  }



}
</script>

<style scoped>
.user-profile {
  width: 74%;
  min-height: 100vh;
  padding: 200px;
  background: linear-gradient(160deg, #f3be32 0%, #e48d21 47%, #915712 84%, #884f0f 100%);
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.profile-info {
  margin-left: 30px;
}

h1 {
  font-size: 2.5em;
  color: #fff;
  margin-bottom: 10px;
}

.user-stats {
  display: flex;
  gap: 20px;
  color: #fff0bd;
  font-size: 1.1em;
  margin-bottom: 15px;
}

.rating {
  color: #fff;
  font-size: 1.2em;
  margin-bottom: 15px;
}

.stars {
  display: inline-block;
  margin-left: 10px;
}

.star {
  color: #ccc;
  font-size: 24px;
}

.star.filled {
  color: gold;
}

.star.half-filled {
  position: relative;
}

.star.half-filled::before {
  content: '★';
  position: absolute;
  margin-bottom: 10px;
  left: 0;
  top: 0;
  width: 50%;
  overflow: hidden;
  color: gold;
}

.follow-btn {
  background-color: #fff0bd;
  color: #915712;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.follow-btn:hover {
  background-color: #fdd66d;
  transform: translateY(-2px);
}

.user-posts {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
}

h2 {
  color: #fff;
  font-size: 1.8em;
  margin-bottom: 20px;
}

.post-list {
  display: grid;
  gap: 20px;
}

.post {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 15px;
  border-radius: 8px;
}

.post h3 {
  color: #fff;
  font-size: 1.2em;
  margin-bottom: 10px;
}

.post p {
  color: #fff0bd;
}

.no-posts {
  color: #fff;
  font-style: italic;
}
</style>