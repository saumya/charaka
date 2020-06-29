<template>
    <div>
        Doctor Active UI
        <div>
            {{ loginDoctorObj }}
        </div>
        
    </div>
</template>
<script>
export default {
    name: "DoctorUIActiveHome",
    props: [ 'loginDoctorObj' ]
}
</script>