<template>
  <section class="question">
<CommonQuestionHeader />
    <div class="container">
      <div class="question__wrapper">
<h1 class="question__title">Что делать, если у меня депрессия?</h1>
<p class="question__description">В этом случае хорошо бы вспомнить что приносило радость раньше и давно ли Вы это делали? Важно также обратить внимание на свое окружение — кто может оказать психологическую поддержку, кто может быть для Вас опорой в вашем кризисе. Также полезно пообщаться с врачем для уточнения анамнеза (иногда оказывается, что такие состояния у человека цикличны и склонны к повторам – тогда нужна медикаментозная поддержка), а также <NuxtLink to="/about" class="question__link"> чтобы поговорить с психологом</NuxtLink>, чтобы найти возможности изменения своего состояния и получше узнать его причины.</p>
    </div>
  </div>
  </section>
</template>

<script lang="ts" setup>
import CommonQuestionHeader from '../CommonQuestionHeader.vue';


</script>

<style lang="scss" scoped>
.question {
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
&__title {
  margin-bottom: 35px;
  color: #000000;
font-family: 'Akrobat';
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal; /* 117% */
letter-spacing: 0.5px;
}
&__description {
  max-width: 700px;
  color: #000000;
font-family: 'Akrobat';
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal; /* 117% */
letter-spacing: 0.5px;
}
&__link {
  text-decoration: none;
  color: #ff8562;
}
}
</style>