import {useState} from 'react'

export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({target}) => {

        setValues({
            ...values,
            // [target.name] el nombre de la propiedad es el nombre del objeto
            [target.name] : target.value
        });

    }

    return [values, handleInputChange, reset]
}
