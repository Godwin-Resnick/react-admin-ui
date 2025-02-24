import React from 'react'
import "./widgetLg.css"

const WidgetLg = () => {

  const Button = ({ type }) => {
    return <button className={`widgetLgButton ${type}`}>{type}</button>
  }

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://s.yimg.com/zb/imgv1/657d20e6-0b53-3a14-9fc5-8fc11a6ee8ea/t_500x300" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Cristiano Ronaldo</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://s.yimg.com/zb/imgv1/657d20e6-0b53-3a14-9fc5-8fc11a6ee8ea/t_500x300" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Cristiano Ronaldo</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://s.yimg.com/zb/imgv1/657d20e6-0b53-3a14-9fc5-8fc11a6ee8ea/t_500x300" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Cristiano Ronaldo</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://s.yimg.com/zb/imgv1/657d20e6-0b53-3a14-9fc5-8fc11a6ee8ea/t_500x300" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Cristiano Ronaldo</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg