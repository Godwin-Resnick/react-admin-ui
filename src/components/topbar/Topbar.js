import React from 'react'
import "./topbar.css"
import { NotificationsNone , Language, Settings } from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
          <div className="topleft">
              <span className="logo">lamaadmin</span>
          </div>
          <div className="topright">
              <div className="topbarIconContainer">
                  <NotificationsNone />
                  <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                  <Language />
                  <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                  <Settings />
              </div>
              <img src="https://media.assettype.com/outlookindia/import/uploadimage/library/16_9/16_9_5/IMAGE_1668482171.webp?rect=1,0,1198,675&w=640&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0" alt="" className="topAvatar" />
          </div>
      </div>
    </div>
  )
}

export default Topbar
