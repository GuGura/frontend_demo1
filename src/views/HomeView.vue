<template>
  <div class="home">
    <a href="/user">사용자 목록</a>
    <br/>
    <button @:click="getData">데이터 호출</button>
    <button @:click="postList">리스트 호출</button>
    <button @:click="updateUser">사용자 수정</button>
    <button @:click="deleteUser">사용자 삭제</button>
    <button @:click="putUser">사용자 생성</button>
  </div>
</template>

<script>

import axios from "axios";

const uForm = {
  no: 1,
  name: '테스트',
  email: 'test@email.com',
  pwd: '1234',
  gender: true
}
const params = {
  'params': {no: 1}
}
export default {
  name: 'HomeView',
  methods: {
    getData() {
      axios.get('http://localhost:8082/')
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
    },
    postList() {
      axios.post('http://localhost:8082/findAll')
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
    },
    updateUser() {
      axios.post('http://localhost:8082/editById', uForm)
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
    },
    deleteUser() {
      axios.delete('http://localhost:8082/delete', params)
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
    },
    putUser(){
      axios.put('http://localhost:8082/save', uForm)
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }
}
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
