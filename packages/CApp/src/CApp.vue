<template>
  <div class="c-app">@coemponents/app</div>
</template>

<script>
/**
 * The application's layout wrapper.
 */
export default {
  name: 'CApp'
}
</script>

<style lang="scss">
@import "../../../styles/convenia/mixins.scss";

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
