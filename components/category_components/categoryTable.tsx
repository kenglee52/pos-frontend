import { useDepartment } from "@/hooks/useDepartment"
import { Edit, Trash } from "lucide-react"
import { useCategory } from "@/hooks/useCategory";
import Swal from "sweetalert2";

const CategoryTable = () => {
    const {categories , removeCategory, updateCategory} = useCategory();
    const deleteCategory = (id: number) => {
        Swal.fire({
            icon: "question",
            title: "ຕ້ອງການລົບແທ້ ຫຼື ບໍ?",
            showCancelButton: true,
            cancelButtonText: "ຍົກເລີກ",
            confirmButtonText: "ຕົກລົງ",
            confirmButtonColor: "#dc2626",
        }).then((result) => {
            if (result.isConfirmed) {
                removeCategory(id);
                Swal.fire({
                    icon: "success",
                    title: "ລົບສຳເລັດ",
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        });
    };
    const editCategory = (id: number, categoryName: string) => {
        Swal.fire({
            showConfirmButton: false,
            showCloseButton: true,
            title: "ຟອມແກ້ໄຂປະເພດ",
            html: `
                          <div class="flex flex-col gap-3">
                            <input id="category" value="${categoryName}"
                            class="flex text-black w-full min-w-0 py-2 flex-1 resize-none overflow-hidden rounded-lg border focus:outline-0 bg-transparent h-full placeholder:text-[#6b5d5d] px-3 text-sm font-normal leading-normal font-lao" 
                            placeholder="ປະເພດ" 
                          />
                          <button id="btn" class="p-2 rounded-md cursor-pointer text-white hover:scale-95 transform transition duration-200 bg-red-600">
                              ບັນທຶກ
                          </button>
                          <p class="text-red-600" id="checkInput"></p>
                          <div/>
                          `,
            didOpen: () => {
                const btn = document.getElementById("btn");
                btn?.addEventListener("click", async () => {
                    const categoryName = (document.getElementById("category") as HTMLInputElement).value;
                    if (categoryName === "") {
                        return (document.getElementById("checkInput") as HTMLParagraphElement).innerHTML = "ກະລຸນາປ້ອນໃຫ້ຄົບ";
                    }
                    await updateCategory(id, {categoryName});
                    (document.getElementById("category") as HTMLInputElement).value = "";
                    Swal.fire({
                        title: "ເພີ່ມສຳເລັດ",
                        icon: "success",
                        confirmButtonText: "ຢຶນຢັນ"
                    });
                })
            }
        })
    }
    return (
        <div className="w-full overflow-x-auto rounded-xl border border-[#3f1f1f] bg-[#2a1515] shadow-sm">
            <table className="w-full text-left text-sm text-[#b99d9d]">
                <thead className="bg-[#1a0a0a] text-white border-b border-[#3f1f1f]">
                    <tr>
                        <th className="px-6 py-4 font-bold font-lao whitespace-nowrap">ລະຫັດປະເພດສິນຄ້າ</th>
                        <th className="px-6 py-4 font-bold font-lao whitespace-nowrap">ປະເພດສິນຄ້າ</th>
                        <th className="px-6 py-4 font-bold font-lao whitespace-nowrap">ປຸ່ມຈັດການ</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#3f1f1f]">
                    {categories.map((item) => (
                        <tr key={item.categoryID} className="hover:bg-white/5 transition-colors" style={{ fontFamily: "Noto Sans Lao" }}>
                            <td className="px-6 py-4 font-medium text-white">{item.categoryID}</td>
                            <td className="px-6 py-4">{item.categoryName}</td>
                            <td className="px-6 py-4 font-lao">
                                <div className="flex gap-1">
                                    <button 
                                     onClick={()=>editCategory(item.categoryID, item.categoryName)}
                                    className="p-2 rounded-md cursor-pointer hover:scale-95 transform transition duration-200">
                                        <Edit className="text-green-500" />
                                    </button>
                                    <button onClick={() => deleteCategory(item.categoryID)} className="p-2 rounded-md cursor-pointer hover:scale-95 transform transition duration-200">
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

export default CategoryTable