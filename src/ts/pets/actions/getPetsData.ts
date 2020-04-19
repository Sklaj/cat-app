import {db} from "../../../firebase";
import { map } from "lodash";
import {Dispatch} from "redux";


export const getPetsData = (pets: string[], dispatch: Dispatch) => {
    const petRefs = map(pets, (pet) => {
        return db.collection("pets").doc(pet).get();
    });

    Promise.all(petRefs)
        .then(docs => {
            const petsData = map(docs, (doc) => doc.data());
            dispatch({type: "RESET_PETS"});
            dispatch({type: "SET_PETS", pets: petsData});
        });
};
