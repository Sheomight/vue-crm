<template>
  <div class="app-main-layout">
    <TheNavbar @sidebarAction="isOpen = !isOpen"/>
    <TheSidebar v-model="isOpen"/>
    <main class="app-content" :class="{'full': !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/App/TheNavbar.vue';
import TheSidebar from '@/components/App/TheSidebar.vue';

export default {
  name: 'main-layout',
  components: {
    TheNavbar, TheSidebar
  },
  data() {
    return {
      isOpen: true
    }
  }
}
</script>