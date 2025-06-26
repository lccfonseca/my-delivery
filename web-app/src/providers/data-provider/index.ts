"use client";

import dataProviderSimpleRest from "@refinedev/simple-rest";
import { CrudFilters, CrudOperators, DataProvider, LogicalFilter } from "@refinedev/core";
import { stringify } from "query-string";
import { AxiosInstance } from "axios";

const API_URL = "http://localhost:8080";
const API_KEY = "";

export const dataProvider = dataProviderSimpleRest(API_URL);

const mapOperator = (operator: CrudOperators): string => {
    switch (operator) {
        case "eq":
            return "";
        default:
            throw new Error(`Operator ${operator} is not supported`);
    }
};

const config = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'app-secret': API_KEY,
    }
};

const generateFilter = (filters?: CrudFilters) => {
    const queryFilters: { [key: string]: string } = {};
    if (filters) {
        filters.map((filter: any) => {
            if (filter.operator !== "or") {
                const { field, operator, value } = filter;

                const mappedOperator = mapOperator(operator);
                queryFilters[`${field}${mappedOperator}`] = value;
            }
        });
    }

    return queryFilters;
};

export const dataProvider1 = (axios: AxiosInstance): DataProvider => {
    return {
        ...dataProviderSimpleRest(API_URL, axios),
        getList: async ({ resource, pagination, filters, metaData, sort }) => {
            const url = `${API_URL}/${resource}`;

            // pagination
            const current = pagination?.current || 1;
            const pageSize = pagination?.pageSize || 10;
            const field = sort?.at(0)?.field || "id";
            const order = sort?.at(0)?.order || "asc";

            const queryFilters = generateFilter(filters);

            const query: {
                size: number;
                page: number;
                sort: string;
                order: string;
            } = {
                page: (current - 1) * pageSize,
                size: pageSize,
                sort: field,
                order: order
            };

            const { data } = await axios.get(
                `${url}?${stringify(query)}&${stringify(queryFilters)}`,
                config
            );

            //return {
            //    data: data[metaData?.resource ?? resource],
            //    total:
            //        data[`${metaData?.resource ?? resource}Count`] || undefined,
            //};
            return {
                data: data['content'],
                total: data['numberOfElements']
            };
        },
        getOne: async ({ resource, id, metaData }) => {
            const url = metaData?.getComments
                ? `${API_URL}/${resource}/${id}/comments`
                : `${API_URL}/${resource}/${id}`;

            const { data } = await axios.get(url, config);

            return {
                //data: data[metaData?.resource || resource],
                data,
            };
        },
        getMany: async ({ resource, ids, metaData, dataProviderName }) => {
            let url = `${API_URL}/${resource}`;
            if (ids.length == 1) {
                url = `${API_URL}/${resource}/${ids[0]}`;
            }
            const { data } = await axios.get(url, config);
            return {
                data,
            };
        },
        update: async ({ resource, id, variables, metaData }) => {
            const url = metaData?.URLSuffix
                ? `${API_URL}/${resource}/${id}/${metaData.URLSuffix}`
                : `${API_URL}/${resource}/${id}`;

            const { data } = metaData?.URLSuffix
                ? await axios.post(url, undefined, config)
                : await axios.put(url, variables, config);

            return {
                data,
            };
        },

        deleteOne: async ({ resource, id, metaData }) => {
            const url = metaData?.URLSuffix
                ? `${API_URL}/${resource}/${id}/${metaData.URLSuffix}`
                : `${API_URL}/${resource}/${id}`;

            const { data } = await axios.delete(url, config);

            return {
                data,
            };
        },
    };
};
