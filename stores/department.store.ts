import { Department } from "@/types/department.type";
import { departmentService } from "@/services/department.service";
import {create} from "zustand";

interface DepartmentState {
    departments: Department[];
    seleted?: Department,
    loading: boolean,

    fetchAll: ()=> Promise<void>;
    fetchById: (id: number) => Promise<void>;
    create: (data: Omit<Department, "departmentID">) => Promise<void>;
    update: (id: number,data: Omit<Department, "departmentID">) => Promise<void>;
    remove: (id: number) => Promise<void>;
}

export const useDepartmentStore = create<DepartmentState>((set)=>({
         departments : [],
         seleted : undefined,
         loading: false,

         fetchAll: async() => {
            set({loading: true});
            const data = await departmentService.getAll();
            set({
                  departments : data,
                  loading: false,
            });
         },
         fetchById: async(id) => {
            set({loading: true});
            const data = await departmentService.getById(id);
            set({
                  seleted : data,
                  loading: false,
            });
         },
         create: async(data) => {
            await departmentService.create(data);
            const departments = await departmentService.getAll();
            set({
                  departments
            });
         },
         update: async(id, data) =>{
            await departmentService.update(id, data);
            const departments = await departmentService.getAll();
            set({departments})
         },
         remove: async(id) => {
            await departmentService.remove(id);
            set((state) => ({
                  departments: state.departments.filter(
                  (c) => c.departmentID !== id
                 )
            }) )
         }
}))