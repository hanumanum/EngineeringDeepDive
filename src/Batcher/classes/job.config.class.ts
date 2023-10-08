import { IExecutor } from "./interfaces/executor.interface";
import { IReader } from "./interfaces/reader.interface";
import { IWriter } from './interfaces/writer.interface';

export type JobParams = Record<string, any>;

export type JobConfig = {
    name: string;
    chunkSize: number;
    reader: IReader<any>;
    executer: IExecutor<any>;
    writer: IWriter<any>;
    jobParams: JobParams;
}