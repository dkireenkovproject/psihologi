<template>
  <section id="contacts" class="contacts">
    <div class="container">
      <div class="contacts__wrapper">
<h2 class="contacts__title">{{ title }}</h2>
<div class="contacts__dash-wrapper"><h3 v-for="(subtitle, index) in subtitle" class="contacts__subtitle">{{ subtitle }}</h3></div>
<div class="contacts__form-wrapper">
<form @submit.prevent="sendForm" id="form" class="contacts__form" method="POST">
  <input class="contacts__input" type="text" placeholder="Ваше имя" v-model="Yourname" required>
  <input class="contacts__input" type="email" placeholder="Ваш E-mail" v-model="Youremail" required>
  <input class="contacts__input" type="tel" placeholder="+7(999)-999-99-99" v-model="Yourtelephone" required>
  <input class="contacts__input" type="text" placeholder="Ваш вопрос" v-model="Yourmessage" required>
</form>
<button v-if="load" class="contacts__btn btn-reset" form="form" type="submit">Отправить</button>
<span v-else class="contacts__load-text">Сообщение успешно отправлено !</span>
<span class="contacts__text">Даю свое согласие на обработку своих персональных данных, указанных в форме обратной связи (Имя; номер телефона; адрес электронной почты), оператору в целях коммуникации со мной.</span>
</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { $api } = useNuxtApp();
const useRepo = repositoryApi($api);


const Yourname = ref('')
const Youremail = ref('')
const Yourmessage = ref('')
const Yourtelephone = ref('')
const load = ref(true)

const buttonLoad = () => {
  load.value = false;
  setTimeout(() => {
    load.value = true;
  }, 4000);
};

const sendForm = async () => {
   const body = {
     name : Yourname.value,
     mail : Youremail.value,
     message : Yourmessage.value,
     phone: Yourtelephone.value
   }
   try {
    await useRepo.sendContactForm(body);
   console.log('Message sent successfully')
   buttonLoad();
     } 
   catch (error) {
    console.error('Error sending message:', error)
   } finally {
    Yourname.value = ''
    Youremail.value = ''
    Yourmessage.value = ''
    Yourtelephone.value = ''
   }
}

defineProps<{
	subtitle: string[]
	title: string
}>()
</script>

<style lang="scss" scoped> 
.contacts {
  padding: 45px 0;
  background: #EFEFEF;

  &__title {
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 42px;
font-style: normal;
font-weight: 700;
line-height: 51.66px; /* 123% */
  }
  &__subtitle {
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 24px;
font-style: normal;
font-weight: 300;
line-height: 36px; /* 150% */
  }
  &__wrapper {
    margin-bottom: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  }
  &__form {
    margin-bottom: 34px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  &__input {
    border: 1px solid #FFF;
background: #FFF;
padding: 20px;
width: 100%;
min-width: 560px;
  }
  &__form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
 }
 &__btn {
  margin-bottom: 32px;
  padding: 20px 60px;
  color: #FFF;
text-align: center;
font-family: 'Akrobat';
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
background: #DB9809;
 }
 &__text {
  max-width: 500px;
  display: block;
  color: #6E6E6E;
text-align: center;
font-family: 'Akrobat';
font-size: 15px;
font-style: normal;
font-weight: 300;
line-height: 23.25px; /* 155% */
text-decoration: none;
 }
 &__load-text {
  margin-bottom: 20px;
  display: block;
  color: #DB9809;
  text-align: center;
  font-family: 'Akrobat';
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 23.25px;
 }
}
</style>