import { GetStaticProps } from "next";
import { Button, Card } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { disappearCard } from "../interfaces/disappeaerCard";
import { FilterAndSearch } from "../components/Filter&Search/FilterAndSearch";

function Home({ cards }: HomeProps) {
	return (
		<>
			<FilterAndSearch> </FilterAndSearch>

			{cards.map((card) => (
				<Card
					title={card.title}
					images={card.images}
					status={card.status}
					createdAt={card.createdAt}
				></Card>
			))}
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
	const { data: cards } = await axios.get<disappearCard[]>(
		process.env.NEXT_PUBLIC_DOMAIN + "/recent-disappearances"
	);

	return {
		props: {
			cards,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	cards: disappearCard[];
}
