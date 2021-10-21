<template>
  <div>
    <div class="font-bold text-3xl">Rules</div>
    <div class="ln"></div>
    <ol class="list-decimal list-inside text-xl mt-1 ml-4">
      <li class="list-item font-semibold mb-4" v-for="(item, i) in items" :key="i">
        {{ item[0] }}
        <div class="ml-6 font-medium text-gray-500 render-rules" v-html="item[1]"></div>
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
/* eslint-disable max-len */
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Rules extends Vue {
  private items = [
    ['Be respectful', 'I think it’s common sense right? Do not be toxic, no need to insult anybody.'],
    ['No racism or religion', 'Religion and racism should not be discussed. Keep your beliefs to yourself.'],
    ['No spamming', 'Don\'t send a lot of small messages right after each other. Do not disrupt chat by spamming.'],
    ['No pornographic/adult/other NSFW material', 'Any NSFW material will not be tolerated and can result in a ban. If you are not sure it\'s NSFW, Don\'t post it.'],
    [
      'No advertisements',
      'We do not tolerate any kind of advertisements, whether it be for other communities or streams.'
      + 'You can post your content in the media channel if it is relevant and provides actual value (Video/Art)',
    ],
    ['No offensive names and profile pictures', 'You will be asked to change your name or picture if the staff sees them as inappropriate.'],
    [
      'No ALT accounts',
      'Use of an alt account is prohibited.\n'
      + 'Asking your friend to join and give you money is prohibited unless you get something back, like a part or a car.',
    ],
    ['Follow the Discord Community Guidelines', 'The Guidelines can be found <a href="https://discord.com/guidelines">here</a>.'],
    [
      'Use common sense',
      'Read channel descriptions, be nice to others and follow our rules!'
      + '<br/>'
      + '<br/>The staff will mute/kick/ban per discretion. If you feel mistreated dm <span class="mention">@vlad maksimenko</span> and he\'ll look into it.'
      + '<br/>'
      + '<br/>Channels have descriptions/pinned messages explaining what they are there for and how everything works. If you don\'t understand something, feel free to ask.'
      + '<br/>'
      + '<br/>Naming your company inappropriate (initials/name) is <span class="font-bold underline text-gray-400">forbidden</span>!'
      + ' When staff notices this, you will loose access to the <span class="underline">#businesses</span> channel for a week. In the meantime your company will get acclaimed by others.'
      + '<br/>'
      + '<br/>Do not suggest becoming a staff member or getting some role and letting people vote you!'
      + '<br/>'
      + '<br/>Some is disrupting gameplay? Send a message in the <span class="underline">#reports</span> channel and let staff know you need help!'
      + '<br/>'
      + '<br/>You have fun or beautiful pictures about BeamNG? Post them in <span class="underline">#media</span>!<br/>You love automation and make vehicles? Post your awesome creations in <span class="underline">#automation</span>!',
    ],
  ];
}
</script>

<style lang="scss">
.render-rules {
  .mention {
    @apply text-blue-400 opacity-50;
  }

  a {
    @apply text-white underline;
  }
}
</style>
