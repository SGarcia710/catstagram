<script>
  import Footer from './Footer.svelte';
  import Profile from './Profile.svelte';
  import Stories from './Stories.svelte';

  export let username;
  export let avatar;
  export let name;
</script>

<div class="Sidebar">
  <div class="Sidebar-container">
    <Profile {username} {name} {avatar} />
    <Stories />
    <Footer />
  </div>
</div>

<style>
  .Sidebar {
    position: relative;
    padding: 4.5em 0 0 0;
  }
  .Sidebar-container {
    position: fixed;
  }
</style>
