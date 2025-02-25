import type { DiffResult, InlineDiffOptions } from '@json-diff-kit/differ/src';

export type HideUnchangedLinesOptions = boolean | {
  /**
   * If there are continuous unchanged lines exceeding the limit, they should be hidden,
   * default is `8`.
   */
  threshold?: number;
  /**
   * We can keep displaying some lines around the "expand" line for a better context,
   * default is `3`.
   */
  margin?: number;
  /**
   * Controls how many lines will be displayed when clicking the "Show xx lines before"
   * or "Show xx lines after" button in the "expand" line, default is `20`.
   */
  expandMoreLinesLimit?: number;
}

export interface ViewerProps {
  /** The diff result `[before, after]`. */
  diff: readonly [DiffResult[], DiffResult[]];
  /** Configure indent, default `2` means 2 spaces. */
  indent?: number | 'tab';
  /** Background colour for 3 types of lines. */
  bgColour?: {
    add?: string;
    remove?: string;
    modify?: string;
  };
  /** Display line numbers, default is `false`. */
  lineNumbers?: boolean;
  /** Whether to show the inline diff highlight, default is `false`. */
  highlightInlineDiff?: boolean;
  /** Controls the inline diff behaviour, the `highlightInlineDiff` must be enabled. */
  inlineDiffOptions?: InlineDiffOptions;
  /**
   * Hide continuous unchanged lines and display an "expand" instead,
   * default `false` means it won't hide unchanged lines.
   */
  hideUnchangedLines?: HideUnchangedLinesOptions;
  /**
   * Use virtual list to speed up rendering, default is `false`.
   *
   * NOTICE: NOT IMPLEMENTED YET.
   */
  virtual?: boolean | {
    /** @default 'body' */
    scrollContainer?: string;
    /** @default 18 */
    itemHeight?: number;
    /** @default 26 */
    expandLineHeight?: number;
  };
  /**
   * Enable the syntax highlight feature, default is `false`.
   */
  syntaxHighlight?: false | {
    /**
     * The syntax highlighting theme; it will add a class to `table`.
     *
     * NOTICE:
     * - You need to import the corresponding CSS file manually.
     * @default 'monokai'
     */
    theme?: string;
  };
  /**
   * Configure the texts in the viewer, you can use it to implement i18n.
   */
  texts?: {
    /** @default 'No change detected' */
    noChangeDetected?: string;
  };
}
