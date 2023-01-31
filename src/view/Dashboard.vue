<script>
    import Header from '../components/Header.vue';
    import Cards from '../components/Cards.vue';

    export default{
        components: {
            Header,
            Cards,

        },
        data() {
            return {
                products: [],
                token: '',
                user: ''
            }
        },
        mounted(){
            let userDb = localStorage.getItem("user");
            if(!userDb){
                this.$router.push('/');
            }
            this.user = JSON.parse(localStorage.getItem('user'));
            this.token = JSON.parse(localStorage.getItem('user')).token;
            this.getProducts();
        },
        methods: {
            getProducts(){
                // fetch('http://localhost:3002/api/products/', {
                fetch('https://test-omg-api-production.up.railway.app/api/products/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token,
                        'apikey': "admin"
                    },
                })
                .then(response => response.json())
                .then(data => {
                    if(data.status !== 200){
                        return alert(data.message)
                    }
                    else{
                        console.log('data', data)
                        this.products = data.products
                    }
                })
                .catch(err => console.log('err', err))
            }
        },


    }
</script>
<template>
    <Header class="header" :user="user" :getProducts="getProducts"> </Header>
    <main>
        <Cards :products="products" :getProducts="getProducts"  />
    </main>
</template>

<style scoped lang="scss">
    @import '../assets/styles.scss';


    main{
        display: flex;
        width: 100%;
        height: 100vh;
        padding: 5rem 7rem;
        background-color: $lowGray;

    }
</style>