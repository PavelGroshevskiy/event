import React from "react";
import styles from "./FilterAndSearch.module.css";
import { FilterAndSearchProps } from "./FilterAndSearch.props";
import cn from "classnames";
import { Button } from "..";
const querySortArr = [
	"Последние находки",
	"Последние пропажи",
	"Помощь животным",
	"Услуги и товары",
];
export function FilterAndSearch({ children, className }: FilterAndSearchProps) {
	return (
		<div className={styles.top_page}>
			<div>
				{querySortArr.map((el) => (
					<span>{el}</span>
				))}
			</div>
			<div>
				<Button appearance="orange">Фильтры</Button>
				<input type="text" />
			</div>
		</div>
	);
}
