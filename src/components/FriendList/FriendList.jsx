import clsx from "clsx";
import commonCss from "../common.module.css";
import css from "./friendList.module.css";

export function FriendList({ data }) {
    return (
        <div className={clsx(commonCss.container, css["friends-container"])}>
            <ul className={css["friend-list"]}>
                {data.map(({ avatar, name, isOnline, id }) =>
                    <li className={css.item} key={id}>
                        <span className={clsx(css.status, css[isOnline ? "green" : "red"])}></span>
                        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                        <p className={css.name}>{name}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}