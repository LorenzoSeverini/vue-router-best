<script>

export default {
    name: 'ExperienceCard',

    props: {
        experience: {
            type: Object,
            required: true,
        }
    },
}

</script>

<template>
    <div class="card">
        <img :src="`/images/${experience.image}`" alt="experience.name">
        <span class="card__text">
            <h3>{{ experience.name }}</h3>
        </span>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/partials/variables.scss';

.card {
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    transition: 0.2s ease transform;;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
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

    .card__text {
        width: 100%;
        padding: 1.25rem;
        background-color: rgba(0, 0, 0, 0.5);
        color: $color-white;
        text-align: center;
        transition: 0.2s ease background-color;
        display: block;
        padding: 10px;

        h3 {
            margin: 0;
            font-size: 1.25rem;
            font-weight: 500;
        }

        &:hover {
            background-color: rgba(0, 0, 0, 0.7);
        }
    }
}
</style>