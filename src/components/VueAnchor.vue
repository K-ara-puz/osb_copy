<template>
    <button @click="this.toPageTop()" class="anchor">
    </button>
</template>
<script>
    export default {
        methods: {
            toPageTop() {
                console.log("fff");
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        }
    }
</script>
<style lang="scss">
.anchor {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(54, 54, 97, 0.1);
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
        content: "";
        color: #fff;
        width: 15px;
        height: 15px;
        border-left: 1px solid #fff;
        border-top: 1px solid #fff;
        transform: translateY(25%) rotate(45deg);   
    }
}
</style>