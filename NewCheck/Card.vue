<template>
  <div class="card shadow">
    <div class="card__header">
      {{ card_name }}
    </div>
    <div class="card__info">
      {{ card_game }}, <br>
      {{ card_session }} <br>
      {{ card_time }}
    </div>
    <div class="card__price">
      {{ card_price }} руб
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: ['card_name', 'card_game', 'card_session', 'card_time', 'card_price']
  }
</script>

<style scoped>
  .card {
    flex: 1;
    display: block;
    background-color: #fff;
    margin: 8px;
    border-radius: 4px;
    text-align: center;
  }

  .card__header {
    padding-top: 55px;
    font-size: 20px;
    font-weight: bold;
  }

  .card__info {
    padding-top: 20px;
  }

  .card__price {
    padding-top: 15px;
    padding-bottom: 40px;
    font-size: 20px;
    font-weight: bold;
  }
  
  .shadow {
    box-shadow: -1px 5px 5px rgba(0, 0, 0, 0.2);
  }
</style>
