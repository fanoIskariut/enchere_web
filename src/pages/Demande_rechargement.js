import React, { useEffect, useState } from 'react';

export const Demande_rechargement = () => {

    const [montantenchere, setMontantenchere] = useState('');
    const [error, setError] = useState('');
    const [items, setItems] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const Enchere = {}
        fetch('https://encherews-production-b628.up.railway.app/enchere/save',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ idclient: localStorage.getItem('idc'),idproduit: localStorage.getItem('id'), montantenchere: montantenchere })
        })
        .then(response => {
          if (!response.ok) {
            setError(response.error.message);
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          /*if(data.error.message!=null){
            setError(data.error.message);
          } else {*/
            setError("Enchere inserer avec succès");
          //}
        })
        .catch(error => console.log(error));
      };

      const recherche = (event) => {
        event.preventDefault();
        window.location.replace('/Recherche');
      }
      const histoire = (event) => {
        event.preventDefault();
        window.location.replace('/Historique');
      }
      const ench = (event) => {
        event.preventDefault();
        window.location.replace('/demanderechargement');
      }

      const out = (event) => {
        event.preventDefault();
        window.location.replace('/ListeEnchere');
      }

      let url = "https://encherews-production-b628.up.railway.app/encherir/"+localStorage.getItem('id');
      useEffect(() => {
          fetch(url,{ 
          method: "GET",
          headers: { 'Content-Type': 'application/json' }
          }).then((response)=>response.json())
          .then((json)=>setItems(json.data));
      },[]);

    return (
      <>
      <body class="nav-md">
	<div class="container body">
		<div class="main_container">
      <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title">
              <a href="index.html" class="site_title"><i class="fa fa-paw"></i> <span>Enchere Mlay</span></a>
            </div>

            <div class="clearfix"></div>

            <br />

            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <h3>General</h3>
                <hr/>
                <p><button class="btn btn-info" type="submit" onClick={ench}>Encherir</button></p>
                <p><button class="btn btn-info" type="submit" onClick={recherche}>Rechercher</button></p> 
                <p><button class="btn btn-info" type="submit" onClick={histoire}>Historique</button></p>
                <p><button class="btn btn-info" type="submit" onClick={out}>Deconnexion</button></p>
              </div>

            </div>

            <div class="sidebar-footer hidden-small">
              <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>

			<div class="top_nav">
				<div class="nav_menu">
					<div class="nav toggle">
						<a id="menu_toggle"><i class="fa fa-bars"></i></a>
					</div>
					<nav class="nav navbar-nav">
						<ul class=" navbar-right">
							

							
						</ul>
					</nav>
				</div>
			</div>
			<div class="right_col" role="main">
				<div class="">
					<div class="page-title">
						<div class="title_left">
							<h3>Encherir le produit</h3>
						</div>

					</div>
					<div class="clearfix"></div>
					<div class="row">
						<div class="col-md-12 col-sm-12 ">
							<div class="x_panel">
								<div class="x_title">
									<h2><small>Encherir le produit</small></h2>
									<ul class="nav navbar-right panel_toolbox">
										<li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
										</li>
										<li class="dropdown">
											<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-wrench"></i></a>
											<ul class="dropdown-menu" role="menu">
												<li><a class="dropdown-item" href="#">Settings 1</a>
												</li>
												<li><a class="dropdown-item" href="#">Settings 2</a>
												</li>
											</ul>
										</li>
										<li><a class="close-link"><i class="fa fa-close"></i></a>
										</li>
									</ul>
									<div class="clearfix"></div>
								</div>
								<div class="x_content">
									<br />
									<form onSubmit={handleSubmit} id="demo-form2" data-parsley-validate class="form-horizontal form-label-left">

										<div class="item form-group">
											<label class="col-form-label col-md-3 col-sm-3 label-align" for="first-name">Montant <span class="required"></span>
											</label>
											<div class="col-md-6 col-sm-6 ">
                        <input  class="form-control" type="number" value={montantenchere} onChange={(event) => setMontantenchere(event.target.value)} />
											</div>
										</div>
										
                    <p>{error}</p>
										<div class="ln_solid"></div>
										<div class="item form-group">
											<div class="col-md-6 col-sm-6 offset-md-3">
												<button class="btn btn-primary" type="reset">Reset</button>
												<button type="submit" class="btn btn-success">Inserer</button>
											</div>
										</div>

									</form>
                  <table id="datatable" class="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>Email</th>
                          <th>Montant</th>
                        </tr>
                      </thead>
                      <tbody>
                      {items && items.map((item) => {
                        return (
                            <tr>
                              <td>{item.email}</td>
                                <td>{item.montantenchere}</td>
                            </tr>
                        )
                      })}
                      </tbody>
                    </table>
								</div>
							</div>
						</div>
					</div>

					
			</div>
			<footer>
				<div class="pull-right">
					Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
				</div>
				<div class="clearfix"></div>
			</footer>
		</div>
	  </div>
  </div>

</body>
        </>
      );
}

export default Demande_rechargement;