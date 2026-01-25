import { Department } from "./department.type";
export interface Employee {
  employeeID: number;
  employeeName: string;
  gender: string;
  tel: string;
  departmentID: number;
  password: string;
  department?: Department
}