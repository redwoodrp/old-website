<template>
  <div>
    <div class="font-bold text-3xl">TÜV Review form</div>
    <div class="ln"></div>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSePHFggfvp4lhd2L0uUKv8CM2pkrr7mOcLPvVCMg61N4tBANg/viewform?embedded=true&hl=en"
      width="600" height="800" class="mt-4 m-auto border-0 bg-white rounded-2xl">
      Loading…
    </iframe>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TUVForm extends Vue {
}
</script>
