<template>
  <div class="profile">
    <img :src="profileImage" :alt="`${name}'s Profile Image`" />
    <div class="info">
      <h1>{{ name }}</h1>
      <h3>Age: {{ age }}</h3>
      <h3>Country: {{ country }}</h3>
      <h3>Activity: {{ lastActivity }}</h3>
      <h3>Current Ratings: {{ ratings }}</h3>
      <div class="rating-stars">
        <span v-for="star in 5" :key="star" class="star" :class="{ 'filled': star <= Math.floor(ratings) }">★</span>
      </div>
      <router-link to="/update-info" class="edit-button">Edit Profile</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainProfile',
  props: {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    country: { type: String, required: true },
    lastActivity: { type: String, required: true },
    profileImage: { type: String, required: true },
    ratings: { type: Number, required: true },
  },
  mounted() {
    console.log("MainProfile component mounted.");
  },
}
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 150px auto;
  gap: 70px;
  padding: 40px;
  margin: 150px 300px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

img {
  max-width: 300px;
  border: 4px solid white;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 40px;
  color: #333;
}

h3 {
  font-size: 25px;
  color: #555;
}

.rating-stars {
  font-size: 24px;
}

.star {
  color: #ccc;
}

.star.filled {
  color: gold;
}

.edit-button {
  background-color: #fdce52;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  align-self: flex-start;
  text-decoration: none;
  display: inline-block;
}

.edit-button:hover {
  background-color: #d0a300;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .profile {
    flex-direction: column;
    align-items: center;
    margin: 50px auto;
    padding: 20px;
  }

  img {
    max-width: 200px;
  }

  h1 {
    font-size: 32px;
  }

  h3 {
    font-size: 20px;
  }
}
</style>