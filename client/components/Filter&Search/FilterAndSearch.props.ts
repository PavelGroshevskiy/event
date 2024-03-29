import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface FilterAndSearchProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode;
}
