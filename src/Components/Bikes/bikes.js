import styles from './bikes.module.scss';
import Bike from "../../UI/Bike/bike.js";
import {Fragment} from "react";
import {connect} from "react-redux";

const Bikes = props => {

    return (
        <Fragment>
            {props.bikes.length === 0 ?
                <p style={{margin: '2rem 0 0 0', textAlign: 'center'}}>No Bikes</p> : null}
            <div className={styles.restaurants}>
                {props.bikes.map(bike => {
                    return (<Bike key={bike._id} id={bike._id} model={bike.model} rating={bike.rating} available={bike.available}
                                  totalReviews={bike.reviews.length} img={bike.imageUrl.replace('\\', '/')}/>)
                })}
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        bikes: state.bike.bikes,
        error: state.bike.error,
    }
}

export default connect(mapStateToProps)(Bikes);