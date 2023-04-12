<script>
  import { fade } from "svelte/transition";
  let showMenu = false;
  function showPowerMenu() {
    showMenu = !showMenu;
  }
  async function triggerRestart() {
    await fetch("http://localhost:3002/api/restart");
  }
  async function triggerShutdown() {
    await fetch("http://localhost:3002/api/shutdown");
  }
  async function triggerSuspend() {
    await fetch("http://localhost:3002/api/suspend");
  }
</script>

<div class="power-menu">
  <div class="tooltip">
    <button class="power-button" on:click={showPowerMenu}>⏼</button>
    {#if !showMenu}<span class="tooltiptext">Open power options</span>{:else}
      <span class="tooltiptext">Close power options</span>{/if}
  </div>
  {#if showMenu}
    <div class="power-button-container" transition:fade>
      <div class="tooltip">
        <button class="power-button" on:click={triggerShutdown}>⏻ </button>
        <span class="tooltiptext">Shutdown</span>
      </div>
      <div class="tooltip">
        <button class="power-button" on:click={triggerRestart}>↺</button>
        <span class="tooltiptext">Restart</span>
      </div>
      <div class="tooltip">
        <button class="power-button" on:click={triggerSuspend}>⏾</button>
        <span class="tooltiptext">Suspend</span>
      </div>
    </div>
  {/if}
</div>

<style>
  .power-menu {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .power-button {
    background-color: inherit;
    color: #bbb;
    font-size: 2em;
    cursor: pointer;
    outline: none;
  }
  .power-button:hover {
    color: #000;
  }

  .power-button-container {
    display: flex;
    flex-direction: column;
  }
  /* Tooltip container */
  .tooltip {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .tooltiptext {
    visibility: hidden;
    text-align: center;
  }
  /* Tooltip text */
  .tooltip .tooltiptext {
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    /* Position the tooltip text - see examples below! */
    z-index: 1;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
</style>
