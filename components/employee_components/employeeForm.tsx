import React, { useState } from "react";
import { useDepartment } from "@/hooks/useDepartment";
const EmployeeForm = () =>{
   const {departments} = useDepartment();
   const [employeeName, setEmployeeName] = useState("");
   const [gender, setGender] = useState("");
   const [tel, setTel] = useState("");
   const [departmentID, setDepartmentID] = useState("");
   const [password, setPassword] = useState("");
   const handleSubmit = (e:React.FormEvent) =>{
         e.preventDefault();
         console.log(employeeName, gender, tel, departmentID, password);
   }
   return (
     <section style={{fontFamily: "Noto Sans Lao"}}>
       <form onSubmit={handleSubmit} className="p-5 rounded-xl shadow-2xl border-2 border-red-800/25">
         <p className="text-white font-bold text-center text-xl mb-4">ຟອມເພີ່ມພະນັກງານ</p> 
         <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            <input onChange={(e)=>setEmployeeName(e.target.value)} placeholder="ຊື່ ແລະ ນາມສະກຸນ" type="text" className="px-3 py-2 rounded-md border-white/25 border-2 focus:outline-none" />
            <select onChange={(e)=>setGender(e.target.value)} className="px-3 py-2 rounded-md border-white/25 border-2 focus:outline-none">
               <option className="text-black" value="">--ເລືອກເພດ--</option>
               <option className="text-black" value="ຊາຍ">ຊາຍ</option>
               <option className="text-black" value="ຍິງ">ຍິງ</option>
            </select>
            <input onChange={(e)=>setTel(e.target.value)} placeholder="ເບີໂທລະສັບ" type="number" className="px-3 py-2 rounded-md border-white/25 border-2 focus:outline-none" />
            <select onChange={(e)=>setDepartmentID(e.target.value)} className="px-3 py-2 rounded-md border-white/25 border-2 focus:outline-none">
               <option className="text-black" value="">--ເລືອກພະແນກ--</option>
               {departments.map((item) => (
                  <option key={item.departmentID} className="text-black" value={item.departmentID} >{item.departmentName}</option>
               ))}
            </select>
            <input onChange={(e)=>setPassword(e.target.value)} placeholder="ລະຫັດຜ່ານ" type="password" className="px-3 py-2 rounded-md border-white/25 border-2 focus:outline-none" />
            <input placeholder="ຢືນຢັນລະຫັດຜ່ານ" type="password" className="px-3 py-2 rounded-md border-white/25 border-2 focus:outline-none" />
         </div>
         <button type="submit" className="py-2 px-5 rounded-lg bg-red-700 mt-4 font-bold cursor-pointer hover:scale-95 transform transition duration-300">ບັນທຶກ</button>
       </form>
     </section>
   )
}

export default EmployeeForm;