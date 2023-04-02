<template>
  <section id="portfolio" class="w-full border-b border-solid border-[#CCCCCC]">
    <div class="max-w-[1520px] mx-auto border-x border-solid border-[#CCCCCC]">
      <Carousel ref="carousel" v-model="currentSlide" snapAlign='start' @slide-start="handleSlideStart">
        <Slide v-for="portfolio in listPortfolio" :key="portfolio.id">
          <div class="pl-10 flex relative w-full">
            <div class="mt-10 max-w-[703px]">
              <div class="inline-flex items-center px-[10px] py-1 border-y border-solid border-[#CCCCCC]">
                <span class="text-[#171B1C] ">Client</span>
                <div class="mx-2"><img src="/icons/🤝.svg" alt=""></div>
                <div><img src="/icons/den-xanh.svg" alt=""></div>
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
                {{ portfolio.title }}
              </h3>
  
              <p class="mt-6 mb-16 font-normal text-[18px] text-[#171B1C]">
                {{ portfolio.description }}
              </p>
  
              <button class="mb-[223px] flex flex-row justify-center items-center px-6 py-3 rounded-xl bg-[#171B1C]">
                <span class="text-[#FFFFFF]">Xem chi tiết</span>
                <div class="ml-2">
                  <img src="/icons/arrow-right.svg" alt="">
                </div>
              </button>
  
              <div class="inline-flex items-center px-[10px] py-1 border-y border-solid border-[#CCCCCC]">
                <div class="mx-2"><img src="/icons/🤝.svg" alt=""></div>
                <span class="font-normal text-[15px] text-[#868D93] ">Follow my dribbble.com/englu</span>
              </div>
            </div>
  
            <!-- image -->
            <div class="absolute right-0 mt-[75px] ">
                <div class="">
                  <img :src="portfolio.images.big" :alt="portfolio.id" class="w-full block">
                </div>
                <div class="absolute bottom-0 left-[-235px]">
                  <img :src="portfolio.images.small" :alt="portfolio.id" class="w-full block">
                </div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>

  </section>
  
  <!-- navigator and panigation -->
  <section class="w-full border-b border-solid border-[#CCCCCC]">
    <div class="max-w-[1520px] mx-auto px-10 py-4 flex justify-between border-x border-solid border-[#CCCCCC]">
      <div>
        <button @click="prev" class="p-2 border border-solid border-[#CCCCCC] rounded-[50px] mr-4 transition-all duration-300 hover:bg-slate-300">
          <img src="/icons/arrow-back-black.svg" alt="">
        </button>
        <button @click="next" class="p-2 border border-solid border-[#CCCCCC] rounded-[50px] transition-all duration-300 hover:bg-slate-300">
          <img src="/icons/arrow-right-black.svg" alt="">
        </button>
      </div>
      <ol class="flex flex-row items-center justify-center w-[720px]">
        {{ activeId }}
        <li v-for=" slide in listPortfolio.length" :key="slide" :class="activeId === slide ? '!bg-[#171b1c]' : ''" class="inline-block w-3 h-3 bg-[#D6D9DB] mx-[6px] rounded-[50px]"  @click="handleClick(slide, i)">
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
    currentSlide: 0,
    activeId: 1,
    listPortfolio: [
      {
        id: 1, 
        title: 'Influencer Marketing',
        description: 'Kazac là một nền tảng kết nối các thương hiệu cần quảng bá sản phẩm với những người ảnh hưởng có lượng theo dõi lớn. Ngoài việc kết nối thương hiệu và người ảnh hưởng, Kazac còn có các tính năng cho phép người dùng theo dõi hiệu quả của các bài đăng quảng cáo và quản lý tài khoản một cách nhanh chóng và thuận tiện.',
        images: {
          big: '/images/influencer-maketing/big.png',
          small: '/images/influencer-maketing/small.png'
        }
      },
      {
        id: 2, 
        title: 'Design System for OKXE Seller Platform',
        description: 'Là một hệ thống các định nghĩa và các UI Component được xây dựng riêng cho dự án OFS (OKXE for Seller). Các thành phần UI Component này giúp các Designer tham gia thiết kế tạo ra và nhân rộng các thiết kế, tính năng nhanh chóng bằng cách tái sử dụng các UI component đã được xây dựng.',
        images: {
          big: '/images/okxe-seller/big.png',
          small: '/images/okxe-seller/small.png'
        }
      },
     

    ]
  }),
  mounted() {
  },
  methods: {
    handleSlideStart(data) {
      this.activeId = data.slidingToIndex + 1
    },
    handleClick(index, i) {
      this.activeId = index
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