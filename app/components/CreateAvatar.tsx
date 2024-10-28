const CreateAvatar: React.FC = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-8 text-sky-400">
          Create Your Avatar
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          Personalize your profile by creating your avatar.
        </p>
        <button
          type="button"
          className="bg-white text-indigo-500 font-bold py-3 px-4 rounded-full focus:outline-none shadow-lg drop-shadow-xl hover:bg-gray-200"
        >
          Start Now
        </button>
      </div>
    );
  };
  
  export default CreateAvatar;
  