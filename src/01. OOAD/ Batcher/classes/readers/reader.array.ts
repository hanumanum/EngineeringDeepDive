import { IReader } from "../interfaces/reader.interface";

export class ReaderArray implements IReader<any>{
    chunkSize: number = 1;
    items: any[] = [];
    currentOffset: number = 0;

    public config(chunkSize: number, jobParams: any): void {
        this.chunkSize = chunkSize;
        this.items = [...jobParams.array];
    }

    async readChunk(): Promise<any[]> {
        const chunk = this.items.slice(this.currentOffset, this.currentOffset + this.chunkSize);
        this.currentOffset += this.chunkSize;
        return new Promise(resolve => setTimeout(() => resolve(chunk.length ? chunk : null), Math.ceil(Math.random() * 1000)));
        
    }

}