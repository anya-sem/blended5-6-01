const tableHeaders = ['№', 'price', 'amount', 'date'];
import { formatData } from 'helpers/formatData';
import style from './CryptoHistory.module.css';

export const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          {tableHeaders.map((item, index) => (
            <th className={style.th} key={index}>
              {item}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, price, amount, date }, index) => (
          <tr className={style.tr} key={id}>
            <td className={style.td}>{index + 1}</td>
            <td className={style.td}>{price}</td>
            <td className={style.td}>{amount}</td>
            <td className={style.td}>{formatData(date)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
