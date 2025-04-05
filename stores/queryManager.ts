import type { ServerResponseType } from "~/types/general.types";

type QueryOrderItemType = {
    service: string,
    key: string,
    result: ServerResponseType | null;
    isLoading: boolean;
};
type QueryOrderType = QueryOrderItemType[];

export const useQueryManager = defineStore('queryManager', {
    state: () => ({
        queries: [] as QueryOrderType,
    }),
    getters: {
        anyLoading(state) {
            return state.queries.some(item => item.isLoading);
        },
        loadingList(state) {
            return state.queries.filter(item => item.isLoading).map(item => item.service);
        }
    },
    actions: {
        setQuery(service: string) {
            if(this.checkQueryIsLoading(service)) {
                throw Error(`"${service}" query is already running`);
            } else {
                const key = generateUniqueId(10);
                this.queries.push({
                    key,
                    service,
                    result: null,
                    isLoading: true,
                });
                return key;
            }
        },
        setResponse(key: string, response: ServerResponseType) {
            const target = this.queries.findIndex(item => item.key === key);
            if(target > -1) {
                this.queries[target].isLoading = false;
                this.queries[target].result = response;
                if(response.status === 401){
                    useModal().provide('session_expired');
                }
            }
        },
        checkQueryIsLoading(serivce: string) {
            const list = this.queries.filter(item => item.isLoading).map(item => item.service);
            return list.includes(serivce);
        }
    }
})