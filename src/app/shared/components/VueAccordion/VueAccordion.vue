<template>
  <div :class="$style.vueAccordion">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    name: 'VueAccordion',
    components: {},
    props: {
      multi: {
        type: Boolean,
        required: false,
        default: false,
      }
    },
    data(): any {
      return {
        items: [],
        openItems: [],
      };
    },
    computed: {},
    methods: {
      openItem(idx: number) {
        if (this.multi) {

        } else {
          this.openItems = [idx];
        }

        this.handleItems();
      },
      handleItems() {
        this.items.forEach((item: any) => {
          item.$data.open = this.openItems.indexOf(item.$data.idx) > -1;
        });
      },
      register(item: any) {
        item.$data.idx = this.items.length;

        this.items.push(item);
        this.handleItems();
      },
    },
    beforeDestroy() {
      this.tabs = [];
      this.tabHeader = [];
      this.currentTab = 0;
    }
  };
</script>

<style lang="scss" module>
  .vueAccordion {
    display: block;
  }
</style>
