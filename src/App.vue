<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { useCounterStore, useCounterStorePlus } from './stores/counter';
const counter = useCounterStore();
counter.count++
// 自动补全
counter.$patch({ count: counter.count + 1 })
// 或使用action代替
counter.increment()


const counterPlus = useCounterStorePlus();
console.log('counterPlus', counterPlus);
counterPlus.increment()
</script>

<template>
  <div class="wrapper">
    <HelloWorld msg="You did it!" />
  </div>
  <br>
  <TheWelcome />
  <br>

  <div>
    Current Count is {{ counter.count }} / {{ counterPlus.count }}
  </div>
</template>

<style scoped></style>
