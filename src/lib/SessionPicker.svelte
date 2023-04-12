<script>
  export let sessions = [];
</script>

<select class="select-user">
  {#each sessions as session}
    <option value={session}>
      {session.name}
    </option>
  {/each}
</select>

<style>
  .select-user {
    font-family: Iosevka;
    width: 50%;
    margin-top: 20px;
  }
</style>
