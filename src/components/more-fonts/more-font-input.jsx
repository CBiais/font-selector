import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function MoreFontInput({fontList, handleChangeParent}) {
const [newFont, setNewFont] = useState(null);

const handleChange = (event, newValue) => {
  setNewFont(newValue);
  handleChangeParent(newValue);
}

  return (
    <Autocomplete
      disablePortal
      id="more-font-input"
      value={newFont}
      options={fontList}
      // getOptionLabel={(option) => option.name}
      // groupBy={fontList.provenance}

      sx={{ width: 300 }}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} label="Font" />}
    />
  );
}
