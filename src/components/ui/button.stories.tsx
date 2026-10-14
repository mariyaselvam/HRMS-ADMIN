import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';
import { Mail, ArrowRight, Trash2, Plus } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'destructive',
        'outline',
        'ghost',
        'link',
      ],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size preset of the button',
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows an animated loading spinner and disables the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables user interactions and applies muted styles',
    },
    asChild: {
      control: 'boolean',
      description: 'Renders as a Slot child element (e.g., react-router Link)',
    },
    children: {
      control: 'text',
      description: 'Button inner label or elements',
    },
  },
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
    isLoading: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete Item',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

export const IconButton: Story = {
  args: {
    size: 'icon',
    variant: 'outline',
    children: <Plus className="size-4" />,
    'aria-label': 'Add new item',
  },
};

export const Loading: Story = {
  args: {
    children: 'Please wait...',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <Mail className="size-4" />
      <span>Login with Email</span>
    </Button>
  ),
};

export const WithTrailingIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <span>Continue</span>
      <ArrowRight className="size-4" />
    </Button>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">
        <Trash2 className="size-4" />
        Destructive
      </Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" variant="outline" aria-label="Add">
        <Plus className="size-4" />
      </Button>
    </div>
  ),
};
