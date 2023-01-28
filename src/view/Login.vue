<script >
    import HeaderLogin from '../components/HeaderLogin.vue';
    export default {
        components: {
            HeaderLogin
        },
        data() {
            return {
                email: '',
                password: '',
                check: undefined,
            }
        },
        mounted(){
            let user = localStorage.getItem("user");
            if(user){
                this.$router.push('/dashboard');
            }
        },
        methods: {
            navigateRedirect(){
                this.$router.push('/dashboard')
            },  
            loginUser(){
                let login = {
                    email: this.email,
                    password: this.password,
                }

                fetch('http://localhost:3002/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(login)
                })
                .then(response => response.json())
                .then(data => {
                    if(data.status !== 200){
                        return alert(data.message)
                    }
                    else{
                        localStorage.setItem("user", JSON.stringify(data.response));
                        // localStorage.getItem('user') => convertir a Json
                        return this.navigateRedirect()
                    }
                })
                .catch(err => console.log('err', err))
            },
        }
    }
</script>

<template>
    <main>
        <section class="left">
            <p>Logo</p>
            <h1>¡Welcome! <br/> Sign to Start</h1>
        </section>
        <section class="rigth">
            <HeaderLogin class="header" />

            <form @submit.prevent="loginUser">
                <p class="title-form">Enter your credentials</p>
                <label for="email"> Email Addres </label>
                <input v-model="email" type="text" name="email" id="email" placeholder="yourname@gmail.com">
                
                <label class="password" for="password"> Password <span>Forgot password?</span></label>
                <input v-model="password" type="text" name="password" id="password" placeholder="SmallTigger21">

                <div>
                    <input v-model="check" class="check" type="checkbox" name="check" id="check">
                    <label for="check">Keep me signed in</label>
                </div>
                <button type="submit">Login</button>

                <div>
                    <p>Not a member?</p>
                    <router-link to="/signup">Signup</router-link>
                </div>
            </form>
        </section>
    </main>
</template>

<style scoped lang="scss">

    @import '@/assets/styles.scss';

    main{
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
            padding: 3rem;
            width: 30rem;
            min-height: 100vh;
            background-color: $bgColor;
            color: white;

            h1{
                margin-top: 23rem;
            }
        }

        .rigth{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 70%;
            min-height: 100vh ;
            position: relative;

            .header{
                top: 2rem;
                right: 4rem;
                position: absolute;
            }
            form{
                width: 40rem;
                display: flex;
                flex-direction: column;
                .title-form{
                    font-size: 2rem;
                }

                label{
                    margin: 2rem 0 1rem 0;
                    font-size: 1.5rem;
                    color: $darkGray;
                }
                .password{
                    display: flex ;
                    justify-content: space-between;

                    span{
                        color: $bgColor;
                    }
                }
                input{
                    width: 100%;
                    height: 4rem;
                    padding: 2rem;
                    border-radius: 0.2rem;
                    border: 1px solid $lowGray;
                    outline: none;
                }

                button{
                    height: 4rem;
                    widows: 100%;
                    background-color: $bgColor;
                    color: white;
                    border-radius: .7rem;
                    border: none;
                    font-size: 2rem;
                    font-weight: bold;
                }

                div{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    text-align: left;
                    margin-top: 3rem;

                    label{
                        margin: 2rem 1rem;
                    }
                    input{
                        width: 1.5rem;
                    }
                    p{
                        font-size: 1.5rem;
                        margin-right: 1rem;
                        color: $darkGray;
                    }
                    a{
                        font-size: 1.5rem;
                        text-decoration: none;
                        color: $bgColor;
                    }
                }
            }
        }

    }
</style>