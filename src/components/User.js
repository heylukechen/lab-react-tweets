function User (props) {
    return (
        <span className="user">
        <span className="name">{props.username}</span>
        <span className="handle">@{props.username}</span>
      </span>
    )
}

export default User;