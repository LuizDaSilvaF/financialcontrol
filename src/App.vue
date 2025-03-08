<template>
  <Sidebar />
  <TheHeader/>

  <main class="container-main">
    <RouterView/>
  </main>
</template>

<script>
// Components
import Sidebar from "./components/Sidebar.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    TheHeader
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
:root{
  --primary-color: #00465b;
  --secondary-color: #009dff;
  --white-color: #FFF;
  --stroke-color: #00556f;
  --hover-color: #00546e;
  --bg-transparent-black: #00000010;
}
.container-main{
  padding: 60px 30px 30px min(280px, 19.44vw);
}
button{
  border: 0;
  outline: 0;
  cursor: pointer;
  background-color: transparent;
}
</style>
