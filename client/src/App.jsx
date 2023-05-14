import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import ChannelListContainer from './components/ChannelListContainer';
import ChannelContainer from './components/ChannelContainer';

import { ChannelListContainer, ChannelContainer } from './components';



const apiKey = 'mzah3eb53htc'
const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme="team light">
                <ChannelListContainer 
                    
                />
                <ChannelContainer 
                   
                />
            </Chat>
    </div>
  )
}

export default App
