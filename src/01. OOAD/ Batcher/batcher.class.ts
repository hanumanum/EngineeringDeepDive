import { JobConfig } from "./classes/job.config.class";
import { JobStatistics } from "./classes/job.statisitcs.class";
import { JobInstance } from "./classes/job.instance.class";

export class Batcher {
    private jobs: Record<string, JobInstance> = {};
    private jobStatistics: JobStatistics;
    

    constructor() {
        this.jobStatistics = new JobStatistics();
    }

    getStats(): JobStatistics {
        return this.jobStatistics;
    }

    addJob(jobConfig: JobConfig): JobInstance {
        const newJobInstance = new JobInstance(jobConfig, this.jobStatistics)
        this.jobs[jobConfig.name] = newJobInstance;
        return newJobInstance;
    }

    getJob(name: string): JobInstance {
        return this.jobs[name];
    }
}