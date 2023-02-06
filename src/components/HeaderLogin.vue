<script>
    import Button from './Button.vue';
    export default{
        components: {
            Button
        }
    }

</script>

<template>
    <header>
        <nav>
            <ul>
                <li>No employer account yet?</li>
                <li>
                    <router-link to="/signup">
                        <Button> Register </Button>
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">

    @import '@/assets/styles.scss'; 
    header{
        width: 28rem;
        nav{
            ul{
                @extend .display_Flex;
                li{
                    font-size: 1.4rem;
                    color: $darkGray;
                    button{
                        width: 11rem;
                        font-size: 1.4rem;
                        background-color: $white;
                        color: $bgColor;
                        border: none;
                        border: 1px solid $bgColor;
                    }
                    button:hover{
                        color: $white;
                        background-color: $bgColor;
                        transition: .5s ease-in-out;
                    }
                }
            }

        }
    }
</style>