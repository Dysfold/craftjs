registerCommand(
  ['craftjs', 'js'],
  (sender, action, ...args) => {
    console.log('TODO');
  },
  {
    usage: `Usage: /craftjs ...
  reload <plugin> - Reload a JS plugin
`,
  },
);
