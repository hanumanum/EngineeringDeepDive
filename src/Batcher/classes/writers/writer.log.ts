import { IWriter } from "../interfaces/writer.interface";
import { JobParams } from "../job.config.class";

export class WriterLog implements IWriter<any> {
    items: any[] = [];

    config(jobParams: JobParams): void { }

    setItems(items: any) {
        this.items = [...items];
    }

    async write(): Promise<any[]> {
        console.log(this.items.length) //this.items.forEach()
        return Promise.resolve(this.items);
    }
}