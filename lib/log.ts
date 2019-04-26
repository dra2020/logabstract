export interface ILog
{
  dump: () => void;
  log: (o: any, verbosity?: number) => void;
  event: (o: any, verbosity?: number) => void;
  error: (o: any) => void;
  value: (o: any, verbosity?: number) => void;
}

export const ILogger: ILog = { dump: dump, log: log, event: event, error: error, value: value };

export function dump(): void
{
}

export function log(o: any, verbosity: number = 0): void
{
  console.log(JSON.stringify(o));
}

export function event(o: any, verbosity: number = 0): void
{
  if (typeof o === 'string') o = { event: o };
  o.kind = 'event';
  log(o, verbosity);
}

export function error(o: any): void
{
  if (typeof o === 'string') o = { message: o };
  o.kind = 'error';
  log(o);
}

export function value(o: any, verbosity: number = 0): void
{
  o.kind = 'value';
  log(o, verbosity);
}
