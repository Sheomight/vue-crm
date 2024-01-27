<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <div class="row">
      <HomeBill :bill="bill" />
      <HomeCurrencies />
    </div>
  </div>
</template>

<script>
import HomeBill from '@/components/HomeBill.vue';
import HomeCurrencies from '@/components/HomeCurrencies.vue';

export default {
  name: 'HomeView',
  components: {
    HomeBill, HomeCurrencies
  },
  computed: {
    bill() {
      return this.$store.getters.info.bill
    }
  }
}
</script>
