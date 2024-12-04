import React from 'react';
import "./widgetSm.css";
import { Visibility } from '@mui/icons-material';


const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://s.yimg.com/zb/imgv1/314ff28a-c3e1-3e63-9f17-d265f9686377/t_500x300" alt="" className="widgetSmImg"/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Lionel Messi</span>
            <span className="widgetSmUserTitle">Professional Footballer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://s.yimg.com/zb/imgv1/314ff28a-c3e1-3e63-9f17-d265f9686377/t_500x300" alt="" className="widgetSmImg"/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Lionel Messi</span>
            <span className="widgetSmUserTitle">Professional Footballer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://s.yimg.com/zb/imgv1/314ff28a-c3e1-3e63-9f17-d265f9686377/t_500x300" alt="" className="widgetSmImg"/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Lionel Messi</span>
            <span className="widgetSmUserTitle">Professional Footballer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://s.yimg.com/zb/imgv1/314ff28a-c3e1-3e63-9f17-d265f9686377/t_500x300" alt="" className="widgetSmImg"/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Lionel Messi</span>
            <span className="widgetSmUserTitle">Professional Footballer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://s.yimg.com/zb/imgv1/314ff28a-c3e1-3e63-9f17-d265f9686377/t_500x300" alt="" className="widgetSmImg"/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Lionel Messi</span>
            <span className="widgetSmUserTitle">Professional Footballer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm