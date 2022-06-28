import { request } from 'http';
import { async } from 'rxjs/internal/scheduler/async';
import { context } from 'src/plugins/kibana_react/public';
import { IRouter } from '../../../../src/core/server';
import { createTodos, getTodos, updateTodo } from '../controllers';


import { schema } from '@kbn/config-schema';
import { Client } from '@elastic/elasticsearch';


const client = new Client({ node: 'http://localhost:9200', auth: {
    username: 'elastic',
    password: 'madmax4826'
  }})


export function defineRoutes(router: IRouter) {

  router.get(
    {
      path: '/api/test_plugin/todos',
      validate: false,
    },
    getTodos
  );

  const validate = {
    
    body: schema.object({
      id: schema.number(),
      text: schema.string(),
      completed: schema.boolean()
    }),
  };

  router.post({
    path: '/api/test_plugin/todos',
    validate
  },
    createTodos
  );


  const patchDataValidate = {
    params: schema.object({
      id: schema.number()
    }),
    body: schema.object({
      completed: schema.boolean()
    }),
  };

  router.patch({
    path: '/api/test_plugin/todo/{id}',
    validate: patchDataValidate
  },
   updateTodo
  );

  const deleteDataValidate = {
    params: schema.object({
      id: schema.number()
    })
  };

  router.delete({
    path: '/api/test_plugin/todo/{id}',
    validate: deleteDataValidate
  }, async(context, request, response) => {
    const {id} = request.params;

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
    
    // console.log(doc);
    const docId = doc.body["hits"]["hits"][0]._id

    await client.delete({
      id: docId,
      index: 'todo_app_v2'
    });
    return response.ok({"body":"Todo deleted successfully"});
  }
  );
  
}
