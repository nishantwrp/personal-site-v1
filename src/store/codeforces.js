import axios from 'axios';
import { Promise } from 'core-js';

const CODEFORCES_USERNAMES = ['nishantwrp', 'nishantwrp_2']

let getMaxRating = (username) => {
    return axios.get('https://codeforces.com/api/user.rating?handle=' + username, {timeout : 2000}).then(({ data }) => {
        const allContests = data.result;
        let maxRating = 0;
        for (let { newRating } of allContests) {
            maxRating = max([newRating, maxRating]);
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
            username: null
        }
    },
    getters: {
        codeforces: state => {
            return state.codeforces;
        },
        isCodeforcesLoaded: state => {
            return !!(state.codeforces.maxRating && state.codeforces.username);
        }
    },
    mutations: {
        SET_CODEFORCES_DATA(state, data) {
            const { maxRating, username } = data;
            state.codeforces.maxRating = maxRating;
            state.codeforces.username = username;
        }
    },
    actions: {
        get_codeforces_data({ commit }) {
            let ratingPromises = [];

            for (let username of CODEFORCES_USERNAMES) {
                ratingPromises.push(getMaxRating(username));
            }

            Promise.all(ratingPromises).then((ratings) => {
                let codeforcesData = {
                    maxRating: 0,
                    username: ''
                }
                for (let rating of ratings) {
                    if (codeforcesData.maxRating < rating.maxRating) {
                        codeforcesData = rating;
                    }
                }
                commit('SET_CODEFORCES_DATA', codeforcesData);
            });
        }
    }
}