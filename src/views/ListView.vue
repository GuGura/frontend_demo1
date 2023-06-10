<template>
  <div class="container mt-3">
    <h1 class="display-1 text-center">사용자 목록</h1>
    <div class="btn-group">
      <router-link to="/user/save" class="btn btn-primary">사용자 추가</router-link>
    </div>
    <table class="table table-hover mt-3">
      <thead class="table-dark">
      <tr>
        <th>이름</th>
        <th>이메일</th>
        <th>가입날짜</th>
      </tr>
      </thead>
      <tbody>
      <tr class="cursor-pointer" v-for="row in result"
          v-bind:key="row.no" v-on:click="href(row)">
        <td>{{ row.name }}</td>
        <td>{{ row.email }}</td>
        <td>{{ row.regDate }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import axios from "axios";
import store from "@/store";

export default {
  name: 'ListView',
  data() {
    return {
      result: []
    }
  },
  created() {
    console.log(store)
    this.getDate()
  },
  methods: {
    getDate() {
      axios
          .post(process.env.VUE_APP_BASEURL + '/findAll')
          .then((response) => {this.result = response.data.result})
          .catch((error) => {console.log(error)})
    },
    href(row){
      console.log(row)
      store.commit('setUser',row)
      sessionStorage.setItem('setUser',this.base64())
      this.$router.push({name: 'SelectView'})
    },
    base64(user){
      return window.btoa(encodeURIComponent(JSON.stringify(user)))
    }
  }
}
</script>

<style scoped>

</style>