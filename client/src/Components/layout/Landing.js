import React from 'react';
import { Link } from 'react-router-dom';

import { Main } from '../layout/Main';

export class Landing extends React.Component {

	render() {
		return (
			<div>
				<Main title='this is the new text' subtitle='Some subtext'/>
			</div>
		)
	}
}