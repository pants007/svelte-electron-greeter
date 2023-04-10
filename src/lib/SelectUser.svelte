<script>
  import { onMount } from "svelte";
  let users = [{ name: "sweatlord" }];
  export let value;

  onMount(async () => {
    const response = await fetch("http://localhost:3002/api/users");
    let temp = JSON.parse(await response.text());
    users = users.concat(temp);
    value = users[0];
  });
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
