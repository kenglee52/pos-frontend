import { Unit } from "@/types/unit.type";
import { unitService } from "@/services/unit.service";
import { create } from "zustand";

interface UnitState{
   units: Unit[];
   selected?: Unit;
   loading: boolean;

   fetchAll: () => Promise<void>;
   fetchById: (id: number) => Promise<void>;
   create: (data: Omit<Unit, "unitID">) => Promise<void>;
   update: (id: number,data: Omit<Unit, "unitID">) => Promise<void>;
   remove: (id: number) => Promise<void>;
}

export const useUnitStore = create<UnitState>((set) =>({
         units: [],
         selected: undefined,
         loading: false,

         fetchAll: async() =>{
            set({loading: true});
            const data = await unitService.getAll();
            set({units: data, loading: false,});
         },
         fetchById: async(id)=>{
         set({loading: true});
            const data = await unitService.getById(id);
            set({selected: data, loading: false,});    
         },
         create: async(data) => {
           await unitService.create(data);
           const units = await unitService.getAll();
           set({units});
         },
         update: async(id, data) =>{
           await unitService.update(id, data);
           const units = await unitService.getAll();
           set({units});      
         },
         remove: async(id) => {
           await unitService.remove(id);
           set((state) => ({
                  units: state.units.filter(
                    (c) => c.unitID !== id
               ),
           }))
         }
}));