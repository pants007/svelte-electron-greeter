<script>
  import RepeatingPeriods from "./lib/RepeatingPeriods.svelte";
  import TimeDisplay from "./lib/TimeDisplay.svelte";
  import RevealingText from "./lib/RevealingText.svelte";

  let show_periods = false;
  function showPeriods() {
    show_periods = true;
  }
</script>

<header class="login-form-header">
  <TimeDisplay />
  <div class="button-group">
    <button class="button">⏻</button>
    <button class="button">⏾</button>
    <button class="button">Button 3</button>
    <button class="button">Button 4</button>
  </div>
</header>
<main>
  <div class="default">
    <p>
      <RevealingText initialText="Welcome back" on:rendered={showPeriods} />
      {#if show_periods}
        <RepeatingPeriods />
      {/if}
    </p>
    <form>
      <div class="login-field-container">
        <input class="input-field" type="email" placeholder="Enter username" />
        <input
          class="input-field"
          type="password"
          placeholder="Enter password"
        />
      </div>
    </form>
  </div>
</main>

<style>
  .input-field {
    font-family: Iosevka;
    margin-bottom: 15px;
  }
  .login-field-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
  }
  .login-form-header {
    background-color: #333;
    color: #fff;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    font-family: Iosevka;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .default {
    font-family: Iosevka;
  }
  .button-group {
    display: flex;
  }
  .button {
    background-color: #fff;
    color: #333;
    padding: 10px;
    margin-left: 10px;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
  }
</style>
