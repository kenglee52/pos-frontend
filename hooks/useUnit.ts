"use client"
import { useEffect } from "react";
import { useUnitStore } from "@/stores/unit.store";
export const useUnit = () =>{
   const store = useUnitStore();
   useEffect(()=>{
     store.fetchAll();
   }, [])
   return {
      units: store.units,
      loading: store.loading,
      fetchAllUnits: store.fetchAll,
      fetchUnitById: store.fetchById,
      createUnit: store.create,
      updateUnit: store.update,
      removeUnit: store.remove
   }
}