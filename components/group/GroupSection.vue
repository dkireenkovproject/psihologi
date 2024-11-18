<template>
  <section id="group-1" class="group">
    <div class="container">
      <div class="group__wrapper">
<div class="group__content">
  <h2 class="group__title">Кому стоит прийти на группу?<br>
    Как понять, что это про вас?</h2>
  <ul class="group__list list-reset">
    <li class="group__item">
      <p class="group__description">— возможно у вас есть семья, но вам не с кем поговорить о важном,</p>
    </li>
    <li class="group__item">
      <p class="group__description">— или стало трудно говорить с друзьями, вы опасаетесь острой реакции и отвержения,</p>
    </li>
    <li class="group__item">
      <p class="group__description">— вам страшно высказывать свое мнение даже с близкими, ведь каждое слово может спровоцировать ссору,</p>
    </li>
    <li class="group__item">
      <p class="group__description">— а может быть, вокруг вас много людей, но при этом вы ощущаете одиночество</p>
    </li>
  </ul>
  <p class="group__description">Если вы узнали себя в одном или нескольких описаниях, то с вами все в порядке. Но нам есть о чем поговорить…</p>
</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.group {
  position: relative;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%,   rgba(235, 132, 35, 0.7) 100% ), url('/img/group.jpg');
  min-height: 900px;
    width: 100%;
    background-position: center center;    background-repeat: no-repeat;
background-size: cover;
&__title {
  margin-bottom: 40px;
}
&__title {
  margin-bottom: 30px;
  color: #000000;
font-family: 'Akrobat';
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: 56.9px; /* 123% */
}
&__description {
  color: #000000;
font-family: 'Akrobat';
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: 36.9px; /* 123% */
}
&__list {
  margin-bottom: 50px;
}
&__content {
  padding:60px ;
  background: #fff;
}
&__wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
}
</style>