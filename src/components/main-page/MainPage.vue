<template>
  <div class="main">
    <div class="main__top-img _anim-scroll _anim-no-hide">
      <div class="main__top-img__title _anim-scroll _anim-no-hide">
        культура & этика
      </div>
    </div>
    <CustomSlider
      class="main__bestsellers"
      :products="this.BESTSELLERS_PRODUCTS"
      :title="'Бестселлеры'"
    ></CustomSlider>
    <div class="main__our-world">
      <div class="main__our-world__title">наш мир</div>
      <div class="main__our-world__descriptions">
        <div class="main__our-world__descriptions__section">
          <div
            class="main__our-world__descriptions__section__image _anim-scroll _anim-no-hide"
          >
            <img :src="require('../../assets/main-jpg/OUR1' + '.webp')" />
          </div>
          <div
            class="main__our-world__descriptions__section__text _anim-scroll _anim-no-hide"
          >
            <div class="main__our-world__descriptions__section__text__title">
              Заголовок статьи
            </div>
            <div class="main__our-world__descriptions__section__text__text">
              Его корни уходят в один фрагмент классической латыни 45 года н.э.,
              то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
              латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из
              самых странных слов в Lorem Ipsum, "consectetur", и занялся его
              поисками в классической латинской литературе. В результате он
              нашёл неоспоримый первоисточник
            </div>
          </div>
        </div>
        <div class="main__our-world__descriptions__section">
          <div
            class="main__our-world__descriptions__section__image _anim-scroll _anim-no-hide"
          >
            <img :src="require('../../assets/main-jpg/OUR2' + '.webp')" />
          </div>
          <div
            class="main__our-world__descriptions__section__text _anim-scroll _anim-no-hide"
          >
            <div class="main__our-world__descriptions__section__text__title">
              Заголовок статьи
            </div>
            <div class="main__our-world__descriptions__section__text__text">
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
      </div>
    </div>
    <CustomSlider
      class="main__sales"
      :is-background="true"
      :products="this.PRODUCTS_ON_SALE"
      :title="'Акции'"
    ></CustomSlider>
    <div class="main__card-swiper">
      <div class="main__card-swiper__container">
        <div class="main__card-swiper__slider">
        <SwiperSlider
          :effect="'cards'"
          :space-between="50"
          :speed="1000"
          :slots-count="this.PRODUCTS_ON_SALE.length"
          :autoplay="this.swiperAutoplaySettings"
          :pagination="{ clickable: true }"
        >
          <template
            v-for="(item, index) of this.PRODUCTS_ON_SALE"
            :key="index"
            v-slot:[index]
          >
          <BestSellersItemCart
            :product-data="item"
            class="main__card-swiper__slider__slide"
          >
          </BestSellersItemCart>
          </template>
        </SwiperSlider>
      </div>
      <div class="main__card-swiper__details">
        <div class="main__card-swiper__details__title">
          Будьте в лучшем с Kultur`oй
        </div>
        <div class="main__card-swiper__details__points">
          <div class="main__card-swiper__details__points__li">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              viewBox="0 0 100 100"
            >
              <path
                d="M96.747 39.242a1.456 1.456 0 1 0-2.833.675c.766 3.212 1.155 6.604 1.155 10.083 0 24.85-20.67 45.067-46.078 45.067S2.913 74.85 2.913 50c0-24.852 20.67-45.07 46.078-45.07 10.119 0 19.785 3.202 27.952 9.26a1.456 1.456 0 0 0 1.735-2.339C70.006 5.417 59.74 2.018 48.991 2.018 21.977 2.018 0 23.542 0 50c0 26.456 21.977 47.98 48.991 47.98S97.982 76.456 97.982 50c0-3.705-.416-7.324-1.235-10.758z"
              />
              <path
                d="M47.98 71.683c-.386 0-.756-.153-1.03-.426L19.637 43.948a1.456 1.456 0 0 1 2.059-2.06l26.223 26.219 49.538-55.486a1.456 1.456 0 1 1 2.173 1.94L49.066 71.197a1.455 1.455 0 0 1-1.045.486h-.041z"
              />
            </svg>
            Качество из Европы.
          </div>
          <div class="main__card-swiper__details__points__li">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              viewBox="0 0 100 100"
            >
              <path
                d="M96.747 39.242a1.456 1.456 0 1 0-2.833.675c.766 3.212 1.155 6.604 1.155 10.083 0 24.85-20.67 45.067-46.078 45.067S2.913 74.85 2.913 50c0-24.852 20.67-45.07 46.078-45.07 10.119 0 19.785 3.202 27.952 9.26a1.456 1.456 0 0 0 1.735-2.339C70.006 5.417 59.74 2.018 48.991 2.018 21.977 2.018 0 23.542 0 50c0 26.456 21.977 47.98 48.991 47.98S97.982 76.456 97.982 50c0-3.705-.416-7.324-1.235-10.758z"
              />
              <path
                d="M47.98 71.683c-.386 0-.756-.153-1.03-.426L19.637 43.948a1.456 1.456 0 0 1 2.059-2.06l26.223 26.219 49.538-55.486a1.456 1.456 0 1 1 2.173 1.94L49.066 71.197a1.455 1.455 0 0 1-1.045.486h-.041z"
              />
            </svg>
            Только комфортная и уникальная одежда!
          </div>
          <div class="main__card-swiper__details__points__li">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              viewBox="0 0 100 100"
            >
              <path
                d="M96.747 39.242a1.456 1.456 0 1 0-2.833.675c.766 3.212 1.155 6.604 1.155 10.083 0 24.85-20.67 45.067-46.078 45.067S2.913 74.85 2.913 50c0-24.852 20.67-45.07 46.078-45.07 10.119 0 19.785 3.202 27.952 9.26a1.456 1.456 0 0 0 1.735-2.339C70.006 5.417 59.74 2.018 48.991 2.018 21.977 2.018 0 23.542 0 50c0 26.456 21.977 47.98 48.991 47.98S97.982 76.456 97.982 50c0-3.705-.416-7.324-1.235-10.758z"
              />
              <path
                d="M47.98 71.683c-.386 0-.756-.153-1.03-.426L19.637 43.948a1.456 1.456 0 0 1 2.059-2.06l26.223 26.219 49.538-55.486a1.456 1.456 0 1 1 2.173 1.94L49.066 71.197a1.455 1.455 0 0 1-1.045.486h-.041z"
              />
            </svg>
            Самая низкая цена.
          </div>
        </div>
        <div class="main__card-swiper__details__btn">
          <CustomBtn @click="this.routeToCatalog()" :title="'Перейти в каталог'" :success="true"> </CustomBtn>
        </div>
      </div>
      </div>
      <div class="main__card-swiper__bg-decor"></div>
    </div>
    <div class="main__carousel">
      <SquareCarousel></SquareCarousel>
    </div>
    <div class="main__feedbacks">
      <div class="main__feedbacks__header _anim-scroll _anim-no-hide">
        <div class="_anim-scroll _anim-no-hide">Отзывы</div>
      </div>
      <VueFeedbacks></VueFeedbacks>
    </div>
    <div class="main__notifications">
      <div class="main__notifications__left-bar">
        <div
          class="main__notifications__left-bar__title _anim-scroll _anim-no-hide"
        >
          Узнавайте новости первыми
        </div>
        <div
          class="main__notifications__border _anim-scroll _anim-no-hide"
        ></div>
        <div
          class="main__notifications__left-bar__article _anim-scroll _anim-no-hide"
        >
          Подпишитесь на наши обновления и получайте уведомления на своё
          устройство.<br />
          Мы будем рады уведомлять вас об акциях, новых товарах и событиях
          нашего мира...
        </div>
      </div>
      <div
        class="main__notifications__right-bar"
        data-da=".main__notifications__left-bar, 650, 2"
      >
        <div
          class="main__notifications__right-bar__follow-btn _anim-scroll _anim-no-hide"
        >
          <CustomBtn :purple="true" :title="'Подписаться'"> </CustomBtn>
        </div>
      </div>
    </div>
    <section class="main__call-order _anim-scroll _anim-no-hide">
      <CallOrderFormService> </CallOrderFormService>
    </section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SquareCarousel from "../sliders/SquareCarousel.vue";
import VueFeedbacks from "../VueFeedbacks.vue";
import CustomBtn from "../CustomBtn.vue";
import CustomSlider from "../sliders/CustomSlider.vue";
import { useDynamicAdapt } from "../../dynamicAdapt";
import CallOrderFormService from "./CallOrderFormService.vue";
import SwiperSlider from "../sliders/SwiperSlider.vue";
import BestSellersItemCart from "../BestSellersItemCart.vue";

export default {
  components: {
    SquareCarousel,
    VueFeedbacks,
    CustomBtn,
    CustomSlider,
    CallOrderFormService,
    BestSellersItemCart,
    SwiperSlider,
  },
  data() {
    return {
      swiperAutoplaySettings: {
        disableOnInteraction: false
      }
    }
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
      let arr = document.querySelectorAll(
        ".main__our-world__descriptions__section__text__text"
      );
      arr.forEach((el) => {
        let availableText = "";
        availableText = el.textContent.slice(0, 300);
        el.textContent = availableText + "...";
      });
    },
    routeToCatalog() {
      this.$router.push('/catalog')
    }
  },
};
</script>
