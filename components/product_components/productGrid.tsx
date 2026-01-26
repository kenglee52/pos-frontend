import { useCategory } from "@/hooks/useCategory";
import { useProduct } from "@/hooks/useProduct";
const ProductGrid = () =>{
  const {categories} = useCategory();
  const {products} = useProduct();
   return (
          <main className="flex-1 p-8" style={{fontFamily: "Noto Sans Lao"}}>
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
                            <button
                                className="p-3 bg-white/10 hover:bg-blue-500/40 text-white rounded-full backdrop-blur-md transition-colors"><span
                                    className="material-symbols-outlined">edit</span></button>
                            <button
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