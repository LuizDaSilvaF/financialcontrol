<template>
    <div class="wrapper" @click="dropdownUserIsOpen = !dropdownUserIsOpen" v-if="dropdownUserIsOpen"></div>

    <header class="header">
        <button class="btn-dropdown-user" @click="dropdownUserIsOpen = !dropdownUserIsOpen">
            <CircleUserRound 
                v-if="user.imageName === null"
                class="user-image-default"
            />
            <img 
                :src="'/assets/images/users/' + user.imageName" 
                alt=""
                v-if="user.imageName !== null"
                class="user-image"
            >
        </button>

        <ul :class="['user-menu-list', {'open' : dropdownUserIsOpen}]">
            <li class="user-menu-items">
                <NavItem :link="'profile'" class="nav-item-link">
                    Profile
                </NavItem>
            </li>
            <li class="user-menu-items">
                <NavItem :link="'profile'" class="nav-item-link">
                    Logout
                </NavItem>
            </li>
        </ul>
    </header>
</template>

<script>
import { CircleUserRound } from 'lucide-vue-next';
import NavItem from './NavItem.vue';

export default {
    name: 'TheHeader',
    data(){
        return {
            user: {
                name: 'Luiz da Silva',
                imageName: "luiz.jpg"
            },
            dropdownUserIsOpen: false
        }
    },
    components: {
        // icons
        CircleUserRound,

        // components
        NavItem,
    },
}
</script>

<style scoped>
.wrapper{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    background-color: var(--bg-transparent-black);
}
header.header{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    top: 0;
    left: min(250px, 17.36vw);
    height: 60px;
    width: calc(100vw - min(250px, 17.36vw));
    padding: 0 15px;
    background-color: var(--primary-color);
    z-index: 2;
}
header.header button.btn-dropdown-user{
    color: var(--white-color);
    display: flex;
    align-items: flex-end;
    gap: 9px;
}
header.header button.btn-dropdown-user .user-image-default{
    height: 30px;
    width: 30px;
}
header.header button.btn-dropdown-user img.user-image{
    height: 40px;
    width: 40px;
    border-radius: 25px;
    border: 2px solid var(--white-color);
}
header.header ul.user-menu-list{
    position: absolute;
    top: 61px;
    right: 1px;
    height: auto;
    width: 150px;
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    border-radius: 5px;
    overflow: hidden;
    background-color: var(--primary-color);
}
header.header ul.user-menu-list.open{
    height: 86px;
}
.nav-item-link{
   justify-content: center;
}
</style>