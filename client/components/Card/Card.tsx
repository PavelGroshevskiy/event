import React from "react";
import styles from "./Card.module.css";
import { CardProps } from "./Card.props";
import cn from "classnames";

export function Card({
	className,
	title,
	who_missing,
	color,
	status,
	images,
	createdAt,
	updatedAt,
	...props
}: CardProps) {
	return (
		<div
			className={cn(styles.card, className, {
				[styles.blue]: color == "orange",
			})}
			{...props}
		>
			<img src={JSON.parse(images)[0]} width={305} height={358} alt="" />
			<div className={styles.card_text}>
				<div>{who_missing}</div>
				<div>{title}</div>
				<div>{status === false ? "Не найдено" : "Найдено"}</div>
				<div>{createdAt}</div>
			</div>
		</div>
	);
}
