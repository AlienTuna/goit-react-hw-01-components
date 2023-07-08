import clsx from "clsx";
import commonCss from "../common.module.css";
import css from "./statistics.module.css";
import getRandomHexColor from "../../utils/getRandomHexColor";

export function Statistics(props) {
    return (
        <section className={clsx(commonCss.container, css["statistics-section"])}>
            {props.title ? <h2 className={css.title}>{props.title}</h2> : null}

            <ul className={css["stat-list"]}>
                {props.data.map(({ id, label, percentage }) =>
                    <li className={css["stat-item"]} key={id} style={{ backgroundColor: getRandomHexColor() }}>
                        <span className={css["label"]}>{label}</span>
                        <span className={css["number"]}>{percentage + '%'}</span>
                    </li>
                )}
            </ul>
        </section>
    )
}

