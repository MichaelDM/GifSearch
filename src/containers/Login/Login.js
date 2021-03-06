import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { signInUser } from '../../actions/authActions';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  }

  return errors;
};

class Login extends Component {
  handleFormSubmit = values => {
    this.props.signInUser(values);
  }

  renderAuthenticationError() {
    if (this.props.authenticationError) {
      return <div className="alert alert-danger">{this.props.authenticationError}</div>;
    }
    return <div></div>;
  }

  render() {
    const { handleSubmit, fields: { email, password}} = this.props;

    return(
     <div className="container">
       <div className="col-md-6 col-md-offset-3">
         <h2 className="text-center">Log In</h2>

         { this.renderAuthenticationError() }

         <form onSubmit={handleSubmit(this.handleFormSubmit)}>
           <fieldset className="form-group">
             <label>Email</label>
             <input {...email} type="text" placeholder="Email" className="form-control" />
           </fieldset>

           <fieldset className="form-group">
             <label>Password</label>
             <input {...password} type="password" placeholder="Password" className="form-control" />
           </fieldset>

           <button action="submit" className="btn btn-primary">Sign In</button>
         </form>
       </div>
     </div>
   );
  }
}

function mapStateToProps(state) {
  return { authenticationError: state.auth.error };
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate
}, mapStateToProps, { signInUser })(Login);
