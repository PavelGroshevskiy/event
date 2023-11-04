import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

export function Button({ appearance, children, className, ...props }: ButtonProps) {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.blue]: appearance == "blue",
				[styles.ghost]: appearance == "ghost",
				[styles.orange]: appearance == "orange",
			})}
			{...props}
		>
			{children}
		</button>
	);
}
