<template>
    <el-form label-width="80px"
             :model="loginForm">
        <el-form-item label="username">
            <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="password">
            <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="login">Login</el-button>
    </el-form>
</template>

<script>
import axios from 'axios'
import { setToken, getToken } from '@/util/auth'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      const { data: { token } } = await axios.get('/api/login.json')
      setToken(token)
      await this.$message('登陆成功')
      this.$router.push('/home')
    }
  },
  created () {
    console.log(getToken())
    getToken() && this.$router.push('/home')
  }
}
</script>

<style>
</style>
