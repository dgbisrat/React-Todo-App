
  import "./styles/todo-body.css";

  const TodoBody = ({todoMessages,setTodoMessages}) => {

    
    function toggleIsCrossed(id){
      setTodoMessages(
        todoMessages.map((todoMessage) =>  id === todoMessage.id ? {...todoMessage,completed:!todoMessage.completed}: todoMessage)
      )
      
    }
    
    function handleDelete(id){
      setTodoMessages(todoMessages.filter((item) => id !== item.id ));
    }

  

    return (
      <div className="todoBody-container">
        <ul className="ul-container">
          {todoMessages.length === 0 ? (
            <p className="no-text">No Task added</p>
          ) : (
            todoMessages.map((todoMessage) => {
              return (
                <>
                  <li key={todoMessage.id}>
                    <div
                      className="two-span-container"
                      onClick={() => toggleIsCrossed(todoMessage.id)}
                    >
                      <span className="icon">
                        {todoMessage.completed ? "✅" : "⭕️"}
                      </span>

                      <span
                        style={{
                          textDecoration: todoMessage.completed
                            ? "line-through"
                            : "none",
                          cursor: "pointer",
                        }}
                        className="text-span"
                        onClick={() => toggleIsCrossed(todoMessage.id)}
                      >
                        {todoMessage.name}
                      </span>
                    </div>

                    <span
                      className="delete-span"
                      onClick={() => handleDelete(todoMessage.id)}
                    >
                      🗑️
                    </span>
                  </li>
                </>
              );
            })
          )}

        </ul>
      </div>
    );
  };

  export default TodoBody;
