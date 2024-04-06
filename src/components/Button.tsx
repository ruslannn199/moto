import { Text, Pressable, type PressableProps, type StyleProp, type ViewStyle, StyleSheet } from 'react-native';
import React, { type FC } from 'react';

interface ButtonProps extends PressableProps {
  children?: React.ReactNode;
  type?: 'primary' | 'secondary' | 'danger';
  style?: StyleProp<ViewStyle>;
}

const getColors = (type: string) => {
  switch (type) {
    case 'secondary':
      return { button: styles.buttonSecondary, text: {} };
    case 'danger':
      return { button: styles.buttonDanger, text: styles.textPrimary };
    case 'primary':
    default:
      return { button: styles.buttonPrimary, text: styles.textPrimary };
  };
};

const Button: FC<ButtonProps> = ({ children, type, style, ...props }) => {
  const typeStyles = getColors(type);
  return (
    <Pressable style={[styles.button, typeStyles.button, style]} {...props}>
      {typeof children === 'string' ? (
        <Text style={[typeStyles.text, styles.text]}>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    padding: 8,
    width: '100%',
  },

  text: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
  },

  textPrimary: {
    color: '#fff',
  },

  buttonPrimary: {
    backgroundColor: '#3b82f6',
  },

  buttonSecondary: {
    backgroundColor: '#e5e7eb',
  },

  buttonDanger: {
    backgroundColor: '#ef4444',
  }
})

export default Button;
