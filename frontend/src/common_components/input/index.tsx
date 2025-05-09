import React from 'react'
import { Box, TextField, Typography } from '@mui/material'
import { InputTypes } from './types'

const Input: React.FC<InputTypes> = ({
  labelId,
  labelName,
  value,
  onChange,
  type = "text",
  disabled = false,
  required = false,
  multiline = false,
  rows,
  placeholder,
  defaultValue,
  error = false,
  helperText,
  css,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <label
        htmlFor={labelId}
        style={{ fontSize: "13px", marginBottom: "5px", fontWeight: "bold" }}
      >
        {required && (
          <Typography component="span" sx={{ color: "red", fontSize: "14px" }}>
            *{" "}
          </Typography>
        )}
        {labelName}
      </label>
      <TextField
        id={labelId}
        type={type}
        size="small"
        multiline={multiline}
        placeholder={placeholder}
        required={required}
        value={value}
        rows={rows}
        onChange={onChange}
        defaultValue={defaultValue}
        disabled={disabled}
        error={error}
        helperText={helperText}
        sx={css}
      />
    </Box>
  )
}

export default Input