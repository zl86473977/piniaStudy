<script>
import { useCounterStore, useCounterStorePlus } from "@/stores/counter";
import { mapActions, mapState, mapStores } from "pinia";
import { defineComponent } from "vue";

export default defineComponent({
    computed: {
        // ...mapStores(useCounterStore, useCounterStorePlus),
        ...mapState(useCounterStore, ['count']),
    },
    methods: {
        ...mapActions(useCounterStore, ['increment']),
        handleClick() {
            this.increment()
        }
    }
})
</script>

<template>
    <div>Conmponent is TheWelcome</div>
    <div>count is {{ count }}</div>
    <div>
        <button @click="handleClick">click</button>
    </div>
</template>
