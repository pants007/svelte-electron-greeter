<script>
  import { onMount, onDestroy } from "svelte";

  let timestamp = new Date().toTimeString();
  let datestamp = new Date().toDateString();
  function updateTime() {
    timestamp = new Date().toTimeString();
    datestamp = new Date().toDateString();
  }
  let intervalId;

  onMount(() => {
    intervalId = setInterval(updateTime, 1000);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<p class="timestamp">{datestamp}</p>
<p class="timestamp">{timestamp}</p>

<style>
  .timestamp {
    height: 10px;
    font-weight: bold;
  }
</style>
