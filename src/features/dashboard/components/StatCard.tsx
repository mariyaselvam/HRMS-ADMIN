import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import {
  statCardContainerClass,
  statCardTitleClass,
  statCardValueClass,
  statCardSubtitleClass,
  statIconVariants,
} from './StatCard.styles';

interface StatCardProps extends VariantProps<typeof statIconVariants> {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ElementType;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  colorScheme,
}) => {
  return (
    <div className={statCardContainerClass}>
      <div className="space-y-1">
        <p className={statCardTitleClass}>{title}</p>
        <h3 className={statCardValueClass}>{value}</h3>
        {subtitle && <p className={statCardSubtitleClass}>{subtitle}</p>}
      </div>

      <div className={statIconVariants({ colorScheme })}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  );
};
