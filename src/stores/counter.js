import { defineStore } from "pinia";
import { ref, computed } from "vue";
// defineStore() 的第二个参数可接受两类值：Setup 函数或 Option 对象。

export const useCounterStore = defineStore("counter", {
  // 可以认为 
  // state 是 store 的数据 (data)
  // getters 是 store 的计算属性 (computed)
  // actions 则是方法 (methods)
  state: () => ({
    count: 0,
  }),
  getters: {
    superState(state) {
      return state.count * state.count
    }
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

// 在 Setup Store 中：
// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions
// 但是使用组合式函数会让 SSR 变得更加复杂。
export const useUserStore = defineStore("user", () => {
  const name = ref('leo');
  const level = ref(0);
  const toString = computed(() => `name: ${name.value},level: ${level.value}`);
  function levelUp() {
    level.value++;
  }

  return { name, level, toString, levelUp };
});

