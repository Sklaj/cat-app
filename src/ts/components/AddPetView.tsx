import * as React from "react";

interface IProps {}

export const AddPetView = (props: IProps) => {


    const onSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <div className="add-pet">
            Dodaj zwierzaka

            <form className="add-pet-form">
                <div className="radio-wrapper">
                    <label htmlFor="pet-type-dog">Pies</label>

                    <input type="radio" name="pet-type" id="pet-type-dog" value={1}/>

                    <br/>

                    <label htmlFor="pet-type-cat">Kot</label>

                    <input type="radio" name="pet-type" id="pet-type-cat" value={2}/>
                </div>

                <div className="radio-wrapper">
                    <label htmlFor="pet-sex-male">Male</label>

                    <input type="radio" name="pet-sex" id="pet-sex-male"
                           onChange={e => console.log("male", e.target.value)}
                    />

                    <br/>

                    <label htmlFor="pet-sex-female">Female</label>

                    <input type="radio" name="pet-sex" id="pet-sex-female"
                           onChange={e => console.log("female", e.target.value)}
                    />
                </div>

                <label htmlFor="pet-name">Name</label>

                <input type="name" id="pet-name" name="name"/>

                <label htmlFor="pet-age">Age</label>

                <input type="age" id="pet-age" name="age"/>

                <label htmlFor="pet-breed">Rasa</label>

                <input type="breed" id="pet-breed" name="breed"/>

                <button type="submit" name="save-pet" onClick={e => onSubmit(e)}>
                    Zapisz zwierzaka
                </button>
            </form>
        </div>
    );
};
