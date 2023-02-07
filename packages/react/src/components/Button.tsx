import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  gap: "$2",

  svg: {
    width: "$4",
    height: "$4",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$ignite500",

        "&:not(:disabled):hover": {
          background: "$ignite300",
          transition: "background-color .2s",
        },

        "&:disabled": {
          background: "$gray200",
        },
      },

      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite500",

        "&:not(:disabled):hover": {
          background: "$ignite500",
          color: "$white",
          transition: "background-color color .2s",
        },

        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200",
        },
      },

      tertiary: {
        color: "$gray100",

        "&:not(:disabled):hover": {
          color: "$white",
          transition: "background-color .2s",
        },

        "&:disabled": {
          color: "$gray600",
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        padding: "0 $4",
        height: 46,
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}

Button.displayName = "Button";
