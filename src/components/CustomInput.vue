<template>
  <div class="custom-input">
    <input
      class="custom-input__input"
      :class="this.inputClasses"
      :placeholder="this.inputPlaceholder"
      @focus="this.isFocus = true"
      @blur="this.isFocus = false"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      autocomplete="off"
    />
      <span
        v-if="this.errors.length > 0"
        class="custom-input__error"
        >{{ errors[0].$message }}
      </span>
  </div>
</template>
<script>
export default {
  props: {
    inputLabel: {
      type: String,
      default: "123",
    },
    helperPlaceholder: {
      type: String,
      default: "",
    },
    errors: {
      type: Array,
      default() {
        return [];
      },
    },
    modelValue: {},
    filledBg: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      isFocus: false
    }
  },
  computed: {
    isInputEmpty() {
        if (this.modelValue === "") {
            return true
        } else return false
    },
    inputClasses() {
      return {
        '_empty' : this.isInputEmpty === true,
        '_error' : this.errors.length > 0,
        '_success' : this.errors.length < 0 || this.errors.length === 0,
        '_filled' : this.filledBg === true,
      }
    },
    inputPlaceholder() {
      if (this.helperPlaceholder != "" && this.isFocus === true) {
        return this.helperPlaceholder
      }
      return this.inputLabel
    }
  },
};
</script>
