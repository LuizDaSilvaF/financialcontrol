<template>
  <a class="nav-link" :href="link">
      <slot></slot>
  </a>
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
.nav-link.active-link{
background-color: var(--hover-color);
}
.nav-link:hover{
background-color: var(--hover-color);
}
</style>