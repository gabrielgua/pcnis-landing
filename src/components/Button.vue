<script lang="ts" setup>
type ButtonVariant =
  'primary' | 'accent' | 'secondary' |
  'primary-ghost' | 'accent-ghost' | 'secondary-ghost' |
  'primary-link';
type ButtonSize = 'sm' | 'base' | 'lg' | 'xs';
withDefaults(defineProps<{
  variant?: ButtonVariant,
  size?: ButtonSize,
}>(), {
  variant: 'primary',
  size: 'base'
});

const buttonStyles = new Map<ButtonVariant, string>([
  ['primary', 'bg-primary text-white'],
  ['accent', 'bg-accent text-white'],
  ['secondary', 'bg-secondary text-white'],
  ['primary-ghost', 'bg-primary/10 text-primary'],
  ['accent-ghost', 'bg-accent/10 text-accent'],
  ['secondary-ghost', 'bg-secondary/10 text-zinc-900'],
  ['primary-link', 'bg-transparent text-primary hover:underline underline-offset-3']
])

const buttonSizes = new Map<ButtonSize, string>([
  ['base', 'p-3 text-sm rounded-xl'],
  ['lg', 'p-4 text-base rounded-2xl '],
  ['sm', 'p-2 px-3 text-sm rounded-xl'],
  ['xs', 'p-2 px-3 text-xs rounded-xl']
])

</script>

<template>
  <button class="flex items-center gap-4 active:scale-95 cursor-pointer transition-all"
    :class="[buttonStyles.get(variant), buttonSizes.get(size)]">
    <slot />
  </button>
</template>
