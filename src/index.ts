#! /usr/bin/env node

import {resolve} from 'path'
import {config} from 'dotenv'
import {Octokit} from 'octokit'
import packageInformation from '../package.json' with {type: 'json'}
import {getUserInformation} from './functions/getUserInformation'
import {getUserRepositories} from './functions/getUserRepositories'
const {description, version} = packageInformation

config({path: resolve(process.cwd(), '.env')})
console.log(description)
console.log('Версия:', version)

// https://github.com/settings/personal-access-tokens/5367542
const token = process.env['TOKEN']

// https://docs.github.com/rest'
const octokit = new Octokit({auth: token})

const userInformation = await getUserInformation(octokit)
const userRepositories = await getUserRepositories(octokit)

console.log(`Имя пользователя: ${userInformation.name} (${userInformation.login})`)
console.log(`Публичных репозиториев: ${userInformation.public_repos}`)
console.log(`Публичных идей (gists): ${userInformation.public_gists}`)
console.log('result', userRepositories.map(item => item.name + ' ' + item.owner.login))
console.log('length', userRepositories.length)