<template>
  <div>
    <div
      class="bg-gray-800 h-16 w-full flex flex-row text-white items-center text-lg space-x-8 shadow-lg">
      <a class="flex flex-col"
         :class="i === 0 ? 'pl-5 font-bold text-white' : 'text-gray-300 font-medium'"
         :href="item.to"
         v-for="(item, i) in items" :key="i">
        <div>
          {{ item.name }}
          <span class="text-gray-600 font-medium ml-8 select-none" v-show="i < items.length - 1">|</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export interface NavbarItem {
  name: string,
  to: string,
}

@Component
export default class MainContainer extends Vue {
  @Prop({ required: true }) private items: NavbarItem[] | undefined;
}
</script>
