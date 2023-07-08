import clsx from "clsx";
import commonCss from "../common.module.css";

export function FriendList({ data }) {
    return (
        <div className={clsx(commonCss.container)}>
            <ul className="friend-list">
                {data.map(({ avatar, name, isOnline, id }) =>
                    <li className="item" key={id}>
                        <span className={isOnline ? "status green" : "status red"}></span>
                        <img className="avatar" src={avatar} alt="User avatar" width="48" />
                        <p className="name">{name}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}