<!-- Sử dụng bọc trong
<div min-h-screen flex flex-col justify-between>
  <div>
  Nội dung
  </div>
  <BottomNav />
</div> -->


<template>
  <div class="w-full bg-white border-t-2 border-gray-100">
    <nav class="flex justify-around items-center h-16">
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
  </div>
</template>

<style scoped>
.nav-item {
  @apply flex flex-col items-center ;
}

.nav-item.active {
  color: #1E90FF;
}
</style>
