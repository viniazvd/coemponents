import * as components from './packages/index.js'
const ACard = () => import('@coemponents/card')
const ATitle = () => import('@coemponents/title')

const install = Vue => Object
  .entries(components)
  .forEach(([name, component]) => Vue.component(name, component))

// export * from './packages/index.js'

export {
  ACard,
  ATitle
}

export default install
