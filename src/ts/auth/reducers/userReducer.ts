export interface IUserProfile {
    id: string | null;
    name: string | null;
    email: string | null;
    pets: string[] | [];
    isAuthenticated: boolean;
}

const userInitialState = {
    id: null,
    name: null,
    email: null,
    pets: [],
    isAuthenticated: false
};

export const userReducer = function (userProfile = userInitialState, action: any) {
    switch (action.type) {
        case "SET_PROFILE":
            return {
                ...userProfile,
                ...action.profile
            };
        case "ADD_PET":
            return {
                ...userProfile,
              pets: [...userProfile.pets, action.pet]
            };
        case "RESET_PROFILE":
            return {
                ...userInitialState
            };
        default:
            return userProfile;
    }
};
