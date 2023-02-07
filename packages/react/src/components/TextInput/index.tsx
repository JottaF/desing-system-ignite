import React, { ComponentProps } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";

interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  );
}

TextInput.displayName = "TextInput";
