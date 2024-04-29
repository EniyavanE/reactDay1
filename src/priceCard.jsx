import './priceCard.css';
import PropTypes from 'prop-types';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
const PriceCard = ({ cardDetail }) => {

    const { type, cash, user, storage, projects, access, privateProjects, support, domain, report } = cardDetail;
    return (
        <div className="priceContainer">

            <h5 style={{ opacity: "0.5" }}>{type}</h5>
            <h2>{cash}</h2>
            <hr />
            <p><DoneIcon fontSize='small' />{user}</p>
            <p><DoneIcon fontSize='small' />{storage}</p>
            <p><DoneIcon fontSize='small' />{projects}</p>
            <p> <DoneIcon fontSize='small' />{access}</p>
            <p style={{ opacity: type == "FREE" ? "0.5" : "1" }}>{type == "FREE" ? <CloseIcon fontSize='small' /> : <DoneIcon fontSize='small' />}{privateProjects}</p>
            <p style={{ opacity: type == "FREE" ? "0.5" : "1" }}>{type == "FREE" ? <CloseIcon fontSize='small' /> : <DoneIcon fontSize='small' />}{support}</p>
            <p style={{ opacity: type == "FREE" ? "0.5" : "1" }}>{type == "FREE" ? <CloseIcon fontSize='small' /> : <DoneIcon fontSize='small' />}{domain}</p>
            <p style={{ opacity: type == "PRO" ? null : "0.5" }}>{type == "PRO" ? <DoneIcon fontSize='small' /> : <CloseIcon fontSize='small' />}{report}</p>

            <button style={{ borderRadius: "25px" }}>Button</button>
        </div>)
}

PriceCard.propTypes = {
    cardDetail: PropTypes.shape({
        type: PropTypes.string,
        cash: PropTypes.string,
        user: PropTypes.string,
        storage: PropTypes.string,
        projects: PropTypes.string,
        access: PropTypes.string,
        privateProjects: PropTypes.string,
        support: PropTypes.string,
        domain: PropTypes.string,
        report: PropTypes.string
    })
}

export default PriceCard;