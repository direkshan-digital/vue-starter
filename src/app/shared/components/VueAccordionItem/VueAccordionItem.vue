<template>
  <div :class="$style.vueAccordionItem">
    <h1 @click="click">Header</h1>
    <vue-collapse :show="show">
      <section>
        <slot />
      </section>
    </vue-collapse>
  </div>
</template>

<script lang="ts">
  import VueCollapse from '../VueCollapse/VueCollapse.vue';

  export default {
    name: 'VueAccordionItem',
    components: {
      VueCollapse,
    },
    props: {},
    data(): any {
      return {
        idx: null,
        open: false,
      };
    },
    computed: {
      show() {
        console.log(this.open);
        return this.open;
      }
    },
    methods: {
      click() {
        this.$parent.openItem(this.idx);
      },
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
