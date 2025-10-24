import { createRouter, createWebHistory } from "vue-router";
import TrangChu from "../views/trang_chu.vue";
import TrangDonHang from "../views/trang_don_hang.vue";
import TrangTaiKhoan from "../views/trang_tai_khoan.vue";
import TrangTimKiem from "../views/trang_tim_kiem.vue";
import TrangCapNhatTaiKhoan from "../views/trang_cap_nhat_tai_khoan.vue";
import TrangChiTietDonHang from "../views/trang_chi_tiet_hoa_don.vue";

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
  {
    path: "/account/update",
    name: "TrangCapNhatTaiKhoan",
    component: TrangCapNhatTaiKhoan,
  },

   {
    path: "/orders/detail",
    name: "TrangChiTietDonHang",
    component: TrangChiTietDonHang,
     props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
