<template>
  <div class="container__inner">
    <div class="c2">
      <div class="categories">
        <div class="category">
          <div class="arrow-back">
            <img src="arrow.png">
          </div>
          Главная
        </div>
        <div class="category active">Игры, аттракционы</div>
        <div class="category">VR-куб</div>
        <div class="category">Полное погружение</div>
        <div class="category">Мероприятия</div>
        <div class="category">Рекомендо-<br>ванные игры</div>
      </div>
    </div>

    <div class="c5">
      <div class="product-choose mt15">
        <div class="row">
          <Card card_name="Комбо 60"
                card_game="Любая игра"
                card_session="сеанс"
                card_time="15, 30 или 60 мин"
                card_price="1900" />
          <Card card_name="Комбо 30"
                card_game="Любая игра"
                card_session="сеанс"
                card_time="15 или 30 мин"
                card_price="1000" />
        </div>
        <div class="row">
          <Card card_name="Комбо 90"
                card_game="Любая игра"
                card_session="сеанс"
                card_time="15, 30б 60 или 90 мин"
                card_price="2500" />
          <Card card_name="Эндюранс"
                card_game="Одна игра"
                card_session="сеанс"
                card_time="60 минут"
                card_price="1500" />
        </div>
      </div>
    </div>

    <div class="vertical-line"></div>

    <div class="c5">
      <div class="block block--new-check shadow">
        <div class="new-check-number plr25">Новый чек №{{ new_check_number }}</div>
        <div class="client-info">
          <div class="client-info__photo inline-block">
            <img src="#">
          </div>
          <div class="inline-block">
            <div class="client-info__status">
              {{ client_status }}
            </div>
            <div class="client-info__name-number">
              {{ client_name_surname }} (№{{ client_number }})
            </div>
          </div>
        </div>
        <div class="chosen-tickets plr25">Выбранные билеты</div>
        <Ticket ticket_name="Комбо"
                ticket_time="60 мин"
                ticket_price="1900"
                ticket_amount="2" />
        <Ticket ticket_name="VR-куб"
                ticket_time="15 мин"
                ticket_price="400"
                ticket_amount="1" />
        <div class="table plr25">
          <div class="table__promo-code">
            {{ promo_code }}
          </div>
          <div class="table__sale-percent">
            {{ sale }}
          </div>
        </div>
        <div class="final-price plr25">
          <div class="final-price__text-block">
            Итоговая сумма
          </div>
          <div class="final-price__price-block">
            4200 руб
          </div>
        </div>
      </div>
      <div class="row cols mt15 mb15">
        <div class="c5">
          <button class="btn btn--grey btn--lg fw mt15">Отменить</button>
        </div>
        <div class="c7">
          <button class="btn btn--green btn--lg fw mt15">Провести оплату</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';
import Ticket from './Ticket.vue';

export default {
  name: 'NewCheck',
  props: ['new_check_number', 'client_photo', 'client_status', 'client_name_surname', 'client_number', 'promo_code', 'sale'],
  components: {
    Card,
    Ticket
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .container__inner {
    padding: 0px;
    margin: 0px;
    font-family: 'Roboto', sans-serif;
    background-color: #f1f1f1;
  }

  button {
    outline: none;
  }

  .categories {
    margin-top: 40px;
  }

  .category {
    position: relative;
    margin-bottom: 55px;
    font-size: 20px;
    word-wrap: normal;
    text-align: left;
  }

  .arrow-back {
    position: absolute;
    padding-right: 30px;
    top: -2px;
    left: -50px;
  }

  .active {
    font-weight: bold;
  }

  .product-choose .row1 > * {
    padding: 0px;
  }

  .row {
    display: flex;
  }

  .block--new-check {
    background-color: #fff;
    margin-top: 25px;
  }

  .new-check-number {
    font-weight: bold;
    padding: 10px 0px;
  }

  .client-info {
    background-color: #dbfbcd;
  }

  .client-info__photo img {
    margin: 5px 10px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }

  .client-info__status {
    font-size: 14px;
    font-weight: bold;
    color: #9b9b9b;
    margin-bottom: 2px;
  }

  .client-info__name-number {
    font-size: 18px;
    font-weight: bold;
  }

  .chosen-tickets {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 1.5em;
    font-weight: bold;
  }

  .table {
    display: flex;
    margin-top: 60px;
    margin-bottom: 20px;
  }

  .table__promo-code {
    flex: 1;
    border: 1px solid #b6b6b6;
    padding: 15px 10px;
  }

  .table__sale-percent {
    flex: 1;
    border: 1px solid #b6b6b6;
    padding: 15px 10px;
    margin-left: -1px;
  }

  .final-price {
    display: flex;
    justify-content: space-between;
    background-color: #ffe7e7;
  }

  .final-price__text-block, .final-price__price-block {
    font-size: 21px;
    font-weight: bold;
    color: #eb0505;
    padding: 15px 0px;
  }

  .btn {
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    padding: 30px 0px;
  }

  .btn--grey {
    color: #898989;
  }

  .btn--green {
    color: #fff;
    background-color: #66ba3f;
  }

  .inline-block {
    display: inline-block;
    vertical-align: middle;
  }

  .vertical-line {
    width: 1px;
    height: inherit;
    background-color: #b6b6b6;
    color: black;
    margin-right: 3px;
    margin-left: -4px;
  }

  .shadow {
    box-shadow: -1px 5px 5px rgba(0, 0, 0, 0.2);
  }

  .plr25 {
    padding-left: 25px;
    padding-right: 25px;
  }

  .mlr25 {
    margin-left: 25px;
    margin-right: 25px;
  }

  .mt15 {
    margin-top: 15px;
  }

  .mb15 {
    margin-bottom: 15px;
  }

</style>
