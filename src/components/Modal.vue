<template>
    <div >
        <li> <img src="@/assets/icons/editar.png" alt=""> Edit</li>
        <li> <img src="@/assets/icons/estrella.png" alt=""> Delete</li>
    </div>
</template>

<style scoped lang="scss">

    @import '../assets/styles.scss';
    div{
        @extend .display_Flex;
        justify-content: center;
        flex-direction: column;
        background-color: $darkGray;
        
        
        li{
            display: flex;

            align-items: center;
            font-size: 1.5rem;
            margin-bottom: 1rem;

            
            img{
                margin-right: 2rem;
            }
        }
        li:hover{
            cursor: pointer;
        }

    }
    img{
        width: 1.5rem;
        height: 1.5rem;
    }
</style>