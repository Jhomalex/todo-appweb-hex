import { gql } from 'graphql-request';

export const deleteTasklistMemberMutation = gql`
	mutation deleteTasklistMember($userId: ID!, $tasklistId: ID!) {
		deleteTasklistMember(data: { userId: $userId, tasklistId: $tasklistId }) {
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
