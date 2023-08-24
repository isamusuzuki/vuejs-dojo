# Vue Router で ページ遷移する

作成日 2023/08/24

## 01. Vue Router とは

Vue Router は Vue.js 公式のルーターで、SPA（シングルページアプリケーション）を開発する上で欠かせないルーティング（ページ遷移）を実現する

公式サイト => [Vue Router | The official Router for Vue.js](https://router.vuejs.org/)

公式ドキュメント => [Introduction | Vue Router](https://router.vuejs.org/introduction.html)

## 02. サンプルコード

```text
--src/
    |--pages/
    |   |--First.vue
    |   `--Second.vue
    |--router/
    |   `--index.ts
    |--App.vue
    `--index.ts
```

src/router/index.ts

```javascript
import { createRouter, createWebHashHistory } from 'vue-router'
import First from '../pages/First.vue'
import Second from '../pages/Second.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/first' },
    { path: '/first', name: '1', component: First },
    { path: '/second', name: '2', component: Second },
  ],
})
```

src/App.vue

```html
<template>
  <ul>
    <li v-bind:class="{ 'is-active': isActive1 }">
      <router-link to="/first">First</router-link>
    </li>
    <li v-bind:class="{ 'is-active': isActive2 }">
      <router-link to="/second">Second</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const isActive1 = computed(() => route.name === '1')
  const isActive2 = computed(() => route.name === '2')
</script>
```

src/index.ts

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
```
