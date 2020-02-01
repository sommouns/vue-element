<template>
    <div>
        <el-menu :default-active="$route.path"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect">
            <el-menu-item index="/home/course">course center</el-menu-item>
            <el-menu-item index="/home/club">club</el-menu-item>
            <el-submenu index="2"  style="float: right">
                <template slot="title">About me</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    activeIndex () {
      switch (this.$router.name) {
        case 'course-center':
          return '1'
        case 'club':
          return '2'
        default:
          return '1'
      }
    }
  },
  methods: {
    handleSelect (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
a {
    text-decoration: none
}
</style>
