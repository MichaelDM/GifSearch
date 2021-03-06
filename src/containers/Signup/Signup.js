import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { signUpUser } from '../../actions/authActions';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Please enter an email.';
  } else if (!/^[\w\d._%+-]+@[\w\d.-]+\.[\w]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address.';
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  } else if (values.password.length<6) {
    errors.password = `Your password must contain at least 6 characters, currently at ${values.password.length}`;
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = "Please enter a password confirmation.";
  } else if (values.passwordConfirmation.length<6) {
    errors.password = `Your password must contain at least 6 characters, currently at ${values.password.length}`;
  }

  if (values.password !== values.passwordConfirmation ) {
    errors.password = 'Passwords do not match';
  }

  return errors;
};

class Signup extends React.Component {
  handleFormSubmit = values => {
    this.props.signUpUser(values);
  };

  renderAuthenticationError = () => {
    if (this.props.authenticationError) {
      return <div className="alert alert-danger">{this.props.authenticationError}</div>;
    }
    return <div></div>
  }

  render() {
    const { handleSubmit, fields: { email, password, passwordConfirmation}} = this.props;

    return (
       <div className="container">
         <div className="col-md-6 col-md-offset-3">
           <h2 className="text-center">Sign Up</h2>

           {this.renderAuthenticationError() }

           <form onSubmit={handleSubmit(this.handleFormSubmit)}>
             <fieldset className={`form-group ${email.touched && email.invalid ? 'has-error' : ''}`}>
               <label className="control-label">Email</label>
               <input {...email} type="text" placeholder="Email" className="form-control" />
               {email.touched ? <div className="help-block">{email.error}</div> : ''}
             </fieldset>
             <fieldset className={`form-group ${password.touched && password.invalid ? 'has-error' : ''}`}>
               <label className="control-label">Password</label>
               <input {...password} type="password" placeholder="Password" className="form-control" />
               {password.touched ? <div className="help-block">{password.error}</div> : ''}
             </fieldset>
             <fieldset className={`form-group ${passwordConfirmation.touched && passwordConfirmation.invalid ? 'has-error' : ''}`}>
               <label className="control-label">Password Confirmation</label>
               <input {...passwordConfirmation} type="password" placeholder="Password" className="form-control" />
               {passwordConfirmation.touched ? <div className="help-block">{passwordConfirmation.error}</div> : ''}
             </fieldset>

             <button action="submit" className="btn btn-primary">Sign up</button>
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
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirmation'],
  validate
}, mapStateToProps, { signUpUser })(Signup);
