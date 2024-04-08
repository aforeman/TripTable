import {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableSortLabel from '@mui/material/TableSortLabel';

import StyleSelect from './StyleSelect';

const TripTable = ({tripData}) => {
	const [checkInDateSort, setCheckInDateSort] = useState('desc');
	const [sortedRows, setSortedRows] = useState([]);
	const [tripStyleFilter, setTripStyleFilter] = useState('All Vacations');

	const handleFilterChange = (val) => {
		setTripStyleFilter(val);
	};

	const handleSortClick = () => {
		setCheckInDateSort((state) => (state === 'desc' ? 'asc' : 'desc'));
	};

	const filteredTripSet = tripStyleFilter === 'All Vacations' ? tripData.tripSet : tripData.tripSet.filter(trip => trip.unitStyleName === tripStyleFilter);

	const rows = filteredTripSet.sort((a, b) => {
		const sortDir = checkInDateSort === 'asc' ? 1 : -1;
		return new Date(a.checkInDate) > new Date(b.checkInDate).valueOf() ? sortDir : -sortDir;
	});

	useEffect(() => {
		setSortedRows(rows);
	}, [rows]);

	return <div>
		<div>
			<h1>Trip Table</h1>
		</div>
		<StyleSelect styles={tripData.styles} onChange={handleFilterChange} />
		<TableContainer component={Paper} sx={{maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto'}}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Image</TableCell>
						<TableCell>Unit Name</TableCell>
						<TableCell>Style</TableCell>
						<TableCell sortDirection={checkInDateSort}>
							<TableSortLabel active={true} direction={checkInDateSort} onClick={() => handleSortClick()}>
								Check In Date
							</TableSortLabel>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{sortedRows && sortedRows.map((set) => (
						<TableRow key={set.curatedTripMasterInventoryId}>
							<TableCell><img src={`https://cms.inspirato.com/ImageGen.ashx?image=${set.heroImage}&width=192`} alt="" /></TableCell>
							<TableCell>{set.unitName}</TableCell>
							<TableCell>{set.unitStyleName}</TableCell>
							<TableCell>{new Date(set.checkInDate).toLocaleDateString()}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	</div>;
};

export default TripTable;
