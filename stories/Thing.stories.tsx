import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Thing } from '../src';

const stories = storiesOf('Components', module);

stories.add(
  'Thing',
  withInfo({ inline: true })(() => <Thing />)
);
