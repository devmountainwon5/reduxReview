// action creators are just function that return action objects
// EX:
//{
// type="Type",
// payload(optional)="whatever you want it to"
//}

export const addSubtract = (type) => {
	return {
		type
	};
};

export const changeName = (name) => {
	return {
        type:"name",
        payload:name
    };
};
