"use client";

import { useEffect } from "react";
import { useCustomerStore } from "@/stores/customer.store";

export const useCustomer =() =>{
      const store = useCustomerStore();
   useEffect(()=>{
         store.fetchAll();
   }, []);
   return {
         fetchAllCustomers: store.fetchAll,
         customers: store.customers,
         loading: store.loading,
         fetchCustomerById: store.fetchById,
         createCustomer: store.create,
         updateCustomer: store.update,
         removeCustomer: store.remove,
   }
}