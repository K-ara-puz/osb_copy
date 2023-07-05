<template>
  <div
    class="log-popup"
    @click="
      this.$root.popupsController.closeAnyPopup($event, '.log-popup__wrapper')
    "
  >
    <div class="log-popup__wrapper">
      <div class="log-popup__front">
        <div class="log-popup__top-bar">
          <div class="log-popup__top-bar__title">Вход</div>
          <button @click="this.closePopup()" class="log-popup__top-bar__close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M23.707.293a1 1 0 0 0-1.414 0L12 10.586 1.707.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414L10.586 12 .293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 13.414l10.293 10.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12 23.707 1.707a1 1 0 0 0 0-1.414Z"
              />
            </svg>
          </button>
        </div>
        <form>
          <div class="log-popup__center-bar">
            <div class="log-popup__center-bar__inp">
              <CustomInput
                :inputType="'email'"
                :inputLabel="'Email'"
                :errors="this.vLog$.email.$errors"
                :modelValue="this.vLog$.email.$model"
                @update:modelValue="this.updateLogEmailValue"
              ></CustomInput>
            </div>
            <div class="log-popup__center-bar__password">
              <CustomInput
                :inputType="'password'"
                :inputLabel="'Пароль'"
                :errors="this.vLog$.password.$errors"
                :modelValue="this.vLog$.password.$model"
                @update:modelValue="newValue => this.vLog$.password.$model = newValue"
              ></CustomInput>
              <button type="button" @click="this.changeLogPasswordVisibility()">
                <svg xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M5.109 13.891C1.617 11.831 0 9 0 9s4-7 13-7c1.305 0 2.504.147 3.601.399l-.85.85A15.107 15.107 0 0 0 13 3C5 3 1.2 9 1.2 9s1.515 2.392 4.645 4.155l-.736.736zm4.29 1.71c1.097.252 2.296.399 3.601.399 9 0 13-7 13-7s-1.617-2.83-5.109-4.891l-.736.736C23.285 6.608 24.8 9 24.8 9S21 15 13 15c-.98 0-1.897-.09-2.752-.248l-.85.85zm7.5-7.5a4 4 0 0 1-4.797 4.797L13 12a2.99 2.99 0 0 0 2.121-.879A2.99 2.99 0 0 0 16 9l.899-.899zm-3-3a4 4 0 0 0-4.797 4.797L10 9c0-.768.293-1.536.879-2.121A2.99 2.99 0 0 1 13 6l.899-.899zM21 0 4 17l1 1L22 1Z"
                  />
                </svg>
              </button>
            </div>
            <div class="log-popup__center-bar__nav">
              <div class="log-popup__center-bar__nav__memory">
                <input
                  id="remember"
                  type="checkbox"
                  class="log-popup__center-bar__nav__memory__input"
                />
                <label for="remember">Запомнить меня</label>
              </div>
              <div class="log-popup__center-bar__nav__pass-forgot">
                <p>Забыли пароль?</p>
              </div>
            </div>
            <div class="log-popup__center-bar__submit">
              <GoogleLogin :callback="this.afterGoogleLogin"/>
              <button @click="this.logIn()" type="submit">
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
        <div class="log-popup__bottom-bar">
          <button
            @click="this.reversePopup()"
            class="log-popup__bottom-bar__registration"
          >
            <p>Регистрация</p>
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
      </div>
      <div class="log-popup__back">
        <div class="log-popup__back__top-bar">
          <div class="log-popup__back__top-bar__title">Регистрация</div>
          <button
            @click="this.closePopup()"
            class="log-popup__back__top-bar__close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M23.707.293a1 1 0 0 0-1.414 0L12 10.586 1.707.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414L10.586 12 .293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 13.414l10.293 10.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12 23.707 1.707a1 1 0 0 0 0-1.414Z"
              />
            </svg>
          </button>
        </div>
        <form>
          <div class="log-popup__back__center-bar">
            <div class="log-popup__back__center-bar__login">
              <CustomInput
                :inputType="'email'"
                :inputLabel="'Email'"
                :errors="this.vReg$.email.$errors"
                :modelValue="this.vReg$.email.$model"
                @update:modelValue="newValue => this.vReg$.email.$model = newValue"
              ></CustomInput>
            </div>
            <div class="log-popup__back__center-bar__password">
              <CustomInput
                :inputType="'password'"
                :inputLabel="'Пароль'"
                :errors="this.vReg$.password.$errors"
                :modelValue="this.vReg$.password.$model"
                @update:modelValue="newValue => this.vReg$.password.$model = newValue"
              ></CustomInput>
              <button type="button" @click="this.changeRegPasswordVisibility()">
                <svg xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M5.109 13.891C1.617 11.831 0 9 0 9s4-7 13-7c1.305 0 2.504.147 3.601.399l-.85.85A15.107 15.107 0 0 0 13 3C5 3 1.2 9 1.2 9s1.515 2.392 4.645 4.155l-.736.736zm4.29 1.71c1.097.252 2.296.399 3.601.399 9 0 13-7 13-7s-1.617-2.83-5.109-4.891l-.736.736C23.285 6.608 24.8 9 24.8 9S21 15 13 15c-.98 0-1.897-.09-2.752-.248l-.85.85zm7.5-7.5a4 4 0 0 1-4.797 4.797L13 12a2.99 2.99 0 0 0 2.121-.879A2.99 2.99 0 0 0 16 9l.899-.899zm-3-3a4 4 0 0 0-4.797 4.797L10 9c0-.768.293-1.536.879-2.121A2.99 2.99 0 0 1 13 6l.899-.899zM21 0 4 17l1 1L22 1Z"
                  />
                </svg>
              </button>
            </div>
            <div class="log-popup__back__center-bar__password_repeat">
              <CustomInput
                :inputType="'password'"
                :inputLabel="'Подтвердите пароль'"
                :errors="this.vReg$.confirmPass.$errors"
                :modelValue="this.vReg$.confirmPass.$model"
                @update:modelValue="newValue => this.vReg$.confirmPass.$model = newValue"
              ></CustomInput>
            </div>
            <div class="log-popup__back__center-bar__submit">
              <button type="submit" @click="this.register()">
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
        <div class="log-popup__back__bottom-bar">
          <button
            @click="this.reversePopup()"
            class="log-popup__back__bottom-bar__registration"
          >
            <p>Вход</p>
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
      </div>
    </div>
  </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { helpers, required, email, sameAs } from "@vuelidate/validators";
