import FriendListItem from "../FriendListItem/FriendListItem";
import style from "./FriendsList.module.css";

const FriendsList = ({ friends }) => {
  return (
    <ul className={style.friends__list}>
      {friends.map((friend) => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </ul>
  );
};

export default FriendsList;
