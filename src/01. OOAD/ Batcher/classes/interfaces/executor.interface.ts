import { JobParams } from '../job.config.class';
export interface IExecutor<T> {
    readonly items: T[];
    config(jobParams: JobParams): void;
    setItems(items: T[]): void;
    readonly exec: () => Promise<T[] | T>;
}