<script lang="ts" setup>
import { ref, nextTick } from 'vue'
const activeId = ref(1)
const instance = getCurrentInstance();
// Data to render links, in real life you may pass them as prop, use inject() etc...
const links = ref([
   { id: 1, href: 'introduce', label: '1. Binh Le' },
   { id: 2, href: 'resume', label: '2. Resum' },
   { id:3, href: 'portfolio', label: '3. Project' },
])

onMounted(() => {
  const itemMenu1: HTMLElement | null = document.querySelector(`.ahihi1`)
  const dot = document?.querySelector<HTMLElement>('.dot')
  if(dot && itemMenu1?.offsetLeft) {
    dot.style.left = `${itemMenu1?.offsetLeft-12}px`
  }
})

const scrollToTitle = async (href: string, id: number) => {
  activeId.value = id
  const element = document.getElementById(href)
  const headerMenu: HTMLElement | null = document.querySelector<HTMLElement>('.header-items')
  const itemMenu: HTMLElement | null = document.querySelector(`.ahihi${id}`)
  
  const dot = document?.querySelector<HTMLElement>('.dot')
  if (dot && itemMenu) {
    dot.style.left = `${itemMenu?.offsetLeft-12}px`
  }
  
  if (element) {
    
    const y = element.getBoundingClientRect()?.top + window.pageYOffset - 47
    window.scrollTo({top: y, behavior: 'smooth'})
  }
}

</script>
<template>
  <div class="max-w-[1920px] mx-auto">
    <!-- Header -->
    <section class="max-w-[1920px] mx-auto fixed z-10 top-0 left-0 right-0 w-full h-[48px] border-b-[1px] border-solid border-[#CCCCCC] bg-[#FFFFFF]">
      <header
        class="max-w-[1520px] h-full px-[40px] mx-auto flex flex-row justify-between items-center border-x border-solid border-[#CCCCCC] header-items">
          <NuxtLink v-for="link in links" :key="link.id"  @click="scrollToTitle(link.href, link.id)" :class="[ activeId === link.id ? 'activeLink' : '', `ahihi${link.id}`]" class="hover-underline-animation"> 
            {{ link.label }}
          </NuxtLink>

          <div class="dot"></div>
      </header>
    </section>
    <!-- container -->
    <section class="mt-[48px">
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

.Container {
   scroll-behavior: smooth;
}



.target {
   scroll-margin-top: 48px; /* Add overlayHeight to scroll-margin-top */
}
.header-items {
  position: relative;
}

.dot {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #2F6BFF;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: left 0.5s ease-in-out;
}


.hover-underline-animation {
  position: relative;
  color: #171B1C;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; 
}

.hover-underline-animation:hover {
  cursor: pointer;
  color: #2F6BFF;
  transition: transform 0.35s ease-out;
}

.activeLink {
   /* color: red; */
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #2F6BFF;
  transform-origin: bottom left;
  transition: transform 0.35s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
