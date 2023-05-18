<template>
  <div class="ac-settings">
    <PassChangePopup
      v-if="this.$root.popupsController.data._isPassChangePopupOpen === true"
    ></PassChangePopup>?
    <WarningPopup
      v-if="this.$root.popupsController.data._isWarningPopupOpen === true"
      :warning-title="'Вы точно хотите безвозвратно удалить аккаунт?'"
    >
    </WarningPopup>
    <div class="ac-settings__top-bar">
      <AccountCustomNav
        class="ac-settings__top-bar__back-nav"
        :prev-btn-title="this.pageName"
      ></AccountCustomNav>
      <button
        @click="this.editProfileData()"
        class="ac-settings__top-bar__edit-btn"
      >
        <svg viewBox="0 0 40 40">
          <path d="m12 25 3 3 15-15-3-3-15 15zm-1 1 3 3-4 1z" class="st0" />
        </svg>
      </button>
    </div>
    <div class="ac-settings__main">
      <div v-if="isEditActive === false" class="ac-settings__main__profile">
        <div
          v-for="field in this.profileFields"
          :key="field.field"
          class="ac-settings__main__profile__field"
        >
          <p class="ac-settings__main__profile__field__title">
            {{ field.field }}
          </p>
          <p class="ac-settings__main__profile__field__value">
            {{ field.value }}
          </p>
        </div>
      </div>
      <div v-else class="ac-settings__main__profile_edit">
        <form class="ac-settings__main__profile_edit__fields">
          <div
            v-for="field in this.editProfileFields"
            :key="field.field"
            class="ac-settings__main__profile_edit__fields__field"
          >
            <p class="ac-settings__main__profile_edit__fields__field__title">
              {{ field.field }}
              <span v-if="field.required">*</span>
            </p>
            <input
              :type="field.type"
              :placeholder="field.placeholder"
              class="ac-settings__main__profile_edit__fields__field__value"
            />
          </div>
        </form>
        <div class="ac-settings__main__profile_edit__bottom-nav">
          <CustomBtn
            :title="'Отмена'"
            @click="this.cancelProfileEdit()"
            :gray="true"
            class="ac-settings__main__profile_edit__bottom-nav__btn"
          >
          </CustomBtn>
          <CustomBtn
            :title="'Сохранить'"
            :success="true"
            class="ac-settings__main__profile_edit__bottom-nav__btn"
          >
          </CustomBtn>
        </div>
      </div>
      <div class="ac-settings__main__wallet">
        <div class="ac-settings__main__wallet__title">Кошелёк</div>
        <div class="ac-settings__main__wallet__add-card">
          <button class="ac-settings__main__wallet__add-card__btn"></button>
          <p class="ac-settings__main__wallet__add-card__btn-title">
            Добавить карту
          </p>
        </div>
      </div>
    </div>
    <div class="ac-settings__bottom-bar">
      <CustomBtn
        :title="'Изменить пароль'"
        :gray-rounded="true"
        @click="openPasswordEditPopup()"
        class="ac-settings__bottom-bar__btn"
      >
      </CustomBtn>
      <CustomBtn
        :title="'Удалить аккаунт'"
        :gray-rounded="true"
        @click="openWarningPopup()"
        class="ac-settings__bottom-bar__btn"
      >
      </CustomBtn>
    </div>
  </div>
</template>
<script>
import CustomBtn from "../CustomBtn.vue";
import AccountCustomNav from "./AccountCustomNav.vue";
import PassChangePopup from "../popups/PassChangePopup.vue";
import WarningPopup from "../popups/WarningPopup.vue";
export default {
  props: {
    activeUser: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      pageName: "Настройки профиля",
      isEditActive: false,
      isPassEditPopupVisible: false,
      profileFields: [
        {
          field: "Имя",
          value: "Виктория Оксенюк",
          type: "text",
          required: true,
          placeholder: "ФИО",
        },
        {
          field: "Почта",
          value: "mis.viktoriya@hotmail.com",
          type: "email",
          required: true,
          placeholder: "example@gmail.com",
        },
        {
          field: "Пароль",
          value: "123456789",
          type: "password",
          placeholder: "********",
        },
        {
          field: "Адрес",
          value: "Украина, Одесса",
          type: "text",
          placeholder: "Страна, Город",
        },
        {
          field: "Пол",
          value: "не указан",
          type: "text",
          placeholder: "не указан",
        },
        {
          field: "Номер телефона",
          value: "+38 093 322 00 58",
          type: "tel",
          placeholder: "xxx-xxx-xxxx",
        },
      ],
    };
  },
  components: {
    AccountCustomNav,
    CustomBtn,
    PassChangePopup,
    WarningPopup
  },
  computed: {
    editProfileFields() {
      let res = [];
      this.profileFields.forEach((el) => {
        if (el.field === "Пароль") {
          return;
        } else {
          res.push(el);
        }
      });
      return res;
    },
  },
  methods: {
    editProfileData() {
      this.isEditActive = true;
    },
    cancelProfileEdit() {
      this.isEditActive = false;
    },
    openPasswordEditPopup() {
      this.$root.popupsController.showPassChangePopup();
    },
    openWarningPopup() {
      this.$root.popupsController.showWarningPopup();
    }
  },
};
</script>
<style lang="scss">
@import "../../assets/styles/components-styles/account-page/account-settings.scss";
</style>
