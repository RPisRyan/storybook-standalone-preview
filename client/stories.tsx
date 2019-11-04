import * as React from 'react';
import { configure, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

configure(() => {
  storiesOf('Button', module).add('Button w/action', () => <button onClick={action('engage-click')}>Engage</button>);

  storiesOf('Component 1', module).add('Story 1', () => <div>Component 1 - Story 1</div>);

  storiesOf('Component 2', module)
    .add('Story 1', () => <div>Category 2 - Story 1</div>)
    .add('Story 2', () => <div>Category 2 - Story 2</div>);
}, module);
