import { gql } from 'graphql-request';

export const createTasklistMemberMutation = gql`
	mutation createTasklistMember($userId: ID!, $tasklistId: ID!) {
		createTasklistMember(data: { userId: $userId, tasklistId: $tasklistId }) {
			__typename
			... on TasklistMember {
				userId
				tasklistId
				createdAt
				updatedAt
			}
			... on Invalid {
				reason
			}
		}
	}
`;
