import axios from "axios";

const state = {
  results: [],
  loading: false
};

const getters = {
  results(state) {
    return state.results;
  },
  loading() {
    return state.loading;
  }
};

const actions = {
  async doSearch({ commit }, keyword) {
    console.log(keyword);
    const key = "zzfnRz2Nj0kAGoeOOVS6D8t3kGOh0zJ7";
    const limit = 50;
    const url = `https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${key}&limit=${limit}`;

    commit("setLoading", true);
    const results = await axios.get(url);
    commit("setLoading", false);
    const data = results.data.data;
    const imageUrls = data.map(o => o.images.downsized.url);
    commit("setResults", imageUrls);
  }
};

const mutations = {
  setResults(state, results) {
    state.results = results;
  },
  setLoading(state, status) {
    state.loading = status;
  }
};

const search = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

export default search;
