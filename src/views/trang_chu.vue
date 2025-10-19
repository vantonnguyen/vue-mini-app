<template>
  <div class="trang-chu">
    <!-- Header -->
    <div class="header">
      <div class="welcome">
        <img src="../assets/avatar.png" class="avatar" />
        <div class="welcome-text">
          <span>Chào mừng trở lại</span>
          <h3>ABC</h3>
        </div>
        <div class="menu-button">...</div>
        <div class="close-button">×</div>
      </div>
      
      <!-- iOrder Banner -->
      <div class="banner">
        <div class="logo">iOrder</div>
        <div class="slogan">PHẦN MỀM QUẢN LÝ BÁN HÀNG CHUYÊN SÂU</div>
        <div class="sub-slogan">ĐƠN GIẢN VÀ HIỆU QUẢ</div>
        
        <div class="features">
          <div class="feature">
            <span class="icon">💰</span>
            TIẾT KIỆM
          </div>
          <div class="feature">
            <span class="icon">📱</span>
            CHUYỂN ĐỔI SỐ
          </div>
          <div class="feature">
            <span class="icon">👍</span>
            SỬ DỤNG DỄ DÀNG
          </div>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="search-bar">
        <span class="search-icon">🍽️</span>
        <input type="text" placeholder="Tìm kiếm món ăn, thức uống..." />
        <span class="search-button">🔍</span>
      </div>
    </div>

    <!-- Categories -->
    <div class="categories">
      <h2>Danh mục sản phẩm</h2>
      <div class="category-list">
        <div class="category active">Tất cả</div>
        <div class="category">Chả chiên</div>
        <div class="category">Chả chiên</div>
        <div class="category">Chả chiên</div>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="product-grid">
      <div class="product-card" v-for="n in 4" :key="n">
        <img src="../assets/nuoc-chanh.jpg" />
        <h3>Nước chanh</h3>
        <div class="price">10.000 đ</div>
      </div>
    </div>

    <!-- Bottom Navigation -->
    <nav class="bottom-nav">
      <div class="nav-item active">
        <span class="icon">🏠</span>
        <span>Trang chủ</span>
      </div>
      <div class="nav-item">
        <span class="icon">💬</span>
        <span>Liên hệ</span>
      </div>
      <div class="nav-item">
        <span class="icon">📋</span>
        <span>Đơn hàng</span>
      </div>
      <div class="nav-item">
        <span class="icon">👤</span>
        <span>Tài khoản</span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TrangChu'
}
</script>

<style scoped>
.trang-chu {
  padding-bottom: 60px;
  width: 375px;
  height: 831px;
  overflow-y: auto;
  position: relative;
  margin: 0 auto;
}

.header {
  background: linear-gradient(180deg, #1E90FF 0%, #87CEFA 100%);
  padding: 20px;
  color: white;
}

.welcome {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.banner {
  text-align: center;
  margin: 20px 0;
}

.logo {
  font-size: 2em;
  font-weight: bold;
}

.features {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.search-bar {
  background: white;
  border-radius: 25px;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.search-bar input {
  flex: 1;
  border: none;
  outline: none;
  margin: 0 10px;
}

.categories {
  padding: 20px;
}

.category-list {
  display: flex;
  gap: 10px;
  overflow-x: auto;
}

.category {
  padding: 8px 16px;
  background: #f0f0f0;
  border-radius: 20px;
}

.category.active {
  background: #1E90FF;
  color: white;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
}

.product-card {
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}

.product-card img {
  width: 100%;
  border-radius: 8px;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 375px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8em;
}

.nav-item.active {
  color: #1E90FF;
}
</style>