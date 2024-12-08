import React from 'react';

interface Message {
  id: number;
  subject: string;
  preview: string;
  timestamp: string;
  isRead: boolean;
}

const mockMessages: Message[] = [
  {
    id: 1,
    subject: 'Image Uploaded Successfully',
    preview: 'Your image has been uploaded successfully! Check it out in your gallery.',
    timestamp: '2024-11-25 02:34 PM',
    isRead: false,
  },
  {
    id: 2,
    subject: 'Action Reminder',
    preview: 'Check out the latest updates in your dashboard and stay on top of your goals.',
    timestamp: '2024-11-24 08:34 AM',
    isRead: false,
  },
  {
    id: 3,
    subject: 'Profile Update Confirmation',
    preview: 'Your profile has been updated successfully. You’re all set!',
    timestamp: '2024-11-22 09:15 AM',
    isRead: true,
  },
  // Add more mock messages as needed
];

const Inbox: React.FC = () => {
  return (
    <div className="p-3 sm:p-5 lg:ml-64 mt-16 sm:mt-20 bg-transparent rounded-lg w-full lg:w-[50vw]">
      <h2 className="text-xl sm:text-2xl text-black font-bold mb-4">Inbox</h2>
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
                <h3 className="font-semibold text-black text-sm sm:text-lg">{message.subject}</h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  {message.preview}
                </p>
              </div>
              <span className="text-[8px] sm::text-xs text-gray-400 text-right">
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