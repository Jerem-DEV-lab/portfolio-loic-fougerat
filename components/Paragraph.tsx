import React from 'react';
import {ReactChild} from "../types";

const Paragraph = ({children}: ReactChild) => {
  return <p className="text-sm text-justify leading-relaxed">
    {children}
  </p>
};

export default Paragraph;
