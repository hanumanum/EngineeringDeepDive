export class JobStatisticsItem {
    private readonly jobName: string;
    private readonly jobStartTime: number;
    readCount: number;
    execCount: number;
    writeCount: number;
    isStarted: boolean;
    isEnded: boolean;
    isFailed: boolean;

    constructor(name: string) {
        this.jobName = name;
        this.jobStartTime = Date.now();
        this.readCount = 0;
        this.execCount = 0;
        this.writeCount = 0;
        this.isStarted = false;
        this.isEnded = false;
        this.isFailed = false;

        return this;
    }
}


export class JobStatistics {
    private readonly stats: { [jobName: string]: JobStatisticsItem } = {};

    constructor() {
        return this;
    }

    updateStats(jobName: string, stat: JobStatisticsItem) {
        this.stats[jobName] = stat;
    }

}