import PropTypes from 'prop-types';
import "./Servislist.css";


const Servicelist = ({services,serviceModes}) => {
    console.log(serviceModes);
    return (
        <>
            {
                serviceModes.map(serviceMode => {
                    return (
                        <div className={"col-md-4"} key={`col-${serviceMode}`}>
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">
                                    <span className={"text-capitalize"}>{serviceMode} Service</span>
                                </li>
                                {services.[`${serviceMode}`].map(service => {
                                        return (
                                            <>
                                                <li className={"list-group-item text-start"} key={service.id}>
                                                    <span className={"service-name bold"}>{service.name}</span>
                                                    <span className={"float-right"}>
                                                    <i className="fa fa-sun float-right text-warning"></i>
                                                        {service.serviceTypes.find(type => type.name === 'Night') &&
                                                        <i className="fas fa-moon float-right"></i>
                                                        }
                                                </span>
                                                    <p>
                                                        {service.lineStatuses.find(status => status.statusSeverity === 10) ?
                                                            <span className={"text-success"}>No service disruptions</span> :
                                                            <span className={"text-danger"}>
                                                                Service currently suffering disruptions!
                                                            </span>
                                                        }
                                                    </p>
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </>
        /*
        <>
            serviceModes.map(serviceMode => {
                <div className={"col-md-4"} key={`col-${serviceMode}`}>
                    <ul className="list-group">
                        <li className="list-group-item active" aria-current="true">
                            <span className={"text-capitalize"}>{serviceMode}</span>
                        </li>
                        {services.[`${serviceMode}`].map(service=>{
                            return(
                                <>
                                    <li className={"list-group-item text-start"} key={service.id}>
                                        <span className={""}>{service.name}</span>
                                        <span className={"float-right"}>
                                            <i className="fas fa-sun float-right"></i>
                                            {service.serviceTypes.find(type=>type.name==='Night')&&
                                            <i class="fas fa-moon float-right"></i>
                                            }
                                        </span>
                                        <p>
                                            {service.lineStatuses.find(status=>status.statusSeverity===10)?
                                                <span>No service disruptions</span>:
                                                <span>Service currently suffering disruptions</span>
                                            }
                                        </p>
                                    </li>
                                </>
                            )
                        })
                        }

                    </ul>
                </div>

            })
        </>
        */

    )
}

Servicelist.propTypes = {
    services: PropTypes.object,
    serviceModes:PropTypes.array
};

export default Servicelist;
