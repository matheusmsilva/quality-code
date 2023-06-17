import { FormEvent, PropsWithChildren } from 'react'
import './form.scss'

interface FormProps extends PropsWithChildren {
    onSubmit?: (event: FormEvent) => void;
}

function Form(props: FormProps) {
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(new FormData(event.target as HTMLFormElement));
    }
    return (
        <form onSubmit={onSubmit}>
            {props.children}

        </form>
    )
}

export { Form }