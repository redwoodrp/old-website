<template>
  <div>
    <div class="container">
      <div class="single-event-container">
        <div class="event-description bg-green-700 border-green-900 bg-opacity-75">
          <div class="title">Getting a drivers license</div>
          <div class="text">
            Send a message in the channel <span class="underline">#driving-test-application</span>
            with your ingame name and wait
            for someone to reply to you. Then just join a vc and start driving with your instructor.
          </div>
        </div>
        <div class="border"></div>
        <div class="circle-number bg-green-700 flex justify-center items-center">1</div>
      </div>
      <div class="single-event-container right">
        <div class="event-description">
          <h2>This is h2 tag</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="border"></div>
        <div class="circle-number bg-blue-600">2</div>
      </div>
      <div class="single-event-container">
        <div class="event-description">
          <h2>This is h2 tag</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="border"></div>
        <div class="circle-number bg-yellow-500">3</div>
      </div>
      <div class="single-event-container right">
        <div class="event-description">
          <h2>This is h2 tag</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="border"></div>
        <div class="circle-number bg-red-500">4</div>
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
.border-3 {
  border-width: 0.22rem;
}

.container {
  @apply flex flex-col;
}

.single-event-container {
  padding: 50px 55px;
  width: 50%;
  position: relative;
  transition: all 400ms ease-in-out;
}

.single-event-container.right {
  margin-left: auto;
}

.event-description {
  @apply p-2 text-white border-3 bg-opacity-20 h-48 w-10/12;
  .title {
    @apply text-2xl font-bold mb-1;
  }
}

.border {
  width: 4px;
  height: 100%;
  position: absolute;
  background-color: #FDE1EB;
  top: 0;
  right: -2px;
}

.single-event-container.right .border {
  left: -2px;
}

.circle-number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 40%;
  right: -25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}

.single-event-container.right .circle-number {
  left: -25px;
}

@media all and (max-width: 800px) {
  .single-event-container {
    margin: 0;
    width: 100%;
  }
  .single-event-container .border,
  .single-event-container.right .border {
    left: 23px;
  }
  .single-event-container .circle-number,
  .single-event-container.right .circle-number {
    left: 0;
  }
}
</style>
