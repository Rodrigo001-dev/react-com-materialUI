// @flow
import * as React from "react";
//import "./Title.css";

import { Typography } from '@material-ui/core';

interface TitleProps { 
}

export const Title: React.FunctionComponent<TitleProps> = (props) => {
  const { children } = props;

  return (
    // o Typography server para trabalhar com títulos ou parágrafos
    <Typography variant="h3" component="h1">{children}</Typography>
  );
};