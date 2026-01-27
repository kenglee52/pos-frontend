import api from "@/lib/axios";
import { OnlineBill } from "@/types/onlineBill.type";

export const onlineBillService = {
   getAll: async() => {
      const res = await api.get<OnlineBill[]>("/online_bill");
      return res.data;
   },
   update: async(id: number, data: Omit<OnlineBill, "onlineBillID">) => {
       try {
         const res = await api.put(`/online_bill/${id}`, data);
         return res.data;
       } catch (error) {
         console.log(error);
       }
   }
}