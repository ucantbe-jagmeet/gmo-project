import { ReactNode } from "react";

export interface INavbarData {
  id: number;
  title: string;
  href: string;
}
export interface IUser {
  name: string;
  phone: string;
  email: string;
}

export interface ProtectedRouteProps {
  children: ReactNode;
}

export interface IDataGrid {
  userId: number;
  id: number;
  title: string;
  body: string;
}
