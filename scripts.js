document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('googleSignInBtn').addEventListener('click', () => {
        const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
        const params = {
            client_id: '979191689501-bvbu1i0jk40evuiph5rnkhlrck16op5g.apps.googleusercontent.com',
            redirect_uri: 'https://elitesun.github.io/Quiz/',
            response_type: 'token',
            scope: 'https://www.googleapis.com/auth/userinfo.profile',
            include_granted_scopes: 'true',
            state: 'pass-through-value'
        };
        const authUrl = `${oauth2Endpoint}?${new URLSearchParams(params).toString()}`;
        window.open(authUrl, 'popup', 'width=600,height=600');
    });

    document.getElementById('githubSignInBtn').addEventListener('click', () => {
        const clientId = 'Iv23liYaE8qNS4fUc2qF';
        const redirectUri = 'https://elitesun.github.io/Quiz/';
        const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;
        window.open(authUrl, 'popup', 'width=600,height=600');
    });

    document.getElementById('linkedinSignInBtn').addEventListener('click', () => {
        const clientId = '78c6vz1h9qnde0';
        const redirectUri = 'https://elitesun.github.io/Quiz/';
        const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=r_liteprofile`;
        window.open(authUrl, 'popup', 'width=600,height=600');
    });
});
