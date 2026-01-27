import { OnlineBill } from "@/types/onlineBill.type";
import { onlineBillService } from "@/services/onlineBill.service";
import {create} from "zustand";

interface OnlineBillState {
    onlineBills: OnlineBill[];
    loading: boolean;

    fetchAll: ()=> Promise<void>;
    update: (id: number, data: Omit<OnlineBill, "onlineBillID">) => Promise<void>;
}
export const useOnlineBillStore = create<OnlineBillState>((set)=>({
         onlineBills: [],
         loading: false,
         fetchAll: async() =>{
            set({loading: true});
            const data = await onlineBillService.getAll();
            set({onlineBills: data, loading: false});
         },
         update: async(id, data) =>{
            await onlineBillService.update(id, data);
            const result = await onlineBillService.getAll();
            set({onlineBills: result});
         }
}))