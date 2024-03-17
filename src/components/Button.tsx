import { Text, Pressable, type PressableProps } from 'react-native';
import React, { type FC } from 'react';

interface ButtonProps extends PressableProps {
  children?: string;
  type?: 'primary' | 'secondary' | 'danger';
}

const getColors = (type: string) => {
  switch (type) {
    case 'secondary':
      return { backgroundColor: 'bg-grey-100', textColor: '' };
    case 'danger':
      return { backgroundColor: 'bg-red-500', textColor: 'text-white' };
    case 'primary': default:
      return { backgroundColor: 'bg-blue-500', textColor: 'text-white' };
  }
};

const Button: FC<ButtonProps> = ({ className, children, type, ...props }) => {
  const { backgroundColor, textColor } = getColors(type);
  return (
    <Pressable className={`${backgroundColor} rounded-md p-2 w-full ${className}`} {...props}>
      <Text className={`${textColor} text-lg text-center`}>{children}</Text>
    </Pressable>
  );
};

export default Button;
