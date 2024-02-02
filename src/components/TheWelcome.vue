<script>
import { useCounterStore } from "@/stores/counter";
import { mapActions, mapState, mapStores, mapWritableState } from "pinia";
import { defineComponent } from "vue";

export default defineComponent({
    computed: {
        // ...mapStores(useCounterStore), // mapStores一次性导入store，this会绑定一个[store名]Store
        ...mapState(useCounterStore, ['count', 'superState']),
        ...mapState(useCounterStore, {
            selfCount: 'count',
            // 你也可以写一个函数来获得对 store 的访问权
            double: store => store.count * 2,
            // 它可以访问 `this`，但它没有标注类型...
            magicValue(store) {
                return store.superState + store.count + this.double
            },
        }),
        // 可以访问组件中的 this.count，并允许设置它。如 this.count++
        // 与从 store.count 中读取的数据相同
        // ...mapWritableState(useCounterStore, ['count'])
    },
    methods: {
        ...mapActions(useCounterStore, ['increment']),
        handleClick() {
            // this.counterStore.increment()
            // this.counterStore.count++
            this.increment()
        }
    }
})
</script>

<template>
    <div>Conmponent is TheWelcome</div>
    <!-- <div>count is {{ counterStore.count }}</div> -->
    <div>count is {{ count }} / {{ selfCount }} / {{ double }}</div>
    <div>selfCount is {{ selfCount }}</div>
    <div>superState is {{ superState }}</div>
    <div>double is {{ double }}</div>
    <div>magicValue is {{ magicValue }}</div>
    <div>
        <button @click="handleClick">click</button>
    </div>
</template>
