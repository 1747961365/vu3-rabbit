import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useCartStroe = defineStore('cart', () => {
    const cartList = ref([])

    //添加购物车
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
    //删除购物车
    const delCart = (skuId) => {
        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(idx, 1)
    }

    //是否选中
    const singleCheck = (skuId, selected) => {
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }
    //全选
    const  allCheck =(selected)=>{
        cartList.value.forEach(item => item.selected = selected)
    }

    //是否全选
     const isAll =computed(()=>cartList.value.every((item)=>item.selected))


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
        isAll,
        allCheck
    }
}, {
    persist: true,
})