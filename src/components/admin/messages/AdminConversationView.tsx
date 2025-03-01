
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { Conversation } from '@/components/messages/types';
import { EmptyConversation } from '@/components/messages/EmptyConversation';

interface AdminConversationViewProps {
  conversation: Conversation | null;
  newMessage: string;
  setNewMessage: (message: string) => void;
  handleSendMessage: () => void;
}

const AdminConversationView: React.FC<AdminConversationViewProps> = ({
  conversation,
  newMessage,
  setNewMessage,
  handleSendMessage
}) => {
  if (!conversation) {
    return <EmptyConversation />;
  }

  return (
    <div className="col-span-2 border rounded-lg overflow-hidden flex flex-col">
      {/* En-tête de conversation */}
      <div className="p-4 border-b flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={conversation.with.avatar} />
            <AvatarFallback>{conversation.with.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-medium">{conversation.with.name}</h2>
            <p className="text-xs text-gray-500">{conversation.with.email}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className={
            conversation.with.role === 'host' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-blue-100 text-blue-800'
          }>
            {conversation.with.role === 'host' ? 'Hôte' : 'Utilisateur'}
          </Badge>
        </div>
      </div>
      
      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {conversation.messages.map((message) => (
            <div 
              key={message.id}
              className={`flex ${message.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender !== 'admin' && (
                <Avatar className="h-8 w-8 mr-2 mt-1">
                  <AvatarImage src={conversation.with.avatar} />
                  <AvatarFallback>{conversation.with.name.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
              <div 
                className={`max-w-[70%] p-3 rounded-lg ${
                  message.sender === 'admin' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-gray-100 text-gray-900 rounded-tl-none'
                }`}
              >
                <p>{message.content}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === 'admin' ? 'text-primary-foreground/70' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      {/* Saisie de message */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Textarea 
            placeholder="Écrivez votre message..." 
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            className="min-h-[60px] resize-none"
          />
          <Button onClick={handleSendMessage} className="h-[60px]">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminConversationView;
