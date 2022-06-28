import { Client } from '@elastic/elasticsearch';
const client = new Client({ node: 'http://localhost:9200', auth: {
    username: 'elastic',
    password: 'madmax4826'
  }})

interface Todos {
  text: string;
  completed: boolean;
}

export const getTodos = async (context, request, response) => {
    
    let result = await client.search({
    
        index: 'todo_app_v2',
        size: 100
        // body: {
        //     query: {
        //         match: {completed: false }
        //     }
        // }
      });
    result = result.body["hits"]["hits"]
    let todoLists:Todos[] = [];
    for (const todoList of result){
      todoLists.push(todoList["_source"]);
    } 
    console.log(todoLists);
    return response.ok( {"body": todoLists});
}


export const createTodos = async(context, request, response) => {

  const result = await client.create({
    id: (Math.random() + 1).toFixed(2).toString(),
    index: 'todo_app_v2',
    body:
      // text: "test task",
      // completed: false,
      // id: 15}
      request.body
  })

  return response.ok({"body":`task created successfully`});
}


export const updateTodo = async(context, request, response) => {
  const {id} = request.params;

  console.log({todoId:id});
  console.log(request.body);
  
  const doc = await client.search({
    index: 'todo_app_v2',
    body: {
      query: {
        match: {
          id: id
        }
      }
    }
  });

  const docId = doc.body["hits"]["hits"][0]._id

  await client.update({
    id : docId,
    index: 'todo_app_v2',
    body: {
      doc: request.body 
    }
  });

  return response.ok({"body": "todo updated successfully"});
}