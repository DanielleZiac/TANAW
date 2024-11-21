import React from 'react';

interface Message {
  id: number;
  sender: string;
  subject: string;
  preview: string;
  timestamp: string;
  isRead: boolean;
}

const mockMessages: Message[] = [
  {
    id: 1,
    sender: 'John Doe',
    subject: 'Meeting Reminder',
    preview: 'Don’t forget about the meeting tomorrow at 10 AM.',
    timestamp: '2024-11-21 12:00 PM',
    isRead: false,
  },
  {
    id: 2,
    sender: 'HR Department',
    subject: 'Policy Update',
    preview: 'Please review the new company policies effective immediately.',
    timestamp: '2024-11-20 09:15 AM',
    isRead: true,
  },
  // Add more mock messages as needed
];

const Inbox: React.FC = () => {
  return (
    <div className="p-5 mt-20 bg-transparent rounded-lg w-full ">
      <h2 className="text-xl text-black font-bold mb-4">Inbox</h2>
      <ul>
        {mockMessages.map((message) => (
          <li
            key={message.id}
            className={`p-4 mb-2 rounded-md ${
              message.isRead ? 'bg-white' : 'bg-bubbleGray'
            } shadow hover:shadow-lg cursor-pointer`}
          >
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-black text-lg">{message.subject}</h3>
                <p className="text-sm text-gray-500">
                  {message.sender} - {message.preview}
                </p>
              </div>
              <span className="text-xs text-gray-400">
                {message.timestamp}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inbox;
