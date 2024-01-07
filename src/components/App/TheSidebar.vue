<template>
  <ul class="sidenav app-sidenav" :class="{'open': modelValue === true}">
    <router-link v-for="link in links" :key="link.url" :to="link.url" custom v-slot="{ navigate, isActive }">
      <li @click="navigate" :class="isActive ? 'active' : null">
        <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
      </li>
    </router-link>
  </ul>
</template>

<script>

export default {
  props: {
    modelValue: {
      type: Boolean
    }
  },
  data() {
    return {
      links: [
        { title: 'Счёт', url: '/' },
        { title: 'История', url: '/history' },
        { title: 'Планирование', url: '/planning' },
        { title: 'Новая запись', url: '/record' },
        { title: 'Категории', url: '/categories' },
      ]
    }
  },
}
</script>