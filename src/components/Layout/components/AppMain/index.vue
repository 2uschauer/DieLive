<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key"/>
    </transition>
  </section>
</template>
<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>
<style lang="scss" scoped>
.app-main{
  padding: 24px 24px;
  min-height: calc(100vh - 148px - 282px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
