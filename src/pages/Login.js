import React, { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('rakoto@gmail.com');
  const [motdepasse, setMotdepasse] = useState('123');
  const [error, setError] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const Client = {email,motdepasse};
    fetch('https://encherews-production-b628.up.railway.app/Client/login',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Client)
    })
    .then(response => {
      if (!response.ok) {
        setError('Identifiant ou mot de passe incorrect');
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      if(data.data=="Login invalid"){
        setError(data.data);
      } else{
        console.log(data.data);
        localStorage.setItem('idc',data.data.id);
        window.location.replace('/demanderechargement');
      }
    })
    .catch(error => console.log(error));
  };

  return (
    <>
    <body class="login">
    <div>
      <a class="hiddenanchor" id="signup"></a>
      <a class="hiddenanchor" id="signin"></a>

      <div class="login_wrapper">
        <div class="animate form login_form">
          <section class="login_content">
            <form onSubmit={handleSubmit}>
              <h1>Login Form</h1>
              <div>
                <input type="text" class="form-control" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
              </div>
              <div>
                <input type="password" class="form-control" placeholder="Password" value={motdepasse} onChange={(event) => setMotdepasse(event.target.value)} />
              </div>
              {error}
              <div>
                <button class="btn btn-primary" type="submit">Se connecter</button>
              </div>

              <div class="clearfix"></div>

              <div class="separator">
                <div>
                  <h1><i class="fa fa-paw"></i> Enchere Mlay</h1>
                  <p>©2016 All Rights Reserved. Gentelella Alela! is a Bootstrap 3 template. Privacy and Terms</p>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  </body>
    </>
  );
}

export default Login;
