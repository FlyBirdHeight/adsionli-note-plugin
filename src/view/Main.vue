<template>
    <div>
        <h1>Adsionli</h1>
    </div>
</template>
<script lang="ts">
export default {
    name: "Main"
}
</script>
<script lang="ts" setup>
import { ref, defineProps, defineEmits, computed, watch, reactive, watchEffect } from 'vue'
const props = defineProps()
const emit = defineEmits([])
</script>
<style lang="scss" scoped></style>
