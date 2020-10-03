// import React from "react";
// import { Switch, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import NotFound from "./pages/NotFound";
// // import PostMessage from "./services/PostMessageService"
// import RegistrationForm from "./components/RegisterForm/RegisterForm"
// import MessageList from "./pages/MessageList"
// import PostMessage from "./components/PostMessage";
// import List from "./components/List";

// class App extends React.Component {
//   handleLogout = (event) => {
//     event.preventDefault();
//     this.props.logout();
//   };

//   render() {
//     return (
//       <div className="root">
//         <Switch>
//           <Route
//             exact
//             path="/"
//             component={Home}
//           />
//           <Route
//             exact
//             path="/profile/:username"
//             component={Profile}
//           />
//           <Route
//             exact
//             path="/messagefeed"
//             component={MessageList}
//           />

//           <Route
//             exact
//             path="/signup"
//             component={RegistrationForm}
//           />
//           <Route
//             exact
//             path="*"
//             component={NotFound}
//           />
//           <Route exact
//             path="/postmessage"
//             component={PostMessage} />
//         </Switch>
//       </div>
//     );
//   }
// }

// export default App; using erick's app.js
import React from "react"
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import RegistrationForm from "./components/registrationForm/RegistrationForm"
import MessageFeed from "./pages/MessageFeed"
// import InfiniteScroll from "./components/InfiniteScroll";

class App extends React.Component {

  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  }

  render() {

    return (
      <div className="root" >
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/profile/:username"
            component={Profile}
          />
          <Route
            exact
            path="/messagefeed"
            component={MessageFeed}
          />

          <Route
            exact
            path="/signup"
            component={RegistrationForm}
          />
          <Route
            exact
            path="*"
            component={NotFound}
          />
        </Switch>
      </div>

    )

  }
}

export default App