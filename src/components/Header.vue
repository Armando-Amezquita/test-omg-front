<script>
    import CreateNewProduct from './CreateNewProduct.vue';

    export default {
        props: {
            user: {
                type: Object
            }
        },
        data() {
            return {
                show: false,
            }
        },
        components: {
            CreateNewProduct,
        },
        methods: {
            toogle(){
                this.show = !this.show
            },
            logout(){
                localStorage.clear()
                this.$router.push('/');
            }
        }
    }
</script>

<template>
    <nav >
        <form >
            <label>
                <input type="search" placeholder="search"> 
            </label>
        </form>
        <ul>
            <li>
                <CreateNewProduct /> 
            </li>
            <li><img src="@/assets/icons/activo.png" alt="notification"/></li>
            <li>{{ user.name? user.name : "name" }}</li>
            <li>
                <img @click="toogle" class="profile" src="@/assets/icons/usuario.png" alt="User" />
                <div class="sub-menu-wrap" v-show="show">
                    <div class="sub-menu">
                        <div class="user-info">
                            <p @click="logout">Logout</p>
                            <hr>
                            <p>Profile</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>

@import '@/assets/styles.scss';  

nav{
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    // box-shadow: 0px 20px 39px 20px rgba(0,0,0,0.62);
    form{
        label{
            img{
                width: 1.5rem;
                height: 1.5rem;
            }
            input{
                width: 25rem;
                height: 3rem;
                padding-left: 2rem;
                border-radius: 1rem;
                border: 1px solid gray;
            }
        }
    }
    
    ul{
        width: 30%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .sub-menu-wrap{
            position: absolute;
            top: 6rem;
            right: 2rem;
            width: 12rem;
            color: $bgColor;
            text-align: center;
            .sub-menu{
                background-color: white;
                border-radius: .5rem;
                min-height: 4rem;
                padding: 1rem;
                .user-info{
                    hr{
                        margin: 1.2rem 0;
                    }
                    p{
                        transition: transform 0.5s;
                    }
                    p:hover{
                        transform: translateX(5px);
                        cursor: pointer;
                    }
                }
            }
        }

        li{
            font-size: 1.5rem;
            cursor: pointer;
            
            img{
                width: 2rem;
                height: 2rem;
            }
            .profile{
                width: 4rem;
                height: 4rem;
                cursor: pointer;
            }
        }
    }
}
</style>