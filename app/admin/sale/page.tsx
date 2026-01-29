"use client";
import Cart from "@/components/sale_components/Cart";
import Sidebar from "@/components/sidebar";
import SaleGrid from "@/components/sale_components/saleGrid";
import { useState, useEffect } from "react";
type Employee = {
  employeeID?: string;
  employeeName?: string;
  tel?: string;
  gender?: string;
  departmentName?: string;
};
export default function Sale() {
  const [employee, setEmployee] = useState<Employee>({});
  useEffect(() => {
    const storedEmployee = localStorage.getItem("employee");
    if (storedEmployee) {
      setEmployee(JSON.parse(storedEmployee));
    }
  }, []);
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
                <h2 className="text-white text-xl font-bold leading-tight tracking-tight font-lao">ຂາຍສິນຄ້າ</h2>
              </div>
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
                  <p className="text-white text-sm font-bold leading-none font-lao">{employee.employeeName}</p>
                  <p className="text-[#b99d9d] text-xs font-normal leading-none mt-1 font-lao">{employee.departmentName}</p>
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
            <div className="flex flex-col md:flex-col lg:flex-row" style={{ fontFamily: "Noto Sans Lao" }}>
              <SaleGrid />
              <Cart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}