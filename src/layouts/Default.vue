<template>
  <div class="layout">
    <div class="container mx-auto app-wrapper">
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.app-wrapper {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
</style>
