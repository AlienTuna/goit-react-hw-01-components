import clsx from "clsx";
import commonCss from "../common.module.css";

export function TransactionHistory(props) {
    return (
        <div class={clsx(commonCss.container)}>
            <table class="transaction-history">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {props.data.map(({ id, type, amount, currency }) =>
                        <tr>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}