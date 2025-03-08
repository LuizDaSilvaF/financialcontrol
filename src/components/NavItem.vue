<template>
  <RouterLink class="nav-link" :to="'/' + link">
      <slot></slot>
  </RouterLink>
</template>

<script>
export default {
name: 'NavItem',
props: {
  link: {
    type: String,
    required: true
  }
}
}
</script>

<style scoped>
.nav-link{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 9px;
  color: var(--white-color);
  padding: 9px 15px;
  width: 100%;
}
.nav-link.active-link,
.nav-link:hover{
  background-color: var(--hover-color);
}
</style>