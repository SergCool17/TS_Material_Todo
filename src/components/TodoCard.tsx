import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import RadioButtonUncheckedRoundedIcon from "@material-ui/icons/RadioButtonUncheckedRounded";

import React from "react";

import {
  Card,
  withStyles,
  CardActions,
  Typography,
  Checkbox
} from "@material-ui/core";

const styles = {
  card: {
    marginBottom: "0"
  },
  done: {
    textDecoration: "line-through",
    color: "#bdbdbd"
  }
};

const TodoCard: React.FC = ({ task, classes, isDone, handleCheck }) => {
  return (
    <Card className={classes.card}>
      <CardActions
        style={{
          borderBottom: "1px solid rgb(212, 212, 212)"
        }}
      >
        <Checkbox
          checked={isDone}
          onChange={handleCheck}
          icon={
            <RadioButtonUncheckedRoundedIcon style={{ color: "#bdbdbd" }} />
          }
          checkedIcon={
            <CheckCircleOutlineRoundedIcon style={{ color: "#4caf50" }} />
          }
        />

        <Typography variant="body1" className={isDone ? classes.done : ""}>
          {task}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(TodoCard);
