import React from "react";
import ME from '../../ME.jpg'

export default function AboutPage() {
  return (<div>
    <img src={ME} className=" d-block mx-auto" style={{objectFit: 'contain', objectPosition: 'center', maxWidth: '80%'}}/>
  </div>);
}