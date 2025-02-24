import React from 'react'
import "./home.css"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import { userData } from "../../dummyData"
import Chart from "../../components/chart/Chart"
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home