import React from "react";
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import styles from "./Footer.module.css";
import { format } from "date-fns";

const Footer = ({ className, ...props }: FooterProps) => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div>
				Logo <span>Потеряшка</span>
				<p>
					<a href="#" target="_blank">
						Пользовательское соглашение
					</a>
				</p>
			</div>
			<a href="#" target="_blank">
				Политика конфиденциальности
			</a>
			<div>
				Соц сети
				<p>© {format(new Date(), "yyyy")} ПАО «Потеряшка». Все права защищены.</p>
			</div>
		</footer>
	);
};

export default Footer;
