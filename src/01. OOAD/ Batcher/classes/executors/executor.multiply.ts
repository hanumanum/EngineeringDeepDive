import { IExecutor } from "../interfaces/executor.interface";
import { JobParams } from "../job.config.class";

export class ExecutorMultipy implements IExecutor<number>{
    items: number[] = [];
    private multiplier: number = 1;

    public setItems(items: number[]): void {
        this.items = [...items];
    }

    public config(jobParams: JobParams): void {
        this.multiplier = jobParams.multiplier || 1;
    }

    async exec(): Promise<number[]> {
        return Promise.resolve(this.items.map(item => Math.ceil(item * this.multiplier)));
    }
}