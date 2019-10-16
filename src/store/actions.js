import * as types from './mutation-type'
const actions = {
    // 清空搜索条件
    clearSearchApi ({state, commit}) {
        const pager = {
        ...state.pager,
        current: 1
        }
        const params = {
        ...state.params,
        name: '',
        email: '',
        address: '',
        }
        commit(UPDATE_SEARCH, { pager, params })
    },
    // 分页 设置page
    setPagerApi ({commit}, pager) {
        commit(UPDATE_SEARCH, { pager })
    },
    /**
    * tab new切换
    * @param {*} { commit }
    * @param {*} params
    */
    async getNewTabListDataApi ({ state, commit }, params) {
        commit(UPDATE_NEWLOADING, true)
        try {
        let { data: res } = await getTabListData({...state.tabListNewParams, ...params})
        commit(UPDATE_NEWTABLISTDATA, res)
        commit(UPDATE_TOTAL, res.total)
        } catch (e) {
        }
        commit(UPDATE_NEWLOADING, false)
    },
}
