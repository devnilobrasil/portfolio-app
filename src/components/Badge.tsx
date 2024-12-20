import { type VariantProps, cva } from 'class-variance-authority';
import { Image, ImageProps, Linking, Text, TouchableOpacity, View } from 'react-native';

import cn from '../lib/utils';

const badgeVariants = cva(
  'flex flex-row items-center rounded-full px-6 gap-4 justify-center py-3 text-xs font-semibold',
  {
    variants: {
      variant: {
        default: 'bg-gray_',
        secondary: 'bg-secondary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const badgeTextVariants = cva('font-medium text-center text-xs', {
  variants: {
    variant: {
      default: 'text-white text-base text-xl',
      secondary: 'text-secondary-foreground',
      destructive: 'text-destructive-foreground',
      success: 'text-green-100',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface BadgeProps
  extends React.ComponentPropsWithoutRef<typeof View>,
    VariantProps<typeof badgeVariants> {
  label: string;
  labelClasses?: string;
  icon: ImageProps;
  link?: string
}
function Badge({
  label,
  labelClasses,
  className,
  variant,
  icon,
  link,
  ...props
}: BadgeProps) {
  const handlePress = () => {
    if (link) {
      Linking.openURL(link).catch((err) =>
        console.error('Failed to open URL:', err)
      );
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={.7}>
      <View
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      >
        <Image
          className="h-8 w-8"
          source={icon}
        />
        <Text className={cn(badgeTextVariants({ variant }), labelClasses)}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export { Badge, badgeVariants };
