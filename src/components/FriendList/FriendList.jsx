import clsx from "clsx";
import commonCss from "../common.module.css";

export function FriendList(props) {
    console.log(props)
    return (
        <div class={clsx(commonCss.container)}>
            <ul class="friend-list">
                {props.data.map(({ avatar, name, isOnline, id }) => 
                    <li class="item" key={id}>
                    <span class={isOnline ? "status green" : "status red"}></span>
                    <img class="avatar" src={avatar} alt="User avatar" width="48" />
                    <p class="name">{name}</p>
                </li>
                )}
            </ul>
        </div>
    )
}