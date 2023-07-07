import clsx from "clsx";
import css from "./profile.module.css";
import commonCss from "../common.module.css";

export function Profile({username, tag, location, avatar, stats}) {
    return (
        <div class={clsx(css.profileCard, commonCss.container)}>
            <div class="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    className={clsx(css.profileAvatar, css.profileDescr)}
                />
                <p className="name">{username}</p>
                <p class="tag">{'@' + tag}</p>
                <p class="location">{location}</p>
            </div>
            <ul class={css.profileStats}>
                <li>
                    <span class="label">Followers</span>
                    <span class="quantity">{stats.followers}</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">{stats.views}</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}