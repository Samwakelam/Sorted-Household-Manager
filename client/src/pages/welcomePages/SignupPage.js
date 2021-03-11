// packages
import React, { useContext } from 'react';

// styles
import './SignupPage.css';

// context
import LoggedInContext from '../../context/LoggedInContext'
// hooks
import useSiteLocation from '../../hooks/useSiteLocation';

// components
import AccountForm from '../../components/forms/AccountForm';
import WelcomeTitles from '../../components/WelcomeTitles';

// functions
import fetcher from '../../functions/fetcher';



const SignupPage = ({ location }) => {

  const { loggedIn, userLoggedOut } = useContext(LoggedInContext);
  useSiteLocation(location);

  const handleCreate = async (user) => {
    const url = '/api/user/createNew';
    // const createUserResponse = 
    await fetcher(url, 'POST', user);
    // console.log('createUserResponse =', createUserResponse);
  }

  if (loggedIn === false) {

    return (
      <>
        <WelcomeTitles />
        <section>
          <article id='login-content'>
            <h1>Sign Up Page</h1>
            <p>If you do not have an account you can create one here. </p>
            <AccountForm type={'create-account'} onCreate={handleCreate} />
          </article>
        </section>
      </>

    )

  } else if (loggedIn === true) {

    return (
      <>
        <WelcomeTitles />
        <section>
          <article id='login-content'>
            <h1>Sign Up Page</h1>
            <p>You are currently logged in to an account. To Create a new User please log out first. </p>
            <button onClick={userLoggedOut}>Log Out</button>
          </article>
        </section>
      </>

    )

  }
}

export default SignupPage;