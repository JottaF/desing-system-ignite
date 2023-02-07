import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextArea, TextAreaProps } from "@jottaf-ui/react";

export default {
  title: "Form/TextArea",
  component: TextArea,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta;

export const Primary: StoryObj<TextAreaProps> = {};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};
