import { createRouter, createWebHistory } from "vue-router";
import TrangChu from "../views/trang_chu.vue";
import TrangDonHang from "../views/trang_don_hang.vue";
import TrangTaiKhoan from "../views/trang_tai_khoan.vue";
import TrangTimKiem from "../views/trang_tim_kiem.vue";

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
  {
    path: "/search",
    name: "TrangTimKiem",
    component: TrangTimKiem,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
