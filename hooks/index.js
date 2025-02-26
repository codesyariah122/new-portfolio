export const fetchData = async (apiConfig, configRepo) => {
	try {
		const endPoint = `${apiConfig.github_url}${apiConfig.github_user}/repos?page=${configRepo.page}&sort=${configRepo.sort}&per_page=${configRepo.per_page}`;

		const response = await fetch(endPoint, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `token ${apiConfig.github_token}`
			}
		});

		if (!response.ok) {
			throw new Error('Gagal mendapatkan data dari API');
		}

		const data = await response.json();

		const starredRepos = data.filter(repo => repo.stargazers_count > 0 && repo?.html_url !== 'https://github.com/codesyariah122/kang-hikmah-alfajri');

		return starredRepos;
	} catch (error) {
		console.error('Terjadi kesalahan saat memanggil API:', error.message);
		throw error;
	}
}