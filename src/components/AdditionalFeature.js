import React from 'react';
import { addFeature } from './../actions/additionalFeaturesActions';
import { connect} from 'react-redux';

const AdditionalFeature = props => {
  
  // handleClick = e => {
  //   this.props.addFeature(this.state.AdditionalFeature)
  // }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;