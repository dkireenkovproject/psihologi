<template>
  <section id="group-2" class="presenters">
    <div class="container">
<h2 class="presenters__title">Ведущие группы<br>
  Мария Королева и Наталья Борзенко</h2>
  <p class="presenters__description">Мы уже давно работаем вместе. Как терапевты мы отлично дополняем друг друга в группе, позволяя участникам брать от нас разное и создавая атмосферу живого общения в группе.</p>
  <p class="presenters__description">Если вы сейчас в трудном состоянии, то возможно именно с Машиной помощью вы сможете найти опоры сначала в другом, а потом и в себе. А если вам не хватает энергии жизни, которая делает нас наполненными и активными, то за этим к Наташе. В любом случае, мы обе будем рады поддержать вас и помочь прийти к желанным изменениям.</p>    
<ul class="presenters__list list-reset">
  <li class="presenters__item">
    <div class="presenters__content">
    <div class="presenters__content-list">
    <h3 class="presenters__title-2">Мария Королева</h3>
    <p class="presenters__description-2">Магистр психологии, специалист в области детской и семейной психологии. Генеративный коуч. Член Восточно-Европейской ассоциации экзистенциальной терапии (ВЕАЭТ).
    </p>
    <span class="presenters__dash"></span>
    <p class="presenters__description-3">Одно из определений психотерапии - "исцеление души душой". Только человек может помочь другому человеку преодолеть трудности, получить новый опыт отношений и поделиться чувствами и мыслями. И в этом смысле групповая терапия дает нам уникальный опыт чуткого прикосновения к другим людям.</p>
    <p class="presenters__description-3">Я ценю этот формат за то, что любая проблема там может раскрыться через открытость и откровенность. Через конфронтацию и прямоту. Через принятие и справедливость.</p>
    </div>
    <img class="presenters__img" src="/img/presenters-1.jpg" alt="img">
    </div>
  </li>
  <p class="presenters__description-3">Группа дает каждому из нас то, что мы переживаем в жизни, и таким образом, помогает понять о себе больше. Я вижу, что для кого-то группа может быть даже более эффективной, чем индивидуальная терапия. Ведь участники группы могут быть более откровенными в своих наблюдениях, чем психотерапевт, и значит, вы узнаете о себе больше.</p>
  <li class="presenters__item">
    <div class="presenters__content">
    <div class="presenters__content-list">
    <h3 class="presenters__title-2">Наталья Борзенко</h3>
    <p class="presenters__description-2">Экзистенциальный психотерапевт, сертифицированный терапевт Европейской Ассоциации Психотерапии, член Восточно-Европейской Ассоциации Экзистенциальной терапии.
    </p>
    <span class="presenters__dash"></span>
    <p class="presenters__description-3">Я адепт психотерапии. Я верю в то, что делаю, я верю тому, что происходит в процессе. Я стала свидетелем многих изменений в жизни людей благодаря терапии. Я вижу, как люди проявляют выдержку и силу в работе даже тогда, когда кажется, что шансов на победу немного. И это приносит свои плоды.</p>
    <p class="presenters__description-3">Важная часть работы с клиентом для меня - понимание внутренних процессов и называние вещей своими именами. Ведь самообман лишь отделяет вас от себя и от той жизни, которая принесла бы вам радость.</p>
    </div>
    <img class="presenters__img" src="/img/presenters-2.jpg" alt="img">
    </div>
    <p class="presenters__description-3">Я работаю в экзистенциальном направлении психотерапии. По-английски existence означает жизнь. Это значит, что в фокусе моей работы всегда вы и ваша жизнь как непрерывный процесс, как взаимосвязь выборов и разных обстоятельств, влияющих на личность. Я буду рада знакомству с вами.</p>
  </li>
</ul>
<div class="presenters__wrapper-3">
  <NuxtLink to="/group" class="presenters__btn">Хочу записаться на группу</NuxtLink>
</div>
</div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.presenters {
  padding: 75px 0 130px 0;
  &__title {
    margin-bottom: 60px;
    text-align: center;
  color: #000000;
font-family: 'Akrobat';
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 56.9px; /* 123% */
  }
  &__description {
    margin-bottom: 30px;
  color: #000000;
font-family: 'Akrobat';
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 36.9px; /* 123% */
opacity: 0.7;
&:nth-last-child(2) {
  margin-bottom: 70px;
}
  }
  &__title-2 {
    margin-bottom: 30px;
  color: #000000;
font-family: 'Akrobat';
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: 36.9px; /* 123% */
  }
  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 40px;
gap: 10px;
  }
  &__description-2 {
    margin-bottom: 30px;
  color: #726c6c;
font-family: 'Akrobat';
font-size: 18px;
font-style: normal;
font-weight: 400;
  }
  &__dash {
    display: block;
    margin-bottom: 30px;
    width: 50px;
    height: 5px;
    opacity: 0.2;
    background-color: #000;
  }
  &__description-3 {
    margin-bottom: 40px;
    color: #000000;
font-family: 'Akrobat';
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 36.9px; /* 123% */
&:last-child {
  margin-bottom: 0;
}
  }
  &__list {
    margin-bottom: 150px;
  }
  &__btn {
    padding: 20px 80px;

font-family: 'Akrobat';
font-size: 22px;
font-style: normal;
font-weight: 700;
    color: #FFF;
    background-color: #f05e24;
    text-decoration: none;
  }
  &__wrapper-3 {
    display: flex;
    justify-content: center;
  }
  
}
</style>