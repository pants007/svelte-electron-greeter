<script>
  import { onMount, onDestroy } from "svelte";

  let count = 0;
  let text = "";
  export let frequency = 1000;
  function updateCount() {
    count++;
    count = count % 4;
    text = ".".repeat(count);
  }

  let intervalId;

  onMount(() => {
    intervalId = setInterval(updateCount, frequency);
    console.log(text);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

{text}
