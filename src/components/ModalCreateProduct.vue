<script>
    export default{
        props: {
            close: {
                type: Function
            }
        },
    }
</script>

<template>
    <div class="modal">
        <div class="container">
            <div class="head">
                <p>Create new product</p>
                <button @click="close">
                    <img src="@/assets/icons/cancelar1.png" alt="close">
                </button>
            </div>
            <div class="body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

    @import '@/assets/styles.scss';
    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        min-height: 100vh;
        z-index: 2;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: white;
        .container{
            width: 40%;
            padding: 3rem;
            border: 2px solid $bgColor;
            border-radius: 3rem;
            box-shadow: 14px 12px 10px -8px rgb(0 0 0 / 62%);
            .head {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                box-sizing: border-box;
                margin-bottom: 3rem;
                p{
                    color:  $bgColor;
                    font-size: 2rem;
                }
                button{
                    border-radius: 5rem;
                    border: none;
                    img{
                        width: 3rem;
                        height: 3rem;
                    }
                }
            }
            
        }
    }

    

    p {
        margin: 0;
        font-size: 1.5rem;
        color: var(--brand-blue);
    }
</style>