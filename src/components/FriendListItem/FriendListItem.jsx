import style from "./FriendsListItem.module.css";

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <li className={style.friend__item}>
      <span className={isOnline ? style.online : style.offline}></span>
      <img
        src={avatar}
        alt="User avatar"
        className={style.friend__avatar}
        width="48"
      />
      <p className={style.friend__name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
