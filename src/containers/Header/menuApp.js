export const adminMenu = [
  {
    //quản lý người dùng
    name: "menu.admin.manage-user",
    menus: [
      {
        name: "menu.admin.manage-administer",
        link: "/system/user-manage",
      },
      {
        name: "menu.admin.Doctor details",
        link: "/system/DoctorDetails",
      },
    ],
  },
  {
    //bác Sĩ
    name: "menu.admin.manage-medicine",
    menus: [
      {
        name: "menu.admin.manage-Customer",
        link: "/system/Booking",
      },
      {
        name: "menu.admin.Manage_appointments",
        link: "/system/BookingAdmin",
      },
    ],
  },
  {
    //quản lý NHAP XUAT BAN
    name: "menu.sale.sale",
    menus: [
      {
        name: "menu.sale.import_goods",
        link: "/system/importgoods",
      },
      {
        name: "menu.admin.manage-medicine",
        link: "/system/reportThuoc",
      },
    ],
  },
];

export const NhanvienMenu = [
  {
    //bác Sĩ
    name: "menu.admin.manage-medicine",
    menus: [
      {
        name: "menu.admin.manage-Customer",
        link: "/system/Booking",
      },
      {
        name: "menu.admin.Manage_appointments",
        link: "/system/BookingAdmin",
      },
    ],
  },
];
