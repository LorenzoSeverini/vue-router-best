<script>
import sourceData from '@/data.json'

export default {
    name: 'ExperienceShow',

    props: {
        id: {
            type: Number,
            required: true,
        },
        experienceSlug: {
            type: String,
            required: true,
        },
    },

    computed: {
        destination () {
            return sourceData.destinations.find(
                destination => destination.id === this.id
            )
        },

        experience (){
            return this.destination.experiences.find(
                experience => experience.slug === this.experienceSlug
            )
        },
    },
}
</script>

<template>
    <section>
        <h1>{{ experience.name }}</h1>
        <img :src="`/images/${experience.image}`" alt="experience.name">
        <p>{{ experience.description }}</p>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 20px;

    h1 {
        margin: 0;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        width: 250px;
        height: 150px;
        object-fit: cover;
        display: block;
    }

    p {
        margin: 1.25rem 0;
        text-align: center;

    }
}
</style>