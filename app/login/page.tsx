'use client';

import React, { useState } from 'react';
import api from '@/lib/axios';
import { useRouter } from 'next/navigation';
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/employee-login", { tel, password });

      if (response.status === 200) {
        const user = response.data.data;

        // ✅ ເກັບຂໍ້ມູນລົງ localStorage
        localStorage.setItem("employee", JSON.stringify({
          employeeID: user.employeeID,
          employeeName: user.employeeName,
          tel: user.tel,
          gender: user.gender,
          departmentName: user.department.departmentName
        }));

        // 👉 ໄປໜ້າ dashboard
        router.push("/admin/dashboard");
      } else {
        alert("tel or password incorrect");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Noto+Sans+Lao:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'Noto Sans Lao', 'Manrope', sans-serif;
        }
        .font-display {
          font-family: 'Manrope', sans-serif;
        }
        .font-lao {
          font-family: 'Noto Sans Lao', sans-serif;
        }
      `}</style>

      <div className="bg-[#f8f6f6] dark:bg-[#221010] min-h-screen flex items-center justify-center p-4 lg:p-0 font-lao">
        <div className="w-full h-screen flex overflow-hidden">

          {/* Left Side: Visual Branding (Hidden on mobile, visible on lg screens) */}
          <div className="hidden lg:flex w-1/2 relative bg-[#2c1515] flex-col justify-between p-12 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#221010]/90 to-[#d41111]/40 z-10"></div>
              {/* Using a placeholder image related to retail/POS */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVKUjeIZXFE2vHsv9bqt8dfihHBACOZGB08P-u_zmrk48Ylnwz66Tt1h2x-ee0diJ7KJXTx8Y0e7_O8bGUpnHg6FhSXabEpf-D04_vrp2cuBcOOaLvmjzEJdCXJjgQqgFj6hRpeR366adeSNMtcyMiWNg4XypTM--3wIvCbGsuF1wR08v79DkBya_mLomoukHDLFmrPQN0JyatRGwbSWyQvfb30P89Wc0VndEyr2pjnAM6XpLTczcclWsLVYE-j7DbqVnswuJsI4wk')" }}
              ></div>
            </div>

            {/* Logo Area */}
            <div className="relative z-20 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#d41111] rounded-lg flex items-center justify-center text-white font-bold text-xl font-display">S</div>
              <span className="text-white font-display font-bold text-2xl tracking-wide">SUPER POS</span>
            </div>

            {/* Testimonial/Quote Area */}
            <div className="relative z-20 max-w-lg">
              <blockquote className="text-2xl text-white font-semibold leading-relaxed mb-4">
                "ລະບົບການຈັດການທີ່ດີທີ່ສຸດ ສໍາລັບທຸລະກິດຂອງທ່ານ. ງ່າຍ, ວ່ອງໄວ, ແລະ ປອດໄພ."
              </blockquote>
              <p className="text-white/70 font-display text-sm">Enterprise Management System</p>
            </div>

            {/* Footer Decorative */}
            <div className="relative z-20 text-white/40 text-xs font-display">
              © 2024 SUPER POS & E-COMMERCE
            </div>
          </div>

          {/* Right Side: Login Form */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-[#f8f6f6] dark:bg-[#181111] overflow-y-auto">
            <div className="w-full max-w-[480px] p-6 sm:p-8 flex flex-col">

              {/* Mobile Logo (Visible only on small screens) */}
              <div className="lg:hidden flex items-center gap-2 mb-8 self-center">
                <div className="w-8 h-8 bg-[#d41111] rounded flex items-center justify-center text-white font-bold font-display">S</div>
                <span className="text-white font-display font-bold text-xl">SUPER POS</span>
              </div>

              {/* Header Text */}
              <div className="mb-10 text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">ຍິນດີຕ້ອນຮັບ</h1>
                <p className="text-gray-500 dark:text-[#b99d9d] text-base">ກະລຸນາປ້ອນຂໍ້ມູນເພື່ອເຂົ້າສູ່ລະບົບ</p>
              </div>

              {/* Form */}
              <form className="space-y-6" onSubmit={login}>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-white" htmlFor="phone">ເບີໂທລະສັບ</label>
                  <div className="relative">
                    <input onChange={(e) => setTel(e.target.value)}
                      id="phone"
                      type="text"
                      placeholder="20 XXXXXXXX"
                      className="block w-full h-14 rounded-lg border-gray-300 dark:border-[#543b3b] bg-white dark:bg-[#271c1c] text-gray-900 dark:text-white shadow-sm focus:border-[#d41111] focus:ring-[#d41111] dark:focus:border-[#d41111] dark:focus:ring-1 sm:text-base pl-4 pr-10 font-display placeholder:text-gray-400 dark:placeholder:text-[#6a5050]"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 dark:text-[#b99d9d]">
                      {/* Phone Icon SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="block text-sm font-medium text-gray-700 dark:text-white" htmlFor="password">ລະຫັດຜ່ານ</label>
                  </div>
                  <div className="relative rounded-lg shadow-sm">
                    <input onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="*********"
                      className="block w-full h-14 rounded-lg border-gray-300 dark:border-[#543b3b] bg-white dark:bg-[#271c1c] text-gray-900 dark:text-white shadow-sm focus:border-[#d41111] focus:ring-[#d41111] dark:focus:border-[#d41111] dark:focus:ring-1 sm:text-base pl-4 pr-12 font-display placeholder:text-gray-400 dark:placeholder:text-[#6a5050]"
                    />
                    <div
                      className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-400 dark:text-[#b99d9d] hover:text-[#d41111] transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        /* Eye Slash Icon */
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      ) : (
                        /* Eye Icon */
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-end pt-1">
                    <a href="#" className="text-sm font-medium text-[#d41111] hover:text-[#b90e0e] transition-colors">ລືມລະຫັດຜ່ານ?</a>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-lg bg-[#d41111] px-3 py-4 text-base font-semibold text-white shadow-sm hover:bg-[#b90e0e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d41111] transition-all duration-200 tracking-wide"
                  >
                    ເຂົ້າສູ່ລະບົບ
                  </button>
                </div>
              </form>

              {/* Footer Text */}
              <p className="mt-8 text-center text-sm text-gray-500 dark:text-[#7a6060]">
                ຍັງບໍ່ມີບັນຊີເທື່ອບໍ?
                <a href="#" className="font-semibold text-[#d41111] hover:text-[#b90e0e] transition-colors ml-1">ຕິດຕໍ່ຜູ້ເບິ່ງແຍງລະບົບ</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
