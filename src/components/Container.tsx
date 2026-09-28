import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type ContainerSize = 'narrow' | 'standard' | 'wide' | 'full';

const sizeClass: Record<ContainerSize, string> = {
  narrow: 'max-w-3xl',
  standard: 'max-w-4xl',
  wide: 'max-w-6xl',
  full: 'max-w-7xl',
};

interface ContainerProps {
  size?: ContainerSize;
  className?: string;
  children: ReactNode;
}

const Container = ({ size = 'standard', className, children }: ContainerProps) => (
  <div className={cn('mx-auto', sizeClass[size], className)}>{children}</div>
);

export default Container;
