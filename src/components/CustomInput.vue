<template>
  <div class="custom-input">
    <input
      class="custom-input__input"
      :class="this.inputClasses"
      :placeholder="this.inputLabel"
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
    errors: {
      type: Array,
      default() {
        return [];
      },
    },
    modelValue: {},
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
        '_success' : this.errors.length < 0 || this.errors.length === 0
      }
    }
  },
};
</script>
