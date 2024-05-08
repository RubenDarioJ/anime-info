<script setup lang="ts">
import 'bootstrap-icons/font/bootstrap-icons.css'
</script>
<template>
  <div>
    <footer>
      <div class="container-footer">
        <div class="faq">
          <p>{{ $t('footer.question-number') }}</p>
        </div>
        <div class="faq-items">
          <ul>
            <li><a href="#">{{ $t('footer.faq') }}</a></li>
            <li><a href="#">{{ $t('footer.help') }}</a></li>
            <li><a href="#">{{ $t('footer.terms') }}</a></li>
            <li><a href="#">{{ $t('footer.privacy') }}</a></li>
            <li><a href="#">{{ $t('footer.cookies') }}</a></li>
            <li><a href="#">{{ $t('footer.information') }}</a></li>
          </ul>
        </div>
      </div>
      <select v-model="$i18n.locale">
        <!-- <option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale">{{ locale }}</option> -->
        <!-- <option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="$i18n.locale === 'en' ? 'es' : 'en'">{{ locale }}</option> -->
        <option value="es"><i class="bi-globe"></i>Español</option>
        <option value="en"><i class="bi-globe"></i>English</option>
      </select>
      <!-- <i class="bi-globe"></i>
      <i class="bi bi-search"></i> -->
    </footer>
  </div>
</template>
<style>
select option i {
  color: #ffff !important;
}
footer {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.7);
  display: grid;
  justify-content: center;
  align-items: center;
}

.container-footer {
  display: grid;
  padding-top: 45px;
  width: 900px;
}

ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 80px;
  margin-bottom: 0px;
  padding-left: 0px;
}

li {
  color: #ffff;
  list-style-type: none;
}

.faq p {
  font-size: 12px;
  color: #bbbbbb;
}

.faq-items ul li {
  font-size: 12px;
  color: #bbbbbb;
}

select {
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffff;
  width: 100px;
  font-size: 13px;
  text-align: center;
  margin-bottom: 60px;
  border-radius: 4px;
}

a {
  color: #bbbbbb;
}

@media (max-width: 720px) {
  footer {
    height: 150px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .container-footer {
    display: grid;
    padding-top: 0px;
    width: 100%;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 15px;
    grid-column-gap: 70px;
    margin-bottom: 0px;
    padding-left: 0px;
    padding-right: 60px;
  }
  .faq-items ul li {
    font-size: 10px;
  }
  select {
    margin-top: 20px;
  }
}

</style>