<template>
  <div>
    <div class="font-bold text-3xl">Guides</div>
    <div class="ln"></div>
    <div class="mt-2">
      <div class="flex">
        <div class="box bg-red-600 border-red-600">
          <div class="title">Getting a drivers license</div>
          <div class="content">
            Send a message in the channel <span class="underline">#driving-test-application</span>
            with your ingame name and wait
            for someone to reply to you. Then just join a vc and start driving with your instructor.
          </div>
          <div class="rectangle-number bg-red-600">1</div>
        </div>
        <div class="box bg-green-700 border-green-700">
          <div class="title">Getting a TÜV for your car</div>
          <div class="content">
            You can get a TÜV by filling out the Google Form <a href="#tuv">here</a>. If you
            have any questions about
            the process of getting a TÜV or about whats allowed, take a look at #... and #....
          </div>
          <div class="rectangle-number bg-green-700">3</div>
        </div>
      </div>
      <div class="flex">
        <div class="box bg-purple-700 border-purple-700">
          <div class="title">Getting a car</div>
          <div class="content">
            Usually writing something in <span class="underline">#general</span> will result in
            multiple people offering you cars.
            If you want to look, which cars are currently being sold look in <span
            class="underline">#sales</span>. You
            can get decent, cheap cars there in no time!
          </div>
          <div class="rectangle-number bg-purple-700">2</div>
        </div>
        <div class="box bg-blue-500 border-blue-500">
          <div class="title">Getting some money</div>
          <div class="content">
            You can get more money either by gambling for it using the <span class="underline">-blackjack</span>
            and <span class="underline">-roulette</span> command,
            or by entering <span class="underline">-work</span>. Both is done in the <span
            class="underline">#economy</span> channel on our Discord.
          </div>
          <div class="rectangle-number bg-blue-500">4</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Guides extends Vue {
}
</script>

<style scoped lang="scss">
.title {
  @apply font-bold text-2xl;
}

.content {
  @apply text-gray-300;
}

.box {
  @apply w-2/5 rounded-2xl m-2 h-40 shadow-lg bg-opacity-20 border-2 relative p-2;
}

.rectangle-number {
  @apply rounded-br-xl rounded-tl-xl w-10 h-10 font-bold text-lg flex justify-center items-center absolute right-0 bottom-0;
}
</style>
