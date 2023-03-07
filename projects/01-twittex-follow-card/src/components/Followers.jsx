import { FollowCard } from ".";

const followers = [
  {
    id: 1,
    username: "bforero",
    name: "Brayan Forero",
    isFollowing: true,
  },
  {
    id: 2,
    username: "xdevex",
    name: "Denver Shane",
    isFollowing: true,
  },
  {
    id: 3,
    username: "nocontent",
    name: "No Content",
    isFollowing: false,
  },
];

function Followers() {
  return (
    <section>
      <h1>Followers</h1>
      {followers.map(({ id, name, username, isFollowing }) => (
        <FollowCard
          key={id}
          username={username}
          avatar={username}
          initialIsFollowing={isFollowing}
        >
          {name}
        </FollowCard>
      ))}
    </section>
  );
}

export default Followers;
