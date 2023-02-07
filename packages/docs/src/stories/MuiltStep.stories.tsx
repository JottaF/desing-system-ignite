import type { StoryObj, Meta } from "@storybook/react";
import { Box, MultiStep, MultiStepProps } from "@jottaf-ui/react";

export default {
  title: "Form/MultiStep",
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta;

export const Primary: StoryObj<MultiStepProps> = {};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
};
