import React from "react";
import styles from "../../../../../styles/userRating.module.css";
import { UserDataInterface } from "../../../../common/interfaces/userData.interface";
import StarRating from "../StarRating/StarRating";
export interface UserRowInterface {
	user: UserDataInterface[];
	setUserData: React.Dispatch<React.SetStateAction<UserDataInterface[]>>;
	name: string;
	rating: number;
}
const UserRow = ({ name, rating, setUserData, user }: UserRowInterface) => {
	return (
		<div className={styles.userRow}>
			{name}
			<StarRating name={name} rating={rating} setUserData={setUserData} user={user} />
		</div>
	);
};

export default UserRow;
