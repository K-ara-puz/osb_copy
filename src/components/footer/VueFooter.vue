<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__content">
        <div class="footer__content__left-bar">
          <div class="footer__content__left-bar__telegram">
            <div class="footer__content__left-bar__telegram__link">
              <a href="#">@kult_site</a>
            </div>
            <div class="footer__content__left-bar__telegram__icon">
              <img src="../../assets/icons/dark-theme/telega.webp" />
            </div>
          </div>
          <div class="footer__content__left-bar__mail">
            <div class="footer__content__left-bar__mail__link">
              <a href="#">kult_gmailEx@gmail.com</a>
            </div>
            <div class="footer__content__left-bar__mail__icon">
              <img src="../../assets/icons/dark-theme/gmail.webp" />
            </div>
          </div>
        </div>
        <div class="footer__content__right-bar">
          <div class="footer__content__right-bar__youtube">
            <div class="footer__content__right-bar__youtube__link">
              <a href="#">https://www.youtube.com/watch?v=VuvLgizbQ9o</a>
            </div>
            <div class="footer__content__right-bar__youtube__icon">
              <img src="../../assets/icons/dark-theme/youtube.webp" />
            </div>
          </div>
          <div class="footer__content__right-bar__insta">
            <div class="footer__content__right-bar__insta__link">
              <a href="#">@kultura_example</a>
            </div>
            <div class="footer__content__right-bar__insta__icon">
              <img src="../../assets/icons/dark-theme/insta.webp" />
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom-bar">
        <a
          @click="() => this.openConfidencePopup('ConfidenceDelivery')"
          class="footer__bottom-bar__link"
          >Доставка</a
        >
        <a
          @click="() => this.openConfidencePopup('ConfidencePayment')"
          class="footer__bottom-bar__link"
          >Оплата</a
        >
        <a
          @click="() => this.openConfidencePopup('ConfidenceReturn')"
          class="footer__bottom-bar__link"
          >Возврат</a
        >
        <a
          @click="() => this.openConfidencePopup('ConfidencePolicy')"
          class="footer__bottom-bar__link"
          >Политика</a
        >
        <a
          @click="() => this.openConfidencePopup('ConfidenceOfert')"
          class="footer__bottom-bar__link"
          >Оферта</a
        >
      </div>
    </div>
    <WarningPopup
      v-if="this.activeConfidence != ''"
      ref="confidencePopup"
      :only-confidence="true"
      @closed="closeConfidencePopup"
    >
      <template #insert-component>
        <div class="footer__confidence-popup">
          <div class="footer__confidence-popup__content">
            <component :is="activeConfidence"></component>
          </div>
        </div>
      </template>
    </WarningPopup>
  </footer>
</template>

<script>
import WarningPopup from "../popups/WarningPopup.vue";
import ConfidenceDelivery from "./confidence/ConfidenceDelivery.vue";
import ConfidencePayment from "./confidence/ConfidencePayment.vue";
import ConfidenceReturn from "./confidence/ConfidenceReturn.vue";
import ConfidencePolicy from "./confidence/ConfidencePolicy.vue";
import ConfidenceOfert from "./confidence/ConfidenceOfert.vue";

export default {
  data() {
    return {
      activeConfidence: "",
    };
  },
  components: {
    WarningPopup,
    ConfidenceDelivery,
    ConfidencePayment,
    ConfidenceReturn,
    ConfidenceOfert,
    ConfidencePolicy,
  },
  methods: {
    openConfidencePopup(confidenceValue) {
      this.activeConfidence = confidenceValue;
      const body = document.querySelector("body");
      body.classList.add("_scroll-wrapp-hide");
    },
    closeConfidencePopup() {
      this.activeConfidence = "";
      const body = document.querySelector("body");
      body.classList.remove("_scroll-wrapp-hide");
    },
  },
};
</script>
