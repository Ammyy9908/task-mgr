import React from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { Chip, IconButton } from "@material-ui/core";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import Avatar from "./Avatar/Avatar";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ClearIcon from "@material-ui/icons/Clear";
import { motion, AnimateSharedLayout } from "framer-motion";

function Task({ id }) {
  //   const handleDelete = (e) => {
  //     document.getElementById(id).remove();
  //   };
  return (
    <AnimateSharedLayout>
      <motion.div
        className="task__card"
        id={id}
        layout
        animate={{
          x: 0,
          y: 35,
          scale: 1,
          rotate: 0,
        }}
        whileHover={{
          scale: 1.04,
        }}
      >
        <div className="task__card__wrapper">
          <div className="task__top">
            <CheckCircleOutlineIcon />
            <span className="task__title">Task Title</span>
          </div>
          <div className="task__bottom">
            <Chip label="High" color="secondary" icon={<ShowChartIcon />} />
            <Avatar color="link" size="small">
              Su
            </Avatar>
            <div className="timestamp">
              <QueryBuilderIcon />
              <span>30 Mar 2021</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimateSharedLayout>
  );
}

export default Task;
