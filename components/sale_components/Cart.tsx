"use client";

import { useEffect, useMemo, useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  image?: string;
}

const Cart = () => {
  const [carts, setCarts] = useState<CartItem[]>([]);
useEffect(() => {
  const loadCart = () => {
    const stored = JSON.parse(localStorage.getItem("carts") || "[]");
    setCarts(stored);
  };
  loadCart();
  window.addEventListener("cart-updated", loadCart);

  return () => {
    window.removeEventListener("cart-updated", loadCart);
  };
}, []);

  const sync = (items: CartItem[]) => {
    setCarts(items);
    localStorage.setItem("carts", JSON.stringify(items));
  };

  const clearAll = () => {
    localStorage.removeItem("carts");
    setCarts([]);
  };

  const increase = (id: number) => {
    const updated = carts.map(c =>
      c.id === id ? { ...c, qty: c.qty + 1 } : c
    );
    sync(updated);
  };

  const decrease = (id: number) => {
    const updated = carts
      .map(c => (c.id === id ? { ...c, qty: c.qty - 1 } : c))
      .filter(c => c.qty > 0);
    sync(updated);
  };

  const removeItem = (id: number) => {
    const updated = carts.filter(c => c.id !== id);
    sync(updated);
  };

  const total = useMemo(
    () => carts.reduce((sum, c) => sum + c.price * c.qty, 0),
    [carts]
  );
  return (
    <section className="w-[400px] border-l border-[#382929] flex flex-col bg-[#1a1111] shrink-0">
      <div className="p-2 border-b border-[#382929]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">shopping_cart</span>
            ລາຍການບິນ
          </h3>
          <button
            onClick={clearAll}
            className="text-[#b79e9e] hover:text-red-500 flex items-center gap-1 text-sm transition-colors"
          >
            <span className="material-symbols-outlined text-sm">delete_sweep</span>
            ລຶບທັງໝົດ
          </button>
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-2 space-y-4">
        {carts.length === 0 && (
          <p className="text-[#b79e9e] text-sm text-center">ບໍ່ມີສິນຄ້າໃນຕະກ້າ</p>
        )}

        {carts.map(c => (
          <div key={c.id} className="flex gap-3">
            <div
              className="size-16 rounded-lg bg-center bg-cover border border-[#382929]"
              style={{ backgroundImage: `url(${c.image})` }}
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="text-sm font-medium text-white truncate w-32">{c.name}</p>
                <p className="text-sm font-bold text-white">₭ {(c.price * c.qty).toLocaleString()}</p>
              </div>
              <p className="text-xs text-[#b79e9e] mb-2">₭ {c.price.toLocaleString()}</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-[#382929] rounded-lg overflow-hidden">
                  <button onClick={() => decrease(c.id)} className="px-2 py-1 hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-sm">remove</span>
                  </button>
                  <span className="px-3 text-sm font-bold">{c.qty}</span>
                  <button onClick={() => increase(c.id)} className="px-2 py-1 hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
                <button onClick={() => removeItem(c.id)} className="text-[#b79e9e] hover:text-red-500">
                  <span className="material-symbols-outlined text-sm">delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Summary */}
      <div className="p-6 bg-[#2d1a1a] border-t border-[#382929] space-y-3">
        <div className="pt-3 border-t border-[#382929] flex justify-between items-end">
          <p className="text-lg font-bold text-white">ລວມທັງໝົດ</p>
          <p className="text-3xl font-black text-primary leading-none">₭ {total.toLocaleString()}</p>
        </div>
        <button className="px-3 py-2 rounded-lg w-full bg-red-800 text-white font-bold cursor-pointer hover:scale-95 transform transition duration-300">ຊຳລະເງິນ</button>
      </div>
    </section>
  );
};

export default Cart;