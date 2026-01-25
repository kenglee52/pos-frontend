import { useState } from "react";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <aside className="w-64 flex-none hidden md:flex flex-col border-r border-[#3f1f1f] bg-[#1a0a0a] h-full">
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-4">
          {/* Logo Section */}
          <div className="flex gap-3 items-center pb-4 border-b border-[#3f1f1f]">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shadow-inner"
              style={{ backgroundImage: 'linear-gradient(135deg, #d41111 0%, #8a0000 100%)' }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-white text-lg font-bold leading-normal tracking-wide font-display">SUPER POS</h1>
              <p className="text-[#b99d9d] text-xs font-normal leading-normal font-lao">ລະບົບຈັດການຮ້ານ</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            <a className="flex items-center gap-3 px-3 py-3 rounded-lg bg-[#d41111] text-white shadow-lg shadow-[#d41111]/20 group transition-all" href="/admin/dashboard">
              <span className="material-symbols-outlined">home</span>
              <p className="text-sm font-bold leading-normal font-lao">ໜ້າຫຼັກ</p>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="w-full flex items-center gap-3 px-3 py-3 rounded-lg
                   text-[#b99d9d] hover:bg-white/5 hover:text-white
                   transition-colors group"
            >
              <span className="material-symbols-outlined">folder_managed</span>

              <p className="text-sm font-medium font-lao flex-1 text-left">
                ຈັດການຂໍ້ມູນພື້ນຖານ
              </p>

              {/* arrow */}
              <span
                className={`material-symbols-outlined text-base transition-transform
          ${open ? "rotate-180" : ""}`}
              >
                expand_more
              </span>
            </button>
            {open && (
              <div className="ml-9 mt-1 flex flex-col gap-1" style={{fontFamily: "Noto Sans Lao"}}>
                <a
                  href="/admin/department"
                  className="px-3 py-2 rounded-md text-sm text-[#b99d9d]
                       hover:bg-white/5 hover:text-white transition"
                >
                  • ຈັດການຂໍ້ມູນພະແນກ
                </a>

                <a
                  href="/admin/employee"
                  className="px-3 py-2 rounded-md text-sm text-[#b99d9d]
                       hover:bg-white/5 hover:text-white transition"
                >
                  • ຈັດການຂໍ້ມູນພະນັກງານ
                </a>

                <a
                  href="/admin/unit"
                  className="px-3 py-2 rounded-md text-sm text-[#b99d9d]
                       hover:bg-white/5 hover:text-white transition"
                >
                  • ຈັດການຂໍ້ມູນຫົວໜ່ວຍ
                </a>

                <a
                  href="/category"
                  className="px-3 py-2 rounded-md text-sm text-[#b99d9d]
                       hover:bg-white/5 hover:text-white transition"
                >
                  • ຈັດການຂໍ້ມູນປະເພດສິນຄ້າ
                </a>
              </div>
            )}
            <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-[#b99d9d] hover:bg-white/5 hover:text-white transition-colors group" href="#">
              <span className="material-symbols-outlined">point_of_sale</span>
              <p className="text-sm font-medium leading-normal font-lao">ຈຸດຂາຍ (POS)</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-[#b99d9d] hover:bg-white/5 hover:text-white transition-colors group" href="#">
              <span className="material-symbols-outlined">inventory_2</span>
              <p className="text-sm font-medium leading-normal font-lao">ສາງສິນຄ້າ</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-[#b99d9d] hover:bg-white/5 hover:text-white transition-colors group" href="#">
              <span className="material-symbols-outlined">assessment</span>
              <p className="text-sm font-medium leading-normal font-lao">ລາຍງານ</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-[#b99d9d] hover:bg-white/5 hover:text-white transition-colors group" href="#">
              <span className="material-symbols-outlined">settings</span>
              <p className="text-sm font-medium leading-normal font-lao">ຕັ້ງຄ່າ</p>
            </a>
          </nav>
        </div>

        {/* Logout */}
        <div className="flex items-center gap-3 px-3 py-3 rounded-lg text-[#b99d9d] hover:bg-white/5 cursor-pointer mt-auto">
          <span className="material-symbols-outlined">logout</span>
          <p className="text-sm font-medium leading-normal font-lao">ອອກຈາກລະບົບ</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;