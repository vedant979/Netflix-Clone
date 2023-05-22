import React from 'react'
import profile from '../../assets/profile.png';

export const Avatar = ({pointer, borderRadius }) => {
  const style={
      cursor:"pointer",
      borderRadius,
      marginRight:"20px"
  }
  return (
    <div>
      <img src={profile}  style={style}></img>
    </div>
  )
}
