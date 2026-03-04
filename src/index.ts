import Differ from './differ';
import Viewer from './viewer';
import Marshaller from './marshaller';

export type {
  InlineDiffOptions,
  InlineDiffResult,
} from './utils/get-inline-diff';

export type {
  ArrayDiffFunc,
  DifferOptions,
  DiffResult,
} from './differ';

export type {
  ViewerProps,
} from './viewer';

export type {
  MarshallerConfig,
  MarshallerExpandLineRendererOptions,
  MarshallerHideUnchangedLinesOptions,
} from './marshaller';

export { Differ, Viewer, Marshaller };
