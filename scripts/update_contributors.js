import {parse} from "https://deno.land/std@0.110.0/encoding/csv.ts";

const CONTRIBUTORS_ENDPOINT = page => 'https://api.github.com/repos/FrancescoXX/4c-site/contributors?page=' + page;
const USER_ENDPOINT = name => 'https://api.github.com/users/' + name;

const PROFILES_ENDPOINT = 'https://docs.google.com/spreadsheets/d/1W93U4inesqfAQKv_SIqmTdJuCh9HEq9OpoxPiv2skcQ/export?format=csv&gid=909227343';

const info = (...strings) => console.log('\u001b[36minfo\u001b[0m', ...strings);
const success = (...strings) => console.log('\u001b[32msuccess\u001b[0m', ...strings, '\n');
const fail = (...strings) => console.log('\u001b[31merror\u001b[0m', ...strings, '\n') || Deno.exit(1);

/* Contributors */

const contributors = await fetchAllContributors();

let contributorsWithInfo = [];
for (const contributor of contributors) contributorsWithInfo.push(await fetchUserData(contributor));

/* Profiles */

const profileData = await fetchProfileData();

/* Write */

Deno.writeTextFile(
	'./content/contributors.json',
	JSON.stringify({contributors: contributorsWithInfo, profiles: profileData, sponsors: []})
);

/* Fun */

console.log('Success!');
console.log(`
\u001b[32m⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⣠⣤⣶⣶
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢰⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣀⣀⣾⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿
⣿⣿⣿⣿⣿⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿
⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿
⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿\u001b[0m
`.trim());

/* Utilities */


async function fetchAllContributors(page = 1) {
	info('Fetching contributor page', page);

	let contributors = await fetch(CONTRIBUTORS_ENDPOINT(page), {
		headers: new Headers({'accept': 'application/vnd.github.v3+json'})
	}).then(res => res.json());

	if (contributors.message) {
		fail('Whoops, something went wrong\n' + contributors.message + '\n' + contributors.documentation_url);
	}

	success('Fetched contributor page', page);

	if (contributors.length) {
		contributors.push(...await fetchAllContributors(page + 1));
	}

	return contributors.filter(contributor => contributor.type !== 'Bot');
}

async function fetchUserData(contributionData) {
	info('Fetching user data for', contributionData.login);

	const rawData = await fetch(USER_ENDPOINT(contributionData.login), {
		headers: new Headers({'accept': 'application/vnd.github.v3+json'})
	}).then(res => res.json());

	if (rawData.message) {
		fail('Whoops, something went wrong\n' + contributors.message + '\n' + contributors.documentation_url);
	}

	success('Fetched user data for', contributionData.login);

	return {
		name: rawData.name ?? rawData.login,
		avatarUrl: rawData.avatar_url,
		github: rawData.login,
		twitter: rawData.twitter_username,
		blogUrl: rawData.blog,
		contributions: contributionData.contributions
	};
}

async function fetchProfileData() {
	info('Fetching profiles');

	const csv = await fetch(PROFILES_ENDPOINT).then(res => res.text());

	success('Fetched profiles');

	return (await parse(csv, {skipFirstRow: true}))
		.map(item => ({ // Better props
			timestamp: item.Timestamp,
			name: item['Full Name'],
			avatarUrl: item['Hosted Image URL'] || null,
			github: item['Github Username'] || null,
			twitter: item['Twitter Username'] || null,
			blog: item['Blog URL'] || null,
			youtube: item['Youtube Account Link'] || null
		}))
		.filter(entry => (entry.timestamp === '' || entry.name  === '') ? false : true); // Empty entries
}
