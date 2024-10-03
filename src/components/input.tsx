type InputField = {
    id: string;
    name?: string;
    type?: string;
    typeBtn?: "button" | "submit" | "reset";
    label?: string;
    labelBtn?: string;
    classnameDiv: string;
    classnameInput?: string;
    classnameLabel?: string;
    classnameBtn?: string;
    placeholder?: string;
    rows?: number;
    maxlength?: number;
    readonly?: boolean;
    value?: string | number
    autofocus?: boolean
};

const Input = ({
    id,
    name,
    type,
    typeBtn,
    label,
    labelBtn,
    classnameDiv,
    classnameInput,
    classnameLabel,
    classnameBtn,
    placeholder,
    rows,
    maxlength,
    readonly,
    value,
    autofocus
}: InputField) => {
    return (
        <>
            <div className={classnameDiv}>
                {rows ?? 0 > 0 ? (
                    <textarea
                        id={id}
                        name={name}
                        rows={rows}
                        className={classnameInput}
                        maxLength={maxlength}
                        placeholder={placeholder}
                        value={value}
                    >
                    </textarea>
                ) : (
                    <input
                        type={type}
                        className={classnameInput}
                        id={id}
                        name={name}
                        maxLength={maxlength}
                        placeholder={placeholder}
                        readOnly={readonly}
                        value={value}
                        autoFocus={autofocus}
                    />
                )}

                {label ? <label className={classnameLabel} htmlFor={id}>{label}</label> : <></>}
                {labelBtn ? <button className={classnameBtn} type={typeBtn}>{labelBtn}</button> : <></>}
            </div>
        </>
    );
};

export default Input;
