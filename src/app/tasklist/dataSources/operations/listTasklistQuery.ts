import { gql } from 'graphql-request';

export const listTasklistQuery = gql`
	query listTasklist {
		listTasklist {
			__typename
			... on TasklistList {
				tasklists {
					id
					name
					isPublic
					tasklistMembers {
						userId
						tasklistId
						createdAt
						updatedAt
						user {
							id
							name
							username
							avatar
							createdAt
							updatedAt
						}
					}
					createdAt
					updatedAt
				}
			}
			... on Invalid {
				reason
			}
		}
	}
`;
