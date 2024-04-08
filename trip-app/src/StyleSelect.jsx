import {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

const StyleSelect = ({styles, onChange}) => {
	const [tripStyle, setTripStyle] = useState('');

	return <Box alignItems="center">
		<FormControl sx={{width: 256}}>
			<InputLabel id="styleSelectLabel">Style</InputLabel>
			<Select labelId="styleSelectLabel" id="styleSelect" label="Style" value={tripStyle} onChange={(evt) => {
					setTripStyle(evt.target.value);
					onChange(evt.target.value);
				}}>
				{Object.values(styles).map(style => (
					<MenuItem key={`menuStyle_${style}`} value={style}>{style}</MenuItem>
					))}
			</Select>
		</FormControl>
	</Box>;
};

export default StyleSelect;
