<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";

  export let initialText = "";
  let text = "";
  let count = 0;

  let intervalId;
  const dispatch = createEventDispatcher();
  function addChar() {
    text = text + initialText[count];
    count++;
    if (count >= initialText.length) {
      clearInterval(intervalId);
      dispatch("rendered");
    }
  }

  onMount(() => {
    intervalId = setInterval(addChar, 250);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

{text}
