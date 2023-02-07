import type { StoryObj, Meta } from "@storybook/react";
import { Text, Box, BoxProps } from "@jottaf-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta;

export const Primary: StoryObj<BoxProps> = {};
