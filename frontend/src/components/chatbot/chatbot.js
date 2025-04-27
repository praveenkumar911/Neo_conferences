import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

const ChatbotIcon = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000
    }}>
     
      <button 
        onClick={toggleChat} 
        style={{
          background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          border: 'none',
          transition: 'transform 0.3s ease',
          transform: isChatOpen ? 'rotate(180deg)' : 'rotate(0deg)'
        }}
        aria-label={isChatOpen ? "Close Chatbot" : "Open Chatbot"}
      >
        {isChatOpen ? <X size={24} /> : <Sparkles size={24} />}
      </button>

      {isChatOpen && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          right: '20px',
          width: '350px',
          height: '500px',
          background: 'white',
          borderRadius: '15px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #e0e0e0'
        }}>
          {/* Chat Header */}
          <div style={{
            background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
            color: 'white',
            padding: '15px',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h3 style={{ 
              margin: 0, 
              fontSize: '18px', 
              fontWeight: 'bold' 
            }}>
              NEO Conferences AI Assistant
            </h3>
            <button 
              onClick={toggleChat} 
              style={{ 
                background: 'transparent', 
                border: 'none', 
                color: 'white' 
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages Area */}
          <div style={{
            flexGrow: 1,
            overflowY: 'auto',
            padding: '15px',
            background: '#f9f9f9'
          }}>
            <div style={{
              textAlign: 'center',
              color: '#666',
              padding: '20px'
            }}>
              <Sparkles size={40} color="#6a11cb" />
              <p style={{ marginTop: '10px' }}>
                Welcome to NEO Conferences AI Assistant!
              </p>
              <p style={{ fontSize: '14px', color: '#999' }}>
                How can I help you today?
              </p>
            </div>
          </div>

          {/* Message Input Area */}
          <div style={{
            display: 'flex',
            padding: '10px',
            borderTop: '1px solid #e0e0e0',
            background: 'white'
          }}>
            <input 
              type="text" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..." 
              style={{
                flexGrow: 1,
                padding: '10px',
                borderRadius: '20px',
                border: '1px solid #ddd',
                marginRight: '10px'
              }}
            />
            <button 
              onClick={handleSendMessage}
              style={{
                background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotIcon;