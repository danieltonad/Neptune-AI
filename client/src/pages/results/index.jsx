import SearchBox from "../../components/searchBox";
import { useSearch } from "../../context/SearchContext";
import "./results.scss";
import { Bot, Copy, Download } from "lucide-react";
import { useEffect, useRef } from "react";

export function Results() {
  return (
    <div className="messages">
      <MessagesView />
      <SearchBox notice />
    </div>
  );
}

const MyMarkdown = ({ children }) => {
  return <div>{children}</div>;
};

const MessagesView = () => {
  const { messages, isSearching } = useSearch();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const messages = scrollRef.current.querySelectorAll(".sent");
      const lastMessage = messages[messages.length - 1];
      if (lastMessage) {
        lastMessage.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [isSearching]);

  return (
    <div className="messages-view" ref={scrollRef}>
      <div className="view">
        {messages.map((message, index) =>
          message.sender === "user" ? (
            <SentMessage key={index} message={message} />
          ) : (
            <ReceivedMessage key={index} message={message} />
          )
        )}
        {isSearching && (
          <ReceivedMessage>
            <Loading />
          </ReceivedMessage>
        )}
      </div>
    </div>
  );
};

const SentMessage = ({ message }) => {
  return (
    <div className="message sent">
      <img src="https://api.dicebear.com/9.x/lorelei/svg" alt="" />
      <div className="text">
        <MyMarkdown>{message.content}</MyMarkdown>
      </div>
    </div>
  );
};

const ReceivedMessage = ({ message, children }) => {
  return (
    <div className="message received">
      <Bot size={22} />
      {message && (
        <div className="text">
          <MyMarkdown>{message.content}</MyMarkdown>
          <Actions message={message} />
        </div>
      )}
      {children && children}
    </div>
  );
};

const Actions = ({ message }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
  };

  return (
    <div className="actions">
      <button className="button" onClick={handleCopy}>
        <Copy size={16} />
      </button>
      <button className="button">
        <Download size={16} />
      </button>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="loading">
      {[...Array(3)].map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
};
