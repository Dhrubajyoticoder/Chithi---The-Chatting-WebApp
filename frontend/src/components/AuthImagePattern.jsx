// eslint-disable-next-line react/prop-types
const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-white p-12">
      <div className="relative text-center">
        {/* Chatting/Connecting Themed Image */}
        <div className="relative mb-8">
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/161/230/non_2x/chat-concept-woman-chatting-with-friends-online-social-networking-chat-video-news-messages-search-friends-illustration-flat-vector.jpg" 
            alt="Chatting Illustration"
            className="w-150 h-auto mx-auto object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4 text-primary">{title}</h2>

        {/* Subtitle */}
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
