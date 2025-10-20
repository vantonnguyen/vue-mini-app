<template>
  <nav class="bottom-nav">
    <router-link to="/" class="nav-item" active-class="active">
      <span class="icon">🏠</span>
      <span>Trang chủ</span>
    </router-link>
    <router-link to="/" class="nav-item" active-class="active">
      <img src="../assets/zalo-icon.png" class="icon" alt="zalo" style="width: 20px; height: 20px;" />
      <span>Liên hệ</span>
    </router-link>
    <router-link to="/orders" class="nav-item" active-class="active">
      <span class="icon">📋</span>
      <span>Đơn hàng</span>
    </router-link>
    <router-link to="/account" class="nav-item" active-class="active">
      <span class="icon">👤</span>
      <span>Tài khoản</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'BottomNav'
}
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 375px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  height: 60px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8em;
  text-decoration: none;
  color: inherit;
}

.nav-item.active {
  color: #1E90FF;
}
</style>