<template>
  <div class="rokka-gallery-error--container">
    <h3 class="rokka-gallery-error--text">{{ $t('error') }}</h3>
  </div>
</template>
<style lang="scss">
.rokka-gallery {
  &-error {
    &--container {
      padding: 16px;
      text-align: center;
    }
    &--text {
      font-size: 16px;
      font-weight: 700;
    }
  }
}
</style>
