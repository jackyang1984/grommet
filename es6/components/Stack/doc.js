import { describe, PropTypes } from 'react-desc';

export default (function (Stack) {
  var DocumentedStack = describe(Stack).description('Stacks components on top of the first child component.').usage('import { Stack } from \'grommet\';\n    <Stack/>');

  DocumentedStack.propTypes = {
    anchor: PropTypes.oneOf(['center', 'left', 'right', 'top', 'bottom', 'top-left', 'bottom-left', 'top-right', 'bottom-right']).description('Where to anchor children from. If not specified, children fill the\n      first child\'s area.')
  };

  return DocumentedStack;
});