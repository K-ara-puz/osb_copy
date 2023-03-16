<template>
  <div class="carousel-square__wrapp _anim-scroll">
    <div
      class="carousel-square"
      v-if="this.CAROUSEL_IMG_PRODUCTS"
      @touchstart="this.touchSlideChangeStart($event)"
      @touchend="this.touchSlideChangeEnd($event)"
    >
      <div
        v-for="item in this.CAROUSEL_IMG_PRODUCTS"
        :key="item.id"
        class="carousel-square__item cs-item"
      >
        <div class="cs-item__container">
          <img :src="
              require('../../assets/main-jpg/' + item.image)
            "
          />
        </div>
      </div>
    </div>
    <PaginationButtons
      class="carousel-square__btns"
      :disabled-min="this.squareCarouselSlidePosition < 1"
      :disabled-max="this.squareCarouselSlidePosition >= 7"
      @to-prev-page="carouselPrevSlide()"
      @to-next-page="carouselNextSlide()"
    >
    </PaginationButtons>
  </div>
</template>

<script>
import PaginationButtons from "../PaginationButtons.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    PaginationButtons,
  },
  data() {
    return {
      squareCarouselSlidePosition: 0,
      squareCarouselSlidesCount: 8,
      swipeMousePosition: 0,
    };
  },
  mounted() {
    this.LOAD_CAROUSEL_IMG_PRODUCTS().then( () => {
      this.carouselInit();
    });
  },
  computed: {
    ...mapGetters([
      'CAROUSEL_IMG_PRODUCTS'
    ]),
  },
  methods: {
    ...mapActions([
      'LOAD_CAROUSEL_IMG_PRODUCTS'
    ]),
    carouselInit() {
      let centerSlide = document.querySelectorAll(".cs-item")[0];
      centerSlide.classList.add("cs-item_center-anim");
    },
    touchSlideChangeStart(e) {
      let mousePosition = e.changedTouches[0].pageX;
      this.swipeMousePosition = mousePosition;
    },
    touchSlideChangeEnd(e) {
      let mousePosition = e.changedTouches[0].pageX;
      if (mousePosition < this.swipeMousePosition) {
        this.carouselNextSlide();
      }
      if (mousePosition > this.swipeMousePosition) {
        this.carouselPrevSlide();
      }
    },
    setCenterSlideAnimation(index) {
        let id = index;
        if (index >= 8) {
          id = 0;
        }
        let centerSlide = document.querySelectorAll(".cs-item")[id];
        centerSlide.classList.add("cs-item_center-anim");
    },
    carouselPrevSlide() {
      let target = document.querySelector(".carousel-square");
      const allSlides = document.querySelectorAll(".cs-item");
      allSlides.forEach((el) => {
        if (el.classList.value.includes("cs-item_center-anim")) {
          el.classList.remove("cs-item_center-anim");
        }
      })
      switch (this.squareCarouselSlidePosition) {
        case 0:
          break;
        case 1:
          target.style.transform = "rotate3d(0,1,0,-0deg)";
          this.squareCarouselSlidePosition--;
          break;
        case 2:
          target.style.transform = "rotate3d(0,1,0,-45deg)";
          this.squareCarouselSlidePosition--;
          break;
        case 3:
          target.style.transform = "rotate3d(0,1,0,-90deg)";
          this.squareCarouselSlidePosition--;
          break;
        case 4:
          target.style.transform = "rotate3d(0,1,0,-135deg)";
          this.squareCarouselSlidePosition--;
          break;
        case 5:
          target.style.transform = "rotate3d(0,1,0,-180deg)";
          this.squareCarouselSlidePosition--;
          break;
        case 6:
          target.style.transform = "rotate3d(0,1,0,-225deg)";
          this.squareCarouselSlidePosition--;
          break;
        case 7:
          target.style.transform = "rotate3d(0,1,0,-270deg)";
          this.squareCarouselSlidePosition--;
          break;
        case 8:
            target.style.transform = "rotate3d(0,1,0,-315deg)";
            this.squareCarouselSlidePosition--;
            break;
      }
      this.setCenterSlideAnimation(this.squareCarouselSlidePosition);
    },
    carouselNextSlide() {
      let carousel = document.querySelector(".carousel-square");
      const allSlides = document.querySelectorAll(".cs-item");
      allSlides.forEach((el) => {
        if (el.classList.value.includes("cs-item_center-anim")) {
          el.classList.remove("cs-item_center-anim");
        }
      })
      switch (this.squareCarouselSlidePosition) {
        case 0:
          carousel.style.transform = "rotate3d(0,1,0,-45deg)";
          this.squareCarouselSlidePosition++;
          break;
        case 1:
          carousel.style.transform = "rotate3d(0,1,0,-90deg)";
          this.squareCarouselSlidePosition++;
          break;
        case 2:
          carousel.style.transform = "rotate3d(0,1,0,-135deg)";
          this.squareCarouselSlidePosition++;
          break;
        case 3:
          carousel.style.transform = "rotate3d(0,1,0,-180deg)";
          this.squareCarouselSlidePosition++;
          break;
        case 4:
          carousel.style.transform = "rotate3d(0,1,0,-225deg)";
          this.squareCarouselSlidePosition++;
          break;
        case 5:
          carousel.style.transform = "rotate3d(0,1,0,-270deg)";
          this.squareCarouselSlidePosition++;
          break;
        case 6:
          carousel.style.transform = "rotate3d(0,1,0,-315deg)";
          this.squareCarouselSlidePosition++;
          break;
        case 7:
          carousel.style.transform = "rotate3d(0,1,0,-360deg)";
          this.squareCarouselSlidePosition++;
          break;
        case 8:
          break;
      }
      this.setCenterSlideAnimation(this.squareCarouselSlidePosition);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/components-styles/square-carousel.scss";
</style>
