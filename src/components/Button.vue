<script lang="ts" setup>
type ButtonVariant = 'primary' | 'accent' | 'secondary' | 'primary-ghost' | 'accent-ghost' | 'secondary-ghost';
type ButtonSize = 'sm' | 'base' | 'lg' | 'xs';
withDefaults(defineProps<{
  variant?: ButtonVariant,
  size?: ButtonSize,
}>(), {
  variant: 'primary',
  size: 'base'
});

const buttonStyles = new Map<ButtonVariant, string>([
  ['primary', 'bg-sky-600 text-white'],
  ['secondary', 'bg-zinc-600 text-white'],
  ['primary-ghost', 'bg-sky-100 text-sky-600'],
  ['secondary-ghost', 'bg-zinc-100 text-zinc-900'],
])

const buttonSizes = new Map<ButtonSize, string>([
  ['base', 'p-3 text-sm rounded-xl'],
  ['lg', 'p-4 text-base rounded-2xl '],
  ['sm', 'p-2 px-3 text-sm rounded-xl'],
  ['xs', 'p-2 px-3 text-xs rounded-xl']
])

</script>

<template>
  <button class="active:scale-95 cursor-pointer transition-all"
    :class="[buttonStyles.get(variant), buttonSizes.get(size)]">
    <slot />
  </button>
</template>
