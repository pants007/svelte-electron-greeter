<script>
  export let users = [{ name: "sweatlord" }];
  export let value = users[0];
</script>

<select class="select-user" bind:value>
  {#each users as user}
    <option value={user}>
      {user.name}
    </option>
  {/each}
</select>

<style>
  .select-user {
    font-family: Iosevka;
    width: 100%;
    margin-bottom: 10px;
  }
</style>
