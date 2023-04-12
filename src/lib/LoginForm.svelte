<script>
  import store from "../store.js";
  let password = "";
  let selected;
  $: selected = $store.users[0];
</script>

{#if selected}
  <img class="profile-picture" src={selected.image} alt="profilepic" />
{/if}
<form>
  <div class="login-field-container">
    <select bind:value={selected}>
      {#each $store.users as user}
        <option value={user}>
          {user.name}
        </option>
      {/each}
    </select>

    <input
      class="input-field"
      type="password"
      bind:value={password}
      placeholder="Enter password"
    />
    <button class="login-button">log in</button>
    <select>
      {#each $store.sessions as session}
        <option value={session}>
          {session.name}
        </option>
      {/each}
    </select>
  </div>
</form>

<style>
  .profile-picture {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    border: 1px solid black;
    border-radius: 5px;
  }
  .login-button {
    height: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .login-button:hover {
    border: 2px solid #999;
  }
  select {
    font-family: Iosevka;
    width: 100%;
    margin-bottom: 10px;
  }
  .input-field {
    font-family: Iosevka;
  }
  .login-field-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
  }
</style>
