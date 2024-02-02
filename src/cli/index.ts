import fs from 'node:fs';

import { program } from 'commander';
import { prompts } from 'prompts';

import Differ, { type DifferOptions } from '../differ';
import showInTerminal from './show-in-terminal';
import writeToFile from './write-to-file';

program
  .name('jsondiff')
  .description('A better JSON differ & viewer, support LCS diff for arrays and recognise some changes as "modification" apart from simple "remove"+"add".')
  .version(__VERSION__);

program
  .command('run')
  .description('Shows a difference between two JSON files.')
  .argument('<before>', 'Path to the first JSON file')
  .argument('<after>', 'Path to the second JSON file')
  .option('-c, --config <path>', 'Path to the config file, will override the default config')
  .option('-o --output <path>', 'Path to the output file, default to stdout')
  .action(async (beforePath, afterPath, options) => {
    const config: DifferOptions = {};
    if (!fs.statSync(beforePath).isFile()) {
      console.error(`Error: ${beforePath} is not a file.`);
      process.exit(1);
    }
    if (!fs.statSync(afterPath).isFile()) {
      console.error(`Error: ${afterPath} is not a file.`);
      process.exit(1);
    }
    if (fs.existsSync(options.config)) {
      if (!fs.statSync(options.config).isFile()) {
        console.error(`Error: ${options.config} is not a file.`);
        process.exit(1);
      }
      Object.assign(config, JSON.parse(fs.readFileSync(options.config, 'utf-8')));
    }
    if (fs.existsSync(options.output)) {
      const resp = await prompts.confirm({
        type: 'confirm',
        message: `The output file "${options.output}" already exists, do you want to overwrite it?`,
      });
      if (!resp) {
        console.error('File already exists, aborted.');
        process.exit(0);
      }
    }
    let beforeValue = null;
    let afterValue = null;
    try {
      beforeValue = JSON.parse(fs.readFileSync(beforePath, 'utf-8'));
    } catch (e) {
      console.error(`Error: ${beforePath} is not a valid JSON file.`);
      process.exit(1);
    }
    try {
      afterValue = JSON.parse(fs.readFileSync(afterPath, 'utf-8'));
    } catch (e) {
      console.error(`Error: ${afterPath} is not a valid JSON file.`);
      process.exit(1);
    }
    const differ = new Differ({
      arrayDiffMethod: 'lcs',
      ...config,
      showModifications: options.output ? false : config.showModifications,
    });
    const result = differ.diff(beforeValue, afterValue);
    if (options.output) {
      writeToFile(options.output, result);
    } else {
      showInTerminal(result);
    }
  });

program.parse();
