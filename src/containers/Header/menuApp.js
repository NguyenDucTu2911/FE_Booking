export const adminMenu = [
  {
    //quản lý người dùng
    name: "menu.admin.manage-user",
    menus: [
      {
        name: "menu.admin.manage-administer",
        link: "/system/user-manage",
        // subMenus: [
        //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
        //     { name: 'menu.system.system-administrator.product-manage', link: '/system/product-manage' },
        //     { name: 'menu.system.system-administrator.medicine', link: '/system/medicine' },
        // ]
      },
      {
        name: "menu.admin.Doctor details",
        link: "/system/DoctorDetails",
        
      },
      {
        name: "menu.admin.manage-Customer",
        link: "/system/Customer",
      },
    ],
  },
  {
    //quản lý thuốc
    name: "menu.admin.manage-medicine",
    menus: [
      {
        name: "menu.admin.manage-administer",
        link: "/system/medicine",
      },
      {
        name: "Nhap Hang",
        link: "/system/sale",
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
    //quản lý thuốc
    name: "menu.admin.manage-medicine",
    menus: [
      {
        name: "menu.admin.manage-administer",
        link: "/system/medicine",
      },
    ],
  },
];
