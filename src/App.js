import { useState,useEffect } from 'react'
import londonEye from './static/img/London-Eye.jpg';
import './App.css';
import Header from "./components/Header/Header";

import {apiGet} from "./services/discover.service";
import {groupBy} from "./helpers/array.helper";
import Servicelist from "./components/Servicelist/Servicelist";
import Spinner from "./components/Spinner/Spinner";


function App() {
    const [services, setServices] = useState({
        loading: false,
        modes:null,
        list: null

    });
    useEffect(() => {
        setServices({ loading: true });
        //const baseUrl= 'https://api.tfl.gov.uk';

        //fetch('https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true')
        //    .then((response) => response.json())
        apiGet('/Line/Mode/tube,overground,dlr/Status?detail=true')
            .then(data => {
                const modes = [...new Set(data.map(item => item.modeName))];
                const groupedList = groupBy(data, 'modeName');
                setServices({loading: false, modes, list:groupedList});
                //setServices({loading: false, modes, list:groupedList});

            });


    }, []);
  return (
    <div className="App">
      <Header serviceModes={services.modes} />
      <img src={londonEye} id={"bgLanding"} alt={"London"}/>
      <div className={"serviceContainer"}>
        <div className={"container"}>
            <div className={"row"}>
                <h1 className={"page-title"}>Discover London</h1>
            </div>
            <div className={"row"}>
                {services.loading&& <Spinner spinnerType="primary" />

                }
                {services.list&& <Servicelist  services={services.list} serviceModes={services.modes} />}
            </div>
        </div>
        </div>
    </div>
  );
}

export default App;
