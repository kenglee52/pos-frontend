import { Customer } from "@/types/customer.type";
import api from "@/lib/axios";

export const customerService ={
    getAll: async() =>{
         const res = await api.get<Customer[]>("/customer");
         if(res.status == 200){
          console.log("Success")
         }
         return res.data;
    },
    getById: async(id: number) =>{
         const res = await api.get<Customer>(`/customer/${id}`);
         return res.data
    },
    create: async(data: Omit<Customer, "customerID">) =>{
         const res = await api.post("/customer", data);
         return res.data;
    },
    update: async(id: number, data: Omit<Customer, "customerID">) =>{ 
         const res = await api.put(`/customer/${id}`, data);
         return res.data;
    },
    remove: async(id: number) => {
         const res = await api.delete(`/customerID/${id}`)
    }
}