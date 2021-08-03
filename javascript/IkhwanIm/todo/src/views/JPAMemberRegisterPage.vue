<template>
  <div>
  <j-p-a-member-register-form @submit="onSubmit"></j-p-a-member-register-form>
  </div>
</template>

<script>
import JPAMemberRegisterForm from "../components/member/JPAMemberRegisterForm";
import axios from "axios";
export default {
  name: "JPAMemberRegisterPage",
  components: {JPAMemberRegisterForm},
  methods: {
    onSubmit (payload) {
      const { id, pw } = payload
      axios.post('http://localhost:7777/vuejpamember/register', { id, pw })
          .then(res => {
            alert('가입 성공! - ' + res)
          })
          .catch(res => {
            alert(res.response.data.message)
          })
    }
  }
}
</script>

<style scoped>

</style>