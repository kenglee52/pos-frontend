"use client"
import Sidebar from "@/components/sidebar";
import { useDepartment } from "@/hooks/useDepartment";
import { Edit, Trash, Save, Plus} from "lucide-react";
import Swal from "sweetalert2";
export default function Department() {
         const {departments} = useDepartment();
         const formAdd = () =>{
            Swal.fire({
                  showConfirmButton: false,
                  showCloseButton: true,
                  title:"ຟອມເພີ່ມພະແນກ",
                  html:`
                  <div class="flex flex-col gap-3">
                    <input 
                    class="flex w-full min-w-0 py-2 flex-1 resize-none overflow-hidden rounded-lg border focus:outline-0 bg-transparent h-full placeholder:text-[#6b5d5d] px-3 text-sm font-normal leading-normal font-lao" 
                    placeholder="ຊື່ພະແນກ" 
                  />
                  <button class="p-2 rounded-md cursor-pointer text-white hover:scale-95 transform transition duration-200 bg-red-600">
                      ບັນທຶກ
                  </button>
                  <div/>
                  `
            })
         }
    return (
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
                <h2 className="text-white text-xl font-bold leading-tight tracking-tight font-lao">ຈັດການພະແນກ</h2>
              </div>
              
              {/* Search Bar */}
              <label className="flex flex-col min-w-40 h-10 w-full max-w-md hidden sm:flex">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-[#1a0a0a] border border-[#3f1f1f] focus-within:border-[#d41111] transition-colors">
                  <div className="text-[#b99d9d] flex items-center justify-center pl-3">
                    <span className="material-symbols-outlined text-[20px]">search</span>
                  </div>
                  <input 
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 bg-transparent h-full placeholder:text-[#6b5d5d] px-3 text-sm font-normal leading-normal font-lao" 
                    placeholder="ຄົ້ນຫາພະແນກ" 
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
            {/* Recent Transactions Table */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <h2 className="text-white text-xl font-bold leading-tight tracking-tight font-lao">ລາຍການພະແນກ</h2>
                  <button onClick={formAdd} style={{fontFamily: "Noto Sans Lao"}} className="p-2 rounded-md cursor-pointer hover:scale-95 transform transition duration-200 bg-red-600">
                      <div className="flex"><Plus/>&nbsp;&nbsp;ເພີ່ມພະແນກໃໝ່</div>
                  </button>
                </div>
                <button className="text-[#d41111] text-sm font-bold hover:underline font-lao">ເບິ່ງທັງໝົດ</button>
              </div>
              <div className="w-full overflow-x-auto rounded-xl border border-[#3f1f1f] bg-[#2a1515] shadow-sm">
                <table className="w-full text-left text-sm text-[#b99d9d]">
                  <thead className="bg-[#1a0a0a] text-white border-b border-[#3f1f1f]">
                    <tr>
                      <th className="px-6 py-4 font-bold font-lao whitespace-nowrap">ລະຫັດພະແນກ</th>
                      <th className="px-6 py-4 font-bold font-lao whitespace-nowrap">ພະແນກ</th>
                      <th className="px-6 py-4 font-bold font-lao whitespace-nowrap">ປຸ່ມຈັດການ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#3f1f1f]">
                      {departments.map((item) => (
                      <tr className="hover:bg-white/5 transition-colors" style={{fontFamily: "Noto Sans Lao"}}>
                        <td className="px-6 py-4 font-medium text-white">{item.departmentID}</td>
                        <td className="px-6 py-4">{item.departmentName}</td>
                        <td className="px-6 py-4 font-lao">
                           <div className="flex gap-1">
                              <button className="p-2 rounded-md cursor-pointer hover:scale-95 transform transition duration-200">
                                 <Edit className="text-green-500"/>
                              </button>
                              <button className="p-2 rounded-md cursor-pointer hover:scale-95 transform transition duration-200">
                                 <Trash className="text-rose-500"/>
                              </button>
                           </div>
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
    )
}