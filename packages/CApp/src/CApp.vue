<template>
  <div class="c-app">@coemponents/app</div>
</template>

<script>
import CSidebar from '../CSidebar'
import CHeader from '../CHeader'
import COverlay from '../COverlay'

/**
 * The application's layout wrapper.
 */
export default {
  name: 'CApp',
  components: { CSidebar, CHeader, COverlay },

  props: {
    /**
     * Wheter tho show the sidebar or not.
     */
    showSidebar: {
      type: Boolean,
      required: true
    },

    /**
     * The items of the CSidebar
     */
    sidebarItems: {
      type: [Array, Object],
      default: () => ([])
    },

    /**
     * The height of the header.
     */
    headerHeight: {
      type: [String, Number],
      default: 70
    },

    /**
     * The height of header's subMenu section.
     */
    subMenuHeight: {
      type: [String, Number],
      default: 50
    }
  },

  data () {
    return {
      position: 0,
      lastPosition: 0,
      showHeader: true,
    }
  },

  computed: {
    contentMarginTop () {
      const menuHeight = +(this.headerHeight || 0) + +(this.subMenuHeight || 0)
      const result = this.showHeader ? menuHeight : this.subMenuHeight

      return result + 'px'
    }
  },

  methods: {
    handleScroll () {
      const { scrollTop, clientHeight, scrollHeight } = this.$refs.appContent
      this.lastPosition = this.position
      this.position = scrollTop

      if (scrollHeight <= window.innerHeight + this.headerHeight) {
        this.showHeader = true
      } else if (this.position < this.headerHeight) {
        this.showHeader = true
      } else if (this.position >= scrollHeight - clientHeight - this.headerHeight) {
        this.showHeader = false
      } else {
        this.showHeader = this.lastPosition > this.position
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/convenia.mixins.scss";

.c-app {
  position: relative;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;

  overflow: hidden;
  height: 100%;
  width: 100%;

  & > .sidebar {
    width: 260px;
    flex-shrink: 0;
    transition: width .5s;

    @include responsive (xs-mobile, tablet) { width: 0; }
  }

  & > .main {
    position: relative;
    flex-grow: 1;
    max-height: 100vh;

    & > .content {
      margin-top: var(--content-margin-top);
      height: calc(100vh - var(--content-margin-top));
      width: 100%;
      overflow-y: auto;

      transition: margin-top .3s, height .3s;
    }
  }
}
</style>
