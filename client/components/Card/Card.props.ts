import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	// children: ReactNode;
	color?: "orange" | "blue" | "green";
	who_missing?: string;
	title: string;
	status: boolean;
	images: string;
	createdAt: string;
	updatedAt?: string;
}
