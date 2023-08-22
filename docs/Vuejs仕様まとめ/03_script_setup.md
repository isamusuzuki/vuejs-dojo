# script setup

作成日 2023/08/22

## 01. script setup とは

単一ファイルコンポーネントで Composition API を使ってコンパイルするときに、コードを短くできるシンタックスシュガー（糖衣構文）

[&lt;script setup&gt; | Vue.js](https://ja.vuejs.org/api/sfc-script-setup.html#script-setup)

Composition API の反対は Options API であるが、これは v2 時代の古いコードの書き方であって、今から覚える必要はない。よって Composition API が何かについても説明しない。このリポジトリに登場しているコードはすべて Composition API であるからだ

## 02. script setup のサンプルコード

src/avocado/App.vue の script ブロック

```html
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
    count.value += 1
}
const decrement = () => {
    count.value -= 1
}
</script>
```

これは、script setup を利用してコードを短くしている。本来のコードは以下の通り

```html
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const count = ref(0)

        const increment = () => {
            count.value += 1
        }
        const decrement = () => {
            count.value -= 1
        }

        return {
            count,
            increment,
            decrement,
        }
    }
})
</script>
```

=> コードが短くなってわかりやすいので、今後は積極的に利用していく

## 03. あえて script setup を使わないメリット

setup メソッドの中身だけを別ファイルに切り出すことができる。そのファイルは純粋なTypeScriptファイルになる

```html
<script lang="ts">
import { defineComponent } from 'vue'
import useCounter from './useCounter'

export default defineComponent({
    setup() {
        ...useCounter(),
    }
})
```

useCounter.ts

```javascript
import { ref } from 'vue'

export default () => {
    const count = ref(0)

    const increment = () => {
        count.value += 1
    }
    const decrement = () => {
        count.value -= 1
    }

    return {
        count,
        increment,
        decrement,
    }
}
```
