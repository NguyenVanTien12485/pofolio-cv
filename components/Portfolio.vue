<template>
  <section id="portfolio" class="w-full">
    <div class="max-w-[1520px] mx-auto px-10">
      <Carousel ref="carousel" v-model="currentSlide" >
        <Slide v-for="slide in 10" :key="slide">
          <div>{{ slide - 1 }}</div>
        </Slide>
      </Carousel>
    </div>

    <!-- navigator and panigation -->
    <div class="max-w-[1520px] mx-auto flex justify-between">
      <div>
        <button @click="prev">Prev</button>
        <button @click="next">Next</button>
      </div>
      <ol class="flex flex-row mb-10">
        <li v-for="slide in 10" :key="slide" class="inline-block w-5 h-5 bg-red-500 mx-4" @click="handleClick(slide)">
        </li>
      </ol>
    </div>
  </section>
</template>
  
<script>
import { defineComponent } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
// import 'vue3-carousel/dist/carousel'
// import 'vue3-carousel/carousel.css'
export default defineComponent({
  name: 'CustomNavigation',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data: () => ({
    currentSlide: 1,
  }),
  mounted() {
    // console.dir(this.$refs.carousel)
    // console.log()
    document.querySelector('.carousel__liveregion').style.display = 'none'

  },
  methods: {
    handleClick(index) {
      this.$refs.carousel.slideTo(index - 1)
    },
    next() {
      this.$refs.carousel.next()
    },
    prev() {
      this.$refs.carousel.prev()
    },
  },
})
</script>
<style scoped>
</style>