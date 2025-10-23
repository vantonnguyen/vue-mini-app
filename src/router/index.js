import { createRouter, createWebHistory } from "vue-router";
import TrangChu from "../views/trang_chu.vue";
import TrangDonHang from "../views/trang_don_hang.vue";
import TrangTaiKhoan from "../views/trang_tai_khoan.vue";
import TrangTimKiem from "../views/trang_tim_kiem.vue";
import TrangCapNhatTaiKhoan from "../views/trang_cap_nhat_tai_khoan.vue";
import TrangChiTietDonHang from "../views/trang_chi_tiet_hoa_don.vue";
<<<<<<< HEAD
import TrangLichSuTichDiem from "../views/trang_lich_su_tich_diem.vue";
import TrangDiaChiDaLuu from "../views/trang_dia_chi_da_luu.vue";
import TrangChinhSuaDiaChi from "../views/trang_chinh_sua_dia_chi.vue";
import TrangKhuyenMai from "../views/trang_khuyen_mai.vue";
import TrangChiTietKhuyenMai from "../views/trang_chi_tiet_khuyen_mai.vue";
=======
>>>>>>> e731392a153a815a15a56ffd7b2ad19fddaa11bd

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
<<<<<<< HEAD
    path: "/account/points-history",
    name: "TrangLichSuTichDiem",
    component: TrangLichSuTichDiem,
  },
  {
    path: "/account/saved-addresses",
    name: "TrangDiaChiDaLuu",
    component: TrangDiaChiDaLuu,
  },
  {
    path: "/account/address/edit",
    name: "TrangChinhSuaDiaChi",
    component: TrangChinhSuaDiaChi,
  },
  {
    path: "/account/promotions",
    name: "TrangKhuyenMai",
    component: TrangKhuyenMai,
  },
  {
    path: "/account/promotions/:id",
    name: "TrangChiTietKhuyenMai",
    component: TrangChiTietKhuyenMai,
  },
  {
=======
>>>>>>> e731392a153a815a15a56ffd7b2ad19fddaa11bd
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
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
