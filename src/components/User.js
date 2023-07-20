function User (props) {
    return (
        <span className="user">
        <span className="name">{props.username}</span>
        <span className="handle">@{props.handle}</span>
      </span>
    )
}

export default User;