<template>
  <div>
    <div class="font-bold text-3xl">FAQ</div>
    <div class="ln"></div>
    <div class="ml-4 mt-1.5 render-faq">
      <div class="mb-6" v-for="(item, i) in items" :key="i">
        <a :id="item[0]" class="text-xl font-semibold">
          <a
            class="transition rounded cursor-pointer ease-in-out hover:text-white text-gray-400 hover:bg-blue-500 hover:text-white p-0.5"
            :href="`#${item[0]}`">#</a>
          {{ item[0] }}
        </a>
        <div class="text-gray-400 font-medium ml-3" v-html="item[1]"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Faq extends Vue {
  private items = [
    [
      'How does the economy work?',
      'You start out with 5500 in the bank. You can buy vehicles, parts, drivers licenses and'
      + 'more with that money. To pay someone use the <span class="underline">-pay @User</span>'
      + ' command in the <span class="underline">#economy</span>'
      + ' channel.\n'
      + 'Before you pay, you have to withdraw the amount from your account. Vehicle prices can be'
      + ' found ingame. For more info check the <span class="underline">#faq</span> Discord channel. Test driving vehicles is forbidden!',
    ],
    [
      'How do I make money?',
      'You can either play for money using the <span class="underline">-blackjack</span> and <span class="underline">-roulette</span> commands or you can work by using the <span class="underline">-work</span> command.'
      + ' All of that is done in the <span class="underline">#economy</span> channel.',
    ],
    [
      'How can I be a ambulance driver or a police officer?',
      'When you spawn a police vehicle or ambulance vehicle you are automatically a officer/medic (Only non EU police cars are allowed unless you are on Italy).'
      + ' You are not allowed to modify <span class="underline">any</span> emergency service vehicles - only adding a radar is allowed.',
    ],
    [
      'Can I pay for a vehicle/vehicle part in installments (paying in separate parts)?',
      'No. You have to always pay the <span class="underline">full price</span> instantly for vehicle parts/vehicles.\n',
    ],
    [
      'Am I allowed to change the color of my derby vehicle on purchase?',
      'No.',
    ],
    [
      'How do I get my drivers license?',
      'You just type your name in <span class="underline">#driver-test-application</span> and wait for someone to respond. Every vehicle must pass a TÜV before anyone is allowed to operate it.',
    ],
    [
      'How do I get a building?',
      'If you find a building that you like, first look if someone has already claimed it in the <span class=underline">property-[westcoast/eastcoast/italy]</span> channels.'
      + ' Keep in mind that you can only buy one house per map! If a house you want is claimed, you can ask its owner if he wants to give it to you.',
    ],
    [
      'Am I allowed to claim the race track?',
      'No. The race track is a public area that you are <span class="underline">not allowed</span> to claim!',
    ],
    [
      'How do I get a business?',
      'Post the business you want to get in <span class="underline">#businesses</span> but make sure it’s not claimed already. Keep in mind that you can only have two businesses in total and only one per map!'
      + ' You can make a Discord account for your company, but you are not allowed to use it to participate in giveaways!',
    ],
    [
      'You own a vehicle business and have made more than 5 sales?',
      'Then DM <span class="mention">@vlad maksimenko</span> with message links of your buyers sending you the payment. Vlad will then give you a <span class="underline">discount</span> on vehicles and vehicle parts.'
      + ' Derby vehicles do <span class="underline">not</span> count as a sale. Same goes for part sales!',
    ],
    [
      'Where and how do I sell my vehicle?',
      'You send a image of the vehicle plus a description of the modifications you made to it in the <span class="underline">#sales</span> channel.'
      + ' If noone buys your vehicle, you can also sell it to the bank by DMing <span class="mention">@vlad maksimenko</span> with a list of the modifications you made and a picture of the vehicle.'
      + ' Keep in mind that selling your vehicle to the bank results in a <span class="underline">25% price loss</span>.',
    ],
    [
      'Where do I sell my vehicle parts?',
      'Just send a message in the <span class="underline">#parts-sales</span> channel. Follow the pinned message to guide you.',
    ],
  ];
}
</script>

<style lang="scss">
.render-faq {
  .mention {
    @apply text-blue-400 opacity-50;
  }
}
</style>
