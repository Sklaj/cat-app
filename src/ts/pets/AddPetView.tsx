import * as React from "react";
import {connect, useDispatch} from "react-redux";
import {IStore} from "../../mainReducer";
import {IAddPetForm} from "./reducers/addPetFormReducer";
import {db} from "../../firebase";
import { v4 as uuidv4 } from 'uuid';
import {IUserProfile} from "../auth/reducers/userReducer";
import {useState} from "react";
import {Redirect} from "react-router";
import firebase from "firebase";





interface IStateProps {
    form: IAddPetForm;
    profile: IUserProfile;
}

interface IProps extends IStateProps {}

const AddPetViewC = (props: IProps) => {
    //form handling
    const dispatch = useDispatch();
    const updateForm = (data: any) => dispatch({type: "UPDATE_FORM", data: data});

    const [isSubmitDone, setSubmitDone] = useState(false);
    const onSubmit = async (e: any) => {
        e.preventDefault();
        const petId = uuidv4();
        await db.collection("pets").doc(petId).set({
            id: petId,
            ...props.form
        });

        if (props.profile.id) {
            await db.collection("users").doc(props.profile.id).update({
                pets: firebase.firestore.FieldValue.arrayUnion(petId)
            });

            await dispatch({type: "ADD_PET", pet: petId});
        }
        setSubmitDone(true);
    };

    return (
        <div className="add-pet">
            Dodaj zwierzaka

            <form className="add-pet-form">
                <div className="radio-wrapper">
                    <label htmlFor="pet-type-dog">Pies</label>

                    <input
                        type="radio"
                        name="pet-type"
                        id="pet-type-dog"
                        required
                        value={props.form.type}
                        onChange={() => updateForm({type: 1})}/>

                    <br/>

                    <label htmlFor="pet-type-cat">Kot</label>

                    <input
                        type="radio"
                        name="pet-type"
                        id="pet-type-cat"
                        required
                        value={props.form.type}
                        onChange={() => updateForm({type: 2})}
                    />
                </div>

                <div className="radio-wrapper">
                    <label htmlFor="pet-sex-male">Male</label>

                    <input
                        type="radio"
                        name="pet-sex"
                        id="pet-sex-male"
                        required
                        value={props.form.sex}
                        onChange={() => updateForm({sex: 1})}
                    />

                    <br/>

                    <label htmlFor="pet-sex-female">Female</label>

                    <input
                        type="radio"
                        name="pet-sex"
                        id="pet-sex-female"
                        required
                        value={props.form.sex}
                        onChange={() => updateForm({sex: 2})}
                    />
                </div>

                <label htmlFor="pet-name">Name</label>

                <input
                    type="text"
                    id="pet-name"
                    name="name"
                    required
                    value={props.form.name}
                    onChange={e => updateForm({name: e.target.value})}
                />

                <label htmlFor="pet-age">Age</label>

                <input
                    type="number"
                    id="pet-age"
                    name="age"
                    required
                    value={props.form.age}
                    onChange={e => updateForm({age: e.target.value})}
                />

                <label htmlFor="pet-breed">Rasa</label>

                <input
                    type="text"
                    id="pet-breed"
                    name="breed"
                    required
                    value={props.form.breed}
                    onChange={e => updateForm({breed: e.target.value})}
                />

                <button
                    type="submit"
                    name="save-pet"
                    onClick={e => onSubmit(e)}
                >
                    Zapisz zwierzaka
                </button>
            </form>

            {isSubmitDone && (
                <Redirect to="/"/>
            )}
        </div>
    );
};

const mapStateToProps = (state: IStore) => {
    return {
        form: state.addPetForm,
        profile: state.userProfile
    }
};

export const AddPetView = connect(mapStateToProps, {})(AddPetViewC);
