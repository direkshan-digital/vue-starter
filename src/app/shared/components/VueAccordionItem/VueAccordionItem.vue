<template>
  <div :class="$style.vueAccordionItem">
    <h1 @click="click">Header</h1>
    <slot v-if="open" />
    <collapse-animation>
      <slot v-if="open" />
    </collapse-animation>
  </div>
</template>

<script lang="ts">
  import CollapseAnimation from '../../animations/CollapseAnimation/CollapseAnimation.vue';

  export default {
    name: 'VueAccordionItem',
    components: {
      CollapseAnimation,
    },
    props: {},
    data(): any {
      return {
        idx: null,
        open: false,
      };
    },
    computed: {},
    methods: {
      click() {
        this.$parent.openItem(this.idx);
      }
    },
    created() {
      if (this.$parent) {
        this.$parent.register(this);
      }
    },
  };
</script>

<style lang="scss" module>
  .vueAccordionItem {
    display: block;
  }
</style>
