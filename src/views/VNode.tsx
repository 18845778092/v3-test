import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    vnode: Object
  },
  setup(props) {
    return () => {
      return props.vnode
    }
  }
})
