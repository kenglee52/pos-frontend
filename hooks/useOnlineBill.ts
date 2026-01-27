import { useOnlineBillStore } from "@/stores/onlineBill.store";
import { useEffect } from "react";

export const useOnlineBill = () => {
    const store = useOnlineBillStore();
    useEffect(()=>{
         store.fetchAll();
    },[]);
    return {
       onlineBills: store.onlineBills,
       loading: store.loading,
       fetchAllOnlineBill: store.fetchAll,
       updateOnlineBill: store.update,
    }
}