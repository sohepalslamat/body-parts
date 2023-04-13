<template>
    <header class="header">
      <Logo class="logo" />
      <ColorModePicker class="color-mode" />
    </header>
    <main class="container">
      <NuxtPage />
    </main>
</template>

<style lang="scss">

.container {
  text-align: center;
  padding: 50px;
}
.header {
  height: 50px;
  padding-top: 2px;
  border-bottom: 1px solid var(--border-color);
  .logo {
    float: left;
  }
  .color-mode {
    float: right;
  }

}
</style>
