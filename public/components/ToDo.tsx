import {
    EuiButtonIcon,
    EuiFlexGroup,
    EuiFlexItem,
    EuiSpacer,
    EuiTitle,
    EuiCode,
    EuiPanel,
    EuiCard,
    EuiHorizontalRule,
  } from '@elastic/eui';
import React from "react";
import '../index.scss';
import { URL } from './app';

// const URL = 'http://localhost:3000/api';

// const URL = 'http://localhost:5601/bzd/api/test_plugin'

const ToDo = ({text, todo,todos, setTodos}) => {

    const deleteHandler = async() => {
        await fetch(`${URL}/todo/${todo.id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'kbn-xsrf': 'true',
              },
        });
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeHandler = async() => {

        const result = await fetch(`${URL}/todo/${todo.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'kbn-xsrf': 'true',
            },
            body: JSON.stringify({completed: !todo.completed})
        });
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return {
                        ...item,
                        completed :!item.completed
                    }
                }
                return item;
            })
        );
        // console.log(todos);
    };
    
    return (
        <div>
                <EuiFlexGroup responsive={false} gutterSize="m" alignItems="center" justifyContent='spaceBetween'>
                    <EuiFlexItem grow={4}>
                    <li className={`${todo.completed ? "completed" : ""}`}><h3>{text}</h3></li>
                    </EuiFlexItem>
                
                <EuiFlexItem grow={1}>
                    <EuiButtonIcon
                            display="fill"
                            iconType="check"
                            aria-label="done"
                            color="primary"
                            size="m"
                            onClick={completeHandler}
                        />
                </EuiFlexItem>
                    <EuiFlexItem grow={1}>
                        <EuiButtonIcon
                            display="fill"
                            iconType="trash"
                            aria-label="Delete"
                            color="danger"
                            size="m"
                            onClick={deleteHandler}
                        />
                    </EuiFlexItem>
                </EuiFlexGroup>
                <EuiHorizontalRule/>
        </div>
    );
}

export default ToDo;