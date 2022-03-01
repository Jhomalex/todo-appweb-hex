export const generateUuid = (flag: string): string => {
	const date = new Date().valueOf();
	let randomString = '';
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	for (let i = 0; i < 20; i++) {
		randomString += characters.charAt(
			Math.floor(Math.random() * charactersLength)
		);
	}
	const uuid = date.toString().slice(3, 10) + randomString.slice(4, 17);

	return `${uuid}-${flag}`;
};
