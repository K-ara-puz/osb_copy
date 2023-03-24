<template>
  <div class="main">
    <div class="main__top-img _anim-scroll">
      <div class="main__top-img__title _anim-scroll">культура & этика</div>
    </div>
    <CustomSlider class="main__bestsellers" :products="this.BESTSELLERS_PRODUCTS" :title="'Бестселлеры'"></CustomSlider>
    <div class="main__our-world">
        <div class="main__our-world__title">наш мир</div>
      <div class="main__our-world__descriptions">
        <div class="main__our-world__descriptions__section">
          <div class="main__our-world__descriptions__section__image _anim-scroll">
            <img :src="require('../../assets/main-jpg/OUR1' + '.webp')" />
          </div>
          <div class="main__our-world__descriptions__section__text _anim-scroll">
            <div class="main__our-world__descriptions__section__text__title">Заголовок статьи</div>
            <div class="main__our-world__descriptions__section__text__text">Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник</div>
          </div>
        </div>
        <div class="main__our-world__descriptions__section">
          <div class="main__our-world__descriptions__section__image _anim-scroll">
            <img :src="require('../../assets/main-jpg/OUR2' + '.webp')" />
          </div>
          <div class="main__our-world__descriptions__section__text _anim-scroll">
            <div class="main__our-world__descriptions__section__text__title">Заголовок статьи</div>
            <div class="main__our-world__descriptions__section__text__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.</div>
          </div>
        </div>
      </div>
    </div>
    <CustomSlider class="main__sales" :products="this.PRODUCTS_ON_SALE" :title="'Акции'"></CustomSlider>
    <div class="main__carousel">
        <SquareCarousel></SquareCarousel>
    </div>
    <div class="main__feedbacks">
      <div class="main__feedbacks__header _anim-scroll">
        <div class="_anim-scroll">Отзывы</div>
      </div>
      <VueFeedbacks></VueFeedbacks>
    </div>
    <div class="main__notifications">
        <div class="main__notifications__left-bar">
            <div class="main__notifications__left-bar__title _anim-scroll">
                Узнавайте новости первыми
            </div>
            <div class="main__notifications__border _anim-scroll"></div>
            <div class="main__notifications__left-bar__article _anim-scroll">
                Подпишитесь на наши обновления и получайте уведомления на своё устройство.<br>
                Мы будем рады уведомлять вас об акциях, новых товарах и событиях нашего мира... 
            </div>
        </div>
        <div class="main__notifications__right-bar"
          data-da=".main__notifications__left-bar, 650, 2"
        >
            <div class="main__notifications__right-bar__follow-btn _anim-scroll">
                <CustomBtn
                    :purple="true"
                    :title="'Подписаться'"
                >
                </CustomBtn>
            </div>
        </div>
    </div>
    <section class="main__call-order _anim-scroll">
        <div class="main__call-order__container">
            <form class="main__call-order__form">
                <p class="main__call-order__form__title">Заказ звонка</p>
                <input type="text" :placeholder="'Имя'" class="main__call-order__form__name">
                <input type="tel" :placeholder="'Номер телефона'" class="main__call-order__form__phone">
                <button class="main__call-order__form__submit _anim-scroll">
                    <CustomBtn :title="'Заказать'" :purple="true"></CustomBtn>
                </button>
            </form>
        </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SquareCarousel from "../sliders/SquareCarousel.vue";
import VueFeedbacks from "../VueFeedbacks.vue";
import CustomBtn from "../CustomBtn.vue";
import CustomSlider from "../sliders/CustomSlider.vue";
import {useDynamicAdapt} from '../../dynamicAdapt';

export default {
  components: {
    SquareCarousel,
    VueFeedbacks,
    CustomBtn,
    CustomSlider
  },
  mounted() {
    this.ellipsisDescriptions();
    useDynamicAdapt();
  },
  computed: {
    ...mapGetters(["BESTSELLERS_PRODUCTS", "PRODUCTS_ON_SALE"]),
  },
  methods: {
    ellipsisDescriptions() {
      let arr = document.querySelectorAll(".main__our-world__descriptions__section__text__text");
        arr.forEach((el) => {
          let availableText = "";
          availableText = el.textContent.slice(0, 300);
          el.textContent = availableText + "...";
        });
      
    },
  }
};
</script>
<style lang="scss">
@import "../../assets/styles/components-styles/main-page.scss";
</style>
