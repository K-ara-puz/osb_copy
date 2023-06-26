<template>
  <div class="about-page">
    <div class="about-page__container">
      <div class="about-page__carousel">
        <SquareCarousel :is-pagination="true" :is-pag-btns="false"></SquareCarousel>
      </div>
      <div class="about-page__main-articles">
        <div class="about-page__main-articles__article">
          <div
            class="about-page__main-articles__article__image _anim-scroll _anim-no-hide"
          >
            <img :src="require('../../assets/main-jpg/OUR1' + '.webp')" />
          </div>
          <div
            class="about-page__main-articles__article__text _anim-scroll _anim-no-hide"
          >
            <div class="about-page__main-articles__article__text__title">
              Заголовок статьи
            </div>
            <div class="about-page__main-articles__article__text__text">
              Его корни уходят в один фрагмент классической латыни 45 года н.э.,
              то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
              латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из
              самых странных слов в Lorem Ipsum, "consectetur", и занялся его
              поисками в классической латинской литературе. В результате он
              нашёл неоспоримый первоисточник
            </div>
          </div>
        </div>
        <div class="about-page__main-articles__article">
          <div
            class="about-page__main-articles__article__image _anim-scroll _anim-no-hide"
          >
            <img :src="require('../../assets/main-jpg/OUR2' + '.webp')" />
          </div>
          <div
            class="about-page__main-articles__article__text _anim-scroll _anim-no-hide"
          >
            <div class="about-page__main-articles__article__text__title">
              Заголовок статьи
            </div>
            <div class="about-page__main-articles__article__text__text">
              Давно выяснено, что при оценке дизайна и композиции читаемый текст
              мешает сосредоточиться. Lorem Ipsum используют потому, что тот
              обеспечивает более или менее стандартное заполнение шаблона, а
              также реальное распределение букв и пробелов в абзацах, которое не
              получается при простой дубликации "Здесь ваш текст.. Здесь ваш
              текст.. Здесь ваш текст.." Многие программы электронной вёрстки и
              редакторы HTML используют Lorem Ipsum в качестве текста по
              умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу
              показывает, как много веб-страниц всё ещё дожидаются своего
              настоящего рождения.
            </div>
          </div>
        </div>
        <div class="about-page__main-articles__article">
          <div
            class="about-page__main-articles__article__image _anim-scroll _anim-no-hide"
          >
            <img :src="require('../../assets/main-jpg/OUR1' + '.webp')" />
          </div>
          <div
            class="about-page__main-articles__article__text _anim-scroll _anim-no-hide"
          >
            <div class="about-page__main-articles__article__text__title">
              Заголовок статьи
            </div>
            <div class="about-page__main-articles__article__text__text">
              Его корни уходят в один фрагмент классической латыни 45 года н.э.,
              то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
              латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из
              самых странных слов в Lorem Ipsum, "consectetur", и занялся его
              поисками в классической латинской литературе. В результате он
              нашёл неоспоримый первоисточник
            </div>
          </div>
        </div>
      </div>
      <div class="about-page__down-action">
        <CustomAddFeedbackComponent :gradient-position="'left'"></CustomAddFeedbackComponent>
      </div>
    </div>
  </div>
</template>
<script>
import SquareCarousel from "../sliders/SquareCarousel.vue";
import CustomAddFeedbackComponent from "../CustomAddFeedbackComponent.vue";
export default {
  components: {
    SquareCarousel,
    CustomAddFeedbackComponent
    },
    mounted() {
      this.ellipsisDescriptions();
    },
    methods: {
      ellipsisDescriptions() {
      let arr = document.querySelectorAll(".about-page__main-articles__article__text__text");
        arr.forEach((el) => {
          let availableText = "";
          availableText = el.textContent.slice(0, 300);
          el.textContent = availableText + "...";
        });
      
    },
    }
};
</script>
