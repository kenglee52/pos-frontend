import api from "@/lib/axios";
import { Employee } from "@/types/employee.type";

export const employeeService = {
         getAll: async() => {
              const res = await api.get<Employee[]>("/employee");
              return res.data;   
         },
         getById: async(id: number) => {
              const res = await api.get<Employee>(`/employee/${id}`);
              return res.data;
         },
         create: async(data: Omit<Employee, "employeeID">) =>{
              const res = await api.post("/employee", data);
              return res.data;
         },
         update: async(id: number, data: Omit<Employee, "employeeID">) =>{
                  const res = await api.put(`/employee/${id}`, data);
                  return res.data;
         },
         remove: async(id: number) => {
                  await api.delete(`/employee/${id}`);
         }
}