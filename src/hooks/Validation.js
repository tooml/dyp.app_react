import { useState, useEffect } from 'react';
import { produce } from 'immer';

export const useValidation = (initValues, callback) => {
    const [values, setValues] = useState(initValues);
    const [errors, setErrors] = useState(false);

    useEffect(() => {
        setErrors(check(values));
      }, [values]);

    const handleSubmit = (event) => {
        if(event) event.preventDefault();
        setErrors(check(values));
    }

    const handleChange = (event) => {
        event.persist();
        const nextState = produce(values, draft => {
             draft[event.target.name].value = event.target.value;
         });

        setValues(nextState);
        setErrors(check(values));
    }

    const check = (values) => {
        return Object.keys(values).map(item => {
             return values[item].rules
            .map(func => func(values[item].value));
            }).flat().every(check => check); 
    }

    return {
        handleChange,
        handleSubmit,
        values,
        errors
      }
};
