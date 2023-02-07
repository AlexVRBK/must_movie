<template>
  <div class="about container is-fluid" id="view">
    <div class="column">
      <br />
      <div class="columns is-mobile">
        <div class="column is-2 ">
          <router-link to="/" class="button">Home</router-link>
        </div>
        <div class="column is-8 " id="details">
          <p class="title is-title">
            <strong id="about">Movie Details</strong>
          </p>
          <div v-if="movie">
            <!-- <p class="bd-notification is-info"><small>id</small>  {{ id }}</p> -->
            
            <span class="title is-title"> {{ movie.title }}</span>
            <div class="media-left pt-5">
              <img
                :src="'https://image.tmdb.org/t/p/w200/' + movie.poster_path"
                alt="Placeholder image"
              />
              <br />
              <small> <strong> Overview:</strong></small> <br />
              {{ movie.overview }} <br />
              <small><strong>Released on: </strong></small
              >{{ movie.release_date }}
            </div>
          </div>
          <div v-else>
            <p>Loading movie details ...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Movieview",
  props: ["id"],
  computed: {
    movie() {
      return this.$store.state.movie;
    },
  },
  mounted() {
    this.$store.dispatch("movieDetails", this.id);
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Akshar:wght@300&family=Koulen&family=Macondo&family=Montserrat:wght@200;500&family=Nunito+Sans:wght@200&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;1,300&family=Raleway:ital,wght@0,300;0,500;1,200&display=swap");

#view {
  height: 100vh;
  font-family: "Akshar", sans-serif;
  font-family: "Koulen", cursive;
  font-family: "Macondo", cursive;
  font-family: "Montserrat", sans-serif;
  font-family: "Nunito Sans", sans-serif;
  /* font-family: "Pacifico", cursive; */
  font-family: "Poppins", sans-serif;
  /* font-family: "Raleway", sans-serif; */
}
#about{
    font-family: "Macondo", cursive;
    font-family: "Nunito Sans", cursive; 
  /* font-family: "Pacifico", cursive; */
   /* font-family: "Koulen", cursive; */

}

#details{
    font-family: "Montserrat", sans-serif;
     border: 1px solid #ccc;
 box-shadow: 1px 1px 1px rgb(7, 7, 7, 0.4);
 background-color: hsl(0, 0%, 97%)
}

.button {
  outline: none;
  text-decoration: none;
  background-color: rgb(255, 255, 255);
}
.button:hover {
  text-decoration: none;
  background-color: white;
  color: rgb(0, 0, 0);
}
</style>