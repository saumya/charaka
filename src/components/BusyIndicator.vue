<template>
    <div class="mb-1">
        <progress class="progress is-small is-info" max="100" v-if="isBusy">60%</progress>
        <progress class="progress is-small is-info" max="100" value="0" v-else>60%</progress>
    </div>
</template>
<script>
export default {
    name: 'BusyIndicator',
    props: ['isBusy']
}
</script>