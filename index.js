import * as components from './packages/index.js'

const defineComponent = (Vue, [name, component]) => console.log(Vue, name, component) || Vue.component(name, component)

const install = Vue => Object
  .entries(components)
  .forEach(defineComponent)

export * from './packages/index.js'

export default install
