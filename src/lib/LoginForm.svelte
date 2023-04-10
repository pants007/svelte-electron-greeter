<script>
  import SelectUser from "./SelectUser.svelte";
  let user = {};
  let password = "";
  function handleClick() {
    alert("Hey there, " + user.name);
  }
</script>

<form>
  <div class="login-field-container">
    <SelectUser bind:value={user} />
    <input
      class="input-field"
      type="password"
      bind:value={password}
      placeholder="Enter password"
    />
    <button on:click={handleClick}>log in</button>
  </div>
</form>

<style>
  .input-field {
    font-family: Iosevka;
    margin-bottom: 20px;
  }
  .login-field-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
  }
</style>
