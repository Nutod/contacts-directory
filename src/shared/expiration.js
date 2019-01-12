export const expiration = expirationTime => {
	setTimeout(() => {
		localStorage.clear();
	}, expirationTime);
};
