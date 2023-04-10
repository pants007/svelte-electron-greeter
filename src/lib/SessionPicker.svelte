<script>
  import { onMount } from "svelte";
  let sessions = [];
  export let value;

  onMount(async () => {
    const response = await fetch("http://localhost:3002/api/sessions");
    let temp = JSON.parse(await response.text());
    sessions = sessions.concat(temp);
    value = sessions[0];
  });
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
