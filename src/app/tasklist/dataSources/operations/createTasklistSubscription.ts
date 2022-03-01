import { gql } from 'graphql-request';

export const createTasklistSubscription = gql`
	subscription createTasklistSub($token: String!) {
		createTasklistSub(data: { token: $token }) {
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
