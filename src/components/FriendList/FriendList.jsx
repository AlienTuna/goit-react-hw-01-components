import clsx from "clsx";
import commonCss from "../common.module.css";
import css from "./friendList.module.css";
import {FriendListItem} from "./FriendListItem/FriendListItem"

export function FriendList({ data }) {
    return (
        <div className={clsx(commonCss.container, css["friends-container"])}>
            <ul className={css["friend-list"]}>
                {data.map(({ avatar, name, isOnline, id }) =>
                    <FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    id={id}
                    />
                )}
            </ul>
        </div>
    )
}