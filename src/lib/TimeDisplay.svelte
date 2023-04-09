<script>
  import { onMount, onDestroy } from "svelte";

  let text = new Date().toTimeString();
  function updateTime() {
    text = new Date().toTimeString();
  }
  let intervalId;

  onMount(() => {
    intervalId = setInterval(updateTime, 1000);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<p class="timestamp">{text}</p>

<style>
  .timestamp {
    font-size: 1.2em;
    font-weight: bold;
    margin-right: auto;
  }
</style>
