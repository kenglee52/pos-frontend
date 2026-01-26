import { useEmployee } from "@/hooks/useEmployee";
import { Edit, Trash } from "lucide-react";
import { useDepartment } from "@/hooks/useDepartment";
import Swal from "sweetalert2";
const EmployeeTable = () => {
    const { employees, removeEmployee, updateEmployee } = useEmployee();
    const { departments } = useDepartment();
    const deleteEmployee = (id: number) => {
        Swal.fire({
            icon: "question",
            title: "ຕ້ອງການລົບແທ້ ຫຼື ບໍ?",
            showCancelButton: true,
            cancelButtonText: "ຍົກເລີກ",
            confirmButtonText: "ຕົກລົງ",
            confirmButtonColor: "#dc2626",
        }).then((result) => {
            if (result.isConfirmed) {
                removeEmployee(id);
                Swal.fire({
                    icon: "success",
                    title: "ລົບສຳເລັດ",
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        });
    };
    const editEmployee = (
        employeeID: number,
        employeeName: string,
        gender: string,
        tel: string,
        departmentID: number
    ) => {
        const departmentOptions = departments
            .map(
                (d) =>
                    `<option value="${d.departmentID}" ${d.departmentID === departmentID ? "selected" : ""
                    }>
        ${d.departmentName}
      </option>`
            )
            .join("");
        Swal.fire({
            title: "ແກ້ໄຂຂໍ້ມູນພະນັກງານ",
            confirmButtonText: "ບັນທຶກ",
            cancelButtonText: "ຍົກເລີກ",
            showCancelButton: true,
            confirmButtonColor: "#16a34a",
            focusConfirm: false,
            html: `
       <div class="flex flex-col gap-3">
         <input id="employeeName" class="px-3 py-2 rounded-md border-gray-500 border-2 focus:outline-none" placeholder="ຊື່ ແລະ ນາມສະກຸນ" value="${employeeName}">
      
      <select id="gender" class="px-3 py-2 rounded-md border-gray-500 border-2 focus:outline-none">
        <option value="ຊາຍ" ${gender === "ຊາຍ" ? "selected" : ""}>ຊາຍ</option>
        <option value="ຍິງ" ${gender === "ຍິງ" ? "selected" : ""}>ຍິງ</option>
      </select>

      <input id="tel" class="px-3 py-2 rounded-md border-gray-500 border-2 focus:outline-none" placeholder="ເບີໂທ" value="${tel}">
      
       <select 
      id="departmentID"
      class="px-3 py-2 rounded-md border-gray-500 border-2 focus:outline-none"
    >
      <option value="">-- ເລືອກພະແນກ --</option>
      ${departmentOptions}
    </select>
       <div/>
    `,
            preConfirm: () => {
                const name = (document.getElementById("employeeName") as HTMLInputElement).value;
                const genderValue = (document.getElementById("gender") as HTMLSelectElement).value;
                const telValue = (document.getElementById("tel") as HTMLInputElement).value;
                const deptID = Number(
                    (document.getElementById("departmentID") as HTMLInputElement).value
                );

                if (!name || !genderValue || !telValue || !deptID) {
                    Swal.showValidationMessage("ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ");
                    return;
                }

                return {
                    employeeName: name,
                    gender: genderValue,
                    tel: telValue,
                    departmentID: deptID,
                };
            },
        }).then(async (result) => {
            if (result.isConfirmed && result.value) {
                await updateEmployee(employeeID, result.value);

                Swal.fire({
                    icon: "success",
                    title: "ອັບເດດສຳເລັດ",
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
                                        onClick={() =>
                                            editEmployee(
                                                item.employeeID,
                                                item.employeeName,
                                                item.gender,
                                                item.tel,
                                                item.departmentID
                                            )
                                        }
                                        className="p-2 rounded-md cursor-pointer hover:scale-95 transform transition duration-200">
                                        <Edit className="text-green-500" />
                                    </button>
                                    <button onClick={() => deleteEmployee(item.employeeID)} className="p-2 rounded-md cursor-pointer hover:scale-95 transform transition duration-200">
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