import type { StoryObj, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "@jottaf-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    size: "md",
    children:
      "Lorem ipsum dolor sit amet, consectet ut labore et dolore magna.",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl", "2xl", "4xl", "5xl", "6xl"],
      control: {
        type: "select",
      },
    },
  },
} as Meta;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1",
  },

  parameters: {
    docs: {
      description: {
        story:
          "Por padrão o heading sempre será `h1`, mas podemos alterar isso com a propriedade `as`.",
      },
    },
  },
};
