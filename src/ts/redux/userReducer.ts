export interface IUserProfile {
    id: number | null;
    name: string | null;
    email: string | null;
    pets: number[] | null;
    isAuthenticated: boolean;
}

const userInitialState = {
    id: null,
    name: null,
    email: null,
    pets: [],
    isAuthenticated: false
};

export const userReducer = function (userProfile: IUserProfile = userInitialState, action: any) {
    switch (action.type) {
        case "SET_PROFILE":
            return {
                ...userProfile,
                ...action.profile
            };
        default:
            return userProfile;
    }
};