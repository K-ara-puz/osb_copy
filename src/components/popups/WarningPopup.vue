<template>
  <div
    class="warning-popup"
    @click.capture="this.clickChecker($event, this.selectorForClosePopup)"
  >
    <div class="warning-popup__wrapper" :class="this.popupClasses">
      <div v-if="!this.onlySlider && !this.onlyConfidence" class="warning-popup__top-bar">
        <button
          @click="this.closePopup()"
          class="warning-popup__top-bar__close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M23.707.293a1 1 0 0 0-1.414 0L12 10.586 1.707.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414L10.586 12 .293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 13.414l10.293 10.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12 23.707 1.707a1 1 0 0 0 0-1.414Z"
            />
          </svg>
        </button>
      </div>
      <div v-else class="warning-popup__top-bar__close_if-only-slider">
        <button @click="this.closePopup()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M23.707.293a1 1 0 0 0-1.414 0L12 10.586 1.707.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414L10.586 12 .293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 13.414l10.293 10.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12 23.707 1.707a1 1 0 0 0 0-1.414Z"
            />
          </svg>
        </button>
      </div>
      <form
        v-if="
          !this.onlySlider &&
          !this.onlySizeSelect &&
          !this.forNonAuthUser &&
          !this.onlyConfidence
        "
      >
        <div class="warning-popup__center-bar">
          <div class="warning-popup__center-bar__title">
            {{ this.warningTitle }}
          </div>
          <div class="warning-popup__center-bar__submit">
            <button type="submit" @click="this.onSubmit">
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
            </button>
          </div>
        </div>
      </form>
      <div class="warning-popup__insert-comp">
        <div
          class="warning-popup__insert-comp__size-select"
          v-if="this.onlySizeSelect"
        >
          <div
            v-if="this.sizeGrid != ''"
            class="warning-popup__insert-comp__size-select__size-grid"
          >
            <button @click="this.openSizeGrid">
              {{ this.$t("popups.warning.sizeStyle.sizeGrid") }}
            </button>
          </div>
          <div class="warning-popup__insert-comp__size-select__container">
            <input
              class="warning-popup__insert-comp__size-select__select"
              v-for="size in this.sizes"
              :value="size.name"
              type="button"
              :key="size.size"
              @click="this.sizesClickHandler(size)"
              :class="{ _active: this.isSizeActive(size) }"
              :id="`pr-size-${size.name}`"
              :disabled="this.isSizeDisable(size.name) === true"
            />
          </div>
        </div>
        <div
          v-if="this.forNonAuthUser"
          class="warning-popup__insert-comp__non-user"
        >
          <div class="warning-popup__insert-comp__non-user__title">
            {{ this.$t("popups.warning.nonAuthStyle.title") }}
          </div>
          <button
            @click="this.openRegPopup()"
            class="warning-popup__insert-comp__non-user__button"
          >
            <p>{{ this.$t("popups.warning.nonAuthStyle.toReg") }}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              width="30.912"
              height="12.116"
            >
              <path
                fill-rule="evenodd"
                d="M29.912 5.595H2.084l4.33-4.207c.392-.391.85-.84.46-1.23-.391-.392-.84.022-1.23.413L.289 5.787c-.385.385-.385.11 0 .496l5.263 5.263c.39.39.84.804 1.23.413.391-.391.024-.795-.367-1.185l-4.33-4.097h27.827c.552 0 1 .01 1-.541 0-.552-.448-.541-1-.541z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <slot class="" name="insert-component"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    warningTitle: {
      type: String,
      default() {
        return "";
      },
    },
    onlySlider: {
      type: Boolean,
      default() {
        return false;
      },
    },
    onlyConfidence: {
      type: Boolean,
      default() {
        return false;
      },
    },
    onlySizeSelect: {
      type: Boolean,
      default() {
        return false;
      },
    },
    sizes: {
      type: Array,
      default() {
        return [];
      },
    },
    activeSizes: {
      type: Array,
      default() {
        return [];
      },
    },
    fromProductCard: {
      type: Boolean,
      default() {
        return false;
      },
    },
    sizeGrid: {
      type: String,
      default: "",
    },
    forNonAuthUser: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      selectedSizes: [],
    };
  },
  mounted() {
    this.clearSelectedSizes();
    this.syncActiveSizes();
  },
  methods: {
    onSubmit() {
      this.$emit('submitted');
      this.closePopup();
    },
    closePopup() {
      this.$root.popupsController.unshowWarningPopup();
      this.$emit("closed", this.selectedSizes);
    },
    isSizeActive(size) {
      let isExist = this.selectedSizes.find((el) => el === size);
      if (isExist) {
        return true;
      } else return false;
    },
    syncActiveSizes() {
      if (this.activeSizes.length > 0) {
        this.selectedSizes = this.activeSizes;
      }
    },
    async openRegPopup() {
      this.closePopup();
      await this.$root.popupsController.showLogPopup();
      let popup = document.querySelector("#logRegPopup");
      let toRegBtn = popup.querySelector(
        ".log-popup__bottom-bar__registration"
      );
      toRegBtn.click();
    },
    clickChecker(e, parent) {
      let popup = document.querySelector(`.${parent}`);

      if (popup) {
        if (
          !popup.contains(e.target) &&
          !popup.contains(e.target.parentElement)
        ) {
          if (parent.includes("warning")) {
            this.$root.popupsController.closeAnyPopup(e, parent);
            this.$emit("closed", this.selectedSizes);
          }
        }
      }
    },
    sizesClickHandler(size) {
      let isExist = this.selectedSizes.find((el) => el === size);
      if (!isExist) {
        this.selectedSizes.push(size);
        this.$emit("selected-size", this.selectedSizes);
      } else {
        this.selectedSizes = this.selectedSizes.filter((el) => {
          return el.size != size.size;
        });
        this.$emit("deselected-size", this.selectedSizes);
      }
    },
    openSizeGrid() {
      window.open(
        `https://cdn.shopify.com/s/files/1/0269/9788/2983/files/${this.sizeGrid}.webp?v=1656603402`
      );
    },
    clearSelectedSizes() {
      this.selectedSizes = [];
    },
    addActiveClassToSize(target) {
      target.classList.add("_active");
    },
    removeActiveClassFromSize(target) {
      target.classList.remove("_active");
    },
    isSizeDisable(sizeName) {
      let res = false;
      this.sizes.forEach((el) => {
        if (el.name === sizeName) {
          if (el.qty < 1) {
            res = true;
          } else res = false;
        }
      });
      return res;
    },
  },
  computed: {
    selectorForClosePopup() {
      let selector = "warning-popup__wrapper";
      if (this.onlySizeSelect) {
        selector = "size-warning-popup__wrapper";
      }
      if (this.onlySlider) {
        selector = "slider-warning-popup__wrapper";
      }
      return selector;
    },
    popupClasses() {
      return {
        "_with-slider slider-warning-popup__wrapper": this.onlySlider,
        "size-warning-popup__wrapper": this.onlySizeSelect,
      };
    },
  },
};
</script>
