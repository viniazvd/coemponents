import * as components from './packages/index.js'

const install = Vue => Object
  .entries(components)
  .forEach(([name, component]) => Vue.component(name, component))

export * from './packages/index.js'

export default install
