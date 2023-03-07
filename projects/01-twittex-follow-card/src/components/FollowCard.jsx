import { useCallback, useState } from "react";

function FollowCard({
  children,
  username,
  avatar,
  initialIsFollowing = false,
}) {
  const [following, setFollowing] = useState(initialIsFollowing);

  const className = following
    ? `tw-followCard-button is-following`
    : `tw-followCard-button`;

  const handleFollow = useCallback(() => {
    setFollowing((prev) => !prev);
  }, []);

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          width={48}
          height={48}
          src={`https://unavatar.io/${avatar}`}
          alt=""
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{username}</span>
        </div>
        <aside>
          <button onClick={handleFollow} className={className}>
            <span className="tw-followCard-text">Seguir</span>
            <span className="tw-followCard-stopFollow">Dejar de seguir</span>
          </button>
        </aside>
      </header>
    </article>
  );
}

export default FollowCard;
