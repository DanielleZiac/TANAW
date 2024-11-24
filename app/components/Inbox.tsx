import React from "react";

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
    sender: "John Doe",
    subject: "Meeting Reminder",
    preview: "Don’t forget about the meeting tomorrow at 10 AM.",
    timestamp: "2024-11-21 12:00 PM",
    isRead: false,
  },
  {
    id: 2,
    sender: "HR Department",
    subject: "Policy Update",
    preview: "Please review the new company policies effective immediately.",
    timestamp: "2024-11-20 09:15 AM",
    isRead: true,
  },
  {
    id: 3,
    sender: "Finance Team",
    subject: "Invoice Received",
    preview: "Your invoice has been successfully processed.",
    timestamp: "2024-11-20 11:45 AM",
    isRead: true,
  },
  {
    id: 4,
    sender: "Finance Team",
    subject: "Invoice Received",
    preview: "Your invoice has been successfully processed.",
    timestamp: "2024-11-20 11:45 AM",
    isRead: true,
  },
  {
    id: 5,
    sender: "Finance Team",
    subject: "Invoice Received",
    preview: "Your invoice has been successfully processed.",
    timestamp: "2024-11-20 11:45 AM",
    isRead: true,
  },
  {
    id: 6,
    sender: "Finance Team",
    subject: "Invoice Received",
    preview: "Your invoice has been successfully processed.",
    timestamp: "2024-11-20 11:45 AM",
    isRead: true,
  },

];

const generateAvatarColor = (sender: string) => {
  const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];
  const index = sender.charCodeAt(0) % colors.length;
  return colors[index];
};

const Inbox: React.FC = () => {
  return (
    <div className=" mt-20 bg-transparent w-full">
      {/* Header */}
    

      {/* Message List */}
      <div className="overflow-y-auto w-full ">
        {mockMessages.map((message) => (
          <div
            key={message.id}
            className={`flex items-center p-3  shadow ${
              message.isRead ? "bg-transparent" : "bg-white"
            }`}
          >
            {/* Avatar */}
            <div
              className={`flex justify-center items-center w-10 h-10 rounded-full text-white font-medium ${
                message.isRead ? "opacity-70" : ""
              } ${generateAvatarColor(message.sender)}`}
            >
              {message.sender.charAt(0)}
            </div>

            {/* Message Content */}
            <div className="ml-4 flex-1">
              <h3 className="text-sm font-semibold text-black">{message.subject}</h3>
              <p className="text-xs text-gray-600">
                {message.sender} - {message.preview}
              </p>
            </div>

            {/* Timestamp */}
            <span className="text-xs text-gray-400">{message.timestamp}</span>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Inbox;
