<template>
    <section class="section">
        <article class="message">
            <div class="message-header">
                <p>Message</p>
            </div>
            <div class="message-body">
                <div> {{ message }} </div>
            </div>
        </article>
    </section>
</template>
<script>
export default {
    name: 'GeneralMessage',
    props: ['message']
}
</script>