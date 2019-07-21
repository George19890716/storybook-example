import React from 'react';
import { FormattedMessage } from 'react-intl';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text, object } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links';
import Button from '../../src/lib/Button/Button';
import Input from '../../src/lib/Input/Input';

storiesOf('Form Controls', module)
  .addDecorator(withKnobs)
  .add('Button', () =>
    <Button
      type= {select('type', ['button', 'submit'], 'button')}
      square={boolean('square')}
      raduisLeft={boolean('raduisLeft')}
      raduisRight={boolean('raduisRight')}
      black={boolean('black')}
      onClick={action('click')}
      disabled={boolean('disabled')}
    >
      <FormattedMessage id='button.label' />
    </Button>
  , { info: { inline: true, header: false } })
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
