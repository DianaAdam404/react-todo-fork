function UserProfile({ name, age, isOnline }) {
  return (
    <div className="profile-row">
      <div className="avatar" aria-hidden="true">
        {name.charAt(0)}
      </div>
      <div className="profile-copy">
        <strong>{name}</strong>
        <span>{age} éves</span>
      </div>
      <span
        className={`status ${isOnline ? "status-online" : "status-offline"}`}
      >
        <span className="status-dot" />
        {isOnline ? "Online" : "Offline"}
      </span>
    </div>
  );
}

export default UserProfile;
