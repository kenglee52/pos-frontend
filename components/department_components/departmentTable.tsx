import { useDepartment } from "@/hooks/useDepartment"
import { Edit, Trash } from "lucide-react"
import Swal from "sweetalert2";

const DepartmentTable = () => {
    const { departments, removeDepartment } = useDepartment();
    const deleteDepartment = (id: number) => {
        Swal.fire({
            icon: "question",
            title: "ຕ້ອງການລົບແທ້ ຫຼື ບໍ?",
            showCancelButton: true,
            cancelButtonText: "ຍົກເລີກ",
            confirmButtonText: "ຕົກລົງ",
            confirmButtonColor: "#dc2626",
        }).then((result) => {
            if (result.isConfirmed) {
                removeDepartment(id);
                Swal.fire({
                    icon: "success",
                    title: "ລົບສຳເລັດ",
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        });
    };
    return (
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
                        <tr key={item.departmentID} className="hover:bg-white/5 transition-colors" style={{ fontFamily: "Noto Sans Lao" }}>
                            <td className="px-6 py-4 font-medium text-white">{item.departmentID}</td>
                            <td className="px-6 py-4">{item.departmentName}</td>
                            <td className="px-6 py-4 font-lao">
                                <div className="flex gap-1">
                                    <button className="p-2 rounded-md cursor-pointer hover:scale-95 transform transition duration-200">
                                        <Edit className="text-green-500" />
                                    </button>
                                    <button onClick={() => deleteDepartment(item.departmentID)} className="p-2 rounded-md cursor-pointer hover:scale-95 transform transition duration-200">
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

export default DepartmentTable