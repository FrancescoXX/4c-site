import ProfileCard from './ProfileCard';

const Contributors = ({ users }) => {
  if (users.length === 0) {
    return (
      <div className="flex h-64 flex-col items-center justify-start space-y-6 rounded-md bg-orange-300 p-8 text-lg text-gray-600 shadow-md">
        None yet
      </div>
    );
  }
  return users.map((user, index) => (
    <ProfileCard
      key={index}
      username={user.name}
      avatarUrl={user.avatarUrl}
      socials={[
        { type: 'github', username: user.github },
        { type: 'twitter', username: user.twitter },
        { type: 'blog', username: user.blogUrl },
      ]}
    />
  ));
};

export default Contributors;
