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
        commit(types.UPDATE_SEARCH, { pager, params })
    },
    // 分页 设置page
    setPagerApi ({commit}, pager) {
        commit(types.UPDATE_SEARCH, { pager })
    },

    // async getNewTabListDataApi ({ state, commit }, params) {
    //     try {
    //     let { data: res } = await getTabListData({...state.tabListNewParams, ...params})
    //     // commit(types.UPDATE_TABLISTDATA, res)
    //     commit(types.UPDATE_TOTAL, res.total)
    //     } catch (e) {
    //     }
    // },
}
