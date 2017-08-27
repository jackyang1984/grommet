'use strict';

exports.__esModule = true;
exports.StyledIcon = exports.StyledLabel = exports.textAlignStyle = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var primaryStyle = (0, _styledComponents.css)(['background-color:', ';color:', ';svg{fill:', ';stroke:', ';transition:none;}'], function (props) {
  return props.theme.global.colors.brand;
}, function (props) {
  return props.theme.global.colors.white;
}, function (props) {
  return props.theme.global.colors.white;
}, function (props) {
  return props.theme.global.colors.white;
});

var accentStyle = (0, _styledComponents.css)(['border-color:', ';'], function (props) {
  return props.theme.button.colors.accent;
});

var criticalStyle = (0, _styledComponents.css)(['border-color:', ';'], function (props) {
  return props.theme.button.colors.critical;
});

var secondaryStyle = (0, _styledComponents.css)(['border-color:', ';'], function (props) {
  return props.theme.button.colors.secondary;
});

var disabledStyle = '\n  opacity: 0.3;\n  cursor: default;\n';

function getHoverColor(props) {
  if (props.accent) {
    return props.theme.button.colors.accent;
  } else if (props.critical) {
    return props.theme.button.colors.critical;
  } else if (props.secondary) {
    return props.theme.button.colors.secondary;
  }
  return props.theme.button.border.color || props.theme.global.colors.brand;
}

function getHoverIndicatorStyle(hoverIndicator, theme) {
  var backgroundColor = theme.global.hover.backgroundColor;
  if ((typeof hoverIndicator === 'undefined' ? 'undefined' : _typeof(hoverIndicator)) === 'object') {
    if (typeof hoverIndicator.background === 'string') {
      var colorGroup = hoverIndicator.background.split('-');
      var colorType = colorGroup[0];
      if (!theme.global.colors[colorType]) {
        console.warn('Invalid color ' + hoverIndicator.background + ', using ' + backgroundColor + ' instead');
      } else if (colorGroup.length > 1) {
        // subtract one to use the array
        var colorIndex = colorGroup[1] - 1;
        if (theme.global.colors[colorType].length < colorGroup[1]) {
          console.warn('Invalid color ' + hoverIndicator.background + ', using ' + backgroundColor + ' instead');
        } else {
          backgroundColor = (0, _polished.rgba)(theme.global.colors[colorType][colorIndex], 0.3) + ';';
        }
      } else if (typeof theme.global.colors[colorType] !== 'string') {
        console.warn('Invalid color ' + hoverIndicator.background + ', using ' + backgroundColor + ' instead');
      } else {
        backgroundColor = (0, _polished.rgba)(theme.global.colors[colorType], 0.3) + ';';
      }
    }
  }
  return (0, _styledComponents.css)(['background-color:', ';color:', ';'], backgroundColor, theme.global.hover.textColor);
}

var hoverStyle = (0, _styledComponents.css)(['&:hover{', ' ', ' ', '}'], function (props) {
  return props.hoverIndicator && getHoverIndicatorStyle(props.hoverIndicator, props.theme);
}, function (props) {
  return !props.plain && 'box-shadow: 0px 0px 0px 2px ' + getHoverColor(props) + ';';
}, function (props) {
  return !props.plain && !props.primary && '\n        // TODO: revisit this\n        svg {\n          fill: ' + props.theme.global.hover.textColor + ';\n          stroke: ' + props.theme.global.hover.textColor + ';\n          transition: none;\n        }\n      ';
});

var fillStyle = '\n  width: 100%;\n  max-width: none;\n  flex-grow: 1;\n';

var plainFocusStyle = (0, _styledComponents.css)(['box-shadow:0 0 3px 3px ', ';'], function (props) {
  return props.theme.global.focus.border.color || props.theme.global.colors.accent[0];
});

var plainStyle = (0, _styledComponents.css)(['color:inherit;border:none;padding:0;', ''], function (props) {
  return props.focus && plainFocusStyle;
});

var TEXT_ALIGN_MAP = {
  center: 'center',
  end: 'right',
  start: 'left'
};

var textAlignStyle = exports.textAlignStyle = (0, _styledComponents.css)(['text-align:', ';'], function (props) {
  return TEXT_ALIGN_MAP[props.align];
});

var StyledButton = _styledComponents2.default.button.withConfig({
  displayName: 'StyledButton__StyledButton'
})(['cursor:pointer;outline:none;font:inherit;text-decoration:none;font:inherit;margin:0;background-color:transparent;overflow:visible;text-transform:none;', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], function (props) {
  return !props.plain && (0, _styledComponents.css)(['border:', ' solid ', ';border-radius:', ';color:', ';text-align:center;display:inline-block;min-width:', ';max-width:', ';font-weight:', ';'], props.theme.button.border.width, props.theme.button.border.color || props.theme.global.colors.brand, props.theme.button.border.radius, props.theme.button.color || props.theme.global.colors.text, props.theme.button.minWidth, props.theme.button.maxWidth, props.theme.global.control.font.weight);
}, function (props) {
  return !props.disabled && !props.focus && hoverStyle;
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return !props.plain && (0, _utils.fontSize)(props.theme.global.control.font.size, props.theme.global.spacing);
}, function (props) {
  return !props.plain && !props.box && 'padding: ' + props.theme.button.padding.vertical + ' ' + props.theme.button.padding.horizontal + ';';
}, function (props) {
  if (props.primary) {
    return primaryStyle;
  } else if (props.accent) {
    return accentStyle;
  } else if (props.critical) {
    return criticalStyle;
  } else if (props.secondary) {
    return secondaryStyle;
  }
  return '';
}, function (props) {
  return props.focus && _utils.focusStyle;
}, (0, _utils.lapAndUp)('\n    transition: 0.1s ease-in-out;\n  '), function (props) {
  return props.plain && plainStyle;
}, function (props) {
  return props.fill && fillStyle;
}, function (props) {
  return props.align && textAlignStyle;
});

var StyledLabel = exports.StyledLabel = _styledComponents2.default.span.withConfig({
  displayName: 'StyledButton__StyledLabel'
})(['&:first-child:not(:last-child){margin-right:', 'px;}'], function (props) {
  return (0, _utils.parseMetricToInt)(props.theme.global.spacing) / 2;
});

var StyledIcon = exports.StyledIcon = _styledComponents2.default.span.withConfig({
  displayName: 'StyledButton__StyledIcon'
})(['display:inline-block;&:first-child:not(:last-child){margin-right:', 'px;}> *{vertical-align:bottom;}'], function (props) {
  return (0, _utils.parseMetricToInt)(props.theme.global.spacing) / 2;
});

exports.default = StyledButton.extend(_templateObject, function (props) {
  return props.theme.button.extend;
});