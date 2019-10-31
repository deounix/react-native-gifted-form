import React from 'react';
import createReactClass from 'create-react-class';
import {
  View,
  PixelRatio
} from 'react-native';
import DatePicker from 'react-native-date-picker';

var WidgetMixin = require('../mixins/WidgetMixin.js');


module.exports = createReactClass({
  mixins: [WidgetMixin],
  
  getDefaultProps() {
    return {
      type: 'DatePickerIOSWidget',
      getDefaultDate: () => { return new Date(); }
    };
  },
  
  getInitialState() {
    return {
      value: new Date(),
    };
  },
  
  componentDidMount() {
    this._onChange(this.props.getDefaultDate());
  },
  
  render() {
    return (
      <View style={this.getStyle('row')}>
        <DatePicker
          style={this.getStyle('picker')}
          {...this.props}
          onDateChange={date => this.props.onDateChange(date)}
          date={this.state.value}
        />
      </View>
    );
  },
  
  defaultStyles: {
    row: {
      backgroundColor: '#FFF',
      borderBottomWidth: 1 / PixelRatio.get(),
      borderColor: '#c8c7cc',
    },
    picker: {
    },
  },
  
});
