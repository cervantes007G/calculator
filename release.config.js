module.exports = {
    branches: ['main', 'fb'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        [
            '@semantic-release/git',
            {
                assets: ['CHANGELOG.md'],
            },
        ],
        '@semantic-release/github',
        '@semantic-release/npm',
    ],
};