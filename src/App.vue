<template>
  <div id="app">

    <MainContainer :items="navbarItems"></MainContainer>
    <a id="home">
      <CoverImage isImprint="isImprint"></CoverImage>
    </a>
    <div class="bgImg bg-repeat-y text-white">
      <div class="topGradient h-16 transform rotate-180"></div>
      <div class="w-3/5 m-auto p-4 -mt-9">
        <a id="rules">
          <Rules></Rules>
        </a>
        <a id="faq">
          <Faq class="mt-12"></Faq>
        </a>
        <a id="guides">
          <Guides class="mt-12"></Guides>
        </a>
        <a id="tuv">
          <TUVForm class="mt-12"></TUVForm>
        </a>
      </div>
      <div class="footerGradient h-40 flex justify-center pt-32">
        <div class="m-auto font-semibold text-lg">
          (c) RedwoodRP 2021 - {{ curYear }}
        </div>
      </div>
      <div class="bgPrimary h-40 flex justify-center pt-4">
        <div class="space-x-2">
          <a class="btn rounded-l" href="#rules">Rules</a>
          <a class="btn" href="#faq">FAQ</a>
          <a class="btn" href="#guides">Guides</a>
          <a class="btn" href="#home">About us</a>
          <a class="btn" href="https://discord.gg/c4mY87fyTr">Discord</a>
          <button class="btn rounded-r" @click="showImprint()">Contact</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainContainer, { NavbarItem } from '@/components/MainContainer.vue';
import CoverImage from '@/components/CoverImage.vue';
import Rules from '@/components/sections/Rules.vue';
import Faq from '@/components/sections/Faq.vue';
import Guides from '@/components/sections/Guides.vue';
import TUVForm from '@/components/sections/TUVForm.vue';

@Component({
  components: {
    MainContainer,
    CoverImage,
    Rules,
    Faq,
    Guides,
    TUVForm,
  },
})
export default class App extends Vue {
  private navbarItems: NavbarItem[] = [
    {
      name: 'RedwoodRP',
      to: '/',
    }, {
      name: 'Rules',
      to: '/#rules',
    }, {
      name: 'FAQ',
      to: '/#faq',
    }, {
      name: 'Guides',
      to: '/#guides',
    }, {
      name: 'About us',
      to: '/#about',
    }, {
      name: 'TÜV Form',
      to: '/#tuv',
    }, {
      name: 'Discord',
      to: 'https://discord.gg/c4mY87fyTr',
    },
  ];
  private curYear = new Date().getFullYear();

  showImprint (): void {
    // eslint-disable-next-line no-alert
    alert('Austria, Vienna\nJustMe#8491 on Discord');
  }
}
</script>

<style lang="scss">
.btn {
  @apply transition-all ease-in-out bg-purple-500 hover:bg-purple-800 focus:bg-purple-900 px-4 py-2 shadow-2xl focus:shadow-none;
}

html {
  scroll-behavior: smooth !important;
}

.topGradient {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000B27 100%); // 000B27
}

.footerGradient {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000B27 100%); // 000B27
}

.bgPrimary {
  background: #000B27;
}

.bgImg {
  background: url(assets/repeat-back.jpg), #000B27;
}
</style>
