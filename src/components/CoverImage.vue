<template>
  <div>
    <div class="gradient">
      <div
        class="backImg bg-auto bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center relative">
        <div class="bg-grayblue p-4 rounded-2xl text-white width shadow-xl">
          <div class="font-bold text-2xl mb-1">RedwoodRP — Welcome</div>
          <div class="font-medium text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
          <a
            class="btn cursor-pointer bg-blue-900 hover:bg-blue-700 shadow-2xl focus:bg-blue-500 rounded-lg flex justify-center font-semibold text-lg"
            href="https://discord.gg/c4mY87fyTr">
            Our Discord
          </a>
        </div>
        <a class="absolute bottom-0 mb-9 transform animate-bounce cursor-pointer" href="#rules">
          <img src="@/assets/arrow.svg" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CoverImage extends Vue {
}
</script>

<style scoped lang="scss">
.backImg {
  width: calc(100vw - 17px);
  height: calc(100vh - 64px);
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 38.54%, #000B27 100%), url('../assets/cover.png');
}

.bg-grayblue {
  background: #000B27;
}

.width {
  width: 35rem;
}
</style>
