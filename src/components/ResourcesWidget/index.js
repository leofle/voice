import React, {Component} from 'react'
import { compose, graphql, Query } from 'react-apollo'
import { GET_RESOURCES_QUERY } from '../../queries'
import LinkComponent from './LinkComponent'
import './style.scss'

class ResourcesWidget extends Component {
	constructor(props){
		super(props);
		this.state = {
			topics: [...this.props.topics],
			resources: []
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.topics !== this.props.topics) {
			this.setState({
				topics: [...prevState.topics, ...this.props.topics]
			})
		}

		if (this.resources) {
			this.resources.scrollTop = 1000000000;
		}
	}
	render(){
		let variables = this.props.GET_RESOURCES_QUERY.variables;
		const {topics} = this.state;

		return (
			<div className={'resources-container'} ref={(resources) => this.resources = resources}>
				<ul>
				<LinkComponent data={[{links: {link: '123', title: '11111'}}]} topic={"Aerospace Customer"}/>
				{topics.length > 0 && 
					<Query query={GET_RESOURCES_QUERY}
						variables={{department:'sales',keyword: topics[0]}}
					>
					{({loading, data})=>{
						if (loading) return 'loading...';
						else {
							let res = data.resources;
							console.table(res);
							return topics.map((topic) => <LinkComponent data={res} topic={topic}/>)
						}
					}}
					</Query>
				}
				</ul>
			</div>
		)
	}
}
export default compose(
	graphql(GET_RESOURCES_QUERY,
		{
			options: ({ department, keyword }) => ({
				variables: {
						department,
						keyword
				}
			}),
			name: 'GET_RESOURCES_QUERY'
		}),
)(ResourcesWidget)