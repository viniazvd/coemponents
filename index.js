import * as components from './packages/index.js'

export default {
  install (Vue, opts) {
    const hasComponentNames = opts && opts.componentNames && opts.componentNames.length

    Object
      .keys(hasComponentNames ? opts.componentNames : components)
      .forEach(name => {
        if (typeof Vue.component === 'function') {
          Vue.component(name, components[name])
        }
      })
  }

  // ...components
}

export * from './packages/index.js'
