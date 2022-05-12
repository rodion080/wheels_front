import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import './JourneyInfo.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import WebSocketHelper, { TypeChatMessage, TypeChatResponse } from '../../API/WebSocketHelper';

const JourneyInfo = () => {
  // const { journeyId } = useParams();
  const { loading, accountData, error } = useTypedSelector((state) => state.account);
  const { fetchAccount } = useActions();
  const [messages, setMessages] = useState<TypeChatResponse[]>([]);
  const [chatText, setChatText] = useState<string>('');
  const webSocket = useRef<WebSocketHelper | null>();
  const chat = useRef<HTMLDivElement | null>();

  const sendMessage = () => {
    if (!chatText) return;
    if (webSocket.current) {
      webSocket.current.sendMessage(chatText);
      setChatText('');
    }
  };
  const sendMessageBtnHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (e.key === 'Enter' && e.shiftKey) {
        return;
      }
      e.preventDefault();
      sendMessage();
    }
  };

  const messagesWorking = useMemo(() => messages, [messages]);

  useEffect(() => {
    if (chat.current) {
      const topPos = chat.current.scrollHeight;
      chat.current.scroll({ top: topPos + topPos * 2, behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    console.log(loading, error);
    if (!accountData.id) {
      fetchAccount(localStorage.getItem('userId'));
    }

    if (accountData.id) {
      if (!webSocket.current) {
        webSocket.current = new WebSocketHelper(
          accountData.accountLocalData.login,
          setMessages,
        );
      }
    }

    return () => {
      if (webSocket.current) {
        webSocket.current.disconnect();
        webSocket.current = null;
      }
    };
  }, [accountData.id]);

  return (
    <div className="journey-info">
      <div className="container__wrapper journey-info">
        <div className="journey-info__data">
          <div className="journey-info__data-wrapper">
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ducimus facere laboriosam, molestias nisi velit.
            </h1>
            <div className="journey-info__description">
              {/*   eslint-disable-next-line max-len */}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, necessitatibus, velit? Aliquam aut cum cumque cupiditate inventore iste minima quam quidem repudiandae voluptatum? Asperiores assumenda blanditiis id, in, laboriosam minima mollitia nesciunt, quia quidem repellendus tenetur ut. Animi cum ex quidem rem ullam! Maiores, repellat.
            </div>
          </div>
          <div className="journey-info__map" >
            MAP
          </div>
        </div>
        <div className="journey-info__chat">
          <div ref={chat} className="journey-info__chat-line" >
            {messagesWorking.map((item, k) => {
              switch (item.messageType) {
              case TypeChatMessage.GLOBAL:
                return <div key={k} className="journey-info__chat-message">
                  {`${item.message}`}
                </div>;
              case TypeChatMessage.PERSONAL:
                // eslint-disable-next-line no-case-declarations
                const className = item.login !== accountData.accountLocalData.login
                  ? 'journey-info__chat-message'
                  : 'journey-info__chat-message_right';

                if (k !== 0) {
                  if (messages[k - 1].login === item.login
                      && messages[k - 1].messageType === TypeChatMessage.PERSONAL) {
                    return <div key={k} className={className}>
                      <span>{item.message}</span>
                    </div>;
                  }
                }
                return <div key={k} className={className}>
                  <h1>{item.login}:</h1>
                  <span>{item.message}</span>
                </div>;
              default:
                return <div key={k} className="journey-info__chat-message">
                  {`${item.message}`}
                </div>;
              }
            })}
          </div>
          <div className="journey-info__chat-form">
            <textarea
              autoFocus
              value={chatText}
              onKeyPress={(e) => sendMessageBtnHandler(e)}
              onChange={(e) => setChatText(e.target.value)}
            />
            <button
              onClick={sendMessage}
              className="g-button-1">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyInfo;
