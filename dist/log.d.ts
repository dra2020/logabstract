import * as Util from '@dra2020/util';
import * as FSM from '@dra2020/fsm';
export interface ILog {
    dump: () => FSM.Fsm;
    stamp: (o: any) => void;
    log: (o: any, verbosity?: number) => void;
    event: (o: any, verbosity?: number) => void;
    error: (o: any) => void;
    value: (o: any, verbosity?: number) => void;
    chatter: (s: string) => void;
    chatters: () => string[];
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
