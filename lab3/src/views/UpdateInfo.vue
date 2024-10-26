<template>
  <div class="screen">
    <div class="container">
      <h1>Update Profile Information</h1>
      <form @submit.prevent="updateProfile">
        <div class="form-group">
          <label for="name">Name:</label>
          <input v-model="updatedName" id="name" type="text" required />
        </div>
        <div class="form-group">
          <label for="age">Age:</label>
          <input v-model.number="updatedAge" id="age" type="number" min="1" required />
        </div>
        <div class="form-group">
          <label for="country">Country:</label>
          <input v-model="updatedCountry" id="country" type="text" required />
        </div>
        <div class="form-group">
          <label for="activity">Last Activity:</label>
          <input v-model="updatedActivity" id="activity" type="text" />
        </div>
        <div class="form-group">
          <label for="profileImage">Profile Image URL:</label>
          <input v-model="updatedProfileImage" id="profileImage" type="url" />
        </div>
        <button type="submit" class="update-btn">Update Info</button>
      </form>
      <router-link to="/my-profile" class="back-link">Back to Profile</router-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const log = localStorage.getItem("account");
    if(log === "gabajohn"){
      this.$router.push("/reviews");
    }
  },
  data() {
    return {
      updatedName: '',
      updatedAge: null,
      updatedCountry: '',
      updatedActivity: '',
      updatedProfileImage: '',
    };
  },
  created() {
    // Load current profile data
    const email = localStorage.getItem('email');
    const currentProfile = JSON.parse(localStorage.getItem(email)) || {};
    console.log(email, currentProfile, localStorage.getItem(email));
    this.updatedName = currentProfile.name || '';
    this.updatedAge = currentProfile.age || null;
    this.updatedCountry = currentProfile.country || '';
    this.updatedActivity = currentProfile.lastActivity || '';
    this.updatedProfileImage = currentProfile.profileImage || '';
  },
  methods: {
    updateProfile() {
      const updatedInfo = {
        name: this.updatedName,
        age: this.updatedAge,
        country: this.updatedCountry,
        lastActivity: this.updatedActivity,
        profileImage: this.updatedProfileImage,
      };
      console.log("Updating Profile with: ", updatedInfo);
      const email = localStorage.getItem('email');
      localStorage.setItem(email, JSON.stringify(updatedInfo));
      console.log(email, localStorage.getItem("account"), localStorage.getItem('email'), localStorage.getItem(email));
      this.$router.push('/my-profile');
    }
  }
};
</script>

<style scoped>
.screen {
  width: 100%;
  min-height: 100vh;
  background-color: #d07d17;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 50px;
  background: linear-gradient(to right, #fff0bd, #fdd66d);
  border-radius: 10px;
}
h1 {
  font-size: 30px;
  margin-bottom: 20px;
}
.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.update-btn {
  background-color: #fdce52;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;
}
.update-btn:hover {
  background-color: #d0a300;
}
.back-link {
  display: block;
  margin-top: 20px;
  color: #d07d17;
  text-decoration: none;
}
.back-link:hover {
  text-decoration: underline;
}
</style>