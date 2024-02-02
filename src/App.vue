<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { useCounterStore, useUserStore } from './stores/counter';
const counter = useCounterStore();
counter.count++
// 自动补全
counter.$patch({ count: counter.count + 1 })
// 或使用action代替
counter.increment()

const user = useUserStore();
user.$subscribe((mutation, state) => {
  console.log('user subscribe now');
  // events
  // storeId : 'user'
  // type : 'direct'
  // payload: 传递给 user.$patch() 的补丁对象,只有用$patch函数时才会有这个参数
  console.log('mutation', mutation);
  console.log('state', state);
},
  // $subscribe可选的第二个参数，detached为true表示这个订阅是否随着组件卸载而取消订阅
  // detached单词意思是分离，所以当这个配置为true时表示页面卸载后订阅依旧保持
  { detached: true }
)
setTimeout(() => {
  user.$patch({
    name: 'zzl'
  })
}, 1000);


</script>

<template>
  <div class="wrapper">
    <HelloWorld msg="You did it!" />
  </div>
  <br>
  <TheWelcome />
  <br>

  <div> Current Count is {{ counter.count }}</div>
  <div>
    <span>User is {{ user.toString }}</span>
    <button @click="user.levelUp">level up</button>
  </div>
</template>

<style scoped></style>
