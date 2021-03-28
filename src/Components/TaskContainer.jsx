import React, { useEffect, useState } from "react";
import Task from "./Task";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { IconButton } from "@material-ui/core";

function TaskContainer({ title }) {
  const [todos, updateTodo] = useState(null);

  function handleOnDragEnd(result) {
    console.log(result);

    if (!result.destination) return;

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateTodo(items);
  }
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const r = await axios.get("https://jsonplaceholder.typicode.com/todos");
        return r.data;
      } catch (e) {
        if (e.response && e.response.data) {
          console.error(e.response.data);
        }
      }
    };

    fetchTodo().then((data) => {
      updateTodo(data);
    });
  }, []);

  return (
    // <DragDropContext>
    //   <Droppable droppableId="characters">
    <div className="task__container">
      <div className="task__container__header">
        <span>{title}</span>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>

      {/* <div className="task__container__list characters">
        {todo &&
          todo.map((item) => {
            return <Task />;
          })}
      </div> */}

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              className="characters tasks__list__container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todos &&
                todos.slice(0, 15).map(({ id, name, thumb }, index) => {
                  return (
                    <Draggable
                      key={id + ""}
                      draggableId={id + ""}
                      index={index}
                    >
                      {(provided) => (
                        // <li
                        //   ref={provided.innerRef}
                        //   {...provided.draggableProps}
                        //   {...provided.dragHandleProps}
                        // >
                        //   <div className="characters-thumb">
                        //     <img src={thumb} alt={`${name} Thumb`} />
                        //   </div>
                        //   <p>{name}</p>
                        // </li>
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Task id={id} />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
    //   </Droppable>
    // </DragDropContext>
  );
}

export default TaskContainer;
