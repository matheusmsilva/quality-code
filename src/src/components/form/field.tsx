import {PropsWithChildren} from 'react'

interface FieldProps extends PropsWithChildren {
    label: string;
    required?: boolean;
    width?: number;
}

function Field(props: FieldProps){
    return (
        <div className={`c-field col-${props.width??12}`}>
            <label>
                {props.label} {props.required ? '*' : ''}
            </label>
            {props.children}
        </div>
    )
}

export {Field}