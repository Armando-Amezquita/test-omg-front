<template>
    <header>
        <nav>
            <ul>
                <li>No employer account yet?</li>
                <li>
                    <button type="button"> 
                        <router-link class="link" to="/signup">Register</router-link>
                    </button>
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
                display: flex;
                justify-content: space-between;
                align-items: center;
            
                li{
                    font-size: 1.4rem;
                    color: $darkGray;
                    
                    a{
                        text-decoration: none;
                        color: $bgColor;
                    }
                    button{
                        width: 11rem;
                        line-height: 22px;
                        border: 2px solid $bgColor;
                        background-color: transparent;
                        padding: .2rem 0;
                        border-radius: .5rem;
                        color: $bgColor;
                    }
                }
            }

        }
    }
</style>