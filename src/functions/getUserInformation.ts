import type {Octokit} from 'octokit'
import type {OctokitResponse} from '@octokit/types'
import type {User} from '../interfaces/github/user'

/**
 * @link https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-the-authenticated-user
 * @param octokit
 */
export async function getUserInformation(octokit: Octokit) {
	const result: OctokitResponse<User> = await octokit.request<User>('GET /user')
	return result.data
}