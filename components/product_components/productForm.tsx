import { useState } from "react";
import { useCategory } from "@/hooks/useCategory";
import { useUnit } from "@/hooks/useUnit";
import { useProduct } from "@/hooks/useProduct";
import Swal from "sweetalert2";
const ProductForm = () => {
         const { categories } = useCategory();
         const { createProduct } = useProduct();
         const { units } = useUnit();
         const [imagePreview, setImagePreview] = useState<string | null>(null);
         const [imageFile, setImageFile] = useState<File | null>(null);

         const [productName, setProductName] = useState("");
         const [categoryID, setCategoryID] = useState("");
         const [unitID, setUnitID] = useState("");
         const [stockQty, setStockQty] = useState("");
         const [price, setPrice] = useState("");
         const [importPrice, setImportPrice] = useState("");
         const [manufacture, setManufacture] = useState("");
         const [expiry, setExpiry] = useState("");
         const [description, setDescription] = useState("");
         const resetForm = () => {
                  setProductName("");
                  setCategoryID("");
                  setUnitID("");
                  setStockQty("");
                  setPrice("");
                  setImportPrice("");
                  setManufacture("");
                  setExpiry("");
                  setDescription("");

                  // reset ຮູບ
                  setImageFile(null);
                  setImagePreview(null);
         };


         const handleImageChange = (e: React.ChangeEvent<HTMLInputElement> | File) => {
                  const file = e instanceof File ? e : e.target.files?.[0];
                  if (file) {
                           // ກວດສອບຂະໜາດໄຟລ໌ (5MB)
                           if (file.size > 5 * 1024 * 1024) {
                                    alert("ຮູບພາບມີຂະໜາດໃຫຍ່ເກີນ 5MB");
                                    return;
                           }
                           if (!file.type.startsWith("image/")) {
                                    alert("ກະລຸນາເລືອກໄຟລ໌ຮູບພາບເທົ່ານັ້ນ");
                                    return;
                           }
                           setImageFile(file);
                           const reader = new FileReader();
                           reader.onloadend = () => {
                                    if (typeof reader.result === 'string') {
                                             setImagePreview(reader.result);
                                    }
                           };
                           reader.readAsDataURL(file);
                  }
         };

         const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
                  e.preventDefault();
         };

         const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files?.[0];
                  if (file) {
                           handleImageChange(file);
                  }
         };

         const removeImage = () => {
                  setImagePreview(null);
                  setImageFile(null);
         };

         const handleSubmit = async (e: React.FormEvent) => {
                  e.preventDefault();

                  if (
                           !productName ||
                           !categoryID ||
                           !unitID ||
                           !stockQty ||
                           !price ||
                           !importPrice ||
                           !imageFile
                  ) {
                           alert("ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ");
                           return;
                  }

                  const formData = new FormData();
                  formData.append("productName", productName);
                  formData.append("categoryID", categoryID);
                  formData.append("unitID", unitID);
                  formData.append("stockQty", stockQty);
                  formData.append("price", price);
                  formData.append("importPrice", importPrice);
                  formData.append("manufacture", manufacture);
                  formData.append("expiry", expiry);
                  formData.append("description", description);
                  formData.append("image", imageFile);
                  await createProduct(formData);
                  resetForm();
                  Swal.fire({
                           icon: "success",
                           title: "ສຳເລັດ",
                           text: "ເພີ່ມສິນຄ້າສຳເລັດ",
                           showConfirmButton: false,
                           timer: 2000,
                  })
         };
         return (
                  <form onSubmit={handleSubmit}
                           style={{ fontFamily: "Noto Sans Lao" }}
                           className="bg-background-dark border border-[#382929] w-full rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                  >
                           <div className="px-8 py-5 border-b border-[#382929] flex justify-between items-center bg-[#211111]">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                             <span className="material-symbols-outlined text-primary">add_box</span>
                                             ເພີ່ມສິນຄ້າໃໝ່
                                    </h3>
                           </div>
                           <div className="p-8 overflow-y-auto custom-scrollbar">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                             <div className="space-y-4">
                                                      <label className="block">
                                                               <span className="text-sm font-medium text-[#b79e9e] mb-1 block">
                                                                        ຊື່ສິນຄ້າ *
                                                               </span>
                                                               <input value={productName} onChange={(e) => setProductName(e.target.value)}
                                                                        className="w-full bg-[#382929] border-none rounded-lg text-white focus:ring-2 focus:ring-primary py-2 px-4"
                                                                        placeholder="ລະບຸຊື່ສິນຄ້າ..."
                                                                        type="text"
                                                               />
                                                      </label>
                                                      <div className="grid grid-cols-2 gap-4">
                                                               <label className="block">
                                                                        <span className="text-sm font-medium text-[#b79e9e] mb-1 block">
                                                                                 ໝວດໝູ່ *
                                                                        </span>
                                                                        <select
                                                                                 value={categoryID} onChange={(e) => setCategoryID(e.target.value)}
                                                                                 className="w-full bg-[#382929] border-none rounded-lg text-white focus:ring-2 focus:ring-primary py-2 px-4 appearance-none">
                                                                                 <option value="">--ເລືອກປະເພດ--</option>
                                                                                 {categories.map((item) => (
                                                                                          <option key={item.categoryID} value={item.categoryID}>
                                                                                                   {item.categoryName}
                                                                                          </option>
                                                                                 ))}
                                                                        </select>
                                                               </label>
                                                               <label className="block">
                                                                        <span className="text-sm font-medium text-[#b79e9e] mb-1 block">
                                                                                 ໜ່ວຍ *
                                                                        </span>
                                                                        <select value={unitID} onChange={(e) => setUnitID(e.target.value)}
                                                                                 className="w-full bg-[#382929] border-none rounded-lg text-white focus:ring-2 focus:ring-primary py-2 px-4 appearance-none">
                                                                                 <option value="">--ເລືອກໜ່ວຍ--</option>
                                                                                 {units.map((item) => (
                                                                                          <option key={item.unitID} value={item.unitID}>
                                                                                                   {item.unitName}
                                                                                          </option>
                                                                                 ))}
                                                                        </select>
                                                               </label>
                                                      </div>
                                                      <div className="grid grid-cols-2 gap-4">
                                                               <label className="block">
                                                                        <span className="text-sm font-medium text-[#b79e9e] mb-1 block">
                                                                                 ລາຄາຕົ້ນທຶນ
                                                                        </span>
                                                                        <input value={importPrice} onChange={(e) => setImportPrice(e.target.value)}
                                                                                 className="w-full bg-[#382929] border-none rounded-lg text-white focus:ring-2 focus:ring-primary py-2 px-4"
                                                                                 placeholder="0"
                                                                                 type="number"
                                                                        />
                                                               </label>
                                                               <label className="block">
                                                                        <span className="text-sm font-medium text-[#b79e9e] mb-1 block">
                                                                                 ລາຄາຂາຍ *
                                                                        </span>
                                                                        <input value={price} onChange={(e) => setPrice(e.target.value)}
                                                                                 className="w-full bg-[#382929] border-none rounded-lg text-white focus:ring-2 focus:ring-primary py-2 px-4 font-bold text-primary"
                                                                                 placeholder="0"
                                                                                 type="number"
                                                                        />
                                                               </label>
                                                      </div>
                                                      <label className="block">
                                                               <span className="text-sm font-medium text-[#b79e9e] mb-1 block">
                                                                        ຈຳນວນໃນສາງ *
                                                               </span>
                                                               <input value={stockQty} onChange={(e) => setStockQty(e.target.value)}
                                                                        className="w-full bg-[#382929] border-none rounded-lg text-white focus:ring-2 focus:ring-primary py-2 px-4"
                                                                        placeholder="0"
                                                                        type="number"
                                                               />
                                                      </label>
                                             </div>

                                             <div className="space-y-4">
                                                      <div className="grid grid-cols-2 gap-4">
                                                               <label className="block">
                                                                        <span className="text-sm font-medium text-[#b79e9e] mb-1 block">
                                                                                 ວັນທີຜະລິດ
                                                                        </span>
                                                                        <input value={manufacture} onChange={(e) => setManufacture(e.target.value)}
                                                                                 className="w-full bg-[#382929] border-none rounded-lg text-white focus:ring-2 focus:ring-primary py-2 px-4"
                                                                                 type="date"
                                                                        />
                                                               </label>
                                                               <label className="block">
                                                                        <span className="text-sm font-medium text-[#b79e9e] mb-1 block">
                                                                                 ວັນໝົດອາຍຸ
                                                                        </span>
                                                                        <input value={expiry} onChange={(e) => setExpiry(e.target.value)}
                                                                                 className="w-full bg-[#382929] border-none rounded-lg text-white focus:ring-2 focus:ring-primary py-2 px-4"
                                                                                 type="date"
                                                                        />
                                                               </label>
                                                      </div>
                                                      <label className="block">
                                                               <span className="text-sm font-medium text-[#b79e9e] mb-1 block">
                                                                        ຄຳອະທິບາຍ
                                                               </span>
                                                               <textarea value={description} onChange={(e) => setDescription(e.target.value)}
                                                                        className="w-full bg-[#382929] border-none rounded-lg text-white focus:ring-2 focus:ring-primary py-2 px-4"
                                                                        placeholder="ລາຍລະອຽດເພີ່ມເຕີມ..."
                                                                        rows={3}
                                                               ></textarea>
                                                      </label>
                                                      <div>
                                                               <span className="text-sm font-medium text-[#b79e9e] mb-2 block">
                                                                        ຮູບພາບສິນຄ້າ
                                                               </span>
                                                               {!imagePreview ? (
                                                                        <label
                                                                                 htmlFor="image-upload"
                                                                                 className="border-2 border-dashed border-[#382929] hover:border-primary/50 transition-colors rounded-xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer bg-[#211111]/50 group"
                                                                                 onDragOver={handleDragOver}
                                                                                 onDrop={handleDrop}
                                                                        >
                                                                                 <input
                                                                                          id="image-upload"
                                                                                          type="file"
                                                                                          accept="image/*"
                                                                                          onChange={handleImageChange}
                                                                                          className="hidden"
                                                                                 />
                                                                                 <span className="material-symbols-outlined text-4xl text-[#b79e9e] group-hover:text-primary transition-colors">
                                                                                          cloud_upload
                                                                                 </span>
                                                                                 <p className="text-xs text-[#b79e9e] group-hover:text-white">
                                                                                          ຄລິກ ຫຼື ລາກຮູບມາໃສ່ບ່ອນນີ້
                                                                                 </p>
                                                                                 <p className="text-[10px] text-[#4a3a3a]">
                                                                                          PNG, JPG ຂະໜາດບໍ່ເກີນ 5MB
                                                                                 </p>
                                                                        </label>
                                                               ) : (
                                                                        <div className="relative border-2 border-[#382929] rounded-xl overflow-hidden bg-[#211111]">
                                                                                 <img
                                                                                          src={imagePreview}
                                                                                          alt="Preview"
                                                                                          className="w-full h-48 object-cover"
                                                                                 />
                                                                                 <button
                                                                                          type="button"
                                                                                          onClick={removeImage}
                                                                                          className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-all"
                                                                                 >
                                                                                          <span className="material-symbols-outlined text-sm">
                                                                                                   close
                                                                                          </span>
                                                                                 </button>
                                                                        </div>
                                                               )}
                                                      </div>
                                             </div>
                                    </div>
                           </div>
                           <div className="px-8 py-5 border-t border-[#382929] bg-[#211111] flex justify-end gap-4">
                                    <button type="submit" className="px-8 py-2 rounded-lg bg-red-500 hover:bg-red-700 text-white font-bold shadow-lg transition-transform active:scale-95">
                                             ບັນທຶກຂໍ້ມູນ
                                    </button>
                           </div>
                  </form>
         );
};

export default ProductForm;