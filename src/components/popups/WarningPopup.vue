<template>
    <div
      class="warning-popup"
      @click="
        this.$root.popupsController.closeAnyPopup(
          $event,
          '.warning-popup__wrapper'
        )
      "
    >
      <div class="warning-popup__wrapper">
        <div class="warning-popup__top-bar">
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
        <form>
          <div class="warning-popup__center-bar">
            <div class="warning-popup__center-bar__title">{{ this.warningTitle }}</div>
            <div class="warning-popup__center-bar__submit">
              <button type="submit">
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
      </div>
    </div>
  </template>
  <script>
  export default {
    props: {
        warningTitle: {
            type: String,
            default() {
                return 'Вы уверены в своём решении?'
            }
        }
    },
    methods: {
      closePopup() {
        this.$root.popupsController.unshowWarningPopup();
      },
    },
  };
  </script>
  <style lang="scss">
  @import "../../assets/styles/components-styles/popups/warning-popup.scss";
  </style>
  