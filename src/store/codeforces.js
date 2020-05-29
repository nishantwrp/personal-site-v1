import axios from 'axios';

const CODEFORCES_USERNAMES = ['nishantwrp', 'nishantwrp_2']
const CODEFORCES_RATING_CACHE_TIME = "1h";

let cacheCodeforcesData = (codeforcesData, vue) => {
    vue.$cookies.set(
        'CODEFORCES_DATA', codeforcesData,
        CODEFORCES_RATING_CACHE_TIME);
}

let loadCodeforcesData = (vue) => {
    const cacheData = vue.$cookies.get('CODEFORCES_DATA');
    return cacheData || null;
}

let getMaxRating = (username) => {
    return axios.get('https://codeforces.com/api/user.rating?handle=' + username, {timeout : 2000}).then(({ data }) => {
        const allContests = data.result;
        let maxRating = 0;
        for (let { newRating } of allContests) {
            maxRating = Math.max(newRating, maxRating);
        }
        return {
            maxRating: maxRating,
            username: username
        };
    });
}

export default {
    state: {
        codeforces: {
            maxRating: null,
            username: null,
            profileUrl: null
        }
    },
    getters: {
        codeforces: state => {
            return state.codeforces;
        },
        isCodeforcesLoaded: state => {
            return !!state.codeforces.maxRating;
        }
    },
    mutations: {
        SET_CODEFORCES_DATA(state, data) {
            const { maxRating, username, profileUrl } = data;
            state.codeforces.maxRating = maxRating;
            state.codeforces.username = username;
            state.codeforces.profileUrl = profileUrl;
        }
    },
    actions: {
        get_codeforces_data({ commit }, { vm }) {
            const cacheData = loadCodeforcesData(vm);

            if (cacheData) {
                commit('SET_CODEFORCES_DATA', cacheData);
            } else {
                let ratingPromises = [];

                for (let username of CODEFORCES_USERNAMES) {
                    ratingPromises.push(getMaxRating(username));
                }

                Promise.all(ratingPromises).then((ratings) => {
                    let codeforcesData = {
                        maxRating: 0,
                        username: '',
                        profileUrl: ''
                    }
                    for (let rating of ratings) {
                        if (codeforcesData.maxRating < rating.maxRating) {
                            codeforcesData.maxRating = rating.maxRating;
                            codeforcesData.username = rating.username;
                            codeforcesData.profileUrl = 'https://codeforces.com/profile/' + codeforcesData.username;
                        }
                    }

                    cacheCodeforcesData(codeforcesData, vm);
                    commit('SET_CODEFORCES_DATA', codeforcesData);
                }, () => {
                    let altCodeforcesData = {
                        maxRating: 'Error',
                        username: CODEFORCES_USERNAMES[0],
                        profileUrl: 'https://codeforces.com/profile/' + CODEFORCES_USERNAMES[0]
                    };

                    commit('SET_CODEFORCES_DATA', altCodeforcesData);
                });
            }
        }
    }
}
