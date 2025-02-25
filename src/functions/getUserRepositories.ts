import type {Octokit} from 'octokit'
import {Repos} from '../interfaces/github/repos'
import type {OctokitResponse} from '@octokit/types'

/**
 * @link https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-the-authenticated-user
 * @param octokit
 */
export async function getUserRepositories(octokit: Octokit) {
	const result: OctokitResponse<Repos> = (
		await octokit.request<Repos>('GET /user/repos', {
			visibility: 'all',
			per_page: 200,
			affiliation: 'owner'
		})
	)
	return result.data
}