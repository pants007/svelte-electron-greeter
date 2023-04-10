<script>
  import RepeatingPeriods from "./lib/RepeatingPeriods.svelte";
  import TimeDisplay from "./lib/TimeDisplay.svelte";
  import RevealingText from "./lib/RevealingText.svelte";
  import LoginForm from "./lib/LoginForm.svelte";
  import SessionPicker from "./lib/SessionPicker.svelte";
  let show_periods = false;
  let picked_session;
  function showPeriods() {
    show_periods = true;
  }
</script>

<header class="greeter-header">
  <div class="outer-bar">
    <div class="inner-bar-left">
      <TimeDisplay />
    </div>
    <div class="dummy-element" />
    <div class="inner-bar-right">
      <button class="button">⏻</button>
    </div>
  </div>
</header>
<main>
  <div class="default">
    <p class="cool-text">
      <RevealingText initialText="Welcome back" on:rendered={showPeriods} />
      {#if show_periods}
        <RepeatingPeriods />
      {/if}
    </p>
    <LoginForm />
    <SessionPicker bind:value={picked_session} />
  </div>
</main>

<style>
  .dummy-element {
    width: 33%;
  }
  .cool-text {
    font-size: 50px;
  }
  .greeter-header {
    background-color: none;
    color: #222;
    padding: 5px;
    position: fixed;
    max-height: 50px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    font-family: Iosevka;
  }
  .outer-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .inner-bar-left {
    width: 33%;
    display: flex;
    align-items: left;
  }
  .inner-bar-right {
    width: 33%;
  }
  .default {
    width: 400px;
    font-family: Iosevka;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .button {
    background-color: transparent;
    font-family: Iosevka;
    color: #888;
    font-size: 50px;
    padding: 0px;
    margin-left: 0.5em;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
  }
</style>
