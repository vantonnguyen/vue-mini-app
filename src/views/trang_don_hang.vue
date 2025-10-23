<script setup>
import Header from '../components/common/header.vue';
import BottomNav from '../components/layout/bottom_nav.vue';
import CardItem from '../components/common/carditem.vue';
</script>

<template>
  <div class="trang-tai-khoan min-h-screen flex flex-col justify-between">
    <div>
      <Header title="Lịch sử đơn hàng" />
      <nav class="w-full bg-white border-b">
        <ul class="flex space-x-4 overflow-x-auto whitespace-nowrap px-4 py-2 scrollbar-hide">
          <li class="flex-shrink-0 px-3 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium">Chờ xác nhận</li>
          <li class="flex-shrink-0 px-3 py-2 rounded-lg hover:bg-gray-100">Chờ lấy hàng</li>
          <li class="flex-shrink-0 px-3 py-2 rounded-lg hover:bg-gray-100">Chờ giao hàng</li>
          <li class="flex-shrink-0 px-3 py-2 rounded-lg hover:bg-gray-100">Đã giao</li>
          <li class="flex-shrink-0 px-3 py-2 rounded-lg hover:bg-gray-100">Trả hàng</li>
          <li class="flex-shrink-0 px-3 py-2 rounded-lg hover:bg-gray-100">Đã huỷ</li>
        </ul>
      </nav>
      <div class="">
        <CardItem />
        <!-- Có thể thêm nhiều CardItem -->
        <!-- <CardItem /> -->
      </div>
    </div>
    <BottomNav />
  </div>
</template>
