<script>

    import Modal from './Modal.vue';
    import Card from './Card.vue';
    
    export default {
        components: {
            Modal,
            Card
        }, 
        props: {
            products: {
                type: Array,
                default: () => []
            },
            getProducts: {
                type: Function,
            }
        },
    }
</script>

<template>
    <div v-if="products.length > 0">
        <article class="card" v-for="prod in products" :key="prod.id">
            <!-- <router-link :to="`/dashboard/${prod._id}`"> -->
                <Card 
                :id="prod._id"
                :name="prod.name"
                :value="prod.value"
                :createdAt="prod.createdAt"
                :rating="prod.rating"
                :getProducts="getProducts"
                />
            <!-- </router-link> -->
        </article>
    </div>
    <div v-else class="title-2">
        <p>Create a new product...</p>
    </div>
</template>

<style scoped lang="scss">

@import '@/assets/styles.scss';

    div{
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        article{
            @extend .display_Flex;
            flex-direction: column;
            width: 18rem;
            height: 26rem;
            margin-top: 2rem;
            margin-right: 4rem;
            border-radius: 2rem;
            transition: transform 1s;
            box-shadow: 2px 4px 11px 0px rgb(0 0 0 / 75%);
            position: relative;
            background-color: white;
            a{
                text-decoration: none;
            }
        }
    }
    .title-2{
        p{
            font-size: 4rem;
            color: $bgColor;
        }   
    }

</style>