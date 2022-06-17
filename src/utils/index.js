import { heroes } from "../data";

export const getUser = () => ({
	id: "ABC123",
	username: "mamawebo",
});

export const getActiveUser = nombre => ({
	id: "ABC567",
	username: nombre,
});

export const retrieveArray = () => {
	return ["ABC", 123];
};

export const getHeroeById = id => {
	return heroes.find(heroe => heroe.id === id);
};

export const getHoresByOwner = owner => heroes.filter(heroe => heroe.owner === owner);
