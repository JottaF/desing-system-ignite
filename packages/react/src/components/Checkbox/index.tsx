import { Check } from "phosphor-react";
import React, { ComponentProps } from "react";
import { CheckboxIndicator, CheckboxContainer } from "./styles";

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox() {
  return (
    <CheckboxContainer>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  );
}

Checkbox.displayName = "Checkbox";
