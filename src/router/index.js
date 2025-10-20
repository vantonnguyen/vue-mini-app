import { createRouter, createWebHistory } from "vue-router";
import TrangChu from "../views/trang_chu.vue";
import TrangDonHang from "../views/trang_don_hang.vue";
import TrangTaiKhoan from "../views/trang_tai_khoan.vue";

const routes = [
  {
    path: "/",
    name: "TrangChu",
    component: TrangChu,
  },
  {
    path: "/orders",
    name: "TrangDonHang",
    component: TrangDonHang,
  },
  {
    path: "/account",
    name: "TrangTaiKhoan",
    component: TrangTaiKhoan,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
