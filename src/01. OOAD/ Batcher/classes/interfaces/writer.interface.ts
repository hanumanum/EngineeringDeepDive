import { JobParams } from '../job.config.class';
export interface IWriter<T> {
    readonly items: T[];
    config(jobParams: JobParams): void;
    setItems(items: T[]): void;
    write: () => Promise<T[]>;
}