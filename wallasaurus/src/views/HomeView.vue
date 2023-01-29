<template>
  <div class="home">
    <div class="row">
      <div class="col-lg-6">
        <div class="img-cont">
          <img alt="Wallasaurus logo" src="../assets/img/dinosaur-monogram-svg.svg" />
          <h2 class="text-center text-lg-start">
            Your go-to shop for the most Rwarsome and T-Rexcellent products!
          </h2>
        </div>
      </div>
      <div class="col-lg-6">
        <card-comp :btns="btnArray" class="mx-auto custom-card">
          <form>
            <div class="mb-3 mt-2">
              <input type="email" class="form-control" placeholder="Please enter your e-mail" />
            </div>
            <div class="mb-3 mt-2">
              <input type="password" class="form-control" placeholder="Please enter your password" />
            </div>
          </form>
        </card-comp>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
// @ is an alias to /src
import CardComp from '../components/CardComp.vue'
export default {
  name: 'HomeView',
  components: {
    CardComp,
  },
  data() {
    return {
      btnArray: [
        {
          txt: 'Log in',
          class: 'btn-secondary',
        },
        {
          txt: 'Clear',
          class: 'btn-danger',
        },
      ],
    }
  },
}
</script>

<style scoped>
.home {
  max-width: 895px;
  margin: auto;
}

.img-cont {
  display: flex;
  flex-direction: column;
}

img {
  max-width: 315px;
  margin: 1em auto 0 auto;
}

.card-comp {
  max-width: 398px;
  margin-top: 2.6em;
}

@media (min-width: 992px) {
  .home {
    margin: 4em auto;
  }

  img {
    margin: 1em;
    margin-top: 1.6em;
  }

  .custom-card {
    margin: 0;
    margin-top: 6.8em;
  }

  h2 {
    color: #3a506b;
    ;
    margin: 0;
    margin-top: 0.8em;
    margin-left: 0.2em;
    font-size: 30px;
  }
}
</style>