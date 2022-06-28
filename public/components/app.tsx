/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { useState, useEffect } from 'react';
import { i18n } from '@kbn/i18n';
import { FormattedMessage, I18nProvider } from '@kbn/i18n/react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  EuiButton,
  EuiHorizontalRule,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageHeader,
  EuiTitle,
  EuiText,
  EuiPageSideBar,
  EuiFieldText,
  EuiSelect,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButtonIcon,
} from '@elastic/eui';

import { CoreStart } from '../../../../src/core/public';
import { NavigationPublicPluginStart } from '../../../../src/plugins/navigation/public';

import { PLUGIN_ID, PLUGIN_NAME } from '../../common';
import ToDoList from './ToDoList';
import { async } from 'rxjs/internal/scheduler/async';
import { json } from 'd3';

interface TestPluginAppDeps {
  basename: string;
  notifications: CoreStart['notifications'];
  http: CoreStart['http'];
  navigation: NavigationPublicPluginStart;
}

interface TodoItem {
  text: string;
  completed: boolean;
  id: number;
}

export const URL = 'http://localhost:5601/hom/api/test_plugin';

export const TestPluginApp = ({ basename, notifications, http, navigation }: TestPluginAppDeps) => {
  // Use React hooks to manage state.
  // const [timestamp, setTimestamp] = useState<string | undefined>();

  // const URL = 'http://localhost:3000/api';

  // const URL = 'http://localhost:5601/bzd/api/test_plugin'

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState<TodoItem[] | []>([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    async function fetchToDos() {
      let response = await fetch(`${URL}/todos`);
      response = await response.json();
      console.log(response);
      setTodos(response);
    }
    fetchToDos();
  }, []);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const inputTextHandler = (e: any) => {
    // console.log(inputText);
    setInputText(e.target.value);
  };

  const submitTodoHandler = async () => {
    const body: TodoItem = {
      text: inputText,
      completed: false,
      id: parseFloat((Math.random() * 100 + 1).toFixed(3)),
    }
    const parsedBody = JSON.stringify(body);
    // console.log(parsedBody);
    // e.preventDefault();

    const response = await fetch(`${URL}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'kbn-xsrf': 'true',
      },
      body: parsedBody,
    });

    setTodos([...todos,body]);
    setInputText('');

    // const jsonValue = await response.json();
    console.log( response);
    // console.log({"response.json": jsonValue});
    // return jsonValue;

    // console.log(response.json());
    // setTodos([
    //   ...todos,
    //   {text: inputText, completed: false, id: Math.random() * 100}
    // ]);
    // console.log(todos);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  // Render the application DOM.
  // Note that `navigation.ui.TopNavMenu` is a stateful component exported on the `navigation` plugin's start contract.
  return (
    <Router basename={basename}>
      <I18nProvider>
        <>
          {/* <navigation.ui.TopNavMenu
            appName={PLUGIN_ID}
            showSearchBar={true}
            useDefaultBehaviors={true}
          /> */}
          <EuiPage restrictWidth="800px">
            <EuiPageBody>
              <EuiPageHeader>
                <EuiTitle size="l">
                  <h1>To do App</h1>
                </EuiTitle>
              </EuiPageHeader>
              <EuiPageContent>
                {/* <EuiPageContentHeader>
                  <EuiTitle>
                    <h2>
                      <FormattedMessage
                        id="testPlugin.congratulationsTitle"
                        defaultMessage="Congratulations, you have successfully created a new Kibana Plugin!"
                      />
                    </h2>
                  </EuiTitle>
                </EuiPageContentHeader> */}
                <EuiPageContentBody>
                  <EuiFlexGroup style={{ maxWidth: 500 }}>
                    <EuiFlexItem>
                      <EuiFieldText
                        placeholder="Add Task"
                        append={
                          <EuiButtonIcon
                            onClick={submitTodoHandler}
                            iconType="plusInCircle"
                            aria-label="Add task"
                          />
                        }
                        value={inputText}
                        onChange={inputTextHandler}
                      />
                    </EuiFlexItem>
                    <EuiFlexItem grow={false} style={{ maxWidth: 150 }}>
                      <EuiSelect
                        options={[
                          {
                            value: 'all',
                            text: 'All',
                          },
                          {
                            value: 'completed',
                            text: 'Completed',
                          },
                          {
                            value: 'uncompleted',
                            text: 'Uncompleted',
                          },
                        ]}
                        onChange={statusHandler}
                      />
                    </EuiFlexItem>
                  </EuiFlexGroup>
                  <EuiText>
                    <EuiHorizontalRule />
                    <ToDoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
                  </EuiText>
                </EuiPageContentBody>
              </EuiPageContent>
            </EuiPageBody>
          </EuiPage>
        </>
      </I18nProvider>
    </Router>
  );
};
