import { login } from "@/api/user"

export const user = {
    namespaced: true,
    state(){
        return{
            userDb: {},
        }
    },
    getters: {
    },
    mutations: {
        setUserDb(state, payload){
            state.userDb = payload
        },
    },
    actions: {
        loginDb: async({ commit }, payload) => {
            const { email, password } = payload
            const response = await login(email, password);
            commit('setUserDb', response)
            return response;
        },
    },
}