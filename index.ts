// PROMPT='%B%F{%(?.green.red)}┌──[%(?.. %?) %b%F{white}%~
	// %B%F└──>%b%f '

// const  chalk = require('chalk')
import * as chalk from 'chalk'


// const here = {
// 	path: '~/some/path'
// }
// const zsh = {
// 	path: '%~'
// }

const spc = {str: ' '}


// const build = () => {

// 	const lines = [
// 		// {str:'┌──[', opt: [ (exitCode) => exitCode === 0 ? 'green' : 'red', 'bold']},
// 		// spc,
// 		// {str: (exitCode) => exitCode === 0 ? '' : exitCode}
// 		zsh.path,
// 	]
// 	console.log('LOOKS LIKE:')
// 	console.log(lines[0])

// 	console.log('PUT IN ZSHRC:')
// 	console.log(`PROMPT='%B%F{%(?.green.red)}┌──[%(?.. %?) %b%F{white}%~
// %B%F└──>%b%f '`)
// }

// // build()


enum Token {
	Path
}


const TokenToLog = {
	[Token.Path]: (o) => o.currentDir
}
const TokenToZsh =  {
	[Token.Path]: "%~"
}

const ps1 = Token.Path


type BaseOptions = {
	exitCode: number
	currentDir: string
}


const defaultOptions: BaseOptions = {exitCode: 0, currentDir: '~'}
const examples: Array<Partial<BaseOptions>> = [
	{},
	{exitCode: 4},
	{currentDir: '~/some/dir'}
]

const printCases = () => {
	examples.forEach(example => {
		console.log('FOR CASE:')
		console.log(JSON.stringify(example))
		console.log('THE PROMPT LOOKS LIKE:')
		console.log(`${TokenToLog[ps1]({...defaultOptions, ...example})}`)
	})
}

printCases()

const printZsh = () => {
	console.log('PASTE THIS IN ZSHRC:')
	console.log(`${TokenToZsh[Token.Path]}`)
}

printZsh()
