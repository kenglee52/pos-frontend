import {create} from "zustand";
import { customerService } from "@/services/customer.service";
import { Customer } from "@/types/customer.type";

interface CustomerState {
     customers: Customer[];
     selected? : Customer;
     loading: boolean;

     fetchAll: ()=> Promise<void>;
     fetchById: (id: number) => Promise<void>;
     create: (data: Omit<Customer, "customerID">) => Promise<void>;
     update: (id: number, data: Omit<Customer, "customerID">) => Promise<void>;
     remove: (id: number) => Promise<void>;
}

export const useCustomerStore = create<CustomerState>((set) =>({
         customers: [],
         selected: undefined,
         loading: false,

         fetchAll: async() =>{
            set({loading: true});
            const data = await customerService.getAll();
            set({customers: data, loading: false});
         },
         create: async(data) =>{
            await customerService.create(data);
            const customers = await customerService.getAll();
            set({customers});
         },
         fetchById: async(id)=>{
            set({loading: true});
            const data = await customerService.getById(id);
            set({selected: data, loading: false});
         },
         update: async(id, data) =>{
            await customerService.update(id, data);
            const customers = await customerService.getAll();
            set({customers});
         },
         remove: async(id)=>{
            await customerService.remove(id);
            set((state) =>({
                  customers: state.customers.filter((c) => 
                           c.customerID !== id
                  )
            }))
         }
}));