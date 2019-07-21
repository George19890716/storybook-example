import React from 'react';
import { FormattedMessage } from 'react-intl';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text, object } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links';
import Input from '../../src/lib/Input/Input';

storiesOf('Form Controls', module)
  .addDecorator(withKnobs)
  .add('Input', () => 
      <Input
        title={select('title', [<FormattedMessage id='title1' />, <FormattedMessage id='title2' />], <FormattedMessage id='title1' />)}
        type={select('type', ['text', 'password'], Input.defaultProps.type)}
        placeholder={select('placeholder', ['placeholder1', 'placeholder2'], 'placeholder1')}
        onChange={action('change')}
        value={text('value', 'mot vrai')}
        required={boolean('required')}
      />
    , { info: { inline: true, header: false } })
