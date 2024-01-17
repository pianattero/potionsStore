// this file fixes typing errors on using CSS variables in Vue template
// https://github.com/vuejs/vue-next/issues/4741#issuecomment-936275184
// https://github.com/guansss/penlab-client/blob/05d1a2d1e523774e2844c6864205ccad935bef87/src/style.d.ts

import { CSSProperties } from 'vue'

declare module 'vue' {
    interface CSSProperties {
        [k: `--${string}`]: string
        'text-align'?: any
    }
}