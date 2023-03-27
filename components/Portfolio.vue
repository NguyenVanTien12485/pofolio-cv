<template>
  <section id="portfolio" class="w-full">
    <div class="max-w-[1520px] mx-auto px-10">
      <Carousel ref="carousel" v-model="currentSlide" snapAlign='start'>
        <Slide v-for="slide in 10" :key="slide">
          <div class="mt-10 max-w-[703px]">
            <div class="inline-flex items-center px-[10px] py-1 border-y border-solid border-[#CCCCCC]">
              <span class="text-[#171B1C] ">Client</span>
              <div class="mx-2"><img src="../assets/icons/🤝.svg" alt=""></div>
              <div><img src="../assets/icons/den-xanh.svg" alt=""></div>
            </div>

            <div class="mt-20">
              <span
                class="inline-block font-medium text-sm mr-3 mb-3 px-3 py-[6px] rounded-2xl border-solid border-[1px] border-[#D6D9DB] bg-[#F7F7F7]">UI
                Showcase</span>
              <span
                class="inline-block font-medium text-sm mr-3 mb-3 px-3 py-[6px] rounded-2xl border-solid border-[1px] border-[#D6D9DB] bg-[#F7F7F7]">Web
                App Platform</span>
            </div>

            <h3 class="mt-10 font-normal text-5xl text-[#171B1C]">
              Influencer Marketing
            </h3>

            <p class="mt-6 mb-16 font-normal text-[18px] text-[#171B1C]">
              Kazac là một nền tảng kết nối các thương hiệu cần quảng bá sản phẩm với những người ảnh hưởng có lượng theo
              dõi lớn. Ngoài việc kết nối thương hiệu và người ảnh hưởng, Kazac còn có các tính năng cho phép người dùng
              theo dõi hiệu quả của các bài đăng quảng cáo và quản lý tài khoản một cách nhanh chóng và thuận tiện.
            </p>

            <button class="mb-[223px] flex flex-row justify-center items-center px-6 py-3 rounded-xl bg-[#171B1C]">
              <span class="text-[#FFFFFF]">Xem chi tiết</span>
              <div class="ml-2">
                <img src="../assets/icons/arrow-right.svg" alt="">
              </div>
            </button>

            <div class="inline-flex items-center px-[10px] py-1 border-y border-solid border-[#CCCCCC]">
              <div class="mx-2"><img src="../assets/icons/🤝.svg" alt=""></div>
              <span class="font-normal text-[15px] text-[#868D93] ">Follow my dribbble.com/englu</span>
            </div>
          </div>

          <!-- image -->
          <div class="relative">
              <div class=" absolute">
                <img src="../assets/images/influencer-maketing/big.png" alt="" class="w-full block">
              </div>
              <div class="absolute left-0 bottom-0">
                <img src="../assets/images/influencer-maketing/small.png" alt="" class="w-full block">
              </div>
          </div>
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
    // document.querySelector('.carousel__liveregion').style.display = 'none'

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
.carousel {
  text-align: unset;
}

.carousel__slide {
  /* display: block; */
  justify-content: flex-start;
  align-items: normal;
  padding-bottom: 56px;
}</style>