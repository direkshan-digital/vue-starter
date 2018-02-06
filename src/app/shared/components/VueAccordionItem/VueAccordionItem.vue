<template>
  <div :class="$style.vueAccordionItem">
    <div :class="$style.header" @click="click">
      {{title}}
      <i :class="iconClasses"></i>
    </div>
    <vue-collapse :show="show">
      <section :class="$style.body">
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
    props: {
      title: {
        type: String,
        required: true,
      },
      initOpen: {
        type: Boolean,
        required: false,
        default: false,
      }
    },
    data(): any {
      return {
        idx: null,
        open: false,
      };
    },
    computed: {
      show() {
        return this.open || this.initOpen;
      },
      iconClasses() {
        const classes = [this.$style.icon];

        if (this.show) {
          classes.push(this.$style.open);
        }

        return classes;
      },
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
  @import "../../styles";

  .vueAccordionItem {
    display: block;
  }

  .header {
    background: $panel-bg;
    box-shadow: $panel-shadow;
    padding:    $grid-unit * 2;
    border-top: 1px solid lighten($bg-color, 10%);
    position:   relative;
    z-index:    1;
    cursor:     pointer;
  }

  .icon {
    position:   absolute;
    margin-top: 4px;
    right:      24px;

    &:before, &:after {
      content:          "";
      transition:       all 0.25s ease-in-out;
      position:         absolute;
      background-color: $brand-accent;
      width:            2px;
      height:           13px;
    }

    &:before {
      transform: translate(4px, 0) rotate(45deg);
    }

    &:after {
      transform: translate(-4px, 0) rotate(-45deg)
    }

    &.open {
      &:before {
        transform: translate(-4px, 0) rotate(45deg);
      }

      &:after {
        transform: translate(4px, 0) rotate(-45deg)
      }
    }
  }

  .body {
    padding:  $grid-unit * 2;
    position: relative;
    z-index:  0;
  }
</style>
