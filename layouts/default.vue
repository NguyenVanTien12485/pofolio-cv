<template>
  <div>
    <!-- Header -->
    <section class="fixed z-10 top-0 left-0 right-0 w-full h-[48px] border-b-[1px] border-solid border-[#CCCCCC] bg-[#FFFFFF]">
      <header
        class="max-w-[1520px] h-full px-[40px] mx-auto flex flex-row justify-between items-center border-x border-solid border-[#CCCCCC]">
        <NuxtLink :to="{ path: '/', hash: '#introduce' }">1. Binh Le</NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#resume' }">2. Resum</NuxtLink>
        <NuxtLink :to="{path: '/', hash: '#portfolio'}">3. Project</NuxtLink>
      </header>
    </section>
    <!-- container -->
    <section class="mt-[48px]">
      <slot />
    </section>

    <!-- footer
      <footer>
        footer
      </footer> -->
  </div>
</template>
<style>
html {
  font-family: "Monument Extended", sans-serif;
  background: #FFFFFF;
  scroll-behavior: smooth;
}
</style>
