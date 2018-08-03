<template>
  <div id="app">
    <NewCheck new_check_number="3445321"
              client_name_surname="Петр Петров"
              client_number="1841"
              promo_code="Промокод"
              sale="Процент скидки" />
  </div>
</template>

<script>
import NewCheck from './components/NewCheck.vue'

export default {
  name: 'app',
  components: {
    NewCheck
  }
}
</script>

<style>

</style>
