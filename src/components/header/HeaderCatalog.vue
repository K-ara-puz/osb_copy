<template>
    <div 
    class="header-catalog _anim-scroll">
        <div class="header-catalog__wrapper">
            <div class="header-catalog__category"
                v-for="el in this.catalogCategories"
                :key="el"
                @click="this.selectCategory(el.name)"
            >
            <span class="header-catalog__category__icon">
                <img :src="require('../../assets/icons/dark-theme/' + el.icon + '.webp')" alt="">
            </span>
             <div class="header-catalog__category__text">
                {{ el.name }}
             </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            catalogCategories: [
                {
                    name: "Одежда",
                    icon: "hanger"
                },
                {
                    name: "Аксессуары",
                    icon: "accessory"
                },
                {
                    name: "Все",
                    icon: "brand"
                }
            ]
        }
    },
    methods: {
        selectCategory(category) {
            this.$emit('category-selected', category)
        }
    }
}
</script>