'use client';
import Sidebar from '@/components/sidebar'; // ປ່ຽນ path ຕາມທີ່ຢູ່ຂອງຟາຍ Sidebar ຂອງທ່ານ

export default function SalesDashboard() {
  return (
    // ໃຊ້ div ນີ້ເພື່ອໂຫຼດ Font ແລະ Icons ໃຫ້ສະແດງຜົນຖືກຕ້ອງໃນຟາຍດຽວ
    <div className="font-sans antialiased text-[#111418] dark:text-white">
      {/* Font Imports (In Next.js, ideally these go in layout.tsx) */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Noto+Sans+Lao:wght@100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        .font-lao { font-family: 'Noto Sans Lao', sans-serif; }
        .font-display { font-family: 'Manrope', 'Noto Sans Lao', sans-serif; }
      `}</style>

      <div className="relative flex h-screen w-full overflow-hidden bg-[#221010]">
        
        {/* Sidebar Component */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 flex flex-col h-full overflow-hidden relative">
          
          {/* TopNavBar */}
          <header className="flex-none flex items-center justify-between whitespace-nowrap border-b border-[#3f1f1f] bg-[#2a1515] px-6 py-4 z-10">
            <div className="flex items-center gap-8 w-1/2">
              <div className="flex items-center gap-3 text-white">
                {/* Mobile Menu Toggle */}
                <button className="md:hidden p-1 text-white">
                  <span className="material-symbols-outlined">menu</span>
                </button>
                <h2 className="text-white text-xl font-bold leading-tight tracking-tight font-lao">ໜ້າຫຼັກການຂາຍ</h2>
              </div>
              
              {/* Search Bar */}
              <label className="flex flex-col min-w-40 h-10 w-full max-w-md hidden sm:flex">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-[#1a0a0a] border border-[#3f1f1f] focus-within:border-[#d41111] transition-colors">
                  <div className="text-[#b99d9d] flex items-center justify-center pl-3">
                    <span className="material-symbols-outlined text-[20px]">search</span>
                  </div>
                  <input 
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 bg-transparent h-full placeholder:text-[#6b5d5d] px-3 text-sm font-normal leading-normal font-lao" 
                    placeholder="ຄົ້ນຫາສິນຄ້າ (ຊື່, ລະຫັດ, ບາໂຄດ)..." 
                  />
                </div>
              </label>
            </div>

            <div className="flex items-center justify-end gap-4 sm:gap-6">
              <div className="flex gap-2">
                <button className="flex items-center justify-center rounded-full size-10 bg-[#1a0a0a] text-white hover:bg-[#d41111]/20 hover:text-[#d41111] transition-colors relative">
                  <span className="material-symbols-outlined text-[20px]">notifications</span>
                  <span className="absolute top-2 right-2 size-2 bg-[#d41111] rounded-full border border-[#1a0a0a]"></span>
                </button>
                <button className="flex items-center justify-center rounded-full size-10 bg-[#1a0a0a] text-white hover:bg-[#d41111]/20 hover:text-[#d41111] transition-colors">
                  <span className="material-symbols-outlined text-[20px]">account_circle</span>
                </button>
              </div>
              <div className="flex items-center gap-3 pl-2 border-l border-[#3f1f1f]">
                <div className="text-right hidden sm:block">
                  <p className="text-white text-sm font-bold leading-none font-lao">ສົມຊາຍ ພ.</p>
                  <p className="text-[#b99d9d] text-xs font-normal leading-none mt-1 font-lao">ພະນັກງານຂາຍ</p>
                </div>
                <div 
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-[#d41111]/20" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCbVZAlA3bbWyGk12c9726JpVJ3TixMI_TVEZ3Ug3mCvFlcBe7JcOTKt1i-jkJ2hRPdT8Ii-ro6USJiTXVcF8N8lVH8mpHKbE4JzjrZq_ujIpMpkhMszg1a-mah6BNLu-hSdqNaSyPb_s3vAHNFAzVWHfxVkKGGmi3okQOiUJhc0NAXOh1z9fT127Ozntb4aGFiW6ZGVVX-_Kwf9tHuP4oymvjjBdF4woqudA7S93ZUqQ4Tgw4T2WpSJk_mW5IQ5xfQdZcug8bXCAk3")' }}
                ></div>
              </div>
            </div>
          </header>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 bg-[#221010]">
            
            {/* Stats Section */}
            <section>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Stat Card 1 */}
                <div className="flex flex-col gap-2 rounded-xl p-5 bg-[#2a1515] border border-[#3f1f1f] shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-[#b99d9d] text-sm font-medium leading-normal font-lao">ຍອດຂາຍມື້ນີ້</p>
                    <span className="material-symbols-outlined text-[#d41111] bg-[#d41111]/10 p-1.5 rounded-lg text-[20px]">payments</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <p className="text-white text-2xl font-bold leading-tight tracking-tight">15,400,000 ₭</p>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-[#0bda0b] text-[16px]">trending_up</span>
                    <p className="text-[#0bda0b] text-xs font-medium">+12% <span className="text-[#6b5d5d] font-lao">ທຽບກັບມື້ວານ</span></p>
                  </div>
                </div>

                {/* Stat Card 2 */}
                <div className="flex flex-col gap-2 rounded-xl p-5 bg-[#2a1515] border border-[#3f1f1f] shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-[#b99d9d] text-sm font-medium leading-normal font-lao">ຈຳນວນອໍເດີ້</p>
                    <span className="material-symbols-outlined text-[#d41111] bg-[#d41111]/10 p-1.5 rounded-lg text-[20px]">shopping_cart</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <p className="text-white text-2xl font-bold leading-tight tracking-tight">124</p>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-[#0bda0b] text-[16px]">trending_up</span>
                    <p className="text-[#0bda0b] text-xs font-medium">+5% <span className="text-[#6b5d5d] font-lao">ທຽບກັບມື້ວານ</span></p>
                  </div>
                </div>

                {/* Stat Card 3 */}
                <div className="flex flex-col gap-2 rounded-xl p-5 bg-[#2a1515] border border-[#3f1f1f] shadow-sm relative overflow-hidden">
                  <div className="absolute right-0 top-0 p-3 opacity-10">
                    <span className="material-symbols-outlined text-[#d41111] text-[80px]">warning</span>
                  </div>
                  <div className="flex items-center justify-between relative z-10">
                    <p className="text-[#b99d9d] text-sm font-medium leading-normal font-lao">ສິນຄ້າໃກ້ໝົດ</p>
                    <span className="material-symbols-outlined text-orange-500 bg-orange-500/10 p-1.5 rounded-lg text-[20px]">inventory</span>
                  </div>
                  <p className="text-white text-2xl font-bold leading-tight tracking-tight relative z-10 mt-3">3 <span className="text-base font-normal text-[#b99d9d] font-lao">ລາຍການ</span></p>
                  <p className="text-orange-500 text-xs font-medium mt-1 relative z-10 font-lao">ຕ້ອງການເຕີມສິນຄ້າດ່ວນ</p>
                </div>

                {/* Stat Card 4 */}
                <div className="flex flex-col gap-2 rounded-xl p-5 bg-[#2a1515] border border-[#3f1f1f] shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-[#b99d9d] text-sm font-medium leading-normal font-lao">ອໍເດີ້ອອນລາຍລໍຖ້າ</p>
                    <span className="material-symbols-outlined text-blue-500 bg-blue-500/10 p-1.5 rounded-lg text-[20px]">local_shipping</span>
                  </div>
                  <p className="text-white text-2xl font-bold leading-tight tracking-tight mt-3">12</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-blue-500 text-[16px]">schedule</span>
                    <p className="text-blue-500 text-xs font-medium font-lao">ລໍຖ້າການຈັດສົ່ງ</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Actions Grid */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-white text-xl font-bold leading-tight tracking-tight font-lao">ເມນູດ່ວນ</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Action 1: New Sale */}
                <button className="group relative flex flex-col justify-between h-40 w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#d41111] to-[#8a0000] p-6 shadow-lg transition-transform hover:scale-[1.01] hover:shadow-[#d41111]/30 text-left">
                  <div className="absolute right-[-20px] top-[-20px] rounded-full bg-white/10 p-8 transition-transform group-hover:rotate-12">
                    <span className="material-symbols-outlined text-white text-[64px] opacity-50">point_of_sale</span>
                  </div>
                  <div className="relative z-10 bg-white/20 w-fit p-2 rounded-lg backdrop-blur-sm">
                    <span className="material-symbols-outlined text-white text-[28px]">add_shopping_cart</span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-white text-xl font-bold font-lao">ຂາຍໃໝ່ (POS)</h3>
                    <p className="text-white/80 text-sm mt-1 font-lao">ເປີດໜ້າຈໍຂາຍສິນຄ້າ</p>
                  </div>
                </button>

                {/* Action 2: Returns */}
                <button className="group relative flex flex-col justify-between h-40 w-full overflow-hidden rounded-xl bg-[#2a1515] border border-[#3f1f1f] p-6 shadow-md transition-all hover:border-[#d41111]/50 text-left">
                  <div className="absolute right-[-10px] top-[-10px] opacity-5 transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-white text-[100px]">keyboard_return</span>
                  </div>
                  <div className="relative z-10 bg-[#1a0a0a] border border-[#3f1f1f] w-fit p-2 rounded-lg">
                    <span className="material-symbols-outlined text-white text-[28px]">keyboard_return</span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-white text-xl font-bold font-lao">ຄືນສິນຄ້າ</h3>
                    <p className="text-[#b99d9d] text-sm mt-1 font-lao">ຈັດການການຄືນ ແລະ ປ່ຽນສິນຄ້າ</p>
                  </div>
                </button>

                {/* Action 3: Price Check */}
                <button className="group relative flex flex-col justify-between h-40 w-full overflow-hidden rounded-xl bg-[#2a1515] border border-[#3f1f1f] p-6 shadow-md transition-all hover:border-[#d41111]/50 text-left">
                  <div className="absolute right-[-10px] top-[-10px] opacity-5 transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-white text-[100px]">qr_code_scanner</span>
                  </div>
                  <div className="relative z-10 bg-[#1a0a0a] border border-[#3f1f1f] w-fit p-2 rounded-lg">
                    <span className="material-symbols-outlined text-white text-[28px]">qr_code_scanner</span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-white text-xl font-bold font-lao">ກວດລາຄາ</h3>
                    <p className="text-[#b99d9d] text-sm mt-1 font-lao">ສະແກນບາໂຄດເພື່ອເບິ່ງລາຄາ</p>
                  </div>
                </button>
              </div>
            </section>

            {/* Recent Transactions Table */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-white text-xl font-bold leading-tight tracking-tight font-lao">ການຂາຍຫຼ້າສຸດ</h2>
                <button className="text-[#d41111] text-sm font-bold hover:underline font-lao">ເບິ່ງທັງໝົດ</button>
              </div>
              <div className="w-full overflow-x-auto rounded-xl border border-[#3f1f1f] bg-[#2a1515] shadow-sm">
                <table className="w-full text-left text-sm text-[#b99d9d]">
                  <thead className="bg-[#1a0a0a] text-white border-b border-[#3f1f1f]">
                    <tr>
                      <th className="px-6 py-4 font-bold font-lao whitespace-nowrap">ເລກທີບິນ</th>
                      <th className="px-6 py-4 font-bold font-lao whitespace-nowrap">ເວລາ</th>
                      <th className="px-6 py-4 font-bold font-lao whitespace-nowrap">ລູກຄ້າ</th>
                      <th className="px-6 py-4 font-bold font-lao whitespace-nowrap">ຍອດລວມ</th>
                      <th className="px-6 py-4 font-bold font-lao whitespace-nowrap">ສະຖານະ</th>
                      <th className="px-6 py-4 font-bold text-right font-lao whitespace-nowrap">ຈັດການ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#3f1f1f]">
                    {[
                      { id: 'INV-00124', time: '10:42 AM', customer: 'ລູກຄ້າທົ່ວໄປ', amount: '125,000 ₭', status: 'success', statusText: 'ສຳເລັດ' },
                      { id: 'INV-00123', time: '10:35 AM', customer: 'ນາງ ວັນເພັງ', amount: '2,450,000 ₭', status: 'success', statusText: 'ສຳເລັດ' },
                      { id: 'INV-00122', time: '10:15 AM', customer: 'ທ້າວ ສົມສັກ', amount: '550,000 ₭', status: 'pending', statusText: 'ລໍຖ້າຈ່າຍ' },
                      { id: 'INV-00121', time: '09:50 AM', customer: 'ລູກຄ້າທົ່ວໄປ', amount: '85,000 ₭', status: 'success', statusText: 'ສຳເລັດ' },
                      { id: 'INV-00120', time: '09:12 AM', customer: 'ຮ້ານ ມິນິມາກ ໂພນຕ້ອງ', amount: '5,100,000 ₭', status: 'cancel', statusText: 'ຍົກເລີກ' },
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 font-medium text-white">{row.id}</td>
                        <td className="px-6 py-4">{row.time}</td>
                        <td className="px-6 py-4 font-lao">{row.customer}</td>
                        <td className="px-6 py-4 font-bold text-white">{row.amount}</td>
                        <td className="px-6 py-4">
                          {row.status === 'success' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#0bda0b]/10 text-[#0bda0b] border border-[#0bda0b]/20">
                              <span className="size-1.5 rounded-full bg-[#0bda0b]"></span>
                              <span className="font-lao">{row.statusText}</span>
                            </span>
                          )}
                          {row.status === 'pending' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-500 border border-orange-500/20">
                              <span className="size-1.5 rounded-full bg-orange-500"></span>
                              <span className="font-lao">{row.statusText}</span>
                            </span>
                          )}
                          {row.status === 'cancel' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-500 border border-red-500/20">
                              <span className="size-1.5 rounded-full bg-red-500"></span>
                              <span className="font-lao">{row.statusText}</span>
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#b99d9d] hover:text-white p-1 rounded hover:bg-white/10">
                            <span className="material-symbols-outlined text-[20px]">print</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}