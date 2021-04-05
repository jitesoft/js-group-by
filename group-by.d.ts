/**
 * Groups each item in the list by a defined callback return value.
 * Input is expected to be an array-like structure and return value will be a standard map/object.
 *
 * @param list     Array to group.
 * @param callback Callback to execute on each object in the array to fetch key for grouping.
 * @return Object  in which keys are selected from passed list and the items are the items which are grouped under the key.
 */
export default function groupBy(list: any[], callback: (any) => void): object;

/**
 * Groups each item in the list by a defined callback return value.
 * Input is expected to be an array-like structure and return value will be a standard map/object.
 *
 * @param list             Array to group.
 * @param callback         Callback to execute on each object in the array to fetch key for grouping.
 * @return Promise<Object> in which keys are selected from passed list and the items are the items which are grouped under the key.
 */
export function groupByAsync(list: any[], callback: (any) => Promise<void>): Promise<object>
