import { JobParams } from "../job.config.class";

export interface IReader<T> {
    readonly chunkSize: number;
    readonly currentOffset: number;
    
    config(batchSize: number, jobParams: JobParams): void;
    readonly readChunk: () => Promise<T[]>;
}