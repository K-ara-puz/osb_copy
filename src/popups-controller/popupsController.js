import { reactive, watchEffect } from "vue";
import store from '../vuex/store'

const state = {
  _isCartPopupOpen: false,
  _isLogPopupOpen: false,
  _isPassChangePopupOpen: false,
  _isWarningPopupOpen: false,
  _isAnyPopupOpen: false,
};
const popupsController = reactive({
  data: state,
  showCartPopup: function () {
    this.data._isCartPopupOpen = true;
    this.data._isAnyPopupOpen = true;
  },
  unshowCartPopup: function () {
    this.data._isCartPopupOpen = false;
    this.data._isAnyPopupOpen = false;
  },
  showLogPopup: function () {
    this.data._isLogPopupOpen = true;
    this.data._isAnyPopupOpen = true;
  },
  unshowLogPopup: function () {
    this.data._isLogPopupOpen = false;
    this.data._isAnyPopupOpen = false;
  },
  showPassChangePopup: function () {
    this.data._isPassChangePopupOpen = true;
    this.data._isAnyPopupOpen = true;
  },
  unshowPassChangePopup: function () {
    this.data._isPassChangePopupOpen = false;
    this.data._isAnyPopupOpen = false;
  },
  showWarningPopup: function () {
    this.data._isWarningPopupOpen = true;
    this.data._isAnyPopupOpen = true;
  },
  unshowWarningPopup: function () {
    this.data._isWarningPopupOpen = false;
    this.data._isAnyPopupOpen = false;
  },
  closeAnyPopup: function (e, parent) {
    const popup = document.querySelector(parent);
    if (popup) {
      if (
        !popup.contains(e.target) &&
        !popup.contains(e.target.parentElement)
      ) {
        if (parent.includes("log")) {
          this.unshowLogPopup();
        }
        if (parent.includes("cart")) {
          this.unshowCartPopup();
        }
        if (parent.includes("pass")) {
          this.unshowPassChangePopup();
        }
        if (parent.includes("warning")) {
          this.unshowWarningPopup();
        }
      }
    }
  },
});
watchEffect(() => {
  if (popupsController.data._isAnyPopupOpen === true) {
    document.querySelector("body").classList.add("_scroll-wrapp-hide");
  } else {
    if (store.getters.IS_MOBILE_MENU_OPEN === true) {
      return
    } else {
      store.dispatch("CLOSE_MOBILE_MENU");
      document.querySelector("body").classList.remove("_scroll-wrapp-hide");
    }
  }
})
export default popupsController;
