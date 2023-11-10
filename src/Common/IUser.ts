
export interface IUser {
    name: {
        first: string;
        last: string;
    };
    email: string;
    phone: string;
    location: {
        city: string;
    };
    dob: {
        date: string,
    },
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    },
    nat: string;
    gender: string;
}

export interface ChacheUsers {
    [key:number] : IUser[]
}