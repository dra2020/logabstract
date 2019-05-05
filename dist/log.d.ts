import * as Util from '@terrencecrowley/util';
import * as FSM from '@terrencecrowley/fsm';
export interface ILog {
    dump: () => FSM.Fsm;
    log: (o: any, verbosity?: number) => void;
    event: (o: any, verbosity?: number) => void;
    error: (o: any) => void;
    value: (o: any, verbosity?: number) => void;
}
export declare class Timer {
    ilog: ILog;
    o: any;
    verbosity: number;
    elapsed: Util.Elapsed;
    constructor(ilog: ILog, kind: string, o: any, verbosity?: number);
    log(): void;
}
export declare class AsyncTimer extends Timer {
    constructor(ilog: ILog, o: any, verbosity?: number);
}
export declare class SyncTimer extends Timer {
    constructor(ilog: ILog, o: any, verbosity?: number);
}
