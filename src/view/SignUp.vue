<script >
    import HeaderLogin from '../components/HeaderLogin.vue';
    export default {
        components: {
            HeaderLogin
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
                this.$router.push('/login')
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
        <form @submit.prevent="createUser" >
            <div>
                <p class="title-form">Register</p>
                <p>Logo</p>
            </div>
            <label for="name"> Name </label>
            <input v-model="fullname" type="text" name="name" id="name" placeholder="Fullname">
            
            <label for="identification_number"> Identification number </label>
            <input v-model="identification_number" type="number" identification_number="identification_number" id="identification_number" placeholder="11233233">
            
            <label for="email"> Email Addres </label>
            <input v-model="email" type="text" name="email" id="email" placeholder="yourname@gmail.com">
            
            <label class="password" for="password"> Password </label>
            <input v-model="password" type="password" name="password" id="password" placeholder="SmallTigger21">
            
            <label class="cellphone" for="cellphone"> Cellphone </label>
            <input v-model="phone" type="number" name="cellphone" id="cellphone" placeholder="+1 767287">

            <button type="submit">Sign up</button>
            
        </form>
    </main>
</template>

<style scoped lang="scss">

    @import '@/assets/styles.scss';

    main{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
        
        form{
            display: flex;
            justify-content: center;
            flex-direction: column; 
            width: 40%;
            padding: 3rem;
            border: 2px solid $bgColor;
            border-radius: 3rem;
            box-shadow: 14px 12px 10px -8px rgb(0 0 0 / 62%);
            div{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            p, .title-form{
                font-size: 2rem;
                font-weight: bold;
                margin-bottom: 1.5rem;
                color: $bgColor;
            }

            label{
                margin: 1rem 0 1rem 0;
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
    }

</style>
