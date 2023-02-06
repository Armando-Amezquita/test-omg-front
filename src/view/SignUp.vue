<script >
    import HeaderLogin from '../components/HeaderLogin.vue';
    import Button from '../components/Button.vue';
    export default {
        components: {
            HeaderLogin,
            Button
        },
        data() {
            return {
                fullname: '',
                identification_number: undefined,
                email: '',
                password: '',
                phone: undefined
            }
        },
        methods: {
            navigateRedirect(){
                this.$router.push('/')
            },  
            createUser(){
                let newUser = {
                    name: this.fullname,
                    identification_number: this.identification_number,
                    email: this.email,
                    password: this.password,
                    phone: this.phone
                }

                // fetch('http://localhost:3002/api/auth/signup', {
                fetch('https://test-omg-api-production.up.railway.app/api/auth/signup/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                .then(response => response.json())
                .then(data => {
                    if(data.status !== 200){
                        return alert(data.message)
                    }
                    else{
                        return this.navigateRedirect()
                    }
                })
                .catch(err => console.log('err', err))
            },
            login(){
                this.$router.push('/')
            }
        }
    }
</script>

<template>
    <main>
        <section class="left">
            <form @submit.prevent="createUser" >
                <div>
                    <p class="title-form">Register</p>
                </div>
                <label for="name"> Name </label>
                <input v-model="fullname" type="text" name="name" id="name" placeholder="Fullname">
                
                <label for="identification_number"> Identification number </label>
                <input v-model="identification_number" type="number" identification_number="identification_number" id="identification_number" placeholder="11233233">
                
                <label for="email"> Email Addres </label>
                <input v-model="email" type="text" name="email" id="email" placeholder="username@gmail.com">
                
                <label class="password" for="password"> Password </label>
                <input v-model="password" type="password" name="password" id="password" placeholder="SmallTigger21">
                
                <label class="cellphone" for="cellphone"> Cellphone </label>
                <input v-model="phone" type="number" name="cellphone" id="cellphone" placeholder="+1 767287">
                <Button> Sign up </Button>
                <div>
                    <p>Member?</p>
                    <router-link to="/">Login</router-link>
                </div>
            </form>
        </section>

        <section class="rigth">
            <router-link to="/" >
                <p class="logo">Logo</p>
            </router-link>
            <h1>¡Welcome! <br/> Sign to Start</h1>
        </section>
        
    </main>
</template>

<style scoped lang="scss">

    @import '@/assets/styles.scss';

    main{
        display: flex;
        justify-content: space-between;
        min-height: 100vh;
        width: 100%;
        background-color: $white;
        .rigth{
            padding: 3rem;
            width: 30rem;
            min-height: 100vh;
            background-color: $bgColor;
            color: $white;
            text-align: right;

            .logo{
                font-size: 3rem;
                font-weight: bold;
                color: $white;
            }
            h1{
                margin-top: 23rem;
            }

        }
        .left{
            display: flex;
            justify-content: center;
            padding-top: 2rem;
            width: 70%;
            form{
                width: 40rem;
                display: flex;
                flex-direction: column;
                .title-form{
                    font-size: 2rem;
                    font-weight: bold;
                    color: $darkBlue;
                }
    
                label{
                    margin: 2rem 0 1rem 0;
                    font-size: 1.5rem;
                    color: $darkGray;
                }

                input{
                    width: 100%;
                    height: 4rem;
                    padding: 2rem;
                    border-radius: 0.6rem;
                    border: 1px solid $darkGray;
                    outline: none;
                    background-color: $white;
                }
    
                div{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    text-align: left;
                    margin-top: 1.5rem;
                    p{
                        font-size: 1.5rem;
                        margin-right: 1rem;
                    }
                    a{
                        font-size: 1.5rem;
                        color: $bgColor;
                    }
                }
            }
            Button{
                margin-top: 3rem;
            }
        }
    }

</style>
