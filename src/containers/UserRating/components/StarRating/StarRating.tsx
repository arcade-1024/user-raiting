import React, { ReactNode, useState } from "react";
import { Star } from "react-feather";
import { UserDataInterface } from "../../../../common/interfaces/userData.interface";
export interface StarRatingInterface {
	name: string;
	rating: number;
	user: UserDataInterface[];
	setUserData: React.Dispatch<React.SetStateAction<UserDataInterface[]>>;
}
const StarRating = ({
	name,
	rating,
	setUserData,
	user,
}: StarRatingInterface) => {
	const MAX_STAR = 5;
	const [starRating, setStarRating] = useState(rating);

	const calcStar = () => {
		let starEle: ReactNode[] = [];
		for (let index = 0; index < MAX_STAR; index++) {
			starEle.push(
				<button
					className="starButton"
					onClick={() => {
						user[user.findIndex((item) => item.name == name)].rating =
							index + 1;
						setUserData([...user]);
					}}
				>
					<Star
						size={20}
						fill={index < starRating ? "#fbbf24" : "#6b7280"}
						color={index < starRating ? "#fbbf24" : "#6b7280"}
					/>
				</button>
			);
		}
		return starEle;
	};
	return (
		<div className="flex flex-row align-center margin-x">{calcStar()}</div>
	);
};

export default StarRating;
