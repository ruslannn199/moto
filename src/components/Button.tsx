import { Text, Pressable, type PressableProps } from 'react-native';
import React, { type FC } from 'react';

interface ButtonProps extends PressableProps {
  children?: string;
  type?: 'primary' | 'secondary' | 'danger';
}

const getColors = (type: string) => {
  switch (type) {
    case 'secondary':
      return { pressableClassNames: 'bg-gray-200 hover:bg-gray-100', textClassNames: '' };
    case 'danger':
      return { pressableClassNames: 'bg-red-500 hover:bg-red-400', textClassNames: 'text-white' };
    case 'primary': default:
      return { pressableClassNames: 'bg-blue-500 hover:bg-blue-400', textClassNames: 'text-white' };
  }
};

const Button: FC<ButtonProps> = ({ className, children, type, ...props }) => {
  const { pressableClassNames, textClassNames } = getColors(type);
  return (
    <Pressable className={`${pressableClassNames} duration-300 rounded-md p-2 w-full ${className}`} {...props}>
      <Text className={`${textClassNames} text-lg text-center`}>{children}</Text>
    </Pressable>
  );
};

export default Button;
