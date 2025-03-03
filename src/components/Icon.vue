<script lang="ts" setup>
type IconSize = 'lg' | 'md' | 'sm';
withDefaults(defineProps<{ icon: string, size?: IconSize }>(), {
  size: 'md'
});

const iconSizes = new Map<IconSize, string>([
  ['sm', 'text-sm'],
  ['md', 'text-base'],
  ['lg', 'text-lg']
])

</script>
<template>
  <faIcon :icon="icon" :class="iconSizes.get(size)"></faIcon>
</template>
