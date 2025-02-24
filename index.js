#! /usr/bin/env node

import {config} from 'dotenv'
import {Octokit} from 'octokit'
import packageInformation from './package.json' with {type: 'json'}
const {description} = packageInformation

config()
console.log(description)


// https://github.com/settings/personal-access-tokens/5367542
const token = process.env.TOKEN

// https://docs.github.com/rest'
const octokit = new Octokit({auth: token})

const userInformation = await getUserInformation()
const userRepositories = await getUserRepositories()

console.log(`Имя пользователя: ${userInformation.name} (${userInformation.login})`)
console.log(`Публичных репозиториев: ${userInformation.public_repos}`)
console.log(`Публичных идей (gists): ${userInformation.public_gists}`)
console.log('result', userRepositories.map(item => item.name + ' ' + item.owner.login))
console.log('length', userRepositories.length)

async function getUserRepositories() {
    const result = (
        // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-the-authenticated-user
        await octokit.request('GET /user/repos', {
            visibility: 'all',
            per_page: 200,
            affiliation: 'owner'
        })
    )
    return result.data
}

async function getUserInformation() {
    const result = (
        await octokit.request('GET /user', {

        })
    )
    return result.data
}