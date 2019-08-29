import React from 'react';
import PropTypes from 'prop-types';
import { Callout } from '@blueprintjs/core';
import { Page } from '../Page/Page.js';
import { UNIT } from '../styles.js';

const { useState } = React;

let id = 0;
function createId() {
  return ++id; // eslint-disable-line
}

function Message({ text, type }) {
  return (
    <Callout
      style={{
        marginBottom: UNIT,
        maxWidth: 350,
        marginLeft: type === 'outgoing' ? 'auto' : null,
      }}
      intent={type === 'outgoing' ? 'primary' : undefined}
      icon={null}
    >
      {text}
    </Callout>
  );
}
Message.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['incoming', 'outgoing']).isRequired,
};

export function Messages() {
  const [messages, setMessages] = useState([
    {
      id: createId(),
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptates sit dignissimos atque eaque, natus nisi repellendus rem, labore blanditiis animi voluptatem distinctio maxime quisquam? Quod odit dignissimos, et molestiae.',
      type: 'incoming',
    },
    {
      id: createId(),
      text: 'Lorem ipsum dolor sit amet.',
      type: 'incoming',
    },
    {
      id: createId(),
      text:
        'The other world is the world of computing. This is a world ultimately defined by a small set of arithmetic operations such as adding, multiplying, and dividing, and an even smaller set of operations that control which operations happen next',
      type: 'outgoing',
    },
    {
      id: createId(),
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptate voluptas magnam doloremque?',
      type: 'incoming',
    },
    {
      id: createId(),
      text: 'Lorem ipsum dolor sit amet.',
      type: 'outgoing',
    },
  ]);
  return (
    <Page renderHeading={() => 'Messages'}>
      <div
        style={{
          height: 300,
          overflowY: 'auto',
          border: '2px solid',
          padding: UNIT * 2,
        }}
      >
        {messages.map(message => (
          <Message key={message.id} text={message.text} type={message.type} />
        ))}
      </div>
    </Page>
  );
}
