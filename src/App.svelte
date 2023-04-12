<script>
  import { onMount } from "svelte";
  import store, { setUsers, setSessions } from "./store";
  import RGBBackground from "./lib/RGBBackground.svelte";
  import RepeatingPeriods from "./lib/RepeatingPeriods.svelte";
  import TimeDisplay from "./lib/TimeDisplay.svelte";
  import RevealingText from "./lib/RevealingText.svelte";
  import LoginForm from "./lib/LoginForm.svelte";
  import PowerMenu from "./lib/PowerMenu.svelte";
  import ThreeDee from "./lib/ThreeDee.svelte";
  let show_periods = false;

  function showPeriods() {
    show_periods = true;
  }
  onMount(async () => {
    // at some point, the fetches will be replaced by ipcmain/ipcrenderer calls
    let users_response = await fetch("http://localhost:3002/api/users");
    let users = JSON.parse(await users_response.text()).data;
    let sessions_response = await fetch("http://localhost:3002/api/sessions");
    let sessions = JSON.parse(await sessions_response.text()).data;
    setUsers(users);
    setSessions(sessions);
  });
</script>

<header class="greeter-header">
  <div class="inner-header-left">
    <PowerMenu />
  </div>
  <div class="inner-header-middle">
    <TimeDisplay />
  </div>
  <div class="inner-header-right" />
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
  </div>
</main>
<RGBBackground />

<style>
  .cool-text {
    height: 80px;
    font-size: 50px;
    color: black;
  }
  .greeter-header {
    background-color: transparent;
    color: #222;
    padding: 0px;
    position: fixed;
    height: auto;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    font-family: Iosevka;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .inner-header-left {
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .inner-header-middle {
    width: 33%;
  }
  .inner-header-right {
    width: 34%;
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  .default {
    width: 400px;
    font-family: Iosevka;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
