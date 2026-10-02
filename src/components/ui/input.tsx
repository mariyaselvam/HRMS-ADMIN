import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import {
  inputWrapperClass,
  labelClass,
  inputBaseClass,
  inputErrorClass,
  errorMessageClass,
} from './input.styles';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className={inputWrapperClass}>
        {label && (
          <label htmlFor={inputId} className={labelClass}>
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(inputBaseClass, error && inputErrorClass, className)}
          {...props}
        />
        {error && <p className={errorMessageClass}>{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
