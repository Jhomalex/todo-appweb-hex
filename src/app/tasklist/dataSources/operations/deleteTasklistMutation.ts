import { gql } from 'graphql-request';

export const deleteTasklistMutation = gql`
	mutation deleteTasklist($tasklistId: ID!) {
		deleteTasklist(data: { tasklistId: $tasklistId }) {
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
