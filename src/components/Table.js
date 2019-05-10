import React, { Component } from 'react';
import { usersJSON } from '../data';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
		}
	}


	componentWillReceiveProps(props) {
		const { users } = this.state
		if (props.sortBy === 'age') {
			users.sort(this.compareByAge)
			this.setState({ users })
		}
		if (props.sortBy === 'name') {
			users.sort(this.compareByName)
			this.setState({ users })

		}
		if (props.sortBy === 'points') {
			users.sort(this.compareByPoints)
			this.setState({ users })

		}
		if (props.sortBy === 'rank') {
			users.sort(this.compareByRank)
			this.setState({ users })

		}
	}

	// complete the comparators
	compareByAge(a, b) {
		const firstAge = a.age;
		const secondAge = b.age

		let comparison = 0;
		if (firstAge > secondAge) {
			comparison = 1;
		} else if (firstAge < secondAge) {
			comparison = -1;
		}
		return comparison;
	}

	compareByName(a, b) {
		const firstName = a.name;
		const secondName = b.name

		let comparison = 0;
		if (firstName > secondName) {
			comparison = 1;
		} else if (firstName < secondName) {
			comparison = -1;
		}
		return comparison;
	}

	compareByPoints(a, b) {
		const firstPoints = a.points;
		const secondPoints = b.points

		let comparison = 0;
		if (firstPoints > secondPoints) {
			comparison = 1;
		} else if (firstPoints < secondPoints) {
			comparison = -1;
		}
		return comparison;
	}

	compareByRank(a, b) {
		const firstRank = a.rank;
		const secondRank = b.rank

		let comparison = 0;
		if (firstRank > secondRank) {
			comparison = 1;
		} else if (firstRank < secondRank) {
			comparison = -1;
		}
		return comparison;
	}

	render() {

		const { users } = this.state
		// console.log('render', users)
		const tableElements = users.map((user, index) => {
			return (
				<tr key={index}>
					<td>{user.age}</td>
					<td>{user.name}</td>
					<td>{user.points}</td>
					<td>{user.rank}</td>
				</tr>
			)
		})
		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>
					{tableElements}
				</tbody>
			</table>
		</div>)
	}
}
