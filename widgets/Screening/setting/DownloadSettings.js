// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Screening/setting/DownloadSettings.html":'\x3cdiv\x3e\r\n  \x3c!--Download Settings--\x3e\r\n  \x3cfieldset class\x3d"esriCTFieldSet esriCTDownloadTabFieldSet"\x3e\r\n    \x3clegend class\x3d"esriCTFieldSetLegend"\x3e${nls.downloadTab.downloadLegend}\x3c/legend\x3e\r\n    \x3c!--Sync enable download Option--\x3e\r\n    \x3cform data-dojo-attach-point\x3d"downloadOptionForm" class\x3d"esriCTDownloadOptionForm"\x3e\r\n      \x3c!--Sync-enable feature service option--\x3e\r\n      \x3cdiv class\x3d"esriCTSyncEnableOptionDiv"\x3e\r\n        \x3c!--Sync-enable radio button--\x3e\r\n        \x3cinput class\x3d"esriCTDownloadRadioButton" id\x3d"syncEnableOption" name\x3d"downloadOption" type\x3d"radio" class\x3d"jimu-radio-btn" data-dojo-type\x3d"dijit/form/RadioButton" value\x3d"syncEnable"\r\n          data-dojo-attach-point\x3d"syncEnableRadioButton" data-dojo-props\x3d"group:\'radioButtonDownloadOption\'"\x3e\r\n        \x3clabel class\x3d"esriCTDownloadOptionLabel esriCTDownloadLabel" for\x3d"syncEnableOption"\x3e\r\n          ${nls.downloadTab.syncEnableOptionLabel}\r\n        \x3c/label\x3e\r\n        \x3c!--Sync-enable download option label and hint container--\x3e\r\n        \x3cdiv class\x3d"esriCTDownloadLabelDiv"\x3e\r\n          \x3cdiv class\x3d"esriCTHint"\x3e\r\n            ${nls.downloadTab.syncEnableOptionHint}\r\n            \x3cbr\x3e${nls.downloadTab.syncEnableOptionNote}\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--Table representation of download file options for each layer--\x3e\r\n      \x3cdiv class\x3d"esriCTLayerDownloadOptionTable" data-dojo-attach-point\x3d"downloadOptionTable"\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--Extract data task geoprocessing service option--\x3e\r\n      \x3cdiv class\x3d"esriCTGPServiceOptionDiv"\x3e\r\n        \x3c!--Extract data task radio button--\x3e\r\n        \x3cinput class\x3d"esriCTDownloadRadioButton" id\x3d"gpServiceOption" name\x3d"downloadOption" type\x3d"radio" class\x3d"jimu-radio-btn" data-dojo-type\x3d"dijit/form/RadioButton" value\x3d"extractDataTask"\r\n          data-dojo-attach-point\x3d"gpServiceRadioButton" data-dojo-props\x3d"group:\'radioButtonDownloadOption\'"\x3e\r\n        \x3c!--Extract data task download option label and hint container--\x3e\r\n        \x3clabel class\x3d"esriCTDownloadOptionLabel esriCTDownloadLabel" for\x3d"gpServiceOption"\x3e\r\n          ${nls.downloadTab.extractDataTaskOptionLabel}\r\n        \x3c/label\x3e\r\n        \x3cdiv class\x3d"esriCTDownloadLabelDiv"\x3e\r\n          \x3cdiv class\x3d"esriCTHint"\x3e\r\n            ${nls.downloadTab.extractDataTaskOptionHint}\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--Extract data task INPUT Container--\x3e\r\n      \x3cdiv class\x3d"esriCTDownloadTabInputContainer esriCTHidden" data-dojo-attach-point\x3d"extractDataTaskInputContainer"\x3e\r\n        \x3c!--Extract data task INPUT TEXTBOX label--\x3e\r\n        \x3cdiv class\x3d"esriCTDownloadTabLabel"\x3e\r\n          ${nls.downloadTab.GPTaskLabel}\r\n        \x3c/div\x3e\r\n        \x3c!--Extract data task TEXTBOX--\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"extractDataTaskTextBox" class\x3d"esriCTDownloadTabTextbox" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n          data-dojo-props\x3d\'required:true,trim:true,disabled:true\'\x3e\r\n        \x3c/div\x3e\r\n        \x3c!--Set Button--\x3e\r\n        \x3cdiv class\x3d"jimu-btn jimu-float-trailing esriCTDownloadTabSetButton" data-dojo-attach-point\x3d"extractDataTaskSetButton" title\x3d"${nls.downloadTab.setButtonLabel}"\x3e\r\n          ${nls.downloadTab.setButtonLabel}\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--User cannot download--\x3e\r\n      \x3cdiv class\x3d"esriCTCannotDownloadOptionDiv"\x3e\r\n        \x3c!--User cannot download radio button--\x3e\r\n        \x3cinput class\x3d"esriCTDownloadRadioButton" id\x3d"cannotDownloadOption" name\x3d"downloadOption" type\x3d"radio" class\x3d"jimu-radio-btn" data-dojo-type\x3d"dijit/form/RadioButton" value\x3d"cannotDownload"\r\n          data-dojo-attach-point\x3d"cannotDownloadRadioButton" data-dojo-props\x3d"group:\'radioButtonDownloadOption\'"\x3e\r\n        \x3c!--User cannot download option label div--\x3e\r\n        \x3clabel class\x3d"esriCTDownloadOptionLabel esriCTDownloadLabel" for\x3d"cannotDownloadOption"\x3e\r\n          ${nls.downloadTab.cannotDownloadOptionLabel}\r\n        \x3c/label\x3e\r\n      \x3c/div\x3e\r\n    \x3c/form\x3e\r\n  \x3c/fieldset\x3e\r\n  \x3c!--Report Settings--\x3e\r\n  \x3cfieldset class\x3d"esriCTFieldSet esriCTDownloadTabFieldSet"\x3e\r\n    \x3clegend class\x3d"esriCTFieldSetLegend"\x3e${nls.downloadTab.reportLegend}\x3c/legend\x3e\r\n    \x3cdiv class\x3d"esriCTReportSettingsContainer"\x3e\r\n      \x3c!--Print service URL container starts--\x3e\r\n      \x3cdiv class\x3d"esriCTDownloadTabInputContainer" data-dojo-attach-point\x3d"printGPServiceInputContainer"\x3e\r\n        \x3c!--Print Service url LABEL--\x3e\r\n        \x3cdiv class\x3d"esriCTDownloadTabLabel"\x3e\r\n          ${nls.downloadTab.printGPServiceLabel}\r\n        \x3c/div\x3e\r\n        \x3c!--Print Service url TEXTBOX--\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"printGPServiceTextBox" class\x3d"esriCTDownloadTabTextbox" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n          data-dojo-props\x3d\'required:true,trim:true,disabled:true\'\x3e\r\n        \x3c/div\x3e\r\n        \x3c!--Set BUTTON--\x3e\r\n        \x3cdiv class\x3d"jimu-btn jimu-float-trailing esriCTDownloadTabSetButton" data-dojo-attach-point\x3d"printGPServiceSetButton" title\x3d"${nls.downloadTab.setButtonLabel}"\x3e\r\n          ${nls.downloadTab.setButtonLabel}\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--Print service URL container ends--\x3e\r\n      \x3c!-- Print layout container starts --\x3e\r\n      \x3c!-- Defaut layout starts --\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"defaultLayoutTable" class\x3d"esriCTDefaultLayoutTable"\x3e\x3c/div\x3e\r\n      \x3c!-- Default layout ends --\x3e\r\n      \x3c!-- Custom Layout button starts --\x3e\r\n      \x3cdiv class\x3d"esriCTAddCustomLayoutParentContainer esriCTCustomOptionBtnAddSection esriCTCustomOptionButtonDisable" data-dojo-attach-point\x3d"addCustomOptionButton"\x3e\r\n        \x3cspan class\x3d"esriCTCustomOptionBtnAddIcon esriCTCustomOptionBtnAddIconDisable" data-dojo-attach-point\x3d"addCustomOptionButtonIcon"\x3e\x3c/span\x3e\r\n        \x3cspan class\x3d"esriCTCustomOptionBtnAddLabel"\x3e${nls.downloadTab.addCustomLayoutTitle}\x3c/span\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTHint esriCTCustomLayoutHintText"\x3e${nls.downloadTab.customLayoutOptionHint}\x3c/div\x3e\r\n      \x3c!-- Custom Layout button ends --\x3e\r\n      \x3c!-- Custom layout starts --\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"customLayoutTable" class\x3d"esriCTCustomLayoutTable"\x3e\x3c/div\x3e\r\n      \x3c!-- Custom layout ends --\x3e\r\n      \x3c!-- Default print layout option starts --\x3e\r\n      \x3cdiv class\x3d"esriCTDefaultPrintTemplateContainer"\x3e\r\n        \x3cdiv class\x3d"esriCTDefaultPrintTemplateText"\x3e${nls.downloadTab.reportDefaultOptionLabel}\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTDefaultPrintTemplateDropdown" data-dojo-attach-point\x3d"defaultPrintTemplateDropdown"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c!-- Default print layout option ends --\x3e\r\n      \x3c!-- Print layout container ends --\x3e\r\n      \x3c!--Logo chooser starts--\x3e\r\n      \x3cdiv class\x3d"esriCTLogoChooserMainContainer"\x3e\r\n        \x3cdiv class\x3d"esriCTDownloadTabLabel"\x3e\r\n          ${nls.downloadTab.logoLabel}\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTLogoChooserDiv"\x3e\r\n          \x3cdiv class\x3d"esriCTImageChooserPreviewContainer"\x3e\r\n            \x3cimg class\x3d"esriCTImageChooserPreview" data-dojo-attach-point\x3d"imageChooserPreview"\x3e\r\n            \x3cdiv class\x3d"esriCTLogoChooser" data-dojo-attach-point\x3d"logoChooserNode"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTHint"\x3e\r\n            ${nls.downloadTab.logoChooserHint}\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--Logo chooser ends--\x3e\r\n      \x3c!--Report Title container start--\x3e\r\n      \x3cdiv class\x3d"esriCTDownloadTabReportTitleContainer" data-dojo-attach-point\x3d"reportTitle"\x3e\r\n        \x3c!--Report Title  LABEL--\x3e\r\n        \x3cdiv class\x3d"esriCTDownloadTabLabel"\x3e\r\n          ${nls.downloadTab.reportTitleLabel}\r\n        \x3c/div\x3e\r\n        \x3c!--Report Title  TEXTAREA--\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"reportTitleTextBox" class\x3d"esriCTDownloadTabReportInputNode" data-dojo-type\x3d"dijit/form/ValidationTextBox"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--Report Title container end--\x3e\r\n      \x3c!--Column title Color Picker container starts--\x3e\r\n      \x3cdiv class\x3d"esriCTDownloadTabReportTitleContainer" data-dojo-attach-point\x3d"reportTitle"\x3e\r\n        \x3cdiv class\x3d"esriCTDownloadTabLabel"\x3e\r\n          ${nls.downloadTab.columnTitleColorPickerLabel}\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTDownloadTabReportInputNode"\x3e\r\n          \x3cdiv class\x3d"esriCTColorPickerPreviewField" data-dojo-attach-point\x3d"columnTitleColorPickerNode"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--Column title Color Picker container ends--\x3e\r\n      \x3c!--Footnote container starts--\x3e\r\n      \x3cdiv class\x3d"esriCTFootnoteContainer"\x3e\r\n        \x3c!--Footnote LABEL--\x3e\r\n        \x3cdiv class\x3d"esriCTDownloadTabLabel"\x3e\r\n          ${nls.downloadTab.footnoteLabel}\r\n        \x3c/div\x3e\r\n        \x3c!--Footnote TEXTAREA--\x3e\r\n        \x3ctextarea class\x3d"esriCTFootnoteTextArea" data-dojo-attach-point\x3d"footnoteTextArea" rows\x3d"5"\x3e\x3c/textarea\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--Footnote container ends--\x3e\r\n    \x3c/div\x3e\r\n  \x3c/fieldset\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin dojo/text!./DownloadSettings.html dojo/dom-class dojo/_base/lang dojo/on dojo/query dojo/dom-attr dojo/_base/html dojo/dom-construct dojo/string dojo/_base/Color jimu/BaseWidgetSetting jimu/dijit/CheckBox jimu/dijit/SimpleTable jimu/dijit/GpSource jimu/dijit/Popup jimu/dijit/Message jimu/dijit/ImageChooser jimu/portalUtils jimu/dijit/ColorPicker esri/request dojo/query dijit/form/Select dijit/form/ValidationTextBox dojo/_base/array jimu/dijit/PageUtils jimu/utils dojo/DeferredList dijit/form/RadioButton".split(" "),
function(A,B,C,h,d,k,l,w,u,g,n,D,E,F,x,y,G,H,r,I,J,p,K,v,z,f,q,m,L){return A([E,B],{templateString:C,baseClass:"jimu-widget-screening-download-settings",map:null,loadingIndicator:null,downloadOptions:null,_layerIndex:0,_layers:[],_extractDataTaskDownloadOptions:[],_extractDataTaskURL:"",_printTaskURL:"",_logo:"",_tableHeaderColor:null,_defaultOptions:{"A3 Portrait":{Orientation:"Portrait",SizeName:"A3"},"A3 Landscape":{Orientation:"Landscape",SizeName:"A3"},"A4 Portrait":{Orientation:"Portrait",SizeName:"A4"},
"A4 Landscape":{Orientation:"Landscape",SizeName:"A4"},"Letter ANSI A Portrait":{Orientation:"Portrait",SizeName:"Letter_ANSI_A"},"Letter ANSI A Landscape":{Orientation:"Landscape",SizeName:"Letter_ANSI_A"},"Tabloid ANSI B Portrait":{Orientation:"Portrait",SizeName:"Tabloid_ANSI_B"},"Tabloid ANSI B Landscape":{Orientation:"Landscape",SizeName:"Tabloid_ANSI_B"}},_pageSize:[],_customLayoutTable:null,_buddyTaskChoiceList:{},_customDropdownOption:[],_defaultPrintTemplateDropdownOption:[],_printServiceChoiceList:[],
_defaultPrintTemplateDropdownOptionObj:null,_clonedConfigurationCustomOptions:null,_buddyTaskEndPoint:["Get Layout Templates Info","Get Layout Templates Info Task"],_lastSelectedCustomDropdownRow:null,_isCustomOptionNoDefault:!1,constructor:function(a){this.downloadOptions=this.loadingIndicator=this.map=null;this._layerIndex=0;this._layers=[];this._extractDataTaskDownloadOptions=[];this._logo=this._printTaskURL=this._extractDataTaskURL="";this._customLayoutTable=this._tableHeaderColor=null;this._buddyTaskChoiceList=
{};this._customDropdownOption=[];this._defaultPrintTemplateDropdownOption=[];this._printServiceChoiceList=[];this._lastSelectedCustomDropdownRow=this._clonedConfigurationCustomOptions=this._defaultPrintTemplateDropdownOptionObj=null;d.mixin(this,a)},postCreate:function(){this._pageSize=[{value:null,label:null},{value:"MILLIMETER",label:this.nls.downloadTab.pageSizeUnits.millimeters},{value:"INCH",label:this.nls.units.inches},{value:"POINT",label:this.nls.downloadTab.pageSizeUnits.points},{value:"CENTIMETER",
label:this.nls.units.centimeters}];var a,b,c,e,t;this._initSyncEnableOptionTable();this._syncEnableOptionTable&&(this._layers=[],this._syncEnableOptionTable.clear());if(this.downloadOptions&&this.downloadOptions.layers){this._layers=this.downloadOptions.layers;var g=[];f.forEach(this.downloadOptions.layers,d.hitch(this,function(a){a=p({url:a.url+"?f\x3dpjson"});g.push(a)}));(new L(g)).then(d.hitch(this,function(a){f.forEach(a,d.hitch(this,function(a,b){a[0]?(a={version:a[1].currentVersion,capabilities:a[1].capabilities},
this.downloadOptions.layers[b]&&this._setFileOptionDataInTable(this.downloadOptions.layers[b],a)):a[1].name&&"Error"===a[1].name||(a={version:this.layerInfosObj.getLayerInfoById(this.downloadOptions.layers[b].id).layerObject.version,capabilities:""},this._setFileOptionDataInTable(this.downloadOptions.layers[b],a))}))}))}this.downloadOptions&&this.downloadOptions.type?this._chooseDownloadOption(this.downloadOptions.type,!0):this.syncEnableRadioButton.set("checked",!0);this._attachDownloadOptionEvent();
this.reportSettings&&this.reportSettings.printTaskURL&&""!==this.reportSettings.printTaskURL?(this.printGPServiceTextBox.set("value",this.reportSettings.printTaskURL),this._printTaskURL=this.reportSettings.printTaskURL):(t=I.getPortal(this.appConfig.portalUrl).helperServices)&&t.printTask.url&&(this.printGPServiceTextBox.set("value",t.printTask.url),this._printTaskURL=t.printTask.url);this.reportSettings&&this.reportSettings.footnote&&""!==this.reportSettings.footnote&&(this.footnoteTextArea.value=
this.reportSettings.footnote);a={portalUrl:this.appConfig.portalUrl};this.own(k(this.extractDataTaskSetButton,"click",d.hitch(this,function(){b=new y(a);e=this._onSetButtonClick(b);this._attachExtractDataTaskGPSourceEvents(b,e)})));this.own(k(this.printGPServiceSetButton,"click",d.hitch(this,function(){c=new y(a);e=this._onSetButtonClick(c);this._attachPrintReportGPSourceEvents(c,e)})));this._initImageChooser();this._tableHeaderColor=this._createColorPicker(this.reportSettings.columnTitleColor,this.columnTitleColorPickerNode);
this.reportTitleTextBox.set("value",this.reportSettings.reportTitle);this.own(k(this.addCustomOptionButton,"click",d.hitch(this,function(){h.contains(this.addCustomOptionButton,"esriCTCustomOptionButtonDisable")||(this._isCustomOptionNoDefault&&this._emptyDefaultDropDown(),this._addCustomOptionsInTable())})));this._clonedConfigurationCustomOptions=d.clone(this.reportSettings);this._destroyLayouts();this.loadingIndicator.show();this._fetchChoiceList()},_attachExtractDataTaskGPSourceEvents:function(a,
b){this.own(k(a,"ok",d.hitch(this,function(a){a&&0<a.length&&a[0].url&&this._requestExtractDataTaskURLInfo(a[0].url,b)})));this.own(k(a,"cancel",d.hitch(this,function(){b.close()})))},getExtractDataTaskURL:function(){return this._extractDataTaskURL?this._extractDataTaskURL:""},_attachPrintReportGPSourceEvents:function(a,b){this.own(k(a,"ok",d.hitch(this,function(a){a&&0<a.length&&a[0].url?(this.printGPServiceTextBox.set("value",a[0].url),this._printTaskURL=a[0].url,this._clonedConfigurationCustomOptions=
null,this._destroyLayouts(),this.loadingIndicator.show(),this._fetchChoiceList()):(this.printGPServiceTextBox.set("value",""),this._printTaskURL="");b.close()})));this.own(k(a,"cancel",d.hitch(this,function(){b.close()})))},_destroyLayouts:function(){g.empty(this.defaultLayoutTable);g.empty(this.customLayoutTable);g.empty(this.defaultPrintTemplateDropdown);this._customLayoutTable=null;this._buddyTaskChoiceList={};this._customDropdownOption=[];this._printServiceChoiceList=[];this._defaultPrintTemplateDropdownOption=
[];this._customLayoutTable&&g.destroy(this._customLayoutTable);this._defaultPrintTemplateDropdownOptionObj&&g.destroy(this._defaultPrintTemplateDropdownOptionObj.domNode);this._isCustomOptionNoDefault=!1},_initSyncEnableOptionTable:function(){this._syncEnableOptionTable=new x({fields:[{name:this.nls.downloadTab.syncEnableTableHeaderTitle.layerNameLabel,title:this.nls.downloadTab.syncEnableTableHeaderTitle.layerNameLabel,type:"empty",width:"40%"},{name:this.nls.downloadTab.syncEnableTableHeaderTitle.csvFileFormatLabel,
title:this.nls.downloadTab.syncEnableTableHeaderTitle.csvFileFormatLabel,"class":"esriCTTableHeader",type:"empty",width:"15%"},{name:this.nls.downloadTab.syncEnableTableHeaderTitle.fileGDBFormatLabel,title:this.nls.downloadTab.syncEnableTableHeaderTitle.fileGDBFormatLabel,"class":"esriCTTableHeader",type:"empty",width:"15%"},{name:this.nls.downloadTab.syncEnableTableHeaderTitle.ShapefileFormatLabel,title:this.nls.downloadTab.syncEnableTableHeaderTitle.ShapefileFormatLabel,type:"empty","class":"esriCTTableHeader",
width:"15%"},{name:this.nls.downloadTab.syncEnableTableHeaderTitle.allowDownloadLabel,title:this.nls.downloadTab.syncEnableTableHeaderTitle.allowDownloadLabel,"class":"esriCTTableHeader",type:"empty",width:"15%"}],selectable:!1});this._syncEnableOptionTable.placeAt(this.downloadOptionTable);this._syncEnableOptionTable.startup()},_setFileOptionDataInTable:function(a,b){var c;c=this._syncEnableOptionTable.addRow({});c.success&&c.tr&&this.checkLayerForDownloadOptions({url:a.url,id:a.id,layerName:a.layerName,
allowDownload:a.allowDownload,layerVersion:b.version,capabilities:b.capabilities},c.tr.rowIndex)},checkLayerForDownloadOptions:function(a,b){var c,e;e=this._getTableRow(b);e.success&&e.tr&&(c={url:a.url,layerName:a.layerName,id:a.id,allowDownload:a.hasOwnProperty("allowDownload")?a.allowDownload:!0},this._addLayerTitle(e.tr,a.layerName),this._addFileOption(e.tr,1),c.downloadingFileOption=[],c.downloadingFileOption.push("csv"),1<a.capabilities.split("Sync").length&&10.4<=a.layerVersion&&(this._addFileOption(e.tr,
2),c.downloadingFileOption.push("filegdb"),m.isHostedService(a.url)&&(this._addFileOption(e.tr,3),c.downloadingFileOption.push("shapefile"))),this._addAllowDownloadCheckbox(e.tr,c),this._setLayerDownloadInfo(c,b),this.loadingIndicator.hide())},_getTableRow:function(a){-1<a&&this._syncEnableOptionTable.tbody.rows[a]?(a={tr:this._syncEnableOptionTable.tbody.rows[a],success:!0},this._removeFileOptions(a.tr)):a=this._syncEnableOptionTable.addRow({});return a},_setLayerDownloadInfo:function(a,b){-1<b?
this._layers.splice(b,1,a):this._layers.push(a)},_addLayerTitle:function(a,b){if(a=l(".simple-table-cell",a)[0])a.innerHTML=b},_removeFileOptions:function(a){var b;a=l(".simple-table-cell",a);for(b=1;4>b;b++)h.remove(a[b],"esriCTAvailableDownloadOption")},_addFileOption:function(a,b){(a=l(".simple-table-cell",a)[b])&&h.add(a,"esriCTAvailableDownloadOption")},_addAllowDownloadCheckbox:function(a,b){var c;if(a=l(".simple-table-cell",a)[4])g.empty(a),c=new F({checked:b.allowDownload,"class":"esriCTAllowDownloadCheckbox"}),
c.placeAt(a),this.own(k(c,"change",d.hitch(this,function(){b.allowDownload=w.get(c,"checked")})))},_attachDownloadOptionEvent:function(){var a,b;b=l("input[type\x3dradio]:checked",this.downloadOptionForm)[0].value;a=l("input",this.downloadOptionForm);f.forEach(a,d.hitch(this,function(a){this.own(k(a,"click",d.hitch(this,function(c){a.value!==b&&(this._chooseDownloadOption(c.currentTarget.value,!1),b=c.currentTarget.value)})))}))},_chooseDownloadOption:function(a,b){switch(a){case "syncEnable":this.syncEnableRadioButton.set("checked",
!0);h.remove(this.downloadOptionTable,"esriCTHidden");h.add(this.extractDataTaskInputContainer,"esriCTHidden");b&&this._resetExtractDataTaskOption(!0);break;case "extractDataTask":this.gpServiceRadioButton.set("checked",!0);h.add(this.downloadOptionTable,"esriCTHidden");h.remove(this.extractDataTaskInputContainer,"esriCTHidden");b&&this.downloadOptions&&this.downloadOptions.extractDataTaskURL&&this._resetExtractDataTaskOption(!1);break;case "cannotDownload":this.cannotDownloadRadioButton.set("checked",
!0),h.add(this.downloadOptionTable,"esriCTHidden"),h.add(this.extractDataTaskInputContainer,"esriCTHidden"),b&&this._resetExtractDataTaskOption(!0)}},getLayers:function(){return this._layers},deleteRow:function(a){this._syncEnableOptionTable.deleteRow(this._syncEnableOptionTable.tbody.rows[a]);this._layers.splice(a,1)},rowUp:function(a){var b,c;-1<a&&this._syncEnableOptionTable.tbody.rows[a+1]&&(u.place(this._syncEnableOptionTable.tbody.rows[a],this._syncEnableOptionTable.tbody.rows[a+1],"after"),
this._syncEnableOptionTable.updateUI(),b=this._layers[a],c=this._layers[a+1],this._layers.splice(a,2,c,b))},rowDown:function(a){var b,c;a<this._syncEnableOptionTable.tbody.rows.length&&this._syncEnableOptionTable.tbody.rows[a-1]&&(u.place(this._syncEnableOptionTable.tbody.rows[a],this._syncEnableOptionTable.tbody.rows[a-1],"before"),this._syncEnableOptionTable.updateUI(),b=this._layers[a],c=this._layers[a-1],this._layers.splice(a-1,2,b,c))},_onSetButtonClick:function(a){return new G({titleLabel:this.nls.downloadTab.setGPTaskTitle,
width:830,height:560,content:a})},_requestExtractDataTaskURLInfo:function(a,b){var c;c=!1;this.loadingIndicator.show();p({url:a+"?f\x3dpjson"}).then(d.hitch(this,function(e){(c=this._validateExtractDataTask(e))?(this.extractDataTaskTextBox.set("value",a),this._extractDataTaskURL=a):(this._showMessage(this.nls.downloadTab.errorMessages.invalidGPTaskURL),this.extractDataTaskTextBox.set("value",""),this._extractDataTaskURL="");b.close();this.loadingIndicator.hide()}),d.hitch(this,function(){this._showMessage(this.nls.downloadTab.errorMessages.invalidGPTaskURL);
this.extractDataTaskTextBox.set("value","");this._extractDataTaskURL="";this.loadingIndicator.hide();b.close()}))},_validateExtractDataTask:function(a){var b,c,e;b=c=e=!1;return a&&"esriExecutionTypeAsynchronous"===a.executionType&&(f.forEach(a.parameters,d.hitch(this,function(a){switch(a.name){case "Area_of_Interest":b=this._checkAOIParam(a);break;case "Feature_Format":c=this._checkFeatureFormatParam(a);break;case "Output_Zip_File":e=this._checkOutputParam(a)}})),b&&c&&e)?!0:!1},_checkAOIParam:function(a){return"GPFeatureRecordSetLayer"===
a.dataType?a.defaultValue&&"esriGeometryPolygon"!==a.defaultValue.geometryType?!1:!0:!1},_checkFeatureFormatParam:function(a){var b;b=!1;this._extractDataTaskDownloadOptions=[];return"GPString"===a.dataType&&a.choiceList&&0<a.choiceList.length?(this._extractDataTaskDownloadOptions.push("csv"),-1<a.choiceList.indexOf("File Geodatabase - GDB - .gdb")&&(this._extractDataTaskDownloadOptions.push("filegdb"),b=!0),-1<a.choiceList.indexOf("Shapefile - SHP - .shp")&&(this._extractDataTaskDownloadOptions.push("shapefile"),
b=!0),b):!1},_checkOutputParam:function(a){return"GPDataFile"===a.dataType?!0:!1},_showMessage:function(a){(new H({message:a})).message=a},getDownloadingFileOptions:function(){var a,b;b=[];a=l("input[type\x3dradio]:checked",this.downloadOptionForm)[0].value;"syncEnable"===a?b=this._getSyncEnableDownloadingOptions(this._layers):"extractDataTask"===a&&(b=this._extractDataTaskDownloadOptions);return b},_getSyncEnableDownloadingOptions:function(a){var b;b=[];f.some(a,d.hitch(this,function(a){a.allowDownload&&
f.some(a.downloadingFileOption,d.hitch(this,function(a){-1===b.indexOf(a)&&b.push(a)}))}));return b},getPrintReportGPServiceURL:function(){return this._printTaskURL?this._printTaskURL:""},getReportTitle:function(){return this.reportTitleTextBox.value},getTableHeaderColor:function(){var a=this._tableHeaderColor.color.toHex();return a?a:""},getFootnoteForReport:function(){return this.footnoteTextArea.value?this.footnoteTextArea.value:""},_initImageChooser:function(){this.logoChooser=new r({cropImage:!1,
showSelfImg:!1,goldenWidth:50,goldenHeight:50,displayImg:this.imageChooserPreview,format:[r.GIF,r.PNG,r.JPEG]});this.logoChooser.placeAt(this.logoChooserNode);this._createLogoPreview();h.add(this.logoChooser.domNode,"esriCTImageChooserContent")},_createLogoPreview:function(){var a,b;a=this.folderUrl+"/images/default-logo.png";this.reportSettings&&this.reportSettings.logo&&(b=this.reportSettings.logo,-1<b.indexOf("${appPath}")?(a=this.folderUrl.slice(0,this.folderUrl.lastIndexOf("widgets")),a=n.substitute(b,
{appPath:a})):a=b);w.set(this.imageChooserPreview,"src",a)},getLogo:function(){return this.logoChooser&&this.logoChooser.imageData?this.logoChooser.getImageData():this.reportSettings&&this.reportSettings.logo?this.reportSettings.logo:"${appPath}/widgets/Screening/images/default-logo.png"},_resetExtractDataTaskOption:function(a){a?(this.extractDataTaskTextBox.set("value",""),this._extractDataTaskURL="",this._extractDataTaskDownloadOptions=[]):(this.extractDataTaskTextBox.set("value",this.downloadOptions.extractDataTaskURL),
this._extractDataTaskURL=this.downloadOptions.extractDataTaskURL,this._extractDataTaskDownloadOptions=this.downloadOptions.downloadingFileOptions)},_createColorPicker:function(a,b){b=g.create("table",{cellspacing:"0",cellpadding:"0"},b);b=g.create("tr",{style:"height:30px"},b);g.create("td",{},b);b=g.create("td",{},b);b=g.create("div",{"class":"esriCTColorChooserNode"},b);b=new J(null,g.create("div",{},b));b.setColor(new D(a));return b},_addFieldsRow:function(a,b){var c,e,d,f,g,h,k,l;c=this._customLayoutTable.addRow({});
c.success&&c.tr&&(c=c.tr,e=K(".simple-table-cell",c),f=e[0],g=e[1],h=e[2],k=e[3],e=a.Width,d=a.Height,l=null!==e&&""!==e&&void 0!==e||null!==d&&""!==d&&void 0!==d?a.PageUnits?a.PageUnits:null:null,this._displayLayout(f,c,a.SizeName),this._displayWidth(g,c,e,b),this._displayHeight(h,c,d,b),this._displayPageUnits(k,l,c))},_emptyDefaultDropDown:function(){for(var a in this._defaultOptions)this._defaultOptions.hasOwnProperty(a)&&q.PageSizes[this._defaultOptions[a].SizeName]&&this._defaultPrintTemplateDropdownOptionObj.removeOption({label:a,
value:a})},_addOptionsInDefaultDropdown:function(){for(var a in this._defaultOptions)this._defaultOptions.hasOwnProperty(a)&&q.PageSizes[this._defaultOptions[a].SizeName]&&this._defaultPrintTemplateDropdownOptionObj.addOption({label:a,value:a});this._defaultPrintTemplateDropdownOptionObj.set("value","Letter ANSI A Portrait")},_removeCustomOptionFromDefaultDropdown:function(){f.forEach(this._customDropdownOption,d.hitch(this,function(a){this._defaultPrintTemplateDropdownOptionObj.removeOption({label:a.value,
value:a.value})}));this._defaultPrintTemplateDropdownOption=[];f.forEach(this._defaultPrintTemplateDropdownOptionObj.options,d.hitch(this,function(a){this._defaultPrintTemplateDropdownOption.push({label:a.value,value:a.value})}))},_addConfiguredCustomOptionInDefaultDropdown:function(){var a;this._customLayoutTable&&(a=this._customLayoutTable.getRows(),f.forEach(a,d.hitch(this,function(a){var b=!1;m.has("ie")||m.has("edge")?f.forEach(this._defaultPrintTemplateDropdownOptionObj.options,d.hitch(this,
function(c){c.value===a.customOptionLayoutDropdownObj.value&&(b=!0)})):b=this._defaultPrintTemplateDropdownOptionObj.options.find(function(b){return b.value===a.customOptionLayoutDropdownObj.value});b||this._defaultPrintTemplateDropdownOptionObj.addOption({label:a.customOptionLayoutDropdownObj.value,value:a.customOptionLayoutDropdownObj.value})})))},_displayLayout:function(a,b,c){c=new v({"class":"esriCTFieldChooserDropdown",options:d.clone(this._customDropdownOption),value:c});c.placeAt(a);this.own(k(c,
"MouseEnter",d.hitch(this,function(a){this._lastSelectedCustomDropdownRow=a.currentTarget.parentNode.parentNode})));this.own(k(c,"click",d.hitch(this,function(a){this._lastSelectedCustomDropdownRow=a.currentTarget.parentNode.parentNode})));this.own(k(c,"change",d.hitch(this,function(a){this._buddyTaskChoiceList[a]?this._lastSelectedCustomDropdownRow&&(this._lastSelectedCustomDropdownRow.customOptionHeightTextbox.set("value",this._buddyTaskChoiceList[a].pageSize[1]),this._lastSelectedCustomDropdownRow.customOptionWidthTextbox.set("value",
this._buddyTaskChoiceList[a].pageSize[0]),this._buddyTaskChoiceList[a].pageUnits?this._lastSelectedCustomDropdownRow.customOptionPageUnitsDropdownObj.set("value",this._buddyTaskChoiceList[a].pageUnits):this._lastSelectedCustomDropdownRow.customOptionPageUnitsDropdownObj.set("value","")):(this._lastSelectedCustomDropdownRow.customOptionHeightTextbox.set("value",""),this._lastSelectedCustomDropdownRow.customOptionWidthTextbox.set("value",""),this._lastSelectedCustomDropdownRow.customOptionPageUnitsDropdownObj.set("value",
""));this._removeCustomOptionFromDefaultDropdown();this._addConfiguredCustomOptionInDefaultDropdown()})));c.startup();b.customOptionLayoutDropdownObj=c},_displayWidth:function(a,b,c,d){d||isNaN(parseFloat(c))||(c=parseFloat(c));c=new z({"class":"esriCTFieldValidationTextBox",regExp:"^\\d+(\\.\\d+)?$",invalidMessage:this.nls.downloadTab.errorMessages.invalidWidth,value:c,required:!0});c.placeAt(a);c.startup();b.customOptionWidthTextbox=c},_displayHeight:function(a,b,c,d){d||isNaN(parseFloat(c))||(c=
parseFloat(c));c=new z({"class":"esriCTFieldValidationTextBox",regExp:"^\\d+(\\.\\d+)?$",invalidMessage:this.nls.downloadTab.errorMessages.invalidHeight,value:c,required:!0});c.placeAt(a);c.startup();b.customOptionHeightTextbox=c},_displayPageUnits:function(a,b,c){b=new v({"class":"esriCTFieldChooserDropdown",options:d.clone(this._pageSize),required:!0,value:b});b.placeAt(a);b.startup();c.customOptionPageUnitsDropdownObj=b},_getDistinctFieldsOptionsObj:function(a){var b=[];f.forEach(a,d.hitch(this,
function(a){b.push({label:this._entireFieldObj[a].alias||this._entireFieldObj[a].name,value:a})}));return b},_addDefaultPrintTemplateOptions:function(){this._defaultPrintTemplateDropdownOptionObj=new v({"class":"esriCTFieldChooserDropdown",options:this._defaultPrintTemplateDropdownOption});this._defaultPrintTemplateDropdownOptionObj.placeAt(this.defaultPrintTemplateDropdown);this._defaultPrintTemplateDropdownOptionObj.startup();this._clonedConfigurationCustomOptions&&""!==this._clonedConfigurationCustomOptions.defaultPrintOption&&
null!==this._clonedConfigurationCustomOptions.defaultPrintOption&&void 0!==this._clonedConfigurationCustomOptions.defaultPrintOption?this._defaultPrintTemplateDropdownOptionObj.set("value",this._clonedConfigurationCustomOptions.defaultPrintOption):this._defaultPrintTemplateDropdownOptionObj.set("value","Letter ANSI A Portrait")},_disableAddCustomLayoutButton:function(){h.add(this.addCustomOptionButton,"esriCTCustomOptionButtonDisable");h.add(this.addCustomOptionButtonIcon,"esriCTCustomOptionBtnAddIconDisable")},
_enableAddCustomLayoutButton:function(){h.remove(this.addCustomOptionButton,"esriCTCustomOptionButtonDisable");h.remove(this.addCustomOptionButtonIcon,"esriCTCustomOptionBtnAddIconDisable")},_fetchChoiceList:function(){this.loadingIndicator.show();p({url:this._printTaskURL,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(d.hitch(this,function(a){this._extractChoiceList(a);this._createCustomOptionDropdownList();0<this._customDropdownOption.length?this._checkBuddyTask(a):(this._disableAddCustomLayoutButton(),
this._addDefaultPrintTemplateOptions(),this.loadingIndicator.hide())}),d.hitch(this,function(){this._showMessage(this.nls.downloadTab.errorMessages.failtofetchChoiceList);this.loadingIndicator.hide()}))},_extractChoiceList:function(a){f.forEach(a.parameters,d.hitch(this,function(a){"Layout_Template"===a.name&&"Layout Template"===a.displayName&&(this._printServiceChoiceList=a.choiceList)}))},_checkBuddyTask:function(){p({url:this._printTaskURL.slice(0,this._printTaskURL.lastIndexOf("/")),content:{f:"json"},
handleAs:"json",callbackParamName:"callback"}).then(d.hitch(this,function(a){if(1<a.tasks.length){for(var b,c=0;c<a.tasks.length;c++)if(-1!==this._buddyTaskEndPoint.indexOf(a.tasks[c])){b=a.tasks[c];break}b?this._executeBuddyTaskSync(b):(0<this._customDropdownOption.length?(this._enableAddCustomLayoutButton(),this._displayChoiceList()):this._disableAddCustomLayoutButton(),this.loadingIndicator.hide())}else 0<this._customDropdownOption.length?(this._enableAddCustomLayoutButton(),this._displayChoiceList()):
(this._disableAddCustomLayoutButton(),this._addDefaultPrintTemplateOptions()),this.loadingIndicator.hide()}),d.hitch(this,function(){this._showMessage(this.nls.downloadTab.errorMessages.failtofetchbuddyTaskName);this.loadingIndicator.hide()}))},_executeBuddyTaskSync:function(a){p({url:this._printTaskURL.slice(0,this._printTaskURL.lastIndexOf("/"))+"/"+a+"/execute",content:{f:"json",outSR:102100},handleAs:"json",callbackParamName:"callback"}).then(d.hitch(this,function(a){0<a.results[0].value.length?
(this._enableAddCustomLayoutButton(),f.forEach(a.results[0].value,d.hitch(this,function(a){this._buddyTaskChoiceList[a.layoutTemplate]=a})),this._displayChoiceList()):this._disableAddCustomLayoutButton();this.loadingIndicator.hide()}),d.hitch(this,function(){this._showMessage(this.nls.downloadTab.errorMessages.failtofetchbuddyTaskDimension);this.loadingIndicator.hide()}))},_displayChoiceList:function(){this._createCustomLayoutTable();this._clonedConfigurationCustomOptions&&this._clonedConfigurationCustomOptions.customOptions&&
0<this._clonedConfigurationCustomOptions.customOptions.length&&this._addConfiguredCustomOptionsInTable();this._addDefaultPrintTemplateOptions()},_createCustomLayoutTable:function(){this._customLayoutTable=new x({fields:[{name:"field",title:"Layout",type:"empty",editable:"false",width:"40%"},{name:"field",title:"Width",type:"empty",editable:"true",width:"15%"},{name:"field",title:"Height",type:"empty",editable:"true",width:"15%"},{name:"field",title:"Page Units",type:"empty",editable:"false",width:"20%"},
{name:"actions",title:this.nls.common.actions,"class":"actions",type:"actions",actions:["up","down","delete"],width:"10%"}]});this._customLayoutTable.placeAt(this.customLayoutTable);u.setStyle(this._customLayoutTable.domNode,{height:"100%"});this._customLayoutTable.startup();this.own(k(this._customLayoutTable,"row-delete",d.hitch(this,function(){this._removeCustomOptionFromDefaultDropdown();0===this._customLayoutTable.getRows().length&&this._isCustomOptionNoDefault&&this._addOptionsInDefaultDropdown();
this._addConfiguredCustomOptionInDefaultDropdown()})))},_addConfiguredCustomOptionsInTable:function(){f.forEach(this._clonedConfigurationCustomOptions.customOptions,d.hitch(this,function(a){this._addFieldsRow(a,!0)}))},_addCustomOptionsInTable:function(){var a=this._customDropdownOption[0].value,b,c,e,g;e=c=null;g=this._pageSize[0].value;this._buddyTaskChoiceList[a]&&(c=this._buddyTaskChoiceList[a].pageSize[1],e=this._buddyTaskChoiceList[a].pageSize[0],this._buddyTaskChoiceList[a]&&this._buddyTaskChoiceList[a].pageUnits&&
(g=this._buddyTaskChoiceList[a].pageUnits));var h={};h[a]={Height:c,Width:e,SizeName:a,MapLayout:a,PageUnits:g};this._addFieldsRow(h[a],!1);m.has("ie")||m.has("edge")?f.forEach(this._defaultPrintTemplateDropdownOptionObj.options,d.hitch(this,function(c){c.value===a&&(b=c)})):b=this._defaultPrintTemplateDropdownOptionObj.options.find(function(b){return b.value===a});b||this._defaultPrintTemplateDropdownOptionObj.addOption({label:a,value:a,selected:!1})},_createCustomOptionDropdownList:function(){var a;
a=!1;f.forEach(this._printServiceChoiceList,d.hitch(this,function(b){var c=d.clone(b);if("MAP_ONLY"!==c){if(this._defaultOptions[c]){a=!0;var f=this._defaultOptions[c];this._defaultPrintTemplateDropdownOption.push({label:q.PageSizes[f.SizeName].SizeName+" "+q.Orientation[f.Orientation].Text,value:b})}this._defaultOptions[c]||this._customDropdownOption.push({value:c,label:c})}}));this._clonedConfigurationCustomOptions&&f.forEach(this._clonedConfigurationCustomOptions.customOptions,d.hitch(this,function(a){this._defaultPrintTemplateDropdownOption.push({label:a.SizeName,
value:a.SizeName})}));if(!(a||(0<this._customDropdownOption.length&&(this._isCustomOptionNoDefault=!0),this._clonedConfigurationCustomOptions&&this._clonedConfigurationCustomOptions.customOptions&&0<this._clonedConfigurationCustomOptions.customOptions.length)))for(var b in this._defaultOptions)this._defaultOptions.hasOwnProperty(b)&&q.PageSizes[this._defaultOptions[b].SizeName]&&this._defaultPrintTemplateDropdownOption.push({label:b,value:b})},getCustomOptions:function(){var a;a=[];if(this._customLayoutTable){var b=
this._customLayoutTable.getRows();f.forEach(b,d.hitch(this,function(b){a.push({SizeName:b.customOptionLayoutDropdownObj.value,Width:b.customOptionWidthTextbox.getValue(),Height:b.customOptionHeightTextbox.getValue(),MapLayout:b.customOptionLayoutDropdownObj.value,PageUnits:b.customOptionPageUnitsDropdownObj.value})}))}return a},validateCustomOptions:function(){var a,b;a=[];this._customLayoutTable&&(b=this._customLayoutTable.getRows(),f.forEach(b,d.hitch(this,function(b){b.customOptionWidthTextbox.isValid()||
a.push(n.substitute(this.nls.downloadTab.errorMessages.invalidLayoutWidth,{customLayoutOptionValue:b.customOptionLayoutDropdownObj.value}));b.customOptionHeightTextbox.isValid()||a.push(n.substitute(this.nls.downloadTab.errorMessages.invalidLayoutHeight,{customLayoutOptionValue:b.customOptionLayoutDropdownObj.value}));b.customOptionPageUnitsDropdownObj.isValid()||a.push(n.substitute(this.nls.downloadTab.errorMessages.invalidLayoutPageUnits,{customLayoutOptionValue:b.customOptionLayoutDropdownObj.value}))})));
if(0<a.length)return a;f.forEach(b,d.hitch(this,function(b){a.push({SizeName:b.customOptionLayoutDropdownObj.value})}));(b=this._getDuplicateValue(a))&&0<b.length?(a=[],a.push(n.substitute(this.nls.downloadTab.errorMessages.duplicateCustomOption,{duplicateValueSizeName:b[0].SizeName}))):a=[];return a},_getDuplicateValue:function(a){var b=0,c,d=a.length;for(b;b<d;b++){c=a[b];var f;f=m.has("ie")||m.has("edge")?Object.create(a):Object.assign([],a);f.splice(b,1);c=this._filterArray(f,c);if(0<c.length)break}return c},
_filterArray:function(a,b){return a.filter(function(a){return Object.keys(b).every(function(c){return a[c]===b[c]})})},getDefaultPrintOption:function(){return this._defaultPrintTemplateDropdownOptionObj.value},closeDownloadTabDropdowns:function(){this._defaultPrintTemplateDropdownOptionObj&&this._defaultPrintTemplateDropdownOptionObj.closeDropDown();var a;this._customLayoutTable&&(a=this._customLayoutTable.getRows(),f.forEach(a,d.hitch(this,function(a){a.customOptionLayoutDropdownObj.closeDropDown();
a.customOptionPageUnitsDropdownObj.closeDropDown()})))}})});