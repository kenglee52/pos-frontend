import React, { useState } from "react";
import { useDepartment } from "@/hooks/useDepartment";
import { useEmployee } from "@/hooks/useEmployee";
import Swal from "sweetalert2";

const EmployeeForm = () => {
  const { departments } = useDepartment();
  const { createEmployee } = useEmployee();

  const [employeeName, setEmployeeName] = useState("");
  const [gender, setGender] = useState("");
  const [tel, setTel] = useState("");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!employeeName || !gender || !tel || !department || !password) {
      return Swal.fire({
        icon: "warning",
        title: "ແຈ້ງເຕືອນ",
        text: "ກະລຸນາໃສ່ຂໍ້ມູນໃຫ້ຄົບ",
        timer: 2000,
        showConfirmButton: false,
      });
    }

    if (password !== checkPassword) {
      return setPasswordError("ລະຫັດຜ່ານບໍ່ຕົງກັນ");
    }

    await createEmployee({
      employeeName,
      gender,
      tel,
      departmentID: Number(department),
      password,
    });

    Swal.fire({
      icon: "success",
      title: "ສຳເລັດ",
      text: "ເພີ່ມພະນັກງານສຳເລັດ",
      timer: 1500,
      showConfirmButton: false,
    });

    setEmployeeName("");
    setGender("");
    setTel("");
    setDepartment("");
    setPassword("");
    setCheckPassword("");
  };

  return (
    <div style={{fontFamily: "Noto Sans Lao"}} className="bg-background-dark border border-[#382929] w-full rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

      {/* Header */}
      <div className="px-8 py-5 border-b border-[#382929] flex items-center bg-[#211111]">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            person_add
          </span>
          ເພີ່ມພະນັກງານໃໝ່
        </h3>
      </div>

      {/* Body */}
      <div className="p-8 overflow-y-auto custom-scrollbar">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
        >
          <label className="block">
            <span className="text-sm font-medium text-[#b79e9e] mb-1 block">
              ຊື່ – ນາມສະກຸນ *
            </span>
            <input
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              className="w-full bg-[#382929] rounded-lg text-white focus:ring-2 focus:ring-primary py-2 px-4"
              placeholder="ປ້ອນຊື່ພະນັກງານ..."
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#b79e9e] mb-1 block">
              ເພດ *
            </span>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full bg-[#382929] rounded-lg text-white focus:ring-2 focus:ring-primary py-2 px-4 appearance-none"
            >
              <option value="">-- ເລືອກເພດ --</option>
              <option value="ຊາຍ">ຊາຍ</option>
              <option value="ຍິງ">ຍິງ</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#b79e9e] mb-1 block">
              ເບີໂທ *
            </span>
            <input
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className="w-full bg-[#382929] rounded-lg text-white focus:ring-2 focus:ring-primary py-2 px-4"
              placeholder="020xxxxxxxx"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#b79e9e] mb-1 block">
              ພະແນກ *
            </span>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full bg-[#382929] rounded-lg text-white focus:ring-2 focus:ring-primary py-2 px-4 appearance-none"
            >
              <option value="">-- ເລືອກພະແນກ --</option>
              {departments.map((d) => (
                <option key={d.departmentID} value={d.departmentID}>
                  {d.departmentName}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#b79e9e] mb-1 block">
              ລະຫັດຜ່ານ *
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#382929] rounded-lg text-white focus:ring-2 focus:ring-primary py-2 px-4"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#b79e9e] mb-1 block">
              ຢືນຢັນລະຫັດຜ່ານ *
            </span>
            <input
              type="password"
              value={checkPassword}
              onChange={(e) => {
                setCheckPassword(e.target.value);
                setPasswordError(
                  e.target.value !== password ? "ລະຫັດຜ່ານບໍ່ຕົງກັນ" : ""
                );
              }}
              className="w-full bg-[#382929] rounded-lg text-white focus:ring-2 focus:ring-primary py-2 px-4"
            />
            {passwordError && (
              <p className="text-red-500 text-xs mt-1">{passwordError}</p>
            )}
          </label>
        </form>
      </div>

      {/* Footer */}
      <div className="px-8 py-5 border-t border-[#382929] bg-[#211111] flex justify-end">
        <button
          onClick={handleSubmit}
          className="px-8 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg transition-transform active:scale-95"
        >
          ບັນທຶກຂໍ້ມູນ
        </button>
      </div>
    </div>
  );
};

export default EmployeeForm;
