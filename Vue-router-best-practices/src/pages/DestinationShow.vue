<script>
import sourceData  from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'
import GoBack from '@/components/GoBack.vue'
import { RouterView } from 'vue-router';

export default {
    name: 'DestinationShow',
    //  remove warning in console
    inheritAttrs: false,

    components: {
    ExperienceCard,
    ExperienceCard,
    GoBack,
    RouterView
},

    props: {
        id: {
            type: Number,
            required: true, 
        }
    },

    computed: {
        destination() {
            return sourceData.destinations.find(
                destination => destination.id === this.id
            )
        },
    },
}
</script>

<template>
    <div>
        <section v-if="destination" class="destination">
            <h1>{{ destination.name }}</h1>
            <GoBack />
            <div class="destination-details">
                <img :src="`/images/${destination.image}`" alt="destination.name">
                <p>{{ destination.description }}</p>
            </div>
        </section>
    
        <section class="experiences">
            <h2>Top Experiences in {{ destination.name }}</h2>
            <div class="cards">
                <router-link 
                    v-for="experience in destination.experiences"
                    :key="experience.slug"
                    :to="{ 
                        name: 'experience.show', 
                        params: {experienceSlug: experience.slug}
                    }"
                >
                    <ExperienceCard
                        :experience="experience"
                    />
                </router-link>
            </div>
            <RouterView />
        </section>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/partials/_variables.scss';

/* Destination Details */
.destination-details {
  display: flex;
  gap: 1.875rem;
  align-items: center;
  .destination-details img {
    border-radius: 4px;
    border: 3px solid $color-white;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
}

/* Experiences */
.experiences {
    padding: 3.125rem 0 3.125rem 0;
    margin-top: 3.125rem;
    border-top: 1px solid $color-white;
    box-shadow: 0px -1px 0px 0px $color-white;

    h2 {
        margin-bottom: 1.875rem;
    }

    .cards {
        display: flex;
        gap: 20px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
}

</style>