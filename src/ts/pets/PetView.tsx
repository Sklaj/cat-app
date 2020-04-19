import * as React from "react";
import {useSelector} from "react-redux";
import {IStore} from "../../mainReducer";
import {IPet} from "./reducers/petsReducer";
import {useParams} from "react-router";
import { find } from "lodash";


export const PetView = React.memo(() => {
    const pets: IPet[] = useSelector((store: IStore) => store.pets);
    const { petId } = useParams();
    const pet = find(pets, (item) => item.id === petId);

    if (!pet) {
        return (
            <div>
                błąd, nie ma takiego zwierzaka
            </div>
        );
    }

    return (
        <div>
            <p>
                typ {pet.type}
            </p>

            <p>
                płeć {pet.sex}
            </p>

            <p>
                imie {pet.name}
            </p>

            <p>
                wiek {pet.age}
            </p>

            <p>
                rasa {pet.breed}
            </p>

        </div>
    )
});
