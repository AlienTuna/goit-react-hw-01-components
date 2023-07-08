import clsx from "clsx";
import commonCss from "../common.module.css";

export function Statistics(props) {
    return (
        <section className={clsx(commonCss.container)}>
            {props.title ? <h2 className="title">{props.title}</h2> : null}

            <ul className="stat-list">
                {props.data.map(({ id, label, percentage }) =>
                    <li className="item" key={id}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage + '%'}</span>
                    </li>
                )}
            </ul>
        </section>
    )
}