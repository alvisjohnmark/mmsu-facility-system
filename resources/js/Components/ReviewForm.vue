<template>
  <div class="review-form">
    <h2>Leave a Review</h2>
    <form @submit.prevent="submitReview">

      <div class="form-group">
        <label for="name">Name  <span :style="{ opacity: isOptional ? '0.6' : '1' }">(Optional)</span> :</label>
       
        <input type="text" id="name" v-model="name">
      </div>

      <div class="form-group">
        <label>How would you rate your experience?</label>
        <div class="star-rating">
          <span
            v-for="star in maxStars"
            :key="star"
            @mouseover="hoverRating(star)"
            @click="setRating(star)"
            @mouseleave="resetHover"
            :class="{ 'filled': star <= hoverValue, 'selected': star <= rating }"
            class="star"
          >
            <i class="fas fa-star fa-2x"></i>
          </span>
        </div>
      </div>
      <div class="form-group">
        <label for="comment">Write your review:</label>
        <textarea id="comment" v-model="comment"></textarea>
      </div>
      <div class="form-group">
        <label>
          <input type="checkbox" v-model="certify"> 
          I certify that this review is based on my own experience and is my genuine opinion of this facility, and that I have no personal or business relationship with this establishment and have not been offered any incentive or payment originating from the establishment to write this review.
        </label>
      </div>
      <button type="submit" :disabled="!certify" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded float-right">Submit Review</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      rating: null,
      comment: '',
      hoverValue: 0,
      maxStars: 5,
      certify: false,
      isOptional: true // Set this to false if it's not an optional field
    };
  },
  methods: {
    setRating(rating) {
      if (rating === this.rating) {
        this.rating = null;
      } else {
        this.rating = rating;
      }
    },
    hoverRating(rating) {
      this.hoverValue = rating;
    },
    resetHover() {
      this.hoverValue = this.rating || 0;
    },
    submitReview() {
      const data = {
        name: this.name,
        rating: this.rating,
        comment: this.comment,
        facility_id: this.$route.params.facilityId,
      };

      axios.post('/submit-review', data)
        .then(response => {
          console.log('Review submitted successfully', response.data);
          this.clearForm();
          window.alert('Your review has been posted.');
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
    clearForm() {
      this.name = '';
      this.rating = null;
      this.comment = '';
      this.hoverValue = 0;
      this.certify = false;
    },
  },
};
</script>

<style scoped>
/* Style the stars */
.star {
  cursor: pointer;
  transition: color 0.2s;
}
.star:hover {
  color: orange;
}
.filled {
  color: orange;
}
.selected {
  color: orange;
}
.review-form {
  /* Add your form styling here */
}
.form-group {
  margin-bottom: 20px;
}
textarea {
  height: 100px;
}
button {
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.optional-label {
  opacity: 0.6; /* Adjust the opacity value as needed */
}


textarea {
  height: 100px;
  width: 100%; /* To make it full width */
  padding: 10px;
  border: 1px solid #ccc; /* Adding a border */
  border-radius: 4px; /* Rounded corners */
  resize: vertical; /* Allowing vertical resizing */
}
</style>
