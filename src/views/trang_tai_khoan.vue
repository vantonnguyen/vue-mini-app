<template>
  <div class="trang-tai-khoan">
    <h1>Đây là trang tài khoản</h1>
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from '../components/layout/bottom_nav.vue'

export default {
  name: 'TrangTaiKhoan',
  components: {
    BottomNav
  }
}
</script>

<style scoped>
.trang-tai-khoan {
  width: 375px;
  height: 831px;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

h1 {
  font-size: 24px;
  color: #333;
}
</style>