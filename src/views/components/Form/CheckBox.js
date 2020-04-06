import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes(props) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{display: 'flex', alignItems:'center', justifyContent:'center', marginTop:'60px'}}>
        <h5 style={{marginBottom:'0px'}}>{props.title}</h5>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />      
    </div>
  );
}
