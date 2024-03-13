---
hello: world
---

# 目录
<script setup>
// import { ref } from 'vue'
import { useData } from 'vitepress'
const { theme } = useData()

// const count = ref(0)
</script>
<!-- <pre> {{theme.nav}} </pre> -->

<div v-for="item in theme.nav">
  <div v-if="item.text === '前端'">
    <p v-for="i in item.items"> <a :href="i.link">{{ i.text }}</a> </p>
  </div>
</div>


<style module>
a {
  cursor: pointer;
}
</style>