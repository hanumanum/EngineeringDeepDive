import { JobConfig } from './job.config.class';
import { JobStatistics, JobStatisticsItem } from './job.statisitcs.class';

export class JobInstance {
    private readonly name: string;
    private readonly job: JobConfig;

    private readonly jobStatsItem: JobStatisticsItem;
    private readonly jobStats: JobStatistics;

    constructor(jobConfig: JobConfig, statsRepo: JobStatistics) {
        this.name = jobConfig.name;
        this.job = jobConfig;

        this.job.reader.config(this.job.chunkSize, this.job.jobParams);
        this.job.executer.config(this.job.jobParams);
        this.job.writer.config(this.job.jobParams);

        this.jobStatsItem = new JobStatisticsItem(this.name);
        this.jobStats = statsRepo;
    }

    async start() {
        this.jobStatsItem.isStarted = true;

        try {
            while (true) {
                const items = await this.job.reader.readChunk();
                if (!items) {
                    break;
                }

                this.jobStatsItem.readCount += items.length;

                this.job.executer.setItems(items)
                const processedItems = await this.job.executer.exec();
                this.jobStatsItem.execCount += processedItems.length;

                this.job.writer.setItems(processedItems);
                const writenItmes = await this.job.writer.write();
                this.jobStatsItem.writeCount += writenItmes.length;

                this.jobStats.updateStats(this.name, this.jobStatsItem);
            }

            this.jobStatsItem.isEnded = true;
        }
        catch (err) {
            this.jobStatsItem.isFailed = true;
            this.jobStats.updateStats(this.name, this.jobStatsItem);
        }
    }
}