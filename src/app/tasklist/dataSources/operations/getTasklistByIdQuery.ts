import { gql } from 'graphql-request';

export const getTasklistByIdQuery = gql`
	query getTasklistById($tasklistId: ID!) {
		getTasklistById(data: { tasklistId: $tasklistId }) {
			__typename
			... on Tasklist {
				id
				name
				isPublic
				tasklistMembers {
					userId
					tasklistId
					user {
						id
						name
						username
						avatar
					}
				}
				createdAt
				updatedAt
			}
			... on Invalid {
				reason
			}
		}
	}
`;
