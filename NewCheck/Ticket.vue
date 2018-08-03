<template>
  <div class="ticket mlr25">
    <div class="ticket__name-time">
      {{ ticket_name }} {{ ticket_time }}
    </div>
    <div class="ticket__price">
      {{ ticket_price }} руб &#215; {{ ticket_amount }}
    </div>
    <div class="ticket__buttons">
      <img class="minus" src="minus.png">
      <img class="plus" src="plus.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Ticket',
    props: ['ticket_name', 'ticket_time', 'ticket_price', 'ticket_amount']
  }
</script>

<style scoped>
  .ticket {
    display: flex;
    font-size: 18px;
    font-weight: bold;
    padding-top: 13px;
    padding-bottom: 10px;

    border-bottom: 1px solid #b6b6b6;
  }

  .ticket__name-time {
    padding-top: 7px;
    flex: 5;
  }

  .ticket__price {
    padding-top: 7px;
    flex: 4;
    text-align: right;
  }

  .ticket__buttons {
    flex: 3;
    text-align: right;
  }

  .minus, .plus {
    margin-left: 5px;
    width: 35px;
    height: 35px;
  }

  .mlr25 {
    margin-left: 25px;
    margin-right: 25px;
  }
</style>
