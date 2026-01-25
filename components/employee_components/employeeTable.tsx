import { useEmployee } from "@/hooks/useEmployee";
import { Edit, Trash } from "lucide-react"
const EmployeeTable = () =>{
         const {employees} = useEmployee();
         return (
                   <div className="w-full overflow-x-auto rounded-xl border border-[#3f1f1f] bg-[#2a1515] shadow-sm">
            <table className="w-full text-left text-sm text-[#b99d9d]">
                <thead className="bg-[#1a0a0a] text-white border-b border-[#3f1f1f]">
                    <tr>
                        <th className="px-6 py-4 font-bold font-lao whitespace-nowrap">ລະຫັດ</th>
                        <th className="px-6 py-4 font-bold font-lao whitespace-nowrap">ຊື່ ແລະ ນາມສະກຸນ</th>
                        <th className="px-6 py-4 font-bold font-lao whitespace-nowrap">ເພດ</th>
                        <th className="px-6 py-4 font-bold font-lao whitespace-nowrap">ເບີໂທ</th>
                        <th className="px-6 py-4 font-bold font-lao whitespace-nowrap">ພະແນກ</th>
                        <th className="px-6 py-4 font-bold font-lao whitespace-nowrap">ປຸ່ມຈັດການ</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#3f1f1f]">
                    {employees.map((item) => (
                        <tr key={item.employeeID} className="hover:bg-white/5 transition-colors" style={{ fontFamily: "Noto Sans Lao" }}>
                            <td className="px-6 py-4 font-medium text-white">{item.employeeID}</td>
                            <td className="px-6 py-4">{item.employeeName}</td>
                            <td className="px-6 py-4">{item.gender}</td>
                            <td className="px-6 py-4">{item.tel}</td>
                            <td className="px-6 py-4">{item.department?.departmentName}</td>
                            <td className="px-6 py-4 font-lao">
                                <div className="flex gap-1">
                                    <button    
                                    className="p-2 rounded-md cursor-pointer hover:scale-95 transform transition duration-200">
                                        <Edit className="text-green-500" />
                                    </button>
                                    <button  className="p-2 rounded-md cursor-pointer hover:scale-95 transform transition duration-200">
                                        <Trash className="text-rose-500" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
         )
}

export default EmployeeTable;