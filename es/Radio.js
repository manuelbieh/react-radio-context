function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}import React from'react';import{Consumer}from'./context';var Checkbox=function Checkbox(_ref){var value=_ref.value,props=_objectWithoutProperties(_ref,["value"]);return React.createElement(Consumer,null,function(_ref2){var name=_ref2.name,selectedValue=_ref2.selectedValue,onChange=_ref2.onChange;return React.createElement("input",_extends({},props,{type:"radio",name:name,value:(value||'').toString(),checked:(value||'').toString()===selectedValue,onChange:onChange}));});};export default Checkbox;