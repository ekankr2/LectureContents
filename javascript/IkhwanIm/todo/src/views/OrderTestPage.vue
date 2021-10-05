<template>
  <v-container>
    <table border="1">
      <tr v-for="(board,idx) in boards" v-bind:key="idx">
        <td align="center">
          <img :src="require(`@/assets/${board.img}`)">
        </td>
      </tr>
    </table>

    <form @submit.prevent="onSubmit">
      <h3>구매 양식</h3>
      <table>
        <tr>
          <td>구매자 성함</td>
          <td><input type="text" v-model="name"></td>
        </tr>
        <tr>
          <td>구매가격</td>
          <td><input type="text" v-model="cost" readonly></td>
        </tr>
      </table>

      <div>
        <button type="submit">구매</button>
        <router-link :to="{ name: 'Home' }">
          취소
        </router-link>
      </div>
    </form>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "ImageGalleryTestPage",
  data() {
    return {
      info: 'Spyder.jpg',
      boards: [
        {
          img: 'spyder.jpg'
        }
      ],
      name: '',
      cost: 100000000,
    }
  },
  methods: {
    onSubmit () {
        const { name, cost } = this
        axios.post('http://localhost:7777/ordertest/order', { name, cost })
            .then(res => {
                alert('주문 성공! - ' + res.data)
            })
            .catch(res => {
              alert(res.response.data.message)
            })
    },
  }
}
</script>

<style scoped>

</style>
