import { gql } from 'graphql-request';

export const signupMutation = gql`
	mutation signup($name: String!, $username: String!, $password: String!) {
		signup(data: { name: $name, username: $username, password: $password }) {
			__typename
			... on User {
				id
				name
				username
				avatar
				createdAt
				updatedAt
			}
			... on Invalid {
				reason
			}
		}
	}
`;
