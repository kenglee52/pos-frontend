"use client";
import { useRouter } from "next/navigation";
export default function Home() {
  
   const router = useRouter();
  return (
    <div style={{fontFamily: "Noto Sans Lao"}} className="min-h-screen w-full flex flex-col overflow-x-hidden font-sans bg-[#181111] text-white">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Noto+Sans+Lao:wght@100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        body { font-family: 'Noto Sans Lao', 'Manrope', sans-serif; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
      `}} />
      <header className="sticky top-0 z-50 w-full border-b border-solid border-[#392828] bg-[#181111]/80 backdrop-blur-md">
        <div className="flex w-full justify-center">
          <div className="flex w-full max-w-[1280px] items-center justify-between px-4 py-3 md:px-10">
            <div className="flex items-center gap-3 text-white">
              <div className="flex size-8 items-center justify-center rounded bg-[#d41111] text-white">
                <span className="material-symbols-outlined">point_of_sale</span>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-tight text-white">SUPER POS</h2>
            </div>
            <nav className="hidden items-center gap-8 md:flex">
              <a className="text-sm font-medium text-white transition-colors hover:text-[#d41111]" href="#">ໜ້າຫຼັກ</a>
              <a className="text-sm font-medium text-white transition-colors hover:text-[#d41111]" href="#">ຄຸນສົມບັດ</a>
              <a className="text-sm font-medium text-white transition-colors hover:text-[#d41111]" href="#">ລາຄາ</a>
              <a className="text-sm font-medium text-white transition-colors hover:text-[#d41111]" href="#">ຕິດຕໍ່</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="flex h-9 cursor-pointer items-center justify-center rounded-lg bg-[#d41111] px-4 text-sm font-bold text-white transition-transform hover:scale-105">
                <span className="mr-2 material-symbols-outlined text-[20px]">call</span>
                <span className="truncate">ຕິດຕໍ່ພວກເຮົາ</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col">
        <section className="relative flex flex-col items-center justify-center overflow-hidden py-16 md:py-24">
          <div className="absolute -top-[20%] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d41111]/20 blur-[120px]"></div>       
          <div className="z-10 flex max-w-[1280px] w-full flex-col px-4 md:px-10 mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col gap-6 text-center lg:text-left">
                <div className="flex flex-col gap-4">
                  <span className="w-fit self-center rounded-full bg-[#d41111]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#d41111] lg:self-start">
                    ລະບົບຈັດການຍອດນິຍົມ 2024
                  </span>
                  <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                    ລະບົບຈັດການການຂາຍ ແລະ <span className="text-[#d41111]">E-COMMERCE</span> ທີ່ທັນສະໄໝ
                  </h1>
                  <p className="text-lg font-normal leading-relaxed text-gray-300 md:text-xl">
                    ຄວບຄຸມສະຕັອກ, ຈັດການການເງິນ ແລະ ຂາຍສິນຄ້າອອນລາຍ ໄດ້ໃນບ່ອນດຽວ ພ້ອມລາຍງານຜົນແບບ Real-time ເພື່ອທຸລະກິດທີ່ເຕີບໃຫຍ່ຂອງທ່ານ.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                  <button onClick={()=> router.push("/login")} className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-lg bg-[#d41111] px-6 text-base font-bold text-white transition-all hover:bg-red-700">
                    <span className="mr-2 material-symbols-outlined text-[20px]">login</span>
                    <span>ເຂົ້າສູ່ລະບົບ</span>
                  </button>
                  <button className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-lg border border-[#392828] bg-[#221616] px-6 text-base font-bold text-white transition-all hover:bg-[#392828]">
                    <span className="mr-2 material-symbols-outlined text-[20px]">person_add</span>
                    <span>ລົງທະບຽນຜູ້ໃຊ້ງານ</span>
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-400 lg:justify-start">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px] text-green-500">check_circle</span>
                    <span>ທົດລອງຟຣີ 14 ມື້</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px] text-green-500">check_circle</span>
                    <span>ບໍ່ຕ້ອງຜູກບັດເຄຣດິດ</span>
                  </div>
                </div>
              </div>
              
              <div className="relative w-full">
                <div 
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#392828] bg-[#221616] shadow-2xl lg:aspect-video"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAifascfE687lWn28OhiCdzu1cEJ39c7zVPdNPhJ1b7gHg3oO3biC2xnpIHWb5Z1X-Y2u9ra4XJCEotTQMfNN0qn9ksHdA9rJsChrBJ_50FOXOfIsE-GUBP0DCtsN4d40I-Rv-tJMIlhL3E7n7kNAaNTYPdND7KFYVnBBMO00LwWjK-pOfCo8Ytcv_qTW0t4LJxNvuWDmQsUhYigRrWdcI0A_nuGkBXk0Hs65xyvd2cNEWHSlI8diu83ePP3A1AcnDL_RgU2nETdKYZ')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181111]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg bg-black/60 p-4 backdrop-blur-sm">
                    <div>
                      <p className="text-xs text-gray-300">ຍອດຂາຍມື້ນີ້</p>
                      <p className="text-lg font-bold text-white">₭ 15,450,000</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                      <span className="material-symbols-outlined">trending_up</span>
                    </div>
                  </div>
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-6 -right-4 hidden rounded-lg border border-[#392828] bg-[#2a1d1d] p-4 shadow-xl md:block lg:-left-6 lg:right-auto">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d41111]/20 text-[#d41111]">
                      <span className="material-symbols-outlined">inventory_2</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">ເຕືອນສະຕັອກໃກ້ໝົດ</p>
                      <p className="text-xs text-gray-400">ສິນຄ້າ 3 ລາຍການ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="border-y border-[#392828] bg-[#221616] py-10">
          <div className="mx-auto flex max-w-[1280px] flex-col px-4 md:px-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
              <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[#392828] bg-[#181111] p-6 text-center shadow-sm sm:items-start sm:text-left">
                <div className="mb-2 text-[#d41111]">
                  <span className="material-symbols-outlined text-[32px]">store</span>
                </div>
                <p className="text-3xl font-bold leading-tight text-white">500+</p>
                <p className="text-base font-medium text-gray-400">ຮ້ານຄ້າທີ່ໄວ້ວາງໃຈ</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[#392828] bg-[#181111] p-6 text-center shadow-sm sm:items-start sm:text-left">
                <div className="mb-2 text-[#d41111]">
                  <span className="material-symbols-outlined text-[32px]">payments</span>
                </div>
                <p className="text-3xl font-bold leading-tight text-white">10 ຕື້ກີບ</p>
                <p className="text-base font-medium text-gray-400">ຍອດຂາຍລວມຜ່ານລະບົບ</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[#392828] bg-[#181111] p-6 text-center shadow-sm sm:items-start sm:text-left">
                <div className="mb-2 text-[#d41111]">
                  <span className="material-symbols-outlined text-[32px]">inventory</span>
                </div>
                <p className="text-3xl font-bold leading-tight text-white">1,000,000+</p>
                <p className="text-base font-medium text-gray-400">ສິນຄ້າໃນລະບົບ</p>
              </div>
            </div>
          </div>
        </section>

        {/* FeatureSection */}
        <section className="py-20">
          <div className="mx-auto flex max-w-[1280px] flex-col px-4 md:px-10">
            <div className="mb-12 flex flex-col items-center text-center">
              <h2 className="max-w-[720px] text-3xl font-black leading-tight tracking-tight text-white md:text-4xl">
                ຄຸນສົມບັດຫຼັກຂອງລະບົບ
              </h2>
              <p className="mt-4 max-w-[720px] text-base font-normal text-gray-400">
                ຄົບຈົບທຸກເລື່ອງການຂາຍ ບໍ່ວ່າຈະເປັນໜ້າຮ້ານ ຫຼື ອອນລາຍ ດ້ວຍຟັງຊັ້ນທີ່ອອກແບບມາເພື່ອທຸລະກິດຍຸກໃໝ່
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Feature 1 */}
              <div className="group flex flex-col gap-4 rounded-xl border border-[#392828] bg-[#221616] p-6 transition-all hover:-translate-y-1 hover:border-[#d41111]/50 hover:shadow-lg hover:shadow-[#d41111]/10">
                <div className="flex size-12 items-center justify-center rounded-lg bg-[#181111] text-white group-hover:bg-[#d41111] group-hover:text-white">
                  <span className="material-symbols-outlined">storefront</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-white">POS ໜ້າຮ້ານ</h3>
                  <p className="text-sm text-gray-400">ລະບົບຂາຍທີ່ວ່ອງໄວ ຮອງຮັບການຊຳລະເງິນທຸກຮູບແບບ ພ້ອມອອກໃບບິນທັນທີ ໃຊ້ງານງ່າຍພຽງປາຍນິ້ວ.</p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="group flex flex-col gap-4 rounded-xl border border-[#392828] bg-[#221616] p-6 transition-all hover:-translate-y-1 hover:border-[#d41111]/50 hover:shadow-lg hover:shadow-[#d41111]/10">
                <div className="flex size-12 items-center justify-center rounded-lg bg-[#181111] text-white group-hover:bg-[#d41111] group-hover:text-white">
                  <span className="material-symbols-outlined">warehouse</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-white">ຈັດການສະຕັອກ</h3>
                  <p className="text-sm text-gray-400">ຕັດສະຕັອກອັດຕະໂນມັດ ເຕືອນເມື່ອສິນຄ້າໃກ້ໝົດ ແລະ ໂອນຍ້າຍສິນຄ້າລະຫວ່າງສາຂາໄດ້ຢ່າງຖືກຕ້ອງ.</p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="group flex flex-col gap-4 rounded-xl border border-[#392828] bg-[#221616] p-6 transition-all hover:-translate-y-1 hover:border-[#d41111]/50 hover:shadow-lg hover:shadow-[#d41111]/10">
                <div className="flex size-12 items-center justify-center rounded-lg bg-[#181111] text-white group-hover:bg-[#d41111] group-hover:text-white">
                  <span className="material-symbols-outlined">pie_chart</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-white">ລາຍງານການເງິນ</h3>
                  <p className="text-sm text-gray-400">ເບິ່ງກຳໄລ-ຂາດທຶນ ແບບ Real-time ວິເຄາະສິນຄ້າຂາຍດີ ແລະ ພຶດຕິກຳລູກຄ້າ ເພື່ອວາງແຜນທຸລະກິດ.</p>
                </div>
              </div>
              {/* Feature 4 */}
              <div className="group flex flex-col gap-4 rounded-xl border border-[#392828] bg-[#221616] p-6 transition-all hover:-translate-y-1 hover:border-[#d41111]/50 hover:shadow-lg hover:shadow-[#d41111]/10">
                <div className="flex size-12 items-center justify-center rounded-lg bg-[#181111] text-white group-hover:bg-[#d41111] group-hover:text-white">
                  <span className="material-symbols-outlined">shopping_cart</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-white">E-Commerce</h3>
                  <p className="text-sm text-gray-400">ເຊື່ອມຕໍ່ກັບເວັບໄຊຂາຍຂອງ ຈັດການອໍເດີ້ຈາກອອນລາຍ ແລະ ໜ້າຮ້ານໃນບ່ອນດຽວ ບໍ່ພາດທຸກການຂາຍ.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTASection */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#d41111]/10 to-transparent"></div>
          <div className="relative z-10 mx-auto flex max-w-[960px] flex-col px-4 md:px-10">
            <div className="flex flex-col items-center justify-center gap-8 rounded-2xl border border-[#392828] bg-[#2a1111] px-6 py-12 text-center shadow-2xl md:px-20 md:py-16">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
                  ພ້ອມທີ່ຈະຍົກລະດັບທຸລະກິດຂອງທ່ານແລ້ວບໍ່?
                </h2>
                <p className="text-lg font-normal text-gray-300">
                  ທົດລອງໃຊ້ງານຟຣີ 14 ມື້ ບໍ່ຕ້ອງຜູກບັດເຄຣດິດ, ຍົກເລີກໄດ້ຕະຫຼອດເວລາ
                </p>
              </div>
              <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                <button className="flex h-12 flex-1 cursor-pointer items-center justify-center rounded-lg bg-[#d41111] px-6 text-base font-bold text-white transition-all hover:bg-red-600">
                  <span>ເລີ່ມຕົ້ນໃຊ້ງານຟຣີ</span>
                </button>
                <button className="flex h-12 flex-1 cursor-pointer items-center justify-center rounded-lg border border-[#392828] bg-transparent px-6 text-base font-bold text-white transition-all hover:bg-white/5">
                  <span>ຕິດຕໍ່ຝ່າຍຂາຍ</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#392828] bg-[#221616] pt-16 pb-8 text-white">
        <div className="flex justify-center px-4 md:px-10">
          <div className="w-full max-w-[1280px]">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#d41111]">point_of_sale</span>
                  <h3 className="text-xl font-bold">SUPER POS</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  ລະບົບຈັດການຮ້ານຄ້າຄົບວົງຈອນ ທີ່ຊ່ວຍໃຫ້ທ່ານບໍລິຫານຈັດການທຸລະກິດໄດ້ຢ່າງມີປະສິດທິພາບ.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-base font-bold text-white">ເມນູ</h4>
                <ul className="flex flex-col gap-2 text-sm text-gray-400">
                  <li><a className="hover:text-[#d41111]" href="#">ໜ້າຫຼັກ</a></li>
                  <li><a className="hover:text-[#d41111]" href="#">ກ່ຽວກັບພວກເຮົາ</a></li>
                  <li><a className="hover:text-[#d41111]" href="#">ຄຸນສົມບັດ</a></li>
                  <li><a className="hover:text-[#d41111]" href="#">ລາຄາ</a></li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-base font-bold text-white">ຊ່ວຍເຫຼືອ</h4>
                <ul className="flex flex-col gap-2 text-sm text-gray-400">
                  <li><a className="hover:text-[#d41111]" href="#">ສູນຊ່ວຍເຫຼືອ</a></li>
                  <li><a className="hover:text-[#d41111]" href="#">ຄູ່ມືການໃຊ້ງານ</a></li>
                  <li><a className="hover:text-[#d41111]" href="#">ແຈ້ງບັນຫາ</a></li>
                  <li><a className="hover:text-[#d41111]" href="#">ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ</a></li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-base font-bold text-white">ຕິດຕໍ່ພວກເຮົາ</h4>
                <ul className="flex flex-col gap-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">call</span>
                    <span>+856 20 1234 5678</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                    <span>support@superpos.la</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                    <span>ນະຄອນຫຼວງວຽງຈັນ, ລາວ</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t border-[#392828] pt-8 text-center text-sm text-gray-500">
              <p>© 2024 SUPER POS. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};