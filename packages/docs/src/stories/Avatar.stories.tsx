import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@jottaf-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/jottaf.png",
    alt: "Jottaf",
  },
} as Meta;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
