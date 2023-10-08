import { Batcher } from "./Batcher/batcher.class";
import { JobConfig, JobParams } from "./Batcher/classes/job.config.class";
import { ReaderArray } from "./Batcher/classes/readers/reader.array";
import { ExecutorMultipy } from "./Batcher/classes/executors/executor.multiply";
import { WriterLog } from "./Batcher/classes/writers/writer.log";

const jobParams: JobParams = {
    array: Array.from({ length: 1000 }, Math.random),
    multiplier: 100,
}

const jobParams1: JobParams = {
    array: Array.from({ length: 345 }, Math.random),
    multiplier: 20,
}

const jobConfig: JobConfig = {
    name: "test1",
    chunkSize: 99,
    reader: new ReaderArray(),
    executer: new ExecutorMultipy(),
    writer: new WriterLog(),
    jobParams: jobParams,
};

const jobConfig2: JobConfig = {
    name: "test2",
    chunkSize: 30,
    reader: new ReaderArray(),
    executer: new ExecutorMultipy(),
    writer: new WriterLog(),
    jobParams: jobParams1,
};

const job = new Batcher();

setInterval(()=>{
    console.log(job.getStats())
}, 1000)

const job1 = job.addJob(jobConfig);
const job2 = job.addJob(jobConfig2);

job1.start();
job2.start();