import CustomInput from "../CustomInput.vue";
import { reactive, computed } from "vue";
export default {
  setup() {
    const stateForLog = reactive({
      email: "",
      password: "",
    });
    const stateForReg = reactive({
      email: "",
      password: "",
      confirmPass: "",
    })
    const rulesForLog = computed(() => ({
      email: {
        required: helpers.withMessage("Поле обязательно для заполнения", required),
        email: helpers.withMessage("Введите валидный адрес электронной почты", email),
      },
      password: {
        required: helpers.withMessage("Поле обязательно для заполнения", required),
      }
    }));
    const rulesForReg = computed(() => ({
      email: {
        required: helpers.withMessage("Поле обязательно для заполнения", required),
        email: helpers.withMessage("Введите валидный адрес электронной почты", email),
      },
      password: {
        required: helpers.withMessage("Поле обязательно для заполнения", required),
      },
      confirmPass: {
        required: helpers.withMessage("Поле обязательно для заполнения", required),
        sameAs: helpers.withMessage("Пароли должны совпадать", sameAs(stateForReg.password))
      }
    }));
    const vLog$ = useVuelidate(rulesForLog, stateForLog);
    const vReg$ = useVuelidate(rulesForReg, stateForReg);

    return { vLog$, vReg$ };
  },
  methods: {
    updateLogEmailValue(newValue) {
      this.vLog$.email.$model = newValue;
    },
    reversePopup() {
      let target = document.querySelector(".log-popup__wrapper");
      target.classList.toggle("log-popup__wrapper_reverse");
      this.resetValidate();
    },
    resetValidate() {
      this.vLog$.$reset();
      this.vReg$.$reset();
    },
    async logIn() {
      const res = await this.vLog$.$validate();
      if (res) {
        alert("form submitted");
        this.$root.popupsController.unshowLogPopup();
      } else return
    },
    afterGoogleLogin(v) {
      console.log(v);
    },
    async register() {
      const res = await this.vReg$.$validate();
      if (res) {
        alert("form submitted");
        this.$root.popupsController.unshowLogPopup();
      } else return
    },
    changeLogPasswordVisibility() {
      const password = document.querySelector(
        ".log-popup__center-bar__password input"
      );
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
    },
    changeRegPasswordVisibility() {
      let passwords = [];
      const password = document.querySelector(
        ".log-popup__back__center-bar__password input"
      );
      const confirmPass = document.querySelector(".log-popup__back__center-bar__password_repeat input")
      passwords.push(password);
      passwords.push(confirmPass);
      passwords.forEach((el) => {
        let type = el.getAttribute("type") === "password" ? "text" : "password";
        el.setAttribute("type", type);
      });
    },
    closePopup() {
      this.$root.popupsController.unshowLogPopup();
    },
  },
  components: { CustomInput },
};
</script>