import { useMainStore } from '~~/store'

import styles from './index.module.css'

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
  },
  render() {
    return (
      <div>
        <h2 class={styles.title}>{this.title}</h2>
        <p>{this.count}</p>
        <button class={styles.btn} onClick={this.handleClick}>
          点击
        </button>
      </div>
    )
  }
})
