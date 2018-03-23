function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

import doc from './doc';

var InfiniteScroll = function (_Component) {
  _inherits(InfiniteScroll, _Component);

  function InfiniteScroll(props, context) {
    _classCallCheck(this, InfiniteScroll);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.increaseOffset = function () {
      var _this$props = _this.props,
          items = _this$props.items,
          onMore = _this$props.onMore,
          step = _this$props.step;
      var count = _this.state.count;

      _this.setState({ count: count + 1 },
      // call onMore if we've reached the end of the items
      function () {
        return onMore && (count + 1) * step >= items.length && onMore();
      });
    };

    _this.state = { count: 1 };
    return _this;
  }

  InfiniteScroll.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        items = _props.items,
        step = _props.step;
    var count = this.state.count;

    var displayCount = step * count;
    var waypointAt = displayCount - step / 2;
    return items.slice(0, displayCount).map(function (item, index) {
      return [children(item, index), index === waypointAt && React.createElement(Waypoint, {
        key: 'waypoint-trigger',
        onEnter: _this2.increaseOffset,
        bottomOffsetX: '-96px'
      })];
    });
  };

  return InfiniteScroll;
}(Component);

InfiniteScroll.defaultProps = {
  items: [],
  step: 50
};
export default InfiniteScroll;


if (process.env.NODE_ENV !== 'production') {
  doc(InfiniteScroll);
}