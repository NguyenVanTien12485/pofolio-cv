<template>
    <section id="portfolio" class="w-full">
      <div class="max-w-[1520px] mx-auto px-10">
        <Carousel ref="carousel" v-model="currentSlide" snapAlign="start">
            <Slide v-for="slide in 10" :key="slide">
                <div class="carousel__item flex flex-row">
                  <!-- left -->
                  <div class="">
                    <div>
                      <span>Client</span>
                      <img src="../assets/icons/🤝.svg" alt="">
                      <img src="../assets/icons/den-xanh.svg" alt="">
                    </div>
  
                    <div>
                      <span>UI Showcase</span>
                      <span>Web App Platform</span>
                    </div>
  
                    <h3>Influencer Marketing</h3>
  
                    <p>
                      Kazac là một nền tảng kết nối các thương hiệu cần quảng bá sản phẩm với những người ảnh hưởng có lượng theo dõi lớn. Ngoài việc kết nối thương hiệu và người ảnh hưởng, Kazac còn có các tính năng cho phép người dùng theo dõi hiệu quả của các bài đăng quảng cáo và quản lý tài khoản một cách nhanh chóng và thuận tiện. 
                    </p>
  
                    <button>
                      Xem chi tiet
                      <img src="../assets/icons/arrow-right.svg" alt="">
                    </button>
  
                    <div>
                      <div>
                        <img src="" alt="">
                      </div>
                      <span>
                        Follow my dribbble.com/englu
                      </span>
                    </div>
                  </div>

                  <!-- right -->
                  <div class="">
                    <div class="relative  w-full h-full">
                      <img src="../assets/images/influencer-maketing/big.png" alt="" class="w-full h-full right-0 bottom-0 absolute">
                    </div>
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
            <li v-for="slide in 10" :key="slide" class="inline-block w-5 h-5 bg-red-500 mx-4" @click="handleClick(slide)"></li>
          </ol>
        </div>
    </section>

</template>
  
  <script>
import { defineComponent } from 'vue'
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
    // console.log()
  },
  methods: {
    demo() {
      console.dir(this.$refs.ahihi);
    },
    handleClick(index) {
      this.$refs.carousel.slideTo(index)
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