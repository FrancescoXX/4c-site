const CONTRIBUTORS_ENDPOINT = page => 'https://api.github.com/repos/FrancescoXX/4c-site/contributors?page=' + page;
const USER_ENDPOINT = name => 'https://api.github.com/users/' + name;

const contributors = await fetchAllContributors();

let contributorsWithInfo = [];
for (const contributor of contributors) contributorsWithInfo.push(await fetchUserData(contributor));

Deno.writeTextFile('./content/contributors.json', JSON.stringify({profiles: contributorsWithInfo, sponsors: []}));

/* Utilities */

async function fetchAllContributors(page = 1) {
	console.log('Fetching contributor page', page);

	let contributors = await fetch(CONTRIBUTORS_ENDPOINT(page), {
		headers: new Headers({'accept': 'application/vnd.github.v3+json'})
	}).then(res => res.json());

	console.log('Fetched contributor page', page);

	if (contributors.length) {
		contributors.push(...await fetchAllContributors(page + 1));
	}

	return contributors.filter(contributor => contributor.type !== 'Bot');
}

async function fetchUserData(contributionData) {
	console.log('Fetching user data for', contributionData.login);

	const rawData = await fetch(USER_ENDPOINT(contributionData.login), {
		headers: new Headers({'accept': 'application/vnd.github.v3+json'})
	}).then(res => res.json());

	console.log('Fetched user data for', contributionData.login);

	return {
		name: rawData.name ?? rawData.login,
		avatarUrl: rawData.avatar_url,
		github: rawData.login,
		twitter: rawData.twitter_username,
		blogUrl: rawData.blog,

		// Might be useful in future
		contributions: contributionData.contributions
	};
}
