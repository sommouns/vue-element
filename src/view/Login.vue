<template>
    <div>
        <el-card class="login-card">
            <i class="el-icon-attract login-logo"></i>
            <LoginFrom></LoginFrom>
        </el-card>
    </div>
</template>

<script>
import LoginFrom from '@/components/login-form'
export default {
  components: {
    LoginFrom
  },
  data () {
    return {

    }
  }
}
</script>

<style>
.login-card {
    width: 400px;
    margin: 0 auto;
}
.login-logo {
    font-size: 128px;
    color: #339999;
}
</style>
