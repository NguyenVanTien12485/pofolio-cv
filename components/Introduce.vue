<template>
  <!-- Section 1 -->
  <section id="introduce" class="w-full border-b border-solid border-[#CCCCCC]">
    <div class="max-w-[1520px] mx-auto h-[212px] border-x border-solid border-[#CCCCCC]">
    </div>

    <div class="w-full border-y border-solid border-[#CCCCCC]">
      <div class="max-w-[1520px] pl-[40px] mx-auto border-x border-solid border-[#CCCCCC] flex flex-row justify-between">
        <!-- introduce -->
        <div class="py-[42px]">
          <span
            class="inline-block px-1 py-2 border-y-[1px] border-solid border-[#CCCCCC] font-normal text-base text-[#4D5156] opacity-75">UI
            UX Designer</span>

          <h2 class="mt-6 text-[#171B1C] font-normal text-[64px]">Lê Văn Bình</h2>

          <p class="mt-8 mb-10 text-[#4D5156] font-normal text-[20px] leading-9 max-w-[740px]">
            Là một nhà thiết kế với 3 năm trong lĩnh vực thiết kế giao diện và trải nghiệm người dùng. Có kinh nghiệm làm
            việc với các lĩnh vực như: Blockchain, Thương mại điện tử, nền tảng liên kết người dùng - người dùng.
          </p>

          <button class="flex flex-row justify-center items-center px-6 py-3 rounded-xl bg-[#171B1C]">
            <span class="text-[#FFFFFF]">Tìm hiểu thêm</span>
            <div class="ml-2">
              <img src="../assets/icons/arrow-right.svg" alt="">
            </div>
          </button>
        </div>

        <!-- image -->
        <div class="border-l-[1px] border-solid border-[#CCCCCC] relative wrap-image">
          <img src="../assets/images/binh-le-image.png" alt="" class="w-full h-full block object-fill">
        </div>
      </div>
    </div>

    <div class="max-w-[1520px] mx-auto h-[260px] border-x border-solid border-[#CCCCCC]">
    </div>
  </section>
</template>
<style scoped>
.wrap-image::after {
  content: '';
  position: absolute;
  top: -42px;
  left: -1px;
  background-color: #CCCCCC;
  height: 42px;
  width: 1px;
}

.wrap-image::before {
  content: '';
  position: absolute;
  top: 100%;
  left: -1px;
  background-color: #CCCCCC;
  height: 42px;
  width: 1px;
}
</style>