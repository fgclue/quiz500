#!/usr/bin/env node

// Imports
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';
import inquirer from 'inquirer';
import figlet from 'figlet';
import gradient from 'gradient-string';

// Sleep Functions
let playerName // lets playername

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms)); // 2 seconds
const sl23 = (ms = 2300) => new Promise((r) => setTimeout(r, ms)); // 2 seconds and 300 milliseconds
const sl1 = (ms = 1000) => new Promise((r) => setTimeout(r, ms)); // 1 second

// Handle Anwser
async function handleAnwser(isCorrect) {
    const spinner = createSpinner('Checking Anwser...').start();
    await sleep();

    if (isCorrect) {
        spinner.success({ text: `Nice work ${playerName}!` });
    } else {
        spinner.error({ text: `Game Over, You lose ${playerName}.` })
        process.exit(1);
    }
}

// Functions

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        'Who wants to become youtube famous? \n'
    );
    await sleep();
    rainbowTitle.stop();
    //       ${chalk.bgBlueBright('How to play')}
    console.log(`
        ${chalk.bgBlueBright('How to play')}
        I am a process on your computer,
        If you get a question ${chalk.bgRedBright('wrong')}
        The process will be ${chalk.bgRedBright('killed.')}
    `);
}

// Top-Level Awaits
await welcome()
await askName()
await q1()
await q2()
await q3()
await q4()
await q5()
await q6()
await q7()
await q8()
await q9()
await q10()
await winner()
await endcode()

// Questions
async function askName() {
    const anwsers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'Player';
        },
    });

    playerName = anwsers.player_name;
}

async function q1() {
    const anwsers = await inquirer.prompt({
        name: 'q_1',
        type: 'list',
        message: 'What is the first name of the creator of linux?',
        choices: [
            'Linus',
            'Linux',
            'Jack',
            'Bill',
        ],
    });

    return handleAnwser(anwsers.q_1 == 'Linus')
}

async function q2() {
    const anwsers = await inquirer.prompt({
        name: 'q_2',
        type: 'list',
        message: 'Is windows paid?',
        choices: [
            'No',
            'Yes',
        ],
    });

    return handleAnwser(anwsers.q_2 == 'Yes')
}

async function q3() {
    const anwsers = await inquirer.prompt({
        name: 'q_3',
        type: 'list',
        message: 'Who made this?',
        choices: [
            'fgclue',
            'fg',
            'clue',
            '32bytes',
        ],
    });

    return handleAnwser(anwsers.q_3 == 'fgclue')
}

async function q4() {
    const anwsers = await inquirer.prompt({
        name: 'q_4',
        type: 'list',
        message: 'Which operating system is proprietary?',
        choices: [
            'Linux',
            'Windows',
            'Haiku',
            'OpenBSD',
        ],
    });

    return handleAnwser(anwsers.q_4 == 'Windows')
}

async function q5() {
    const anwsers = await inquirer.prompt({
        name: 'q_5',
        type: 'list',
        message: 'What is the name of a github webpage?',
        choices: [
            'GitPage',
            'GitHubWeb',
            'GithubPages',
            'WebGit',
        ],
    });

    return handleAnwser(anwsers.q_5 == 'GithubPages')
}

async function q6() {
    const anwsers = await inquirer.prompt({
        name: 'q_6',
        type: 'list',
        message: 'Which one of these is an alternative to youtube?',
        choices: [
            'Netflix',
            'tvBrowser.com',
            'video.com',
            'LBRY', // aka odysee
        ],
    });

    return handleAnwser(anwsers.q_6 == 'LBRY')
}

async function q7() {
    const anwsers = await inquirer.prompt({
        name: 'q_7',
        type: 'list',
        message: 'What is the best letter in the alphabet?',
        choices: [
            'a',
            'h',
            'e',
            'l',
        ],
    });

    return handleAnwser(anwsers.q_7 == 'h')
}

async function q8() {
    const anwsers = await inquirer.prompt({
        name: 'q_8',
        type: 'list',
        message: 'Which package manager did you use to download this?',
        choices: [
            'scoop',
            'Chocolatey',
            'apt-get',
            'npm',
        ],
    });

    return handleAnwser(anwsers.q_8 == 'npm')
}

async function q9() {
    const anwsers = await inquirer.prompt({
        name: 'q_9',
        type: 'list',
        message: 'What operating system do I use?',
        choices: [
            'Linux',
            'Windows',
            'Haiku',
            'OpenBSD',
        ],
    });

    return handleAnwser(anwsers.q_9 == 'Windows')
}

async function q10() {
    const anwsers = await inquirer.prompt({
        name: 'q_10',
        type: 'list',
        message: 'What is 37 divided by 3?',
        choices: [
            '12', // 1 rest
            '13',
            '51',
            '21',
        ],
    });

    return handleAnwser(anwsers.q_10 == '12')
}

function winner() {
    const msg = `Congrats! ${playerName} You became Youtube Famous!`;
    console.log(msg)
}

async function endcode() {
    const msg2 = chalkAnimation.rainbow('Thanks for playing!')
    await sleep()
    msg2.stop
    console.log(`
    ${chalk.bgBlackBright('fgclue on GitHub')}
    ${chalk.bgRedBright('fgclue on npm')}
    `)
}