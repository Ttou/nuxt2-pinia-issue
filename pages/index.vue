<template>
  <div :class="$style.view">
    <h2>{{title}}</h2>
    <p>{{count}}</p>
    <button :class="$style.btn" @click="handleClick">
      点击
    </button>
  </div>
</template>

<script lang="ts">
import { useMainStore } from '~~/store'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const mainStore = useMainStore()

    const count = computed(() => mainStore.count)

    function handleClick() {
      mainStore.add()
    }

    return {
      count,
      handleClick
    }
  }
})
</script>

<style module>
.view {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  min-height: 100vh;
  padding-bottom: 60px;
  box-sizing: border-box;
}

.btn {
  width: 80px;
}
</style>
