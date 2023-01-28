<script>
    import ModalCreateProduct from './ModalCreateProduct.vue';
    export default {
        components: {
            ModalCreateProduct
        },  
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
            },
            getProducts: {
                type: Function
            }
        },
        data() {
            return {
                show: false,
                token: '',
                _id: '',
                showModal: false,
                namedb: "",
                valuedb: "",
                ratingdb: "",
            }
        },
        methods: {
            toogle(){
                this.show = !this.show
            },
            eliminar(){
                
                let obj = {
                    id: this.id
                }
                this.token = JSON.parse(localStorage.getItem('user')).token;

                // fetch('http://localhost:3002/api/products/delete', {
                fetch('https://test-omg-api-production.up.railway.app/api/products/delete', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token,
                        'apikey': "admin"
                    },
                    body: JSON.stringify(obj)
                })
                .then(response => response.json())
                .then(data => {
                    if(data.status !== 200){
                        return alert(data.message)
                    }
                    this.getProducts()
                })
                .catch(err => console.log('err', err));
            },

            update(){
                let updateProduct = {
                    id: this.id,
                    name: this.name,
                    value: this.valuedb,
                    rating: this.ratingdb,
                }
                this.token = JSON.parse(localStorage.getItem('user')).token;
                // fetch('http://localhost:3002/api/products/update', {
                fetch('https://test-omg-api-production.up.railway.app/api/products/update', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token,
                        'apikey': "admin"
                    },
                    body: JSON.stringify(updateProduct)
                })
                .then(response => response.json())
                .then(data => {
                    if(data.status !== 200){
                        return alert(data.message)
                    }
                    this.getProducts()
                })
                .catch(err => console.log('err', err));

                this.showModal = !this.showModal; 
            },
            
            close(){
                this.showModal = false
            },
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
                            <p @click="showModal = true">Edit</p>
                            <div class="telep">
                            <teleport to='#app'>
                                <ModalCreateProduct v-show="showModal" :close="close">
                                    <form @submit.prevent="update">
                                        <label class="name" for="name"> Name </label>
                                        <input v-model="namedb" type="text" name="name" id="name" placeholder="T-shirt">
                                        <label class="valuedb" for="valuedb"> Value </label>
                                        <input v-model="valuedb" type="number" name="valuedb" id="valuedb" placeholder="$200.0">
                                        <label class="rating" for="rating"> Rating </label>
                                        <input v-model="ratingdb" type="number" name="rating" id="rating" placeholder="1-5">
                                        <button type="submit">Update</button>
                                        
                                    </form>
                                </ModalCreateProduct>
                            </teleport>
                            </div>
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
        z-index: 1;
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
    form{
        label{
            margin: 1rem 0 ;
            font-size: 1.5rem;
            color: $darkGray;
        }
    
        input{
            width: 100%;
            height: 4rem;
            padding: 2rem;
            border-radius: 0.3rem;
            border: 1px solid $lowGray;
            outline: none;
            margin: 1rem 0;
        }

        .container-values{
            display: flex;
            justify-content: space-between;
            align-items: center;
            div{
                margin-right: 1rem;
            }
        }

        button{
            height: 4rem;
            width: 100%;
            border-radius: .7rem;
            color: white;
            background-color: $bgColor;
            border: none;
            font-size: 2rem;
            font-weight: bold;
            margin-top: 2rem;
        }
        button:hover{
            color: $bgColor;
            background-color: transparent;
            border: 1px solid $bgColor;
            transition: .5s ease-in-out;
        }
    }
    .telep{
        position: absolute;
        z-index: 4;
    }
</style>