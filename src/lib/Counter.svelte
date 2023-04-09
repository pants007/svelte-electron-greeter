<script>
  import { onMount, onDestroy } from 'svelte';

  let count = 0;

  function updateCount() {
    count++;
  }

  let intervalId;

  onMount(() => {
    intervalId = setInterval(updateCount, 1000);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<h1>Count: {count}</h1>