export const expiration = expirationTime => {
	setTimeout(() => {
		console.log("Clearing LS");
		localStorage.clear();
	}, expirationTime);
};
