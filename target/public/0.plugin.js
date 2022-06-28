(window["testPlugin_bundle_jsonpfunction"] = window["testPlugin_bundle_jsonpfunction"] || []).push([[0],{

/***/ "./public/application.tsx":
/*!********************************!*\
  !*** ./public/application.tsx ***!
  \********************************/
/*! exports provided: renderApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderApp", function() { return renderApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app */ "./public/components/app.tsx");



const renderApp = ({
  notifications,
  http
}, {
  navigation
}, {
  appBasePath,
  element
}) => {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_app__WEBPACK_IMPORTED_MODULE_2__["TestPluginApp"], {
    basename: appBasePath,
    notifications: notifications,
    http: http,
    navigation: navigation
  }), element);
  return () => react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(element);
};

/***/ }),

/***/ "./public/components/ToDo.tsx":
/*!************************************!*\
  !*** ./public/components/ToDo.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.scss */ "./public/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ "./public/components/app.tsx");



 // const URL = 'http://localhost:3000/api';
// const URL = 'http://localhost:5601/bzd/api/test_plugin'

const ToDo = ({
  text,
  todo,
  todos,
  setTodos
}) => {
  const deleteHandler = async () => {
    await fetch(`${_app__WEBPACK_IMPORTED_MODULE_3__["URL"]}/todo/${todo.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'kbn-xsrf': 'true'
      }
    });
    setTodos(todos.filter(el => el.id !== todo.id));
  };

  const completeHandler = async () => {
    const result = await fetch(`${_app__WEBPACK_IMPORTED_MODULE_3__["URL"]}/todo/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'kbn-xsrf': 'true'
      },
      body: JSON.stringify({
        completed: !todo.completed
      })
    });
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return { ...item,
          completed: !item.completed
        };
      }

      return item;
    })); // console.log(todos);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
    responsive: false,
    gutterSize: "m",
    alignItems: "center",
    justifyContent: "spaceBetween"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
    grow: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: `${todo.completed ? "completed" : ""}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, text))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
    grow: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiButtonIcon"], {
    display: "fill",
    iconType: "check",
    "aria-label": "done",
    color: "primary",
    size: "m",
    onClick: completeHandler
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
    grow: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiButtonIcon"], {
    display: "fill",
    iconType: "trash",
    "aria-label": "Delete",
    color: "danger",
    size: "m",
    onClick: deleteHandler
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiHorizontalRule"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (ToDo);

/***/ }),

/***/ "./public/components/ToDoList.tsx":
/*!****************************************!*\
  !*** ./public/components/ToDoList.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDo */ "./public/components/ToDo.tsx");



const ToDoList = ({
  todos,
  setTodos,
  filteredTodos
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, filteredTodos.map(todo => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToDo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    todo: todo,
    todos: todos,
    setTodos: setTodos,
    key: todo.id,
    text: todo.text
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ToDoList);

/***/ }),

/***/ "./public/components/app.tsx":
/*!***********************************!*\
  !*** ./public/components/app.tsx ***!
  \***********************************/
/*! exports provided: URL, TestPluginApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPluginApp", function() { return TestPluginApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ToDoList */ "./public/components/ToDoList.tsx");
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





const URL = 'http://localhost:5601/hom/api/test_plugin';
const TestPluginApp = ({
  basename,
  notifications,
  http,
  navigation
}) => {
  // Use React hooks to manage state.
  // const [timestamp, setTimestamp] = useState<string | undefined>();
  // const URL = 'http://localhost:3000/api';
  // const URL = 'http://localhost:5601/bzd/api/test_plugin'
  const [inputText, setInputText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [todos, setTodos] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [status, setStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('all');
  const [filteredTodos, setFilteredTodos] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchToDos() {
      let response = await fetch(`${URL}/todos`);
      response = await response.json();
      console.log(response);
      setTodos(response);
    }

    fetchToDos();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;

      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const inputTextHandler = e => {
    // console.log(inputText);
    setInputText(e.target.value);
  };

  const submitTodoHandler = async () => {
    const body = {
      text: inputText,
      completed: false,
      id: parseFloat((Math.random() * 100 + 1).toFixed(3))
    };
    const parsedBody = JSON.stringify(body); // console.log(parsedBody);
    // e.preventDefault();

    const response = await fetch(`${URL}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'kbn-xsrf': 'true'
      },
      body: parsedBody
    });
    setTodos([...todos, body]);
    setInputText(''); // const jsonValue = await response.json();

    console.log(response); // console.log({"response.json": jsonValue});
    // return jsonValue;
    // console.log(response.json());
    // setTodos([
    //   ...todos,
    //   {text: inputText, completed: false, id: Math.random() * 100}
    // ]);
    // console.log(todos);
  };

  const statusHandler = e => {
    setStatus(e.target.value);
  }; // Render the application DOM.
  // Note that `navigation.ui.TopNavMenu` is a stateful component exported on the `navigation` plugin's start contract.


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
    basename: basename
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["I18nProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPage"], {
    restrictWidth: "800px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPageBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPageHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiTitle"], {
    size: "l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "To do App"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPageContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPageContentBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], {
    style: {
      maxWidth: 500
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFieldText"], {
    placeholder: "Add Task",
    append: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiButtonIcon"], {
      onClick: submitTodoHandler,
      iconType: "plusInCircle",
      "aria-label": "Add task"
    }),
    value: inputText,
    onChange: inputTextHandler
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false,
    style: {
      maxWidth: 150
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSelect"], {
    options: [{
      value: 'all',
      text: 'All'
    }, {
      value: 'completed',
      text: 'Completed'
    }, {
      value: 'uncompleted',
      text: 'Uncompleted'
    }],
    onChange: statusHandler
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiHorizontalRule"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToDoList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setTodos: setTodos,
    todos: todos,
    filteredTodos: filteredTodos
  })))))))));
};

/***/ })

}]);
//# sourceMappingURL=0.plugin.js.map