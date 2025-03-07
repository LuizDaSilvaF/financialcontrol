<template>
  <aside class="sidebar">
    <div class="top">
      <h1 class="title">Financial Control</h1>
    </div>

    <nav class="navigation">
      <ul class="nav-list">
        <li class="nav-items">
          <NavItem class="nav-link active-link" :link="'/'" @click="activeLink">
            <LayoutPanelLeft />
            Dashboard
          </NavItem>
        </li>

        <li class="nav-items">
          <NavItem class="nav-link" :link="'#'" @click="activeLink">
            <FileText />
            Summary
          </NavItem>
        </li>

        <li class="nav-items">
          <NavItem class="nav-link" :link="'#'" @click="activeLink">
            <NotebookText />
            Records
          </NavItem>
        </li>

        <li class="nav-items">
          <NavItem class="nav-link" :link="'#'" @click="activeLink">
            <Settings />
            Settings
          </NavItem>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { 
  FileText, 
  LayoutPanelLeft,
  NotebookText,
  Settings
} from "lucide-vue-next";

import NavItem from "./NavItem.vue"; 

export default {
  name: 'SiderBar',
  components: {
    // Icons
    FileText,
    LayoutPanelLeft,
    NotebookText,
    Settings,

    // Components
    NavItem
  },
  methods: {
    activeLink: function (event) {
      const element = document.getElementsByClassName("active-link").item(0);
      element.classList.remove("active-link");
      event.target.classList.add("active-link");
    }
  }
}
</script>

<style scoped>
aside.sidebar{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: min(250px, 17.36vw);
  background-color: var(--primary-color);
}
aside.sidebar div.top{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: var(--secondary-color);
}
aside.sidebar div.top h1.title{
  color: var(--white-color);
  font-size: 1.25rem;
}
aside.sidebar nav.navigation,
aside.sidebar nav.navigation ul.nav-list,
aside.sidebar nav.navigation ul.nav-list li.nav-items{
  width: 100%;
}
</style>
