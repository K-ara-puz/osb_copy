<template>
  <div
    class="feedbacks _anim-scroll _anim-no-hide"
    v-if="this.feedbacks"
  >
    <div class="feedbacks__container">
      <button
        v-if="this.swiperData"
        class="feedbacks__prev-btn"
        @click="swiperPrevSlide()"
        :disabled="this.swiperData.isBeginning"
      ></button>
      <SwiperSlider
        @swiper="this.getRef"
        ref="swiperFeedbacksRef"
        :speed="1000"
        :space-between="30"
        :slots-count="this.cuttedFeedbacks.length"
        pagination
        :breakpoints="this.swiperBreakpoints"
        class="feedbacks__swiper"
      >
        <template
          v-for="(item, index) in this.cuttedFeedbacks"
          :key="index"
          v-slot:[index]
        >
          <div class="feedbacks__fb">
            <div class="feedbacks__fb__user _anim-scroll _anim-no-hide">
              <span>
                <img
                  :src="
                    require('../assets/users-avatar/' + item[1] + '.webp')
                  "
                />
              </span>
            </div>
            <div class="feedbacks__fb__text">
              {{ item[0] }}
            </div>
          </div>
        </template>
      </SwiperSlider>
      <button
        v-if="this.swiperData"
        class="feedbacks__next-btn"
        @click="swiperNextSlide()"
        :disabled="this.swiperData.isEnd"
      ></button>
    </div>
  </div>
</template>
<script>
import SwiperSlider from './sliders/SwiperSlider.vue';
export default {
  components: {
    SwiperSlider,
  },
  props: {
    currentProduct: {
      type: Object
    }
  },
  data() {
    return {
      swiperData: null,
      mainFeedbacks: [
        [
          "Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.",
          "user_5",
        ],
        [
          "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации Здесь ваш текст..",
          "user_33",
        ],
        [
          "Здесь ваш текст.. Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам lorem ipsum сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.",
          "user_3",
        ],
        [
          "Здесь ваш текст.. Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам lorem ipsum сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.",
          "user_1",
        ],
        [
          "Здесь ваш текст.. Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам lorem ipsum сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.",
          "user_475",
        ],
      ],
    };
  },
  mounted() {
    this.ellipsisFeedbacks();
  },
  methods: {
    ellipsisFeedbacks() {
      let arr = document.querySelectorAll(".feedbacks__fb__text");
      arr.forEach((el) => {
        let availableText = "";
        availableText = el.textContent.slice(0, 100);
        el.textContent = availableText + "...";
      });
    },
    swiperNextSlide() {
      this.swiperData.slideNext();
    },
    swiperPrevSlide() {
      this.swiperData.slidePrev();
    },
    getRef(swiperInstance) {
      this.swiperData = swiperInstance;
    },
  },
  computed: {
    feedbacks() {
      if (this.currentProduct) {
        return this.currentProduct.feedbacks
      } else return this.mainFeedbacks
    },
    cuttedFeedbacks() {
      let res = [];
      if (this.feedbacks) {
        this.feedbacks.forEach((el) => {
          let tempArr = [];
          let tempRes = el[0].slice(0, 150);
          tempRes = tempRes + "...";
          tempArr.push(tempRes);
          tempArr.push(el[1]);
          res.push(tempArr);
        });
        return res;
      } else {
        return 0;
      }
    },
    feedbacksSlidesPerViewFor700() {
      if (this.cuttedFeedbacks.length < 4) {
        return Number(this.cuttedFeedbacks.length);
      } else {
        return 3;
      }
    },
    feedbacksSlidesPerViewFor900() {
      if (this.cuttedFeedbacks.length < 4) {
        return Number(this.cuttedFeedbacks.length);
      } else {
        return 4;
      }
    },
    swiperBreakpoints() {
      // when window width is >= 480px
      let res = {
        200: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: this.feedbacksSlidesPerViewFor700,
        },
        900: {
          slidesPerView: this.feedbacksSlidesPerViewFor900,
        },
      };
      return res;
    },
  },
};
</script>