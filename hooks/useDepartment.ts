"use client"
import { useDepartmentStore } from "@/stores/department.store";
import { useEffect } from "react";

export const useDepartment = () => {
    const store = useDepartmentStore();
    useEffect(() =>{
         store.fetchAll();
    } , [])
    return {
         departments : store.departments,
         loading: store.loading,
         fetchAllDepartments: store.fetchAll,
         fetchDepartmentById: store.fetchById,
         createDepartment: store.create,
         updateDepartment: store.update,
         removeDepartment: store.remove
    }
}