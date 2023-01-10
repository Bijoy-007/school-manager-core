import Props from "../types/Props";
import classes from "./PageWrapper.module.css";

const PageWrapper = (props: Props) => {
  return <div className={classes.wrapper}>{props.children}</div>;
};

export default PageWrapper;
