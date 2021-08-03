<template>
  <v-container grid-list-md>
    <form @submit.prevent="onSubmit">
      <v-row justify="center">
      <h3 >회원 가입</h3>
      </v-row>
      <v-layout row wrap>
        <v-row justify="center">
        <v-flex xs12 md8>
          <v-text-field label="ID" v-model="id" required>
          </v-text-field>
        </v-flex>

        <v-flex xs12 md8>
          <v-text-field label="Password" v-model="pw"
                        type="password" required>
          </v-text-field>
        </v-flex>
        </v-row>
      </v-layout>
      <v-row justify="center">
      <div>
        <button type="submit">가입하기</button>
        <router-link :to="{ name: 'BoardListPage' }">
          취소
        </router-link>
      </div>
      </v-row>
    </form>
  </v-container>
</template>

<script>
export default {
  name: "JPAMemberRegisterForm",
  data () {
    return {
      id: '',
      pw: '',
    }
  },
  methods: {
    onSubmit () {
      const { id, pw } = this
      this.$emit('submit', { id, pw })
    }
  }
}
</script>

<style scoped>

</style>