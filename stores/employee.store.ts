import {create} from "zustand";
import { Employee } from "@/types/employee.type";
import { employeeService } from "@/services/employee.service";

interface EmployeeState {
    employees: Employee[];
    selected?: Employee;
    loading: boolean;

    fetchAll: ()=> Promise<void>;
    fetchById: (id: number)=>Promise<void>;
    create: (data: Omit<Employee, "employeeID">)=>Promise<void>;
    update: (id: number, data: Omit<Employee, "employeeID">) => Promise<void>;
    remove: (id: number) => Promise<void>;
}

export const useEmployeeStore = create<EmployeeState>((set)=>({
     employees: [],
     selected: undefined,
     loading: false,

     fetchAll: async() =>{
         set({loading: true});
         const data = await employeeService.getAll();
         set({
             employees: data,
             loading: false
         })
     },
     fetchById: async(id) => {
         set({loading: true});
         const data = await employeeService.getById(id);
         set({
             selected: data,
             loading: false
         });
     },
     create: async(data) =>{
         await employeeService.create(data);
         const employees = await employeeService.getAll();
         set({
            employees
         });
     },
     update: async(id, data) =>{
         await employeeService.update(id, data);
         const employees = await employeeService.getAll();
         set({
            employees
         })
     },
     remove: async(id) =>{
         await employeeService.remove(id);
         set((state) => ({
                  employees: state.employees.filter((c) =>c.employeeID !== id)
         }))
     }

}))