<script>
  export let label = "⏻";
  export let text = "Shutdown";
</script>

<div class="tooltip">
  <button>{label} </button>
  <span class="tooltiptext">{text}</span>
</div>

<style>
  /* Tooltip container */
  .tooltip {
    position: relative;
    display: inline-block;
  }
  .tooltiptext {
    text-align: center;
  }
  /* Tooltip text */
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 40px;
    background-color: transparent;
    color: #000;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    /* Position the tooltip text - see examples below! */
    align-items: center;
    z-index: 1;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
</style>
