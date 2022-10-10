import UserRating from "../src/containers/UserRating/UserRating";
import HomeLayout from "../src/layout/HomeLayout/HomeLayout";

const Home = () => {
	return (
		<HomeLayout>
			<UserRating />
		</HomeLayout>
	);
};

export default Home;
