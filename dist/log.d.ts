export interface ILog {
    dump: () => void;
    log: (o: any, verbosity?: number) => void;
    event: (o: any, verbosity?: number) => void;
    error: (o: any) => void;
    value: (o: any, verbosity?: number) => void;
}
export declare const ILogger: ILog;
export declare function dump(): void;
export declare function log(o: any, verbosity?: number): void;
export declare function event(o: any, verbosity?: number): void;
export declare function error(o: any): void;
export declare function value(o: any, verbosity?: number): void;
