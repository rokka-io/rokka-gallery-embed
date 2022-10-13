<template>
  <a @click.capture="$emit('click')" class="inline-block cursor-pointer">
    <slot></slot>
  </a>
</template>
