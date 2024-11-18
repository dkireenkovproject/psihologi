<template>
  <section class="time">
    <div class="container">
      <h2 class="time__title">Расписание работы группы</h2>
      <p class="time__date">Сентябрь, 23 - 25</p>
      <ul class="time__list list-reset">
        <li class="time__item">
          <h4 class="time__subtitle">Понедельник</h4>
          <div class="time__content"><p class="time__description">19:00 — 21:30 — Первая встреча группы</p>
            <p class="time__description">Этот вечер даст вам возможность плавно войти в работу группы и принять для себя взвешенное решение о желании продолжать. Вы познакомитесь с ведущими и поставите свои цели на группу.</p>
          </div>
        </li>
        <li class="time__item">
          <h4 class="time__subtitle">Суббота, 24 сентября</h4>
          <div class="time__content"><p class="time__description">19:00 — 21:30 — Первая встреча группы</p>
            <p class="time__description">Работа группы идет на протяжении всего дня с двумя перерывами на кофе по 30 минут и одним перерывом на обед.</p>
            <p class="time__description">Мы настоятельно просим участников не опаздывать и соблюдать тайминг группы. Окончание работы может задержаться на 15-20 минут.</p>
          </div>
        </li>
        <li class="time__item">
          <h4 class="time__subtitle">Воскресенье, 25 сентября</h4>
          <div class="time__content"><p class="time__description">09:30 - 18-00 - Работа группы</p>
            <p class="time__description">Работа группы идет на протяжении всего дня с двумя перерывами на кофе по 30 минут и одним перерывом на обед.</p>
            <p class="time__description">Мы настоятельно просим участников не опаздывать и соблюдать тайминг группы. Окончание работы может задержаться на 15-20 минут.</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.time {
  padding-bottom: 90px;
  &__title {
    margin-bottom: 30px;
    text-align: center;
    color: #000000;
font-family: 'Akrobat';
font-size: 40px;
font-style: normal;
font-weight: 700;
  }
  &__date {
    margin-bottom: 50px;    text-align: center;
    color: #000000;
font-family: 'Akrobat';
font-size: 20px;
font-style: normal;
font-weight: 400;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 110px;
  }
  &__item {
    display: flex;
    justify-content: space-between; /* Распределение пространства между элементами */

  }
  &__subtitle {
    color: #000000;
font-family: 'Akrobat';
font-size: 30px;
font-style: normal;
font-weight: 700;
  }
  &__description {
    margin-bottom: 25px;
    color: #000000;
font-family: 'Akrobat';
font-size: 23px;
font-style: normal;
font-weight: 400;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__content {
    flex-grow: 1; 
    max-width: 70%; 
  }
}
</style>