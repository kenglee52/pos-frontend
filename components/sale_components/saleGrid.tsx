import { useCategory } from "@/hooks/useCategory";
import { useProduct } from "@/hooks/useProduct";
const SaleGrid = () => {
  const { categories } = useCategory();
  const { products } = useProduct();
  const addToCart = (item: any) => {
    const carts = JSON.parse(localStorage.getItem("carts") || "[]");

    const exist = carts.find((c: any) => c.id === item.productID);

    if (exist) {
      exist.qty += 1;
    } else {
      carts.push({
        id: item.productID,
        name: item.productName,
        price: item.price,
        qty: 1,
        image: item.image
      });
    }

    localStorage.setItem("carts", JSON.stringify(carts));

    // 🔥 แจ้ง Cart ว่ามีการเปลี่ยน
    window.dispatchEvent(new Event("cart-updated"));
  };


  return (
    <section className="flex-1 flex flex-col overflow-hidden">
      {/* Search and Filter */}
      <div className="p-2 flex flex-col gap-4 border-bottom border-[#382929]">
        <div className="flex gap-4">
          <label className="flex flex-col flex-1 h-12">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden border border-[#382929]">
              <div className="text-[#b79e9e] flex bg-[#382929] items-center justify-center px-4">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="w-full border-none bg-[#382929] text-white focus:outline-0 focus:ring-0 placeholder:text-[#b79e9e] px-4 text-base font-normal leading-normal"
                placeholder="ຄົ້ນຫາສິນຄ້າ ຫຼື ສະແກນບາໂຄດ..."
                value=""
                onChange={() => { }}
              />
            </div>
          </label>
          <button className="flex items-center justify-center px-6 rounded-lg bg-[#382929] text-white hover:bg-primary transition-colors gap-2">
            <span className="material-symbols-outlined">filter_list</span>
            <span className="font-medium">ກັ່ນຕອງ</span>
          </button>
        </div>

        {/* Category Chips */}
        <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar no-scrollbar">
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-red-800 px-6 cursor-pointer">
            <p className="text-white text-sm font-medium">ທັງໝົດ</p>
          </div>
          {categories.map((item) => (
            <div key={item.categoryID} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#382929] px-6 cursor-pointer hover:bg-primary/50 transition-colors">
              <p className="text-white text-sm font-medium">{item.categoryName}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
          {/* Product Item 1 */}
          {products.map((item) => (
            <div onClick={() => addToCart(item)} key={item.productID} className="flex flex-col bg-[#382929]/30 rounded-xl overflow-hidden group border border-transparent hover:border-primary transition-all cursor-pointer">
              <div
                className="aspect-square bg-center bg-no-repeat bg-cover relative"
                style={{
                  backgroundImage: `url(${item.image})`
                }}
              >
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="material-symbols-outlined text-white text-4xl">add_circle</span>
                </div>
              </div>
              <div className="p-3">
                <p className="text-white text-base font-semibold truncate">{item.productName}</p>
                <p className="text-primary text-lg font-bold">₭ {item.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaleGrid;