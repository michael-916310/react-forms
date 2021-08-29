import React, { Component } from "react";
import {LoginForm as Formik} from "./LoginFormFormik"
import {LoginForm as ReactHook} from "./LoginFormReactHookForm"

class App extends Component {
  render() {
    return (
      <main>
        <section>
          <Formik />
          <ReactHook />
        </section>
      </main>
    );
  }
}

export default App;
