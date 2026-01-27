import { OnlineBill } from "@/types/onlineBill.type";
import Swal from "sweetalert2";
import { useOnlineBillStore } from "@/stores/onlineBill.store";

export const UpdateOrderStatus = (item: OnlineBill) => {
  const orderRows = item.onlineOrders?.map((order, index) => `
    <tr class="border-b last:border-b-0 hover:bg-gray-50">
      <td class="w-12 px-3 py-2 text-center">${index + 1}</td>
      <td class="px-3 py-2 text-left">${order.product.productName}</td>
      <td class="w-20 px-3 py-2 text-center">${order.saleQty}</td>
      <td class="w-28 px-3 py-2 text-right">
        ${order.product.price.toLocaleString()}
      </td>
      <td class="w-32 px-3 py-2 text-right font-medium">
        ${order.total.toLocaleString()}
      </td>
    </tr>
  `).join("");

  const grandTotal = item.onlineOrders?.reduce(
    (sum, o) => sum + o.total,
    0
  );

  Swal.fire({
    title: `ໃບບິນ #${item.onlineBillID}`,
    width: 820,
    html: `
      <div class="text-sm text-gray-700 space-y-5">
      <h1 class="text-xl text-red-600 font-bold">ຍັງບໍ່ທັນຈັດສົ່ງ</h1>
      <h1 class="text-lg text-red-600 font-bold">ກະລຸນາກວດສອບຄວາມຖືກຕ້ອງກ່ອນຈັດສົ່ງ</h1>

        <!-- Customer / Order Info -->
        <div class="grid grid-cols-2 gap-x-6 gap-y-2 bg-gray-50 p-4 rounded-lg">
          <div class="font-medium text-gray-600">ລູກຄ້າ</div>
          <div>${item.customer?.customerName ?? "-"}</div>

          <div class="font-medium text-gray-600">ເບີໂທ</div>
          <div>${item.customer?.customerTel ?? "-"}</div>

          <div class="font-medium text-gray-600">ຂົນສົ່ງ</div>
          <div>${item.logisticType} (${item.logisticName})</div>
        </div>

        <!-- Order Table -->
        <div class="overflow-x-auto">
          <table class="w-full border border-gray-200 border-collapse rounded-lg overflow-hidden">
            <thead class="bg-gray-100 font-semibold text-gray-700">
              <tr>
                <th class="w-12 px-3 py-2 text-center">#</th>
                <th class="px-3 py-2 text-left">ສິນຄ້າ</th>
                <th class="w-20 px-3 py-2 text-center">ຈຳນວນ</th>
                <th class="w-28 px-3 py-2 text-right">ລາຄາ</th>
                <th class="w-32 px-3 py-2 text-right">ລວມ</th>
              </tr>
            </thead>
            <tbody class="font-normal">
              ${orderRows}
            </tbody>
          </table>
        </div>

        <!-- Grand Total -->
        <div class="flex justify-end">
          <div class="bg-green-50 border border-green-200 text-green-700 px-6 py-3 rounded-lg text-base font-semibold">
            ລວມທັງໝົດ: ${grandTotal?.toLocaleString()} ກີບ
          </div>
        </div>

      </div>
    `,
    showCancelButton: true,
    cancelButtonText: "ຍົກເລີກ",
    confirmButtonText: "ຈັດສົ່ງທັນທີ",
    customClass: {
      popup: "rounded-xl",
      confirmButton:
        "bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg",
    },
    preConfirm: async () => {
      const { update } = useOnlineBillStore.getState(); // ✅ ถูกต้อง

      await update(item.onlineBillID, {
        customerID: item.customerID,
        logisticType: item.logisticType,
        logisticName: item.logisticName,
        onlineBillDate: item.onlineBillDate,
        send: true,
      });

      Swal.fire({
        icon: "success",
        title: "ສຳເລັດ",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  });
};
