import { useEffect, useState, ReactNode } from "react";
import styles from "../../../../../styles/userRating.module.css";
import { UserDataInterface } from "../../../../common/interfaces/userData.interface";
import Modal from "../../../../common/Modal/Modal";
import { Star } from "react-feather";
export interface TopBarInterface {
	user: UserDataInterface[];
	setUserData: React.Dispatch<React.SetStateAction<UserDataInterface[]>>;
}
enum SortingVal {
	HIGH = 1,
	LOW = 0,
	NULL = -1,
}
const TopBar = ({ setUserData, user }: TopBarInterface) => {
	const [sorting, setSorting] = useState<number>(SortingVal.HIGH);
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		if (sorting === SortingVal.HIGH) {
			const sortedHigh = user.sort((a, b) => {
				return b.rating - a.rating;
			});
			setUserData([...sortedHigh]);
		}
		if (sorting === SortingVal.LOW) {
			const sortedLow = user.sort((a, b) => {
				return a.rating - b.rating;
			});
			setUserData([...sortedLow]);
		}
	}, [sorting, user]);

	return (
		<div className={styles.topBar}>
			<div className="flex flex-row align-center">
				<div className="margin-r-10">Sort by :-</div>
				<label className="margin-x flex flex-row align-center">
					<input
						type={"checkbox"}
						className={"margin-r-8 inputCheckbox"}
						value={1}
						onChange={() => {
							sorting === SortingVal.HIGH
								? setSorting(SortingVal.NULL)
								: setSorting(SortingVal.HIGH);
						}}
						checked={sorting === SortingVal.HIGH}
					/>
					<span>sort by highest</span>
				</label>
				<label className="margin-x flex flex-row align-center">
					<input
						type={"checkbox"}
						className={"margin-r-8 inputCheckbox"}
						value={0}
						onChange={() => {
							sorting === SortingVal.LOW
								? setSorting(SortingVal.NULL)
								: setSorting(SortingVal.LOW);
						}}
						checked={sorting === SortingVal.LOW}
					/>
					<span>sort by lowest</span>
				</label>
			</div>
			<div>
				<button
					className="btn"
					onClick={() => {
						setUserData([...user]);
						setOpen(!open);
					}}
				>
					Add new
				</button>
			</div>
			<AddModal
				open={open}
				setOpen={() => setOpen(!open)}
				setUserData={setUserData}
				user={user}
			/>
		</div>
	);
};

export default TopBar;
export interface ModalInterface {
	open: boolean;
	setOpen: () => void;
	user: UserDataInterface[];
	setUserData: React.Dispatch<React.SetStateAction<UserDataInterface[]>>;
}
const AddModal = ({ open, setOpen, setUserData, user }: ModalInterface) => {
	const [starRating, setStarRating] = useState(0);
	const [userName, setUserName] = useState("");
	const calcStar = () => {
		let starEle: ReactNode[] = [];
		for (let index = 0; index < 5; index++) {
			starEle.push(
				<button
					className="starButton"
					onClick={() => {
						setStarRating(index + 1);
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
	useEffect(() => {
		setStarRating(0);
		setUserName("");
	}, [open]);
	return (
		<Modal open={open} setOpen={setOpen}>
			<div style={{ fontSize: "18px", marginBottom: "10px" }}>Add User</div>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<label
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<span className="margin-r-8">Username</span>
					<input
						className="inputField"
						onChange={(e) => setUserName(e.target.value)}
						value={userName}
					/>
				</label>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						marginTop: "8px",
					}}
				>
					<span className="margin-r-8">User rating</span>
					{calcStar()}
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "end",
						width: "100%",
						marginTop: "10px",
					}}
				>
					<button
						className="margin-r-8 btnCancel"
						onClick={() => {
							setOpen();
							setStarRating(0);
							setUserName("");
						}}
					>
						cancel
					</button>
					<button
						className="btnSave"
						onClick={(e) => {
							setUserData([...user, { name: userName, rating: starRating }]);
							setOpen();
						}}
					>
						Add
					</button>
				</div>
			</div>
		</Modal>
	);
};
