import { SxProps } from "@mui/material"

export interface InputTypes {

    labelName?: string
    labelId?: string
    type?: string
    required?: boolean
    multiline?: boolean
    rows?: number
    placeholder?: string
    value?: string | number
    defaultValue?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
    error?: boolean
    helperText?: boolean | string
    fieldType?: string
    css?: SxProps
  }