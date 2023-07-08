import clsx from "clsx";
import commonCss from "../common.module.css";

export function TransactionHistory(props) {
    return (
        <div className={clsx(commonCss.container)}>
            <table className="transaction-history">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {props.data.map(({ id, type, amount, currency }) =>
                        <tr key={id}>
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