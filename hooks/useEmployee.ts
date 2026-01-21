"use client";
import { useEffect } from "react";
import { useEmployeeStore } from "@/stores/employee.store";

export const useEmployee = () =>{
    const store = useEmployeeStore();
    useEffect(()=>{
         store.fetchAll();
    }, [])
    return {
        employees: store.employees,
        loading: store.loading,
        seleted: store.selected,
        fetchAllEmployee: store.fetchAll,
        fetchEmployeeById: store.fetchById,
        createEmployee: store.create,
        updateEmployee: store.update,
        removeEmployee: store.remove
    }
}