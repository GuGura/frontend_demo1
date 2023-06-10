import {createStore} from "vuex";

const store = new createStore({
    state(){
        return{
            user:{}
        }
    },
    mutations:{
        setUser(state, value){
            state.user = value
        }
    }
})

export default store