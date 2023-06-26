<template>
  <div class="call-order">
    <div class="call-order__container">
      <form class="call-order__form">
        <p class="call-order__form__title">Заказ звонка</p>
        <CustomInput
          :inputType="'text'"
          :inputLabel="'Имя'"
          :errors="this.vUserData$.name.$errors"
          :modelValue="this.vUserData$.name.$model"
          @update:modelValue="
            (newValue) => (this.vUserData$.name.$model = newValue)
          "
        >
        </CustomInput>
        <CustomInput
          :inputType="'tel'"
          :inputLabel="'Номер телефона'"
          :errors="this.vUserData$.phoneNumber.$errors"
          :modelValue="this.vUserData$.phoneNumber.$model"
          @update:modelValue="
            (newValue) => (this.vUserData$.phoneNumber.$model = newValue)
          "
        >
        </CustomInput>
        <button
          @click="this.sendCallOrder"
          class="call-order__form__submit _anim-scroll _anim-no-hide"
        >
          <CustomBtn :title="'Заказать'" :purple="true"></CustomBtn>
        </button>
      </form>
    </div>
    <WarningPopup
        v-if="this.isOrderDelivered === true && this.$root.popupsController.data._isWarningPopupOpen === true"
        :warningTitle="'Заявка успешно отправлена. Ожидайте звонка от оператора!'"
    >
    </WarningPopup>
    <WarningPopup
        v-if="this.isOrderDelivered === false && this.$root.popupsController.data._isWarningPopupOpen === true"
        :warningTitle="'Сервис временно не доступен'"
    >
    </WarningPopup>
  </div>
</template>
<script>
import CustomBtn from "../CustomBtn.vue";
import CustomInput from "../CustomInput.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import WarningPopup from "../popups/WarningPopup.vue";

export default {
  setup() {
    const userCallbackData = reactive({
      name: "",
      phoneNumber: "",
    });
    const phoneNumberReg = (value) => {
      const reg =
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
      return reg.test(value);
    };
    const rulesForUserCallbackData = computed(() => ({
      name: {
        required: helpers.withMessage(
          "Поле обязательно для заполнения",
          required
        ),
      },
      phoneNumber: {
        required: helpers.withMessage(
          "Поле обязательно для заполнения",
          required
        ),
        phoneNumberReg: helpers.withMessage(
          "Введите корректный номер телефона",
          phoneNumberReg
        ),
      },
    }));
    const vUserData$ = useVuelidate(rulesForUserCallbackData, userCallbackData);

    return { userCallbackData, vUserData$ };
  },
  data() {
    return {
        isOrderDelivered: null,
    }
  },
  components: { CustomInput, CustomBtn, WarningPopup },
  methods: {
    async sendCallOrder(e) {
      e.preventDefault();
      this.vUserData$.$validate();
    },
    messageConstructorForBot() {
      let userData = {
        name: this.userCallbackData.name,
        phoneNumber: this.userCallbackData.phoneNumber,
      };
      let prependSearchString = `<strong>**Заявка на обратный звонок:**</strong>
Имя: ${userData.name}
Номер телефона: ${userData.phoneNumber}`;
      let res = encodeURIComponent(prependSearchString);
      return res;
    },
  }
};
</script>
