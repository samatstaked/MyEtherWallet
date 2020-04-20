<template>
  <div class="ray">
    <back-button />
  </div>
</template>

<script>
import BackButton from '@/layouts/InterfaceLayout/components/BackButton';
import ContentBlockTitle from '@/layouts/InterfaceLayout/components/ContentBlockTitle';


export default {
  components: {
    'back-button': BackButton,
    'title': ContentBlockTitle
  },
  props: {
    tokensWithBalance: {
      type: Array,
      default: function () {
        return [];
      }
    },
    title: {
      type: String,
      default: '0'
    }
  },
  data() {
    return {
      title: 'hello'
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'RAY.scss';
</style>