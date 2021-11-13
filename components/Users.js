import ProfileCard from "./ProfileCard";

const Contributors = ({ users }) => {
  if (users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-start h-64 p-8 text-lg text-gray-600 bg-orange-300 shadow-md space-y-6 rounded-md">
        None yet
      </div>
    );
  }
  return users.map((user) => (
    <ProfileCard
      username={user.name}
      avatarUrl={user.avatarUrl}
      socials={[
        { type: "github", username: user.github },
        { type: "twitter", username: user.twitter },
        { type: "blog", username: user.blogUrl },
      ]}
    />
  ));
};

export default Contributors;
