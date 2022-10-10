import React, { useState } from "react";
import styles from "../../../styles/userRating.module.css";
import { USER_DATA } from "../../common/constant/data";
import TopBar from "./components/TopBar/TopBar";
import UserRow from "./components/UserRow/UserRow";
const UserRating = () => {
	const [user, setUserData] = useState(USER_DATA);
	return (
		<div className={styles.userRatingContainer}>
			{/* <pre>{JSON.stringify(user, null, 3)}</pre> */}
			<TopBar setUserData={setUserData} user={user} />
			{user.map((userData) => (
				<UserRow
					name={userData.name}
					rating={userData.rating}
					key={`${userData.name}+${userData.rating}`}
					setUserData={setUserData}
					user={user}
				/>
			))}
		</div>
	);
};

export default UserRating;
