// import clsx from "clsx";
import css from "./profile.module.css";
// import commonCss from "../common.module.css";

export function ProfileStats({stat_name, stat_number}) {
    return (
        <li className={css.statItem}>
            <span className={css.stat_name}>{stat_name}</span>
            <span className={css.stat_number}>{stat_number.toLocaleString('en-US')}</span>
        </li>
    )
}