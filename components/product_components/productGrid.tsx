import { useCategory } from "@/hooks/useCategory";
import { useProduct } from "@/hooks/useProduct";
import { Product } from "@/types/product.type";
import { useUnit } from "@/hooks/useUnit";
import Swal from "sweetalert2";
const ProductGrid = () => {
    const { categories } = useCategory();
    const { units } = useUnit();
    const { products, updateProduct, removeProduct } = useProduct();
    const editProduct = async (item: Product) => {
        const { value: formValues } = await Swal.fire({
            title: "ຟອມແກ້ໄຂສິນຄ້າ",
            width: "100%",
            confirmButtonText: "ບັນທຶກ",
            cancelButtonText: "ຍົກເລີກ",
            showCancelButton: true,
            focusConfirm: false,
            html: `
<div class="text-gray-900 space-y-4">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

    <!-- Product Name -->
    <div class="flex flex-col">
      <label class="text-sm text-gray-600 mb-1">ຊື່ສິນຄ້າ</label>
      <input id="productName" value="${item.productName}" 
        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
    </div>

    <!-- Category -->
    <div class="flex flex-col">
      <label class="text-sm text-gray-600 mb-1">ໝວດໝູ່</label>
      <select id="categoryID" 
        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
        ${categories.map(
                c => `<option value="${c.categoryID}" ${c.categoryID === item.categoryID ? "selected" : ""}>
            ${c.categoryName}
          </option>`
            ).join("")}
      </select>
    </div>
    <div class="flex flex-col">
  <label class="text-sm text-gray-600 mb-1">ຫົວໜ່ວຍ</label>
  <select id="unitID"
  class="bg-white border border-gray-300 text-sm rounded-md px-3 py-2">
  ${units.map(
                u => `<option value="${u.unitID}" ${u.unitID === item.unitID ? "selected" : ""}>
            ${u.unitName}
          </option>`
            ).join("")}
</select>
</div>
    <!-- Price -->
    <div class="flex flex-col">
      <label class="text-sm text-gray-600 mb-1">ລາຄາຂາຍ (ກີບ)</label>
      <input id="price" type="number" value="${item.price}" 
        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
    </div>

    <!-- Import Price -->
    <div class="flex flex-col">
      <label class="text-sm text-gray-600 mb-1">ລາຄານຳເຂົ້າ (ກີບ)</label>
      <input id="importPrice" type="number" value="${item.importPrice}" 
        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
    </div>

    <!-- Stock Qty -->
    <div class="flex flex-col">
      <label class="text-sm text-gray-600 mb-1">ຈຳນວນສະຕັອກ</label>
      <input id="stockQty" type="number" value="${item.stockQty}" 
        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
    </div>

    <!-- Manufacture -->
    <div class="flex flex-col">
      <label class="text-sm text-gray-600 mb-1">ຜູ້ຜະລິດ</label>
      <input id="manufacture" type="date" value="${item.manufacture ? item.manufacture.substring(0, 10) : ''}" 
        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
    </div>

    <!-- Expiry -->
    <div class="flex flex-col">
      <label class="text-sm text-gray-600 mb-1">ວັນໝົດອາຍຸ</label>
      <input id="expiry" type="date" value="${item.expiry ? item.expiry.substring(0, 10) : ''}" 
        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
    </div>

    <!-- Description -->
    <div class="flex flex-col sm:col-span-2">
      <label class="text-sm text-gray-600 mb-1">ລາຍລະອຽດ</label>
      <textarea id="description" 
        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-24">${item.description ?? ''}</textarea>
    </div>
  </div>
</div>
`,
            preConfirm: () => {
                const unitValue =
                    (document.getElementById("unitID") as HTMLSelectElement).value;

                const manufactureValue =
                    (document.getElementById("manufacture") as HTMLInputElement).value;

                const expiryValue =
                    (document.getElementById("expiry") as HTMLInputElement).value;

                if (!unitValue) {
                    Swal.showValidationMessage("ກະລຸນາເລືອກຫົວໜ່ວຍ");
                    return;
                }

                return {
                    productName: (document.getElementById("productName") as HTMLInputElement).value.trim(),
                    categoryID: Number(
                        (document.getElementById("categoryID") as HTMLSelectElement).value
                    ),
                    unitID: Number(unitValue),
                    price: Number((document.getElementById("price") as HTMLInputElement).value),
                    image: item.image,
                    importPrice: Number(
                        (document.getElementById("importPrice") as HTMLInputElement).value
                    ),
                    stockQty: Number(
                        (document.getElementById("stockQty") as HTMLInputElement).value
                    ),
                    manufacture: manufactureValue || null,
                    expiry: expiryValue || null,
                    description:
                        (document.getElementById("description") as HTMLTextAreaElement).value || "",
                };
            }
        });

        if (formValues) {
            await updateProduct(item.productID, formValues);
            Swal.fire({
                icon: "success",
                title: "ສຳເລັດ",
                text: "ແກ້ໄຂສິນຄ້າສຳເລັດແລ້ວ",
                timer: 1500,
                showConfirmButton: false,
            });
        }
    };

      const deleteProduct = (id: number) => {
            Swal.fire({
                icon: "question",
                title: "ຕ້ອງການລົບແທ້ ຫຼື ບໍ?",
                showCancelButton: true,
                cancelButtonText: "ຍົກເລີກ",
                confirmButtonText: "ຕົກລົງ",
                confirmButtonColor: "#dc2626",
            }).then((result) => {
                if (result.isConfirmed) {
                    removeProduct(id);
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
        <main className="flex-1 p-8" style={{ fontFamily: "Noto Sans Lao" }}>
            <div
                className="bg-[#1e1e1e] border border-[#382929] rounded-xl p-4 mb-6 flex flex-wrap justify-between items-center gap-4">
                <div className="flex gap-3">
                    <div className="relative group">
                        <select
                            className="bg-[#382929] border-none text-white text-sm rounded-lg pl-10 pr-8 py-2 appearance-none focus:ring-2 focus:ring-primary min-w-[180px]">
                            <option>--ທຸກໝວດໝູ່--</option>
                            {categories.map((e) => (
                                <option key={e.categoryID} value={e.categoryID}>{e.categoryName}</option>
                            ))}
                        </select>
                        <span
                            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#b79e9e] text-lg">filter_list</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex bg-[#382929] p-1 rounded-lg">
                        <button className="p-1.5 text-[#b79e9e] hover:text-white"><span
                            className="material-symbols-outlined text-xl">list</span></button>
                        <button className="p-1.5 bg-primary text-white rounded-md shadow-sm"><span
                            className="material-symbols-outlined text-xl">grid_view</span></button>
                    </div>
                    <div className="text-[#b79e9e] text-sm">
                        ສະແດງທັງໝົດ: <span className="text-white font-bold">{products.length}</span> ລາຍການ
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {products.map((item) => (
                    <div key={item.productID}
                        className="bg-[#1e1e1e] border border-[#382929] rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300">
                        <div className="relative aspect-square overflow-hidden bg-[#2a1f1f]">
                            <img alt="Product"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                src={item.image} />
                            <div className="absolute top-2 right-2">
                                <span
                                    className="px-2 py-1 bg-blue-500/20 text-green-700 text-[10px] font-bold rounded border border-green-500/30 backdrop-blur-md">{item.category?.categoryName}</span>
                            </div>
                            <div
                                className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => editProduct(item)}
                                    className="p-3 bg-white/10 hover:bg-blue-500/40 text-white rounded-full backdrop-blur-md transition-colors"><span
                                        className="material-symbols-outlined">edit</span></button>
                                <button onClick={()=> deleteProduct(item.productID)}
                                    className="p-3 bg-white/10 hover:bg-red-500/40 text-white rounded-full backdrop-blur-md transition-colors"><span
                                        className="material-symbols-outlined">delete</span></button>
                            </div>
                        </div>
                        <div className="p-4 space-y-3">
                            <div>
                                <p className="text-[10px] text-[#b79e9e] font-mono mb-1">{item.productID}</p>
                                <h3 className="text-white font-bold text-lg truncate">{item.productName}</h3>
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="space-y-1">
                                    <p className="text-xs text-[#b79e9e]">ລາຄາຂາຍ</p>
                                    <p className="text-xl font-black text-primary">{(item.price).toLocaleString()} ກີບ</p>
                                </div>
                                <div className="text-right space-y-1">
                                    <p className="text-xs text-[#b79e9e]">ສະຕັອກ</p>
                                    <p className="text-sm font-bold text-green-500">{item.stockQty} {item.unit?.unitName}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center bg-[#1e1e1e] border border-[#382929] rounded-xl px-6 py-4">
                <p className="text-sm text-[#b79e9e]">ສະແດງໜ້າທີ 1 ຈາກ 10</p>
                <div className="flex gap-1">
                    <button className="p-2 rounded hover:bg-[#382929] text-[#b79e9e] transition-colors"><span
                        className="material-symbols-outlined">chevron_left</span></button>
                    <button className="size-8 rounded bg-primary text-white text-sm font-bold shadow-sm">1</button>
                    <button
                        className="size-8 rounded hover:bg-[#382929] text-[#b79e9e] text-sm transition-colors">2</button>
                    <button
                        className="size-8 rounded hover:bg-[#382929] text-[#b79e9e] text-sm transition-colors">3</button>
                    <span className="text-[#382929] flex items-center px-1">...</span>
                    <button
                        className="size-8 rounded hover:bg-[#382929] text-[#b79e9e] text-sm transition-colors">10</button>
                    <button className="p-2 rounded hover:bg-[#382929] text-[#b79e9e] transition-colors"><span
                        className="material-symbols-outlined">chevron_right</span></button>
                </div>
            </div>
        </main>
    )
}

export default ProductGrid;