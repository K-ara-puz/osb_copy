<template>
  <div class="nth-found">{{this.title}}</div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default() {
                return "Ничего не найдено"
            }
        }
    }
}
</script>
<style lang="scss">
.nth-found {
    text-align: center;
    color: var(--text-gray);
    border: 1px solid rgba(255, 0, 0, 0.226);
    text-align: center;
    padding: 15px 25px;
    display: inline-flex;
    font-weight: 100;
    letter-spacing: 2px;
    word-spacing: 8px;
    font-weight: 200;
}
</style>