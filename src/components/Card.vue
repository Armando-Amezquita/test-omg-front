<script>
    export default {
        props: {
            name: {
                type: String
            },
            value: {
                type: Number
            },
            createdAt: {
                type: String
            },
            rating: {
                type: Number
            },
            id: {
                type: String
            }
        },
        data() {
            return {
                show: false,
                token: ''
            }
        },
        methods: {
            toogle(){
                console.log()
                this.show = !this.show
            },
            eliminar(){
                console.log('$this.route', this.$route.params)
                this.token = JSON.parse(localStorage.getItem('user')).token;

                fetch('http://localhost:3002/api/products/:id', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token,
                        'apikey': "admin"
                    },
                    params: JSON.stringify(this.$route.params.id)
                })
                .then(response => response.json())
                .then(data => {
                    if(data.status !== 200){
                        return alert(data.message)
                    }
                    this.getProducts()
                })
                .catch(err => console.log('err', err));
                console.log('click')
                console.log(this.id)
            }
        },
    }
</script>

<template>

    <img class="img" src="@/assets/pexels-cottonbro-studio-6804597.jpg" alt="Imagen">
    <div class="sub-menu-wrap" v-show="show">
        <div class="sub-menu">
            <div class="user-info">
                <table>
                    <tr class="edit-delete" >
                        <th > 
                            <img src="@/assets/icons/editar-texto.png" alt="Edit">
                        </th>
                        <th>
                            <p @click="eliminar">Edit</p>
                        </th>
                    </tr>
                    <hr>
                    <tr class="edit-delete">
                        <th>
                            <img src="@/assets/icons/garbage.png" alt="Delete">
                        </th>
                        <td> 
                            <p @click="eliminar">Delete</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <div>
        <p class="name">{{ name }}</p>
        <img src="@/assets/icons/mas1.png" alt="edit/delete" @click="toogle" />

    </div>
        <p class="price"> $ {{ value }}</p>
    <div class="time">
        <p> 
            <span><img src="@/assets/icons/tiempo.png" alt=""></span> 
            <span>created: </span>
            <span >{{ createdAt }}</span>
        </p>
    </div>
    <div>
        <p class="time"> 
            <span>Rating:</span> 
            <span> <img src="@/assets/icons/estrella.png" alt=""></span> 
            <span class="span-color"> {{ rating }} </span>    
        </p>
    </div>

</template>

<style scoped lang="scss">
    @import '@/assets/styles.scss';
    .name{
        font-size: 1.6rem;
        color: $darkGray;
    }
    .img{
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 1rem 2rem;
        position: relative;

        img{
            width: 1.5rem;
            height: 1.5rem;
        }
        img:hover{
            cursor: pointer;
        }

        p{
            font-size: 1.3rem;
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