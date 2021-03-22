import PropTypes from 'prop-types';
import "./Servislist.css";

const Servicelist = ({services}) => {
    return (
        <>
            {
                Object.keys(services).map(serviceMode => {
                    return (
                    <div className={"col-md-4"} key={`col-${serviceMode}`}>
                        <ul className="list-group">
                            <li className="list-group-item active"  aria-current="true" key={`li-${serviceMode}`}>
                                <span className={"text-capitalize"}>{serviceMode} Service</span>
                            </li>
                            {services[serviceMode].map(service => {
                                    return (
                                        <>
                                            <li className={"list-group-item text-start"} key={`li-${service.id}`} >
                                                <strong className={"service-name text-bold"}>{service.name}</strong>
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
    )
}

Servicelist.propTypes = {
    services: PropTypes.object
};

export default Servicelist;
