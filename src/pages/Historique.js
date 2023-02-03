import React, { useEffect, useState } from 'react';

export const Historique = () => {

    const [items, setItems] = useState([]);

  const url = "https://encherews-production-b628.up.railway.app/Historique/"+localStorage.getItem('idc');
  console.log('url: '+url);
  useEffect(() => {
    fetch(url,
    { method: "GET" })
    .then((response)=>response.json()).then((json)=>setItems(json.data));
  },[]);

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
                
              </nav>
            </div>
          </div>
        <div class="right_col" role="main">
          <div class="">
            <div class="page-title">
              <div class="title_left">
                <h3><small>Historique</small></h3>
              </div>

              
            </div>

            <div class="clearfix"></div>

            <div class="row">
              <div class="col-md-12 col-sm-12 ">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>Liste enchere</h2>
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Settings 1</a>
                            <a class="dropdown-item" href="#">Settings 2</a>
                          </div>
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                      <div class="row">
                          <div class="col-sm-12">
                            <div class="card-box table-responsive">
                    <p class="text-muted font-13 m-b-30">
                      DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function: <code>$().DataTable();</code>
                    </p>
                    <table id="datatable" class="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>IdProduit</th>
                          <th>IdClient</th>
                          <th>Montant Enchere</th>
                          <th>Produit</th>
                          <th>Duree</th>
                          <th>Date enchere</th>
                          <th>Prix min</th>
                          <th>Client</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                      {items.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.idproduit}</td>
                                <td>{item.idclient}</td>
                                <td>{item.montantenchere}</td>
                                <td>{item.produit}</td>
                                <td>{item.duree}</td>
                                <td>{item.dateenchere}</td>
                                <td>{item.prixmin}</td>
                                <td>{item.client}</td>
                                <td>{item.email}</td>
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
      </body>
    </>
  );
}

export default Historique;
