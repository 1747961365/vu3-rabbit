import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useCartStroe = defineStore('cart', () => {
    const cartList = ref([])

    const addCart = (goods) => {
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        {
            if (item) {
                item.count += goods.count
            } else {
                cartList.value.push(goods)
            }
        }
    }
    const delCart = (skuId) => {
        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(idx, 1)
    }

    const singleCheck = (skuId, selected) => {
        const item = cartList.value.find((item) => item.skuId === skuId)
        {
            item.selected = selected
        }
    }


    //计算属性
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
    return {
        cartList,
        addCart,
        delCart,
        singleCheck,
        allCount,
        allPrice,
    }
}, {
    persist: true,
})