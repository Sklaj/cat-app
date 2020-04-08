import {db} from "../../firebase/firebase";
import { reduce } from "lodash";


export const getPetData = (petId: string) => {
    return db.collection("pets").doc(petId).get().then((doc) => doc.data());
};

// export const getPetsData = (pets: []) => {
//     reduce(pets, (acc, petId) => {
//         const pet = getPetData(petId);
//         return [...acc, pet];
//     }, [])
// };
