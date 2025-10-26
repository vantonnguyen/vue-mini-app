<template>
  <div class="chon-chi-nhanh">
    <h2>Chọn chi nhánh</h2>
    <div class="branch-list">
      <div
        class="branch-item"
        v-for="branch in branches"
        :key="branch.id"
        @click="chonChiNhanh(branch)"
      >
        <div class="icon">📍</div>
        <div class="info">
          <h4>{{ branch.name }}</h4>
          <p>{{ branch.address }}</p>
        </div>
        <div class="arrow">➡️</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChonChiNhanh',
  data() {
    return {
      branches: [
        { id: 1, name: 'Chi nhánh: Quận 2', address: '254 Nguyễn Duy Trinh, Bình Trưng, Quận 2' },
        { id: 2, name: 'Chi nhánh: Quận 3', address: '19 Hoàng Hoa Thám, An Phú, Quận 3' }
      ]
    }
  },
  methods: {
    chonChiNhanh(branch) {
      // Chuyển qua trang xác nhận
      this.$router.push({ name: 'XacNhanChiNhanh', params: { branchId: branch.id } })
    }
  }
}
</script>

<style scoped>
.chon-chi-nhanh {
  padding: 20px;
}
.branch-item {
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background 0.2s;
}
.branch-item:hover {
  background: #f8f8f8;
}
.icon {
  font-size: 20px;
  margin-right: 10px;
}
.info {
  flex: 1;
}
.arrow {
  color: #999;
}
</style>
