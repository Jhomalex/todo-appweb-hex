import { gql } from 'graphql-request';

export const createTasklistMutation = gql`
	mutation createTasklist($name: String!) {
		createTasklist(data: { name: $name }) {
			__typename
			... on Tasklist {
				id
				name
				createdAt
				updatedAt
			}
			... on Invalid {
				reason
			}
		}
	}
`;
