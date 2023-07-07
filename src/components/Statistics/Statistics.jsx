import clsx from "clsx";
import commonCss from "../common.module.css";

export function Statistics(props) {
    return (
        <section class={clsx(commonCss.container)}>
            {props.title ? <h2 class="title">{props.title}</h2> : null}
            
            <ul class="stat-list">
                {props.data.map( ({id, label, percentage}) => 
                <li class="item" key={id}>
                    <span class="label">{label}</span>
                    <span class="percentage">{percentage + '%'}</span>
                </li>
                )}
            </ul>
        </section>
    )
}