const InputClassname = { className: 'inputRoot' }
const InputLabelProps = { className: 'inputLabel' }

const InputProps = {
    classes: {
        root: 'inputBaseRoot',
        disabled: 'inputDisabled',
    },
}

const AllInputProps = {
    ...InputClassname,
    InputLabelProps: { ...InputLabelProps },
    InputProps: { ...InputProps },
}

export default AllInputProps
