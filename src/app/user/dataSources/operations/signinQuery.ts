import { gql } from 'graphql-request';

export const signinQuery = gql`
	query signin($username: String!, $password: String!) {
		signin(data: { username: $username, password: $password }) {
			__typename
			... on UserToken {
				user {
					id
					name
					username
					avatar
					createdAt
					updatedAt
				}
				token
			}
			... on Invalid {
				reason
			}
		}
	}
`;
