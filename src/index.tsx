import React, { FC, ReactChild } from 'react';
import './index.less';

export interface Props {
  children?: ReactChild;
  value: string;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
export const Thing: FC<Props> = ({ children }) => {
  return <div className="app">{children || `the snozzberries taste like snozzberries`}</div>;
};
