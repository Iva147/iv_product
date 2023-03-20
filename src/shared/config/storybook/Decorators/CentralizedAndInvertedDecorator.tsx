import type { Story } from '@storybook/react';
import type { ReactElement } from 'react';

export const CentralizedAndInvertedDecorator = (StoryComponent: Story): ReactElement => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--inverted-bg-color)',
      width: '100vw',
      height: '100vh'
    }}
    >
      <StoryComponent/>
    </div>
)