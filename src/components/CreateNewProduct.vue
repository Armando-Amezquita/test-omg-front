<script>
    import ModalCreateProduct from './ModalCreateProduct.vue';

    export default{
        components: {
            ModalCreateProduct
        },
        data() {
            return {
                showModal: false,
                name: '',
                value: undefined,
                rating: undefined,
                file: "",
                token: "",
                user: ""
            }
        },
        mounted(){
            let userDb = localStorage.getItem("user");
            if(!userDb){
                this.$router.push('/');
            }
            this.user = JSON.parse(localStorage.getItem('user'));
            this.token = JSON.parse(localStorage.getItem('user')).token;
        },
        methods: {
            close(){
                this.showModal = false
            },  
            submit(){

                let newProduct = {
                    name: this.name,
                    value: this.value,
                    rating: this.rating,
                    type: this.type,
                }
                fetch('http://localhost:3002/api/products/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token,
                        'apikey': "admin"
                    },
                    body: JSON.stringify(newProduct)
                })
                .then(response => response.json())
                .then(data => {
                    if(data.status !== 200){
                        return alert(data.message)
                    }
                })
                .catch(err => console.log('err', err));

                this.showModal = !this.showModal; 
            }
        }
    }
</script>

<template>
    <button class="show" @click="showModal = true">
        <img src="@/assets/icons/agregar.png" alt="notification" />
        Create
    </button>
    <teleport to='#app'>
        <ModalCreateProduct v-show="showModal" :close="close">
            <form @submit.prevent="submit">
                <label class="name" for="name"> Name </label>
                <input v-model="name" type="text" name="name" id="name" placeholder="T-shirt">
                
                <div class="container-values">
                    <div>
                        <label class="value" for="value"> Value </label>
                        <input v-model="value" type="number" name="value" id="value" placeholder="$200.0">
                    </div>
                    <div>
                        <label class="rating" for="rating"> Rating </label>
                        <input v-model="rating" type="number" name="rating" id="rating" placeholder="1-5">
                    </div>
                </div>
                
                         
                <button type="submit">Create</button>
                
            </form>
        </ModalCreateProduct>
    </teleport>
</template>

<style scoped lang="scss">

    @import '@/assets/styles.scss'; 
    .show{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 3rem;
        width: 10rem;
        background-color: $bgColor;
        color: white;
        border-radius: .7rem;
        border: none;
        font-size: 1.7rem;
        img{
            width: 1.4rem;
            height: 1.4rem;                
        }
    }

    form{
        label{
            margin: 1rem 0 ;
            font-size: 1.5rem;
            color: $darkGray;
        }

        .file{
            border: none;
            padding: 1rem;
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
</style>