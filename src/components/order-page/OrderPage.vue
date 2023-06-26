<template>
  <div class="make-order">
    <keep-alive>
      <form action="" class="make-order__form">
        <div class="make-order__header">Заказ №{{ this.orderNumber }}</div>
        <div class="make-order__account">
          <div class="make-order__account__top-bar">
            <div class="make-order__account__top-bar__section-type">
              Контактные данные
            </div>
            <button @click="this.openLogPopup()">Я зарегистрирован</button>
          </div>
          <div
            v-if="this.accountType === 'new'"
            class="make-order__account__new"
          >
            <CustomInput
              v-for="input in this.accountFields"
              :key="input.type"
              :filledBg="true"
              :inputLabel="input.title"
              :helperPlaceholder="input.helperPlaceholder"
              :modelValue="this.accountVuelidateFields[input.type]"
              @update:modelValue="
                (newValue) =>
                  (this.vuelidateAccountFields[input.type].$model = newValue)
              "
              :errors="this.vuelidateAccountFields[input.type].$errors"
            ></CustomInput>
            <CustomBtn :success="true" :title="'Запомнить данные'"></CustomBtn>
          </div>
          <div v-else class="make-order__account__exist"></div>
        </div>
        <div class="make-order__products">
          <div class="make-order__products__container">
            <div class="make-order__products__top-bar">
              <div class="make-order__products__top-bar__section-type">
                Выбранные товары
              </div>
              <button @click="this.editCartProducts()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                  <path
                    d="m12 25 3 3 15-15-3-3-15 15zm-1 1 3 3-4 1z"
                    class="st0"
                  />
                </svg>
                Изменить
              </button>
            </div>
            <div class="make-order__products__main">
              <div
                class="make-order__products__main__product mk-order-product"
                v-for="product in this.CART"
                :key="product.id"
              >
                <div class="mk-order-product__img">
                  <img
                    :src="
                      require('../../assets/products-images/small/' +
                        product.image +
                        '.webp')
                    "
                  />
                </div>
                <div class="mk-order-product__details">
                  <div class="mk-order-product__details__top">
                    <div class="mk-order-product__details__top__left">
                      Название
                    </div>
                    <div class="mk-order-product__details__top__right">
                      <div class="mk-order-product__details__top__right__title">
                        Цена
                      </div>
                      <div class="mk-order-product__details__top__right__title">
                        Количество
                      </div>
                      <div class="mk-order-product__details__top__right__title">
                        Сумма
                      </div>
                    </div>
                  </div>
                  <div class="mk-order-product__details__bottom">
                    <div
                      @click="this.routeToProductCard(product.id)"
                      class="mk-order-product__details__bottom__left"
                      style="cursor: pointer"
                    >
                      {{ product.name }}
                    </div>
                    <div class="mk-order-product__details__bottom__right">
                      <div
                        class="mk-order-product__details__bottom__right__value"
                      >
                        <div
                          class="mk-order-product__details__bottom__right__value__price"
                        >
                          <div v-if="!product.newPrice" class="">
                            {{ product.price }}
                          </div>
                          <div
                            v-else
                            class="mk-order-product__details__bottom__right__value__price_new"
                          >
                            {{ product.newPrice }}
                          </div>
                          <span>{{ this.CURRENCY }}</span>
                        </div>
                        <div
                          v-if="product.newPrice"
                          class="mk-order-product__details__bottom__right__value__old-price"
                        >
                          {{ product.price }}
                        </div>
                      </div>
                      <div
                        class="mk-order-product__details__bottom__right__value"
                      >
                        {{ product.cartQty }}
                      </div>
                      <div
                        class="mk-order-product__details__bottom__right__value"
                      >
                        {{
                          (product.newPrice
                            ? product.newPrice
                            : product.price) * product.cartQty
                        }}.00<span>{{ this.CURRENCY }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mk-order-product__details-mobile">
                  <div
                    @click="this.routeToProductCard(product.id)"
                    class="mk-order-product__details-mobile__title"
                  >
                    {{ product.name }}
                  </div>
                  <div class="mk-order-product__details-mobile__list">
                    <div class="mk-order-product__details-mobile__list__li">
                      <div
                        class="mk-order-product__details-mobile__list__li__key"
                      >
                        Цена
                      </div>
                      <div
                        class="mk-order-product__details-mobile__list__li__value"
                      >
                        <div
                          class="mk-order-product__details-mobile__list__li__value__price__container"
                        >
                          <div
                            v-if="!product.newPrice"
                            class="mk-order-product__details-mobile__list__li__value__price"
                          >
                            {{ product.price }}
                          </div>
                          <div
                            v-else
                            class="mk-order-product__details-mobile__list__li__value__price_new"
                          >
                            {{ product.newPrice }}
                          </div>
                          <span>{{ this.CURRENCY }}</span>
                        </div>
                        <div
                          v-if="product.newPrice"
                          class="mk-order-product__details-mobile__list__li__value__old-price"
                        >
                          {{ product.price }}
                        </div>
                      </div>
                    </div>
                    <div class="mk-order-product__details-mobile__list__li">
                      <div
                        class="mk-order-product__details-mobile__list__li__key"
                      >
                        Количество
                      </div>
                      <div
                        class="mk-order-product__details-mobile__list__li__value"
                      >
                        {{ product.cartQty }}
                      </div>
                    </div>
                    <div class="mk-order-product__details-mobile__list__li">
                      <div
                        class="mk-order-product__details-mobile__list__li__key"
                      >
                        Сумма
                      </div>
                      <div
                        class="mk-order-product__details-mobile__list__li__value"
                      >
                        {{
                          (product.newPrice
                            ? product.newPrice
                            : product.price) * product.cartQty
                        }}.00<span>{{ this.CURRENCY }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="make-order__delivery">
          <div class="make-order__delivery__container">
            <div class="make-order__delivery__top-bar">
              <div class="make-order__delivery__top-bar__section-type">
                Доставка
              </div>
            </div>
          </div>
        </div>
        <div class="make-order__receiver">
          <div class="make-order__receiver__container">
            <div class="make-order__receiver__top-bar">
              <div class="make-order__receiver__top-bar__section-type">
                Данные получателя
              </div>
            </div>
            <div class="make-order__receiver__fields">
              <CustomInput
                v-for="input in this.receiverData"
                :key="input.type"
                :filledBg="true"
                :inputLabel="input.title"
                :helperPlaceholder="input.helperPlaceholder"
                :errors="this.vuelidateReceiverFields[input.type].$errors"
                :modelValue="this.receiverVuelidateFields[input.type]"
                @update:modelValue="
                  (newValue) =>
                    (this.vuelidateReceiverFields[input.type].$model = newValue)
                "
                class="make-order__receiver__fields__field"
              ></CustomInput>
            </div>
          </div>
        </div>
        <div class="make-order__summary">
          <div class="make-order__summary__container">
            <div
              class="make-order__summary__row make-order__summary__prs-count"
            >
              <div class="make-order__summary__row__title">Всего товаров</div>
              <div class="make-order__summary__row__value">
                {{ this.orderedProductsCount }}
              </div>
            </div>
            <div class="make-order__summary__row make-order__summary__sum">
              <div class="make-order__summary__row__title">На сумму</div>
              <div class="make-order__summary__row__value">
                {{ this.allProductsSum }} {{ this.CURRENCY }}
              </div>
            </div>
            <div
              class="make-order__summary__row make-order__summary__delivery-sum"
            >
              <div class="make-order__summary__row__title">
                Сумма за доставку
              </div>
              <div class="make-order__summary__row__value">
                По тарифам перевозчика
              </div>
            </div>
            <div class="make-order__summary__row make-order__summary__all-sum">
              <div class="make-order__summary__row__title">Всего к оплате</div>
              <div class="make-order__summary__row__value">
                {{ this.allProductsSum }} {{ this.CURRENCY }}
              </div>
            </div>
            <CustomBtn
              @click="this.applyOrder"
              :success="true"
              :title="'Подтвердить заказ'"
            ></CustomBtn>
          </div>
        </div>
      </form>
    </keep-alive>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import CustomBtn from "../CustomBtn.vue";
import CustomInput from "../CustomInput.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, email } from "@vuelidate/validators";
import { computed, reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    const ukranianPhoneNumberValidator = (value) => {
      const reg = /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/;
      return reg.test(value);
    };
    let accountVuelidateFields = reactive({
      name: "",
      phoneNumber: "",
      surname: "",
      city: "",
      email: "",
    });
    let receiverVuelidateFields = reactive({
      name: "",
      surname: "",
      father: "",
      phoneNumber: "",
    });
    const rulesForAccountData = computed(() => ({
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
        ukranianPhoneNumberValidator: helpers.withMessage(
          "Введите корректный номер телефона",
          ukranianPhoneNumberValidator
        ),
      },
      surname: {
        required: helpers.withMessage(
          "Поле обязательно для заполнения",
          required
        ),
      },
      city: {
        required: helpers.withMessage(
          "Поле обязательно для заполнения",
          required
        ),
      },
      email: {
        required: helpers.withMessage(
          "Поле обязательно для заполнения",
          required
        ),
        email: helpers.withMessage(
          "Введите корректный адрес электронной почты",
          email
        ),
      },
    }));
    let rulesForReceiverData = computed(() => ({
      name: {
        required: helpers.withMessage(
          "Поле обязательно для заполнения",
          required
        ),
      },
      surname: {
        required: helpers.withMessage(
          "Поле обязательно для заполнения",
          required
        ),
      },
      father: {
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
        ukranianPhoneNumberValidator: helpers.withMessage(
          "Введите корректный номер телефона",
          ukranianPhoneNumberValidator
        ),
      },
    }));
    const vuelidateReceiverFields = useVuelidate(
      rulesForReceiverData,
      receiverVuelidateFields
    );

    const vuelidateAccountFields = useVuelidate(
      rulesForAccountData,
      accountVuelidateFields
    );
    return {
      vuelidateAccountFields,
      vuelidateReceiverFields,
      accountVuelidateFields,
      receiverVuelidateFields,
    };
  },
  data() {
    return {
      orderNumber: 1,
      accountType: "new",
      accountFields: [
        {
          type: "name",
          title: "Имя",
        },
        {
          type: "phoneNumber",
          title: "номер телефона",
          helperPlaceholder: "+380",
        },
        {
          type: "surname",
          title: "Фамилия",
        },
        {
          type: "email",
          title: "Электронная почта",
          helperPlaceholder: "example@gmail.com",
        },
        {
          type: "city",
          title: "город",
        },
      ],
      receiverData: [
        {
          type: "name",
          title: "Имя",
        },
        {
          type: "surname",
          title: "Фамилия",
        },
        {
          type: "father",
          title: "отчество",
        },
        {
          type: "phoneNumber",
          title: "номер телефона",
          helperPlaceholder: "+380",
        },
      ],
      isOrderSendSuccess: false,
    };
  },
  components: { CustomInput, CustomBtn },
  computed: {
    ...mapGetters(["CART", "CURRENCY"]),
    orderedProductsCount() {
      let res = 0;
      this.CART.forEach((el) => {
        res += el.cartQty;
      });
      return res;
    },
    allProductsSum() {
      let sum = 0;
      this.CART.forEach((el) => {
        let price = Number(el.newPrice ? el.newPrice : el.price);
        sum += price * el.cartQty;
      });
      return sum.toFixed(2);
    },
  },
  methods: {
    editCartProducts() {
      this.$root.popupsController.showCartPopup();
    },
    openLogPopup() {
      this.$root.popupsController.showLogPopup();
    },
    async applyOrder(e) {
      let form = document.querySelector(".make-order__form");

      e.preventDefault();

      let isAccountFieldsValid = await this.vuelidateAccountFields.$validate();
      let isReceiverFieldsValid =
        await this.vuelidateReceiverFields.$validate();

      if (isAccountFieldsValid && isReceiverFieldsValid) {
        let orderData = this.prependDataToSendOrder();
        this.sendOrder(orderData);
        form.submit();
        alert("form submitted successful");
      }
    },
    routeToProductCard(id) {
      this.$router.push({
        name: "pr-card",
        params: { id: id },
      });
    },
    prependDataToSendOrder() {
      let orderData = {
        userId: "1dhg928J",
        contacts: this.accountVuelidateFields,
        products: [],
        orderSum: this.allProductsSum,
        delivery: "",
        receiverData: this.receiverVuelidateFields,
      };
      this.CART.forEach((el) => {
        let pr = {
          id: el.id,
          count: el.cartQty,
        };
        orderData.products.push(pr);
      });
      let productsString = this.prependOrderProductsText(orderData.products);
      let receiverDataString = this.prependReceiverDataText(
        orderData.receiverData
      );
      let prependSearchString = `<strong>**ЗАКАЗ**</strong>

<strong>* Контактные данные:</strong>
  Имя: ${orderData.contacts.name}
  Номер телефона: ${orderData.contacts.phoneNumber}

<strong>* Товары:</strong> ${productsString}
<strong>* Доставка:</strong>
-

<strong>* Данные получателя:</strong> ${receiverDataString}
<strong>* Общая сумма заказа:</strong> ${orderData.orderSum} ${this.CURRENCY}
`;

      let res = encodeURIComponent(prependSearchString);
      return res;
    },
    prependOrderProductsText(products) {
      let resString = "";
      products.forEach((el) => {
        let row = "";
        row = `
  ID продукта: ${el.id}
  Количество: ${el.count}
        `;
        resString = resString + row;
      });
      return resString;
    },
    prependReceiverDataText(data) {
      let resString = `
  Имя: ${data.name}
  Фамилия: ${data.surname}
  Отчество: ${data.father}
  Номер телефона: ${data.phoneNumber}
      `;
      return resString;
    },
    sendOrder(orderData) {
      axios
        .post(
          `https://api.telegram.org/bot1516078387:AAFWpK7aN9bDXc4EMgfht13BKZq0Kopsvnc/sendMessage?chat_id=570413765&text=${orderData}&parse_mode=html`
        )
        .then(() => {
          this.isOrderSendSuccess = true;
        })
        .catch(() => {
          this.isOrderSendSuccess = false;
        });
    },
  },
};
</script>
