import React from "react";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";
import { Button } from "../../components";

const headerArr = ["Находки ", "Пропажи ", "Услуги и товары ", "Блог "];
const Header = ({ ...props }: HeaderProps) => {
	return (
		<div className={styles.header}>
			<div>
				<span>Logo</span>
				Потеряшка
				<div>Бюро находок. Благотворительность. </div>
			</div>
			<div>
				{headerArr.map((el) => (
					<span>{el}</span>
				))}
			</div>
			<div>
				<Button appearance="blue">Подать объявление</Button>
				<Button appearance="orange">Войти</Button>
			</div>
		</div>
	);
};

export default Header;
