<script >
    import { mapActions } from 'vuex';
    import HeaderLogin from '../components/HeaderLogin.vue';
    import Button from '../components/Button.vue';

    export default {
        components: {
            HeaderLogin,
            Button
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
            ...mapActions('user', ['loginDb']),

            navigateRedirect(){
                this.$router.push('/dashboard')
            },

            async loginUser(){
                let userLogin = {
                    email: this.email,
                    password: this.password
                }
                const user = await this.loginDb(userLogin);
                if(!user.status){
                    return alert(user.message)
                }
                localStorage.setItem("user", JSON.stringify(user.response));
                return this.navigateRedirect()
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
                <input v-model="password" type="password" name="password" id="password" placeholder="SmallTigger21">

                <div>
                    <input v-model="check" class="check" type="checkbox" name="check" id="check">
                    <label for="check">Keep me signed in</label>
                </div>
                <Button> Login </Button>

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
        background-color: $white;
        .left{
            padding: 3rem;
            width: 30rem;
            min-height: 100vh;
            background-color: $bgColor;
            color: $white;

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
                    font-weight: bold;
                    color: $darkBlue;
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