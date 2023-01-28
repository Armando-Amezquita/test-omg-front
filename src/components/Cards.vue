<script>

    import Modal from './Modal.vue';
    
    export default {
        components: {
            Modal
        }, 
        props: {
            products: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                show: false,
            }
        },
        methods: {
            toogle(){
                this.show = !this.show
            }
        },
    }
</script>

<template>
    <div v-if="products.length > 1">
        <article class="card" v-for="prod in products" :key="prod.id">
            <img src="@/assets/pexels-cottonbro-studio-6804597.jpg" alt="Imagen">
            <div class="sub-menu-wrap" v-show="show">
                <div class="sub-menu">
                    <div class="user-info">
                        <table>
                            <tr class="edit-delete" >
                                <th > 
                                    <img src="@/assets/icons/editar-texto.png" alt="Edit">
                                </th>
                                <th>
                                    <p @click="logout">Edit</p>
                                </th>
                            </tr>
                            <hr>
                            <tr class="edit-delete">
                                <th>
                                    <img src="@/assets/icons/garbage.png" alt="Delete">
                                </th>
                                <td> 
                                    <p @click="logout">Delete</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <p class="name">{{ prod.name }}</p>
                <img src="@/assets/icons/mas1.png" alt="edit/delete" @click="toogle" />

            </div>
                <p class="price"> $ {{ prod.value }}</p>
            <div class="time">
                <p> 
                    <span><img src="@/assets/icons/tiempo.png" alt=""></span> 
                    <span>created: </span>
                    <span >{{ prod.createdAt }}</span>
                </p>
            </div>
            <div>
                <p class="time"> 
                    <span>Rating:</span> 
                    <span> <img src="@/assets/icons/estrella.png" alt=""></span> 
                    <span class="span-color"> {{ prod.rating }} </span>    
                </p>
            </div>
        </article>
        <!-- <div class="sub-menu-wrap" v-show="show">
                <div class="sub-menu">
                    <div class="user-info">
                        <p @click="logout">Logout</p>
                        <p>Profile</p>
                    </div>
                </div>
            </div> -->
    </div>
    <div v-else class="title-2">
        <p>Please, create a new product... <br /> You don't have any <br /> product yet.</p>
    </div>
</template>

<style scoped lang="scss">

@import '@/assets/styles.scss';

    div{
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        article{
            display: flex;
            justify-content: space-between;
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

            .name{
                font-size: 1.6rem;
                color: $darkGray;
            }
            img{
                width: 100%;
                height: 13.5rem;
            }
            .price{
                font-size: 1.5rem;
                margin-left: 2rem;
            }
            .time{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                color: $darkGray;
                .span-color{
                    font-size: 2rem;
                    color: $bgColor;
                }
            }
            div{
                img{
                    width: 1.5rem;
                    height: 1.5rem;
                }
                img:hover{
                    cursor: pointer;
                }

                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding: 1rem 2rem;
                position: relative;

                .modal{
                    position: absolute;
                    width: 70%;
                    top: 0;
                    right: 0;
                    z-index: 999;
                }
                .fade-enter-from,
                .fade-leave-to {
                opacity: 0;
                }

                .fade-enter-active,
                .fade-leave-active {
                transition: opacity 0.5s ease;
                }
                p{
                    font-size: 1.3rem;
                }

            }
        }

        article:hover{
            width: 22rem;
            height: 29rem;
            box-shadow: 2px 4px 11px 0px rgb(0 0 0 / 75%);
            transform: translateY(5px);
        }
    }
    .title-2{
        p{
            font-size: 4rem;
            color: $bgColor;
        }   
    }
    .sub-menu-wrap{
        position: absolute;
        top: 16rem;
        right: 1rem;
        width: 16rem;
        color: #248AFF;
        z-index: 3;
            .sub-menu{
                background-color: $lowGray;
                border-radius: .5rem;
                min-height: 4rem;
                // padding: 1rem;
                .user-info{
                    padding: 0;
                    hr{
                        margin: .7rem 0;
                    }
                    .edit-delete{
                        display: flex;
                        justify-content: space-between;
                        align-items: center; 
                        width: 100%;   
                        th{
                            margin-right: 1.5rem;
                        }
                    }
                    p{
                        color: $darkGray;
                        transition: transform 0.5s;
                        margin-bottom: 1rem;
                    }
                    p:hover{
                        transform: translateX(5px);
                        cursor: pointer;
                    }
                }
            }
        }
</style>