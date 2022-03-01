import { gql } from 'graphql-request';

export const updateTasklistMutation = gql`
	mutation updateTasklist(
		$name: String!
		$isPublic: Boolean!
		$tasklistId: ID!
	) {
		updateTasklist(
			data: { name: $name, isPublic: $isPublic, tasklistId: $tasklistId }
		) {
			__typename
			... on Tasklist {
				id
				name
				isPublic
				createdAt
				updatedAt
			}
			... on Invalid {
				reason
			}
		}
	}
`;
