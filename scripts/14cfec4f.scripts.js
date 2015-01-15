"use strict";function removeVendorExtensions(a){if(!angular.isObject(a))return a;var b={};return Object.keys(a).forEach(function(c){"x-"!==c.toLowerCase().substring(0,2)&&(b[c]=removeVendorExtensions(a[c]))}),b}function load(a){var b,c;if(!angular.isString(a))throw new Error("load function only accepts a string");try{JSON.parse(a)}catch(d){b=d}if(!b)return jsyaml.dump(JSON.parse(a));try{jsyaml.load(a)}catch(d){c=d}if(!c)return a;throw new Error("load function called with an invalid string")}window.PhonicsApp=angular.module("PhonicsApp",["ngCookies","ngResource","ngSanitize","ui.router","ui.ace","ui.bootstrap","ngStorage","ngSanitize","jsonFormatter","hc.marked","ui.layout","mohsen1.json-schema-view","schemaForm"]),$(function(){$.getJSON("/config/defaults.json").done(function(a){window.$$$defaults$$$=a,angular.bootstrap(window.document,["PhonicsApp"])}).fail(function(){console.error("Failed to load defaults.json at","/config/defaults.json")})}),ace.define("ace/theme/atom_dark",["require","exports","module","ace/lib/dom"],function(a,b){b.isDark=!0,b.cssClass="ace-atom-dark",b.cssText=".ace-atom-dark {font-size:16px} .ace-atom-dark .ace_gutter {background: #1a1a1a;color: #868989}.ace-atom-dark .ace_print-margin {width: 1px;background: #1a1a1a}.ace-atom-dark {background-color: #1d1f21;color: #A8FF60}.ace-atom-dark .ace_cursor {color: white}.ace-atom-dark .ace_marker-layer .ace_selection {background: #444444}.ace-atom-dark.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #000000;border-radius: 2px}.ace-atom-dark .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-atom-dark .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #888888}.ace-atom-dark .ace_marker-layer .ace_highlight {border: 1px solid rgb(110, 119, 0);border-bottom: 0;box-shadow: inset 0 -1px rgb(110, 119, 0);margin: -1px 0 0 -1px;background: rgba(255, 235, 0, 0.1);}.ace-atom-dark .ace_marker-layer .ace_active-line {background: #2A2A2A}.ace-atom-dark .ace_gutter-active-line {background-color: #2A2A2A}.ace-atom-dark .ace_stack {background-color: rgb(66, 90, 44)}.ace-atom-dark .ace_marker-layer .ace_selected-word {border: 1px solid #888888}.ace-atom-dark .ace_invisible {color: #343434}.ace-atom-dark .ace_keyword,.ace-atom-dark .ace_meta,.ace-atom-dark .ace_storage,.ace-atom-dark .ace_storage.ace_type,.ace-atom-dark .ace_support.ace_type {color: #96CBFE}.ace-atom-dark .ace_keyword.ace_operator {color: #70C0B1}.ace-atom-dark .ace_constant.ace_character,.ace-atom-dark .ace_constant.ace_language,.ace-atom-dark .ace_constant.ace_numeric,.ace-atom-dark .ace_keyword.ace_other.ace_unit,.ace-atom-dark .ace_support.ace_constant,.ace-atom-dark .ace_variable.ace_parameter {color: #fe73fd}.ace-atom-dark .ace_constant.ace_other {color: #EEEEEE}.ace-atom-dark .ace_invalid {color: #CED2CF;background-color: #DF5F5F}.ace-atom-dark .ace_invalid.ace_deprecated {color: #CED2CF;background-color: #B798BF}.ace-atom-dark .ace_fold {background-color: #7AA6DA;border-color: #DEDEDE}.ace-atom-dark .ace_entity.ace_name.ace_function,.ace-atom-dark .ace_support.ace_function,.ace-atom-dark .ace_variable {color: #7AA6DA}.ace-atom-dark .ace_support.ace_class,.ace-atom-dark .ace_support.ace_type {color: #E7C547}.ace-atom-dark .ace_heading,.ace-atom-dark .ace_markup.ace_heading,.ace-atom-dark .ace_string {color: #B9CA4A}.ace-atom-dark .ace_entity.ace_name.ace_tag,.ace-atom-dark .ace_entity.ace_other.ace_attribute-name,.ace-atom-dark .ace_meta.ace_tag,.ace-atom-dark .ace_string.ace_regexp,.ace-atom-dark .ace_variable {color: #96CBFE}.ace-atom-dark .ace_comment {color: #7a7a7a}.ace-atom-dark .ace_c9searchresults.ace_keyword {color: #C2C280;}.ace-atom-dark .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYFBXV/8PAAJoAXX4kT2EAAAAAElFTkSuQmCC) right repeat-y}";var c=a("../lib/dom");c.importCssString(b.cssText,b.cssClass)}),PhonicsApp.config(["$provide",function(a){a.constant("snippets",[{name:"swagger",trigger:"sw",path:[],content:['swagger: "2.0"',"${1}"].join("\n")},{name:"info",trigger:"info",path:[],content:["info:","  version: ${1:0.0.0}","  title: ${2:title}","  description: ${3:description}","  termsOfService: ${4:terms}","  contact:","    name: ${5}","    url: ${6}","    email: ${7}","  license:","    name: ${8:MIT}","    url: ${9:http://opensource.org/licenses/MIT}","${10}"].join("\n")},{name:"paths",trigger:"pa",path:[],content:["paths:","  ${1}"].join("\n")},{name:"definitions",trigger:"def",path:[],content:["definitions:","  ${1}"].join("\n")},{name:"path",trigger:"path",path:["paths"],content:["/${1}:","  ${2}"].join("\n")},{name:"get",trigger:"get",path:["paths","*"],content:["${1:get}:","  summary: ${2}","  description: ${2}","  responses:","    ${3:response}","  parameters:","    ${4:parameter}","  tags: ${5:[]}","${6}"].join("\n")},{name:"post",trigger:"post",path:["paths","."],content:["${1:post}:","  summary: ${2}","  description: ${2}","  responses:","    ${3:response}","  parameters:","    ${4:parameter}","  tags: ${5:[]}","${6}"].join("\n")},{name:"put",trigger:"put",path:["paths","."],content:["${1:put}:","  summary: ${2}","  description: ${2}","  responses:","    ${3:response}","  parameters:","    ${4:parameter}","  tags: ${5:[]}","${6}"].join("\n")},{name:"delete",trigger:"delete",path:["paths","."],content:["${1:delete}:","  summary: ${2}","  description: ${2}","  responses:","    ${3:response}","  parameters:","    ${4:parameter}","  tags: ${5:[]}","${6}"].join("\n")},{name:"patch",trigger:"patch",path:["paths","."],content:["${1:patch}:","  summary: ${2}","  description: ${2}","  responses:","    ${3:response}","  parameters:","    ${4:parameter}","  tags: ${5:[]}","${6}"].join("\n")},{name:"options",trigger:"options",path:["paths","."],content:["${1:options}:","  summary: ${2}","  description: ${2}","  responses:","    ${3:response}","  parameters:","    ${4:parameter}","  tags: ${5:[]}","${6}"].join("\n")},{name:"parameter",trigger:"param",path:["paths",".",".","parameters"],content:["- name: ${1:parameter_name}","  in: ${2:in}","  description: ${3:description}","  type: ${4:string}","${5}"].join("\n")},{name:"response",trigger:"resp",path:["paths",".",".","responses"],content:["${1:code}:","  description: ${2}","  schema: ${3}","${4}"].join("\n")},{name:"200",trigger:"200",path:["paths",".",".","responses"],content:["200:","  description: ${1}","  schema:","    type: ${2}","${4}"].join("\n")},{name:"model",trigger:"mod|def",regex:"mod|def",path:["definitions"],content:["${1:ModelName}:","  properties:","    ${2}"]}])}]),function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("require","linker"),ga("linker:autoLink",["wordnik.github.io","apigee.github.io","swagger.wordnik.com","editor.swagger.wordnik.com","swagger.io"]),ga("create","UA-51231036-1","auto",{allowLinker:!0}),ga("send","pageview"),_.templateSettings={interpolate:/\{(.+?)\}/g},PhonicsApp.controller("MainCtrl",["$rootScope","$stateParams","$location","Editor","Storage","FileLoader","BackendHealthCheck","defaults",function(a,b,c,d,e,f,g,h){function i(){e.load("yaml").then(function(d){var g;b["import"]?(g=b["import"],c.search("import",null)):d||(g=h.examplesFolder+h.exampleFiles[0]),g&&f.loadFromUrl(g).then(function(b){b&&(e.save("yaml",b),a.editorValue=b)})})}a.$on("$stateChangeStart",d.initializeEditor),g.startChecking(),a.$on("$stateChangeStart",i),a.isPreviewMode="edit"!==b.mode,$("body").addClass(h.brandingCssClass),i()}]),PhonicsApp.controller("HeaderCtrl",["$scope","$modal","$stateParams","$state","$rootScope","Storage","Builder","FileLoader","ASTManager","Editor","Codegen","Preferences","defaults","strings",function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){function o(a){b.open({templateUrl:"templates/code-gen-error-modal.html",controller:"GeneralModal",size:"large",resolve:{data:function(){return a.data}}})}function p(){var b="text/plain";f.load("yaml").then(function(c){var d=jsyaml.load(c);d.info.version&&(d.info.version=String(d.info.version)),d.swagger&&(d.swagger=2===d.swagger?"2.0":String(d.swagger)),d=JSON.stringify(d,null,4);var e=new Blob([d],{type:b});a.jsonDownloadHref=window.URL.createObjectURL(e),a.jsonDownloadUrl=[b,"swagger.json",a.jsonDownloadHref].join(":");var f=new Blob([c],{type:b});a.yamlDownloadHref=window.URL.createObjectURL(f),a.yamlDownloadUrl=[b,"swagger.yaml",a.yamlDownloadHref].join(":")})}function q(){}a.breadcrumbs=c.path?[{active:!0,name:c.path}]:[],f.addChangeListener("progress",function(b){a.status=n.stausMessages[b],a.statusClass=null,b>0&&(a.statusClass="success"),0>b&&(a.statusClass="error")}),f.load("intro").then(function(b){b||m.disableNewUserIntro||(a.showAbout=!0,f.save("intro",!0))}),a.disableCodeGen=m.disableCodeGen,m.disableCodeGen||(k.getServers().then(function(b){a.servers=b}),k.getClients().then(function(b){a.clients=b})),a.getServer=function(a){k.getServer(a).then(q,o)},a.getClient=function(a){k.getClient(a).then(q,o)},a.showFileMenu=function(){return!m.disableFileMenu},a.showHeaderBranding=function(){return m.headerBranding},a.newProject=function(a){h.loadFromUrl("spec-files/guide.yaml").then(function(b){b=a?"":b,f.save("yaml",b),e.editorValue=b,i.refresh(),d.go("home",{mode:"edit"})})},a.assignDownloadHrefs=function(){p(a,f)},a.openImportFile=function(){b.open({templateUrl:"templates/file-import.html",controller:"FileImportCtrl",size:"large"})},a.openImportUrl=function(){b.open({templateUrl:"templates/url-import.html",controller:"UrlImportCtrl",size:"large"})},a.openPasteJSON=function(){b.open({templateUrl:"templates/paste-json.html",controller:"PasteJSONCtrl",size:"large"})},a.openAbout=function(){b.open({templateUrl:"templates/about.html",size:"large",controller:"ModalCtrl"})},a.toggleAboutEditor=function(b){a.showAbout=b},a.openEditorPreferences=j.showSettings,a.resetSettings=j.resetSettings,a.adjustFontSize=j.adjustFontSize,a.openExamples=function(){b.open({templateUrl:"templates/open-examples.html",controller:"OpenExamplesCtrl",size:"large"})},a.toggleLiveRender=function(){l.set("liveRender",!l.get("liveRender"))},a.isLiveRenderEnabled=function(){return!!l.get("liveRender")},a.showEditorMenuOptions=function(){return"edit"===d.params.mode}}]),PhonicsApp.controller("FileImportCtrl",["$scope","$modalInstance","$rootScope","$localStorage","FileLoader","Storage","ASTManager",function(a,b,c,d,e,f,g){var h;a.fileChanged=function(a){h=e.load(a)},a.ok=function(){angular.isString(h)&&(c.editorValue=h,f.save("yaml",h),g.refresh()),b.close()},a.isInvalidFile=function(){return null===h},a.isFileSelected=function(){return!!h},a.cancel=b.close}]),PhonicsApp.controller("EditorCtrl",["$scope","$rootScope","Editor","Builder","Storage","ASTManager",function(a,b,c,d,e,f){function g(){var a=b.editorValue;e.save("yaml",a),f.refresh()}var h=_.debounce(g,200);a.aceLoaded=c.aceLoaded,a.aceChanged=function(){e.save("progress",0),h()},c.ready(function(){e.load("yaml").then(function(a){b.editorValue=a,g(!0)})})}]),PhonicsApp.controller("PreviewCtrl",["Storage","Builder","ASTManager","Sorter","Editor","BackendHealthCheck","FocusedPath","TagManager","Preferences","$scope","$rootScope","$stateParams",function(a,b,c,d,e,f,g,h,i,j,k,l){function m(d,e){return i.get("liveRender")||e||!j.specs?(c.refresh(d),void((f.isHealthy()||k.isPreviewMode)&&b.buildDocs(d).then(o,p))):(k.isDirty=!0,void a.save("progress",1))}function n(a){var b={};angular.isString(l.tags)&&(b.limitToTags=l.tags.split(",")),q(d.sort(_.cloneDeep(a.specs),{})),j.specs=d.sort(a.specs,b),j.errors=a.errors,j.warnings=a.warnings}function o(b){n(b),j.errors=null,a.save("progress",2),k.isPreviewMode||e.clearAnnotation()}function p(b){n(b),b.errors.yamlError&&!k.isPreviewMode&&e.annotateYAMLErrors(b.errors.yamlError),a.save("progress",-1)}function q(a){angular.isObject(a)&&h.registerTagsFromSpecs(a)}a.addChangeListener("yaml",m),j.loadLatest=function(){a.load("yaml").then(function(a){m(a,!0)}),k.isDirty=!1},k.isPreviewMode&&j.loadLatest(),c.onFoldStatusChanged(function(){_.defer(function(){j.$apply()})}),j.isCollapsed=c.isFolded,j.isAllFolded=c.isAllFolded,j.toggle=function(a){c.toggleFold(a,e)},j.toggleAll=function(a){c.setFoldAll(a,!0,e)},j.tagIndexFor=h.tagIndexFor,j.getAllTags=h.getAllTags,j.getCurrentTags=h.getCurrentTags,j.stateParams=l,j.focusEdit=function(a,b,d){if(!k.isPreviewMode){var f=c.lineForPath(b);d=d||0,a.stopPropagation(),e.gotoLine(f-d),e.focus()}},j.isInFocus=function(a){return!!a},j.getEditPath=function(a){return"#/paths?path="+window.encodeURIComponent(a)},j.responseCodeClassFor=function(a){var b="default";switch(Math.floor(+a/100)){case 2:b="green";break;case 5:b="red";break;case 4:b="yellow";break;case 3:b="blue"}return b},j.isVendorExtension=function(a){return"x-"===a.substring(0,2).toLowerCase()}}]),PhonicsApp.controller("GeneralModal",["$scope","$modalInstance","data",function(a,b,c){a.ok=b.close,a.cancel=b.close,a.data=c}]),PhonicsApp.controller("UrlImportCtrl",["$scope","$modalInstance","$localStorage","$rootScope","FileLoader","Storage","ASTManager",function(a,b,c,d,e,f,g){var h;a.url=null,a.fetch=function(b){angular.isString("string")&&b.indexOf("http")>-1&&e.loadFromUrl(b).then(function(b){h=b,a.canImport=!0},function(b){a.error=b,a.canImport=!1})},a.ok=function(){angular.isString(h)&&(f.save("yaml",h),d.editorValue=h,g.refresh()),b.close()},a.cancel=b.close}]),PhonicsApp.controller("PasteJSONCtrl",["$scope","$modalInstance","$rootScope","Storage","ASTManager",function(a,b,c,d,e){a.$watch("json",function(b){try{b=JSON.parse(a.json)}catch(c){return a.error=c.message,void(a.canImport=!1)}SwaggerTools.specs.v2.validate(b,function(b,c){return c&&c.errors?(a.error=c.errors,void(a.canImport=!1)):(a.canImport=!0,void(a.error=null))})}),a.ok=function(){var f=jsyaml.dump(JSON.parse(a.json));d.save("yaml",f),c.editorValue=f,e.refresh(),b.close()},a.cancel=b.close}]),PhonicsApp.controller("ErrorPresenterCtrl",["$scope","$rootScope","Editor","ASTManager",function(a,b,c,d){var e=900,f=500;a.docsMode=!1,a.isCollapsed=b.isPreviewMode,a.getErrors=function(){var b=a.$parent.errors||[],c=a.$parent.warnings;return Array.isArray(b)&&(b=b.map(function(a){return a.level=e,a})),Array.isArray(c)?(c=c.map(function(a){return a.level=f,a}),b.concat(c)):b},a.getType=function(a){return a.code&&a.message&&a.path?a.level>500?"Swagger Error":"Swagger Warning":a.yamlError?"YAML Syntax Error":a.emptyDocsError?"Empty Document Error":"Unknown Error"},a.getDescription=function(a){return angular.isString(a.message)?a.message:a.emptyDocsError?a.emptyDocsError.message:a.yamlError?a.yamlError.message.replace("JS-YAML: ","").replace(/./,function(a){return a.toUpperCase()}):a.resolveError?a.resolveError:a},a.isOnlyWarnings=function(){var b=a.$parent.errors||[],c=a.$parent.warnings||[];return c.length&&0===b.length},a.getTitle=function(){var b=a.$parent.errors||[],c=a.$parent.warnings||[];return 0===b.length?0===c.length?"No Errors or Warnings":1===c.length?"1 Warning":c.length+" Warnings":1===b.length?0===c.length?"1 Error":1===c.length?"1 Error and 1 Warning":"1 Error "+c.length+" Warnings":0===c.length?b.length+" Errors":1===c.length?b.length+" Errors and  1 Warning":b.length+" Errors and "+c.length+" Warnings"},a.showLineJumpLink=function(b){return null!==a.getLineNumber(b)},a.getLineNumber=function(a){var b=null;return a.yamlError&&(b=a.yamlError.mark.line),a.path&&a.path.length&&(b=d.lineForPath(_.cloneDeep(a.path))),b},a.goToLineOfError=function(b){b&&(c.gotoLine(a.getLineNumber(b)),c.focus())},a.isWarning=function(a){return a.level<e},a.toggleCollapse=function(){a.isCollapsed=!a.isCollapsed}}]),PhonicsApp.controller("OpenExamplesCtrl",["$scope","$modalInstance","$rootScope","FileLoader","Builder","Storage","ASTManager","defaults",function(a,b,c,d,e,f,g,h){a.files=h.exampleFiles,a.selectedFile=h.exampleFiles[0],a.open=function(a){d.loadFromUrl("spec-files/"+a).then(function(a){f.save("yaml",a),g.refresh(a),c.editorValue=a,b.close()},b.close)},a.cancel=b.close}]),PhonicsApp.controller("ModalCtrl",["$scope","$modalInstance",function(a,b){a.cancel=b.close,a.close=b.close}]),PhonicsApp.controller("SecurityCtrl",["$scope","$modal","AuthManager",function(a,b,c){a.getHumanSecurityType=function(a){var b={basic:"HTTP Basic Authentication",oauth2:"OAuth 2.0",apiKey:"API Key"};return b[a]},a.isAuthenticated=c.securityIsAuthenticated,a.authenticate=function(a,d){"basic"===d.type?b.open({templateUrl:"templates/auth/basic.html",controller:["$scope","$modalInstance",function(b,e){b.cancel=e.close,b.authenticate=function(){b.username&&b.password&&(c.basicAuth(a,d,{username:b.username,password:b.password}),e.close())}}],size:"large"}):window.alert("Not yet supported")}}]),PhonicsApp.directive("onReadFile",["$parse",function(a){return{restrict:"A",scope:!1,link:function(b,c,d){var e=a(d.onReadFile);c.on("change",function(a){var c=new FileReader;c.onload=function(a){b.$apply(function(){e(b,{$fileContent:a.target.result})})},c.readAsText((a.srcElement||a.target).files[0])})}}}]),PhonicsApp.directive("path",function(){return{restrict:"E",replace:!0,templateUrl:"templates/path.html",scope:!1}}),PhonicsApp.directive("operation",["defaults",function(a){return{restrict:"E",replace:!0,templateUrl:"templates/operation.html",scope:!1,link:function(b){b.isTryOpen=!1,b.enableTryIt=a.enableTryIt,b.toggleTry=function(){b.isTryOpen=!b.isTryOpen},b.getParameters=function(){return Array.isArray(b.operation.parameters)?Array.isArray(b.path.pathParameters)?b.operation.parameters.concat(b.path.pathParameters):b.operation.parameters:b.path.pathParameters}}}}]),PhonicsApp.directive("schemaModel",["$parse",function(a){return{templateUrl:"templates/schema-model.html",restrict:"E",replace:!0,scope:{schema:"="},link:function(b,c,d){b.mode="model",b.json=removeVendorExtensions(a(d.schema)(b.$parent))}}}]),PhonicsApp.directive("stopEvent",function(){return{restrict:"A",link:function(a,b){b.bind("click",function(a){a.stopPropagation()})}}}),PhonicsApp.directive("scrollIntoViewWhen",function(){return{restrict:"A",link:function(a,b,c){a.$watch(c.scrollIntoViewWhen,function(a){a&&b.scrollIntoView(100)})}}}),PhonicsApp.directive("collapseWhen",function(){var a=200;return{restrict:"A",link:function(b,c,d){function e(){setTimeout(function(){c.removeAttr("style")},a)}var f=null;if(d.collapseWhen){var g=c.clone();g.removeAttr("style"),g.appendTo("body"),f=g.height(),g.remove()}b.$watch(d.collapseWhen,function(a){a?(f=c.height(),c.height(f),c.height(0),c.addClass("c-w-collapsed"),e()):(c.height(f),c.removeClass("c-w-collapsed"),e())})}}}),PhonicsApp.config(["$provide",function(a){a.constant("defaults",window.$$$defaults$$$)}]),PhonicsApp.config(["$provide",function(a){a.constant("strings",{stausMessages:{"-2":"Unsaved changes. Check your server connection","-1":"Error!",0:"Working...",1:"Unsaved changes",2:"All changes saved."}})}]),PhonicsApp.filter("formdata",function(){return function(a){var b=[];return angular.isObject(a)&&Object.keys(a).forEach(function(c){angular.isDefined(a[c])&&b.push(c+": "+a[c])}),b.join("\n")}}),PhonicsApp.controller("TryOperation",["$scope","formdataFilter","AuthManager",function(a,b,c){function d(a){var b=_.extend(a,{schema:e(a),form:f(a),model:{}});return a.schema&&"array"===a.schema.type&&(b.model[a.name]=[]),b}function e(a){var b;return a&&a.schema?(a.schema.type||(a.schema.type="object"),"array"===a.schema.type?(b={type:"object",properties:{}},b.properties[a.name]=a.schema,b.properties[a.name].type="array",b.properties[a.name].items.type="object",b):a.schema):(b={type:"object",properties:{}},b.properties[a.name]=_.pick(a,"type","description","required","format"),b)}function f(a){if(a.schema&&"array"===a.schema.type){var b=[{key:a.name}];return b[0].items=[a.name+"[]"],b}return["*"]}function g(a){return function(b,c){return c["in"]===a&&c.model[c.name]&&c["default"]!==c.model[c.name]&&(b[c.name]=c.model[c.name]),b}}function h(){return a.scheme?a.scheme:a.walkToProperty("schemes")[0]}function i(){var b=h(),c=p.host||window.location.host,d=p.basePath||"",e=_.template(a.path.pathName),f=a.parameters.reduce(g("path"),{}),i=a.parameters.reduce(g("query"),{}),j=$.param(i),k="";try{k=e(f)}catch(l){}return b+"://"+c+d+k+(j?"?"+j:"")}function j(){return a.parameters.map(function(a){return"body"===a["in"]?l(a):void 0})[0]}function k(){var b=a.parameters.filter(function(a){return"header"===a["in"]}).reduce(function(a,b){var c=l(b)[b.name];return c&&(a[b.name]=c),a},{}),d=c.getAuth(a.selectedSecurity);return d&&"basic"===d.type&&(b=_.extend(b,{Authorization:"Basic "+d.options.base64})),b}function l(a){return Array.isArray(a.model[a.name])?a.model[a.name]:a.model}function m(){a.xhrInProgress=!0,a.error=null;var b=["Host","Accept-Encoding","Connection","Origin","Referer","User-Agent","Cache-Control","Content-Length"];$.ajax({url:a.generateUrl(),type:a.operation.operationName,headers:_.omit(a.getHeaders(),b),data:a.getRequestBody(),contentType:a.contentType}).fail(function(b,c,d){a.xhrInProgress=!1,a.textStatus=c,a.error=d,a.xhr=b,a.$digest()}).done(function(b,c,d){a.textStatus=c,a.xhrInProgress=!1,a.responseData=b,a.xhr=d,a.responseHeaders=o(d),a.$digest()})}function n(a){var b={};return a.split("\n").forEach(function(a){var c=a.split(":")[0],d=a.split(":")[1];c&&angular.isString(c)&&angular.isString(d)&&(b[c.trim()]=d.trim())}),b}function o(a){return n(a.getAllResponseHeaders())}var p=a.$parent.specs,q="",r="None";a.httpProtorcol="HTTP/1.1",a.generateUrl=i,a.makeCall=m,a.xhrInProgress=!1,a.parameters=Array.isArray(a.getParameters())?a.getParameters().map(d):[],a.hasBodyParam=function(){return a.parameters.some(function(a){return"body"===a["in"]})},a.rawChanged=function(a){var b=a[1];q=b.getValue()},a.getRequestBody=function(){if("raw"===a.inputMode)return q;var c=j();return a.contentType?a.contentType.indexOf("form-data")>-1?b(c):a.contentType.indexOf("application/json")>-1?JSON.stringify(c,null,2):a.contentType.indexOf("x-www-form-urlencoded")>-1?$.param(c):"":""},a.getHeaders=function(){var b=k(),c=a.getRequestBody();return b=_.extend(b,{Host:a.specs.host||window.location.host,Accept:a.accepts||"*/*","Accept-Encoding":"gzip,deflate,sdch","Accept-Language":"en-US,en;q=0.8,fa;q=0.6,sv;q=0.4","Cache-Control":"no-cache",Connection:"keep-alive",Origin:window.location.origin,Referer:window.location.origin+window.location.pathname,"User-Agent":window.navigator.userAgent}),c&&(b["Content-Length"]=c.length,b["Content-Type"]=a.contentType),b},a.walkToProperty=function(b){var c={consumes:["*/*"],schemes:["http"]};return Array.isArray(a.operation[b])?a.operation[b]:Array.isArray(a.specs[b])?a.specs[b]:c[b]?c[b]:void 0},a.setInputMode=function(b){a.inputMode=b},a.prettyPrint=function(a){try{return JSON.stringify(JSON.parse(a),null,2)}catch(b){}return a},a.isJson=function(a){var b;try{JSON.parse(a)}catch(c){b=c}return!b},a.isHTML=function(a){var b=window.document.createElement("div");b.innerHTML=a;for(var c=b.childNodes,d=c.length;d--;)if(1===c[d].nodeType)return!0;return!1},a.isPlain=function(b){return!a.isHTML(b)&&!a.isJson(b)},a.getSecuirtyOptions=function(){var b=[r];return Array.isArray(a.operation.security)?b.concat(a.operation.security.map(function(a){return Object.keys(a)[0]})):b},a.securityIsAuthenticated=function(a){return a===r?!0:c.securityIsAuthenticated(a)}}]),PhonicsApp.service("Sorter",function(){function a(a){var c=[];return angular.isObject(a)?(c=Object.keys(a).map(function(c){if(c.toLowerCase().substring(0,2)!==d&&"parameters"!==c){var e={operationName:c,responses:b(a[c].responses)};return a[c]=_.omit(a[c],"responses"),_.extend(e,a[c]),e}}),_.compact(c)):c}function b(a){var b=[];return angular.isObject(a)?(b=Object.keys(a).map(function(b){if(b.toLowerCase().substring(0,2)!==d){var c=_.extend({responseCode:b},a[b]);return c}}),_.compact(b)):b}function c(a){return function(b){if(!a)return!0;if(Array.isArray(a)&&Array.isArray(b.tags))for(var c=0;c<a.length;c++)for(var d=0;d<b.tags.length;d++)if(a[c]===b.tags[d])return!0;return!1}}var d="x-";this.sort=function(b,e){var f=_.cloneDeep(b);if(b&&b.paths){var g=Object.keys(b.paths).map(function(f){return f.toLowerCase().substring(0,2)!==d?{pathName:f,pathParameters:b.paths[f].parameters,operations:a(b.paths[f]).filter(c(e.limitToTags))}:void 0});f.paths=_.compact(g)}return f}}),PhonicsApp.service("TagManager",["$stateParams",function(a){function b(a,b){this.name=a,this.description=b}function c(a,c){if(a){var e=d.map(function(a){return a.name});_.include(e,a)||d.push(new b(a,c))}}var d=[];this.resetTags=function(){d=[]},this.tagIndexFor=function(a){for(var b=0;b<d.length;b++)if(d[b].name===a)return b},this.getAllTags=function(){return d},this.registerTagsFromSpecs=function(a){angular.isObject(a)&&(d=[],Array.isArray(a.tags)&&a.tags.forEach(function(a){angular.isString(a.name)&&c(a.name,a.description)}),Array.isArray(a.paths)&&a.paths.forEach(function(a){Array.isArray(a.operations)&&a.operations.forEach(function(a){Array.isArray(a.tags)&&a.tags.forEach(function(a){c(a)})})}))},this.getCurrentTags=function(){return a.tags?a.tags.split(","):[]},this.registerTag=c}]),PhonicsApp.service("Autocomplete",["$rootScope","snippets","ASTManager","KeywordMap",function(a,b,c,d){function e(a){var b=c.pathForPosition(a.row,a.column-1);return b}function f(a,b){if(!Array.isArray(a)||!Array.isArray(b))return!1;if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++)return new RegExp(b[c]).test(a[c]);return!0}function g(b){c.refresh(a.editorValue);var d=e(b);return d||1!==b.column||(d=[]),function(a){return f(d,a.path)}}function h(a,b){for(var c,d=Object.keys(a),e=0;e<d.length;e++)if(c=new RegExp(d[e]),c.test(b)&&a[d[e]])return a[d[e]]}function i(a){var b=e(a),c=d.get(),f=b.shift();if(!Array.isArray(b))return[];for(;f&&angular.isObject(c);)c=h(c,f),f=b.shift();if(!angular.isObject(c))return[];var g=Object.keys(c).map(function(a){return{name:a,value:a,score:300,meta:"swagger"}});return g}function j(a){return a.score=1e3,a}var k=null,l={getCompletions:function(a,c,d,e,f){a.completer.autoSelect=!0;var h=b.filter(g(d)).map(function(a){return{caption:a.name,snippet:a.content,meta:"snippet"}}).map(j),k=i(d);f(null,k.concat(h))}};this.init=function(a){k=a,k.completers=[l]}}]),PhonicsApp.service("FileLoader",["$http","defaults",function(a,b){this.loadFromUrl=function(c){return angular.isString(c)&&0===c.indexOf("http")&&(c=b.importProxyUrl+c),a({method:"GET",url:c,headers:{accept:"application/x-yaml,text/yaml,application/json,*/*"}}).then(function(a){return angular.isObject(a.data)?jsyaml.dump(a.data):load(a.data)})},this.load=load}]),PhonicsApp.service("Editor",["Autocomplete","ASTManager","LocalStorage","$interval",function(a,b,c,d){function e(a){a&&a.mark&&a.reason&&y.getSession().setAnnotations([{row:a.mark.line,column:a.mark.column,text:a.reason,type:"error"}])}function f(){y.getSession().clearAnnotations()}function g(c){window.e=y=c,ace.config.set("basePath","bower_components/ace-builds/src-noconflict"),a.init(c),y.setOptions({fontFamily:"Source Code Pro",enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0}),i(),b.refresh(y.getValue()),p(b.onFoldChanged),z.forEach(function(a){a(B)}),z=[];var d=y.getSession();d.on("changeFold",j),k(d)}function h(){y&&c.save("editor-settings",y.getOptions())}function i(){y&&c.load("editor-settings").then(function(a){a?y.setOptions(a):y.setOption("theme","ace/theme/atom_dark")})}function j(){var a=arguments;A.forEach(function(b){b.apply(y,a)})}function k(a){a.setTabSize(2)}function l(){y.resize()}function m(a){angular.isFunction(a)&&z.push(a)}function n(){var a=y.getSession(),b=null;return a.foldAll(),b=a.unfold(),Array.isArray(b)?b:[]}function o(a){return y.session.getLine(a)}function p(a){A.push(a)}function q(a,b){y&&y.getSession().foldAll(a,b)}function r(a){y&&y.getSession().unfold(a,100)}function s(a){y.gotoLine(a)}function t(){return y?y.getCursorPosition().row:null}function u(){ace.config.loadModule("ace/ext/settings_menu",function(a){a.init(y),y.showSettingsMenu();var b=d(function(){0===$("#ace_settingsmenu").length&&(h(),d.cancel(b),b=void 0)},300)})}function v(){var a={selectionStyle:"line",highlightActiveLine:!0,highlightSelectedWord:!0,readOnly:!1,cursorStyle:"ace",mergeUndoDeltas:!0,behavioursEnabled:!0,wrapBehavioursEnabled:!0,hScrollBarAlwaysVisible:!1,vScrollBarAlwaysVisible:!1,highlightGutterLine:!0,animatedScroll:!1,showInvisibles:!1,showPrintMargin:!0,printMarginColumn:80,printMargin:80,fadeFoldWidgets:!1,showFoldWidgets:!0,showLineNumbers:!0,showGutter:!0,displayIndentGuides:!0,fontSize:12,fontFamily:"Source Code Pro",scrollPastEnd:0,theme:"ace/theme/atom_dark",scrollSpeed:2,dragDelay:150,dragEnabled:!0,focusTimout:0,tooltipFollowsMouse:!0,firstLineNumber:1,overwrite:!1,newLineMode:"auto",useWorker:!0,useSoftTabs:!0,tabSize:2,wrap:"free",mode:"ace/mode/yaml",enableMultiselect:!0,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0};window.confirm("Are you sure?")&&y&&(y.setOptions(a),h())}function w(a){if(y){var b=parseInt(y.getOption("fontSize"),10);y.setOption("fontSize",b+a),h()}}function x(){y&&y.focus()}var y=null,z=[],A=[],B=this;this.aceLoaded=g,this.resize=l,this.ready=m,this.annotateYAMLErrors=e,this.clearAnnotation=f,this.getAllFolds=n,this.getLine=o,this.onFoldChanged=p,this.addFold=q,this.removeFold=r,this.gotoLine=s,this.lineInFocus=t,this.showSettings=u,this.saveEditorSettings=h,this.adjustFontSize=w,this.resetSettings=v,this.focus=x}]),PhonicsApp.service("Builder",["$q",function(a){function b(b){var c,d=a.defer();if(!b)return d.reject({specs:null,errors:[{emptyDocsError:"Empty Document Error"}]}),d.promise;try{c=e(b)}catch(g){return d.reject({errors:[{yamlError:g}],specs:null}),d.promise}if(c&&angular.isObject(c.definitions))for(var h in c.definitions)_.isEmpty(c.definitions[h].title)&&(c.definitions[h].title=h);return f.validate(c,function(a,b){return a?d.reject({specs:c,errors:[a]}):b&&b.errors&&b.errors.length?d.reject(_.extend({specs:c},b)):void JsonRefs.resolveRefs(c,function(a,e){return a?d.reject({errors:[a],specs:c}):void d.resolve(_.extend({specs:e},b))})}),d.promise}function c(a,b,c){var d,f=null;try{d=e(a)}catch(g){f={yamlError:g}}return f||(c.paths[b]=d[b]),{specs:c,error:f}}function d(a,b){return _.pick(a.paths,b)}var e=jsyaml.load,f=SwaggerTools.specs.v2;this.buildDocs=b,this.updatePath=c,this.getPath=d}]),PhonicsApp.service("ASTManager",function(){function a(a){var c=null;try{m=a||"",k=yaml.compose(a)}catch(d){c=d}c||b()}function b(){l.forEach(function(a){a()})}function c(a,b){var d;if(b=b||k,!b)return b;if(!Array.isArray(a))throw new Error("Need path to find the node in the AST");if(!a.length)return b;if(d=a.shift(),b.tag===h)for(var e=0;e<b.value.length;e++){var f=b.value[e];if(f[0].value===d)return c(a,f[1])}else if(b.tag===i)return d=parseInt(d,10),b=b.value[d],c(a,b);return b}function d(a,b){var c;if(a=a||k,!angular.isObject(a)||!a.value)return a;if(a.start_mark.line===b)return a;for(var e=0;e<a.value.length;e++)if(a.tag===h?c=d(a.value[e][1],b):a.tag===i&&(c=d(a.value[e],b)),c)return c;return null}function e(a){var b=c(a);return b?b.start_mark.line:null}function f(b,c){function d(a,j){j&&(e=j.start_mark,f=j.end_mark,e.line===b&&f.line===b&&e.column<=c&&f.column>=c?g=a:j.tag===h?j.value.forEach(function(b){d(a,b[0]),d(a.concat(b[0].value),b[1])}):j.tag===i&&j.value.forEach(function(b,c){d(a.concat(c),b)}))}var e,f,g=[],l=m.split("\n"),n=null;if(b!==l.length-1&&0!==c&&!/.\: ./.test(l[b])){n=_.clone(m);for(var o=l.slice(0,b).join("\n")+"\n",p=l[b],q=p.split("");q.length&&" "!==q.pop();)o+=" ";a(o)}if(void 0===b)return g;if(d([],k),k&&k.end_mark.line===b&&0===g.length)for(var r=k;c>0;)r.tag===h&&(g.push(r.value[r.value.length-1][0].value),r=r.value[r.value.length-1][1]),c-=j;return n&&a(n),g}function g(a,b,c){c="undefined"==typeof c?b.folded:!c,c?(a.removeFold(b.start_mark.line),b.folded=!1):(a.addFold(b.start_mark.line-1,b.end_mark.line-1),b.folded=!0)
}var h="tag:yaml.org,2002:map",i="tag:yaml.org,2002:seq",j=2,k={},l=[],m="";this.onFoldChanged=function(a){var c=a.data.start.row+1,e="remove"!==a.action,f=d(k,c);f&&(f.folded=e),b()},this.toggleFold=function(a,d){var e=c(a,k);e&&e.start_mark&&(g(d,e),b())},this.setFoldAll=function(a,d,e){for(var f,j=c(a,k),l=0;l<j.value.length;l++)j.tag===h?f=j.value[l][1]:j.tag===i&&(f=j.value[l]),g(e,f,d);b()},this.isFolded=function(a){var b=c(a,k);return angular.isObject(b)&&!!b.folded},this.isAllFolded=function(a){var b,d=c(a);if(!d||!Array.isArray(d.value))return!1;for(var e=0;e<d.value.length;e++)if(d.tag===h?b=d.value[e][1]:d.tag===i&&(b=d.value[e]),!b.folded)return!1;return!0},this.onFoldStatusChanged=function(a){l.push(a)},this.refresh=a,this.lineForPath=e,this.pathForPosition=f}),PhonicsApp.service("BackendHealthCheck",["$http","$interval","defaults","Storage",function(a,b,c,d){var e=!0;this.startChecking=function(){c.useBackendForStorage&&b(function(){a.get(window.location.href).then(function(){e=!0},function(){e=!1,d.save("progress",-2)})},c.backendHelathCheckTimeout)},this.isHealthy=function(){return e}}]),PhonicsApp.service("Codegen",["$http","defaults","Storage",function(a,b,c){function d(a){angular.isObject(a)&&a.code&&(window.location=a.data.code)}this.getServers=function(){return a.get(b.codegen.servers).then(function(a){return a.data})},this.getClients=function(){return a.get(b.codegen.clients).then(function(a){return a.data})},this.getServer=function(e){var f=_.template(b.codegen.server)({language:e});return c.load("yaml").then(function(b){var c=jsyaml.load(b);return a.post(f,{swagger:c}).then(d)})},this.getClient=function(e){var f=_.template(b.codegen.client)({language:e});return c.load("yaml").then(function(b){var c=jsyaml.load(b);return a.post(f,{swagger:c}).then(d)})}}]),PhonicsApp.service("FocusedPath",["ASTManager","Editor",function(a,b){this.isInFocus=function(c){var d=b.lineInFocus(),e=a.pathForPosition(d);return Array.isArray(e)&&_.isEqual(c,e.slice(0,c.length))}}]),PhonicsApp.service("Storage",["LocalStorage","Backend","defaults",function(a,b,c){return c.useBackendForStorage?b:a}]),PhonicsApp.service("LocalStorage",["$localStorage","$q",function(a,b){var c="SwaggerEditorCache",d={},e=this;a[c]=a[c]||{},this.save=function(b,e){null!==e&&(Array.isArray(d[b])&&d[b].forEach(function(a){a(e)}),_.debounce(function(){window.requestAnimationFrame(function(){a[c][b]=e})},100)())},this.reset=function(){Object.keys(a[c]).forEach(function(a){e.save(a,"")})},this.load=function(d){var e=b.defer();return e.resolve(d?a[c][d]:a[c]),e.promise},this.addChangeListener=function(a,b){angular.isFunction(b)&&(d[a]||(d[a]=[]),d[a].push(b))}}]),PhonicsApp.service("Backend",["$http","$q","defaults","Builder",function(a,b,c,d){function e(b){var e=d.buildDocs(b,{resolve:!0});e.error||a.put(c.backendEndpoint,b)}function f(){}var g={},h={},i=_.throttle(e,200,{leading:!1,trailing:!0});this.save=function(a,b){h[a]=b,Array.isArray(g[a])&&g[a].forEach(function(a){a(b)}),c.useYamlBackend&&"yaml"===a&&b?i(b):"specs"===a&&b&&i(h[a])},this.reset=f,this.load=function(d){if("yaml"!==d){var e=b.defer();return d?e.resolve(h[d]):e.reject(),e.promise}return a.get(c.backendEndpoint).then(function(a){return c.useYamlBackend?(h.yaml=a.data,h.yaml):a.data})},this.addChangeListener=function(a,b){angular.isFunction(b)&&(g[a]||(g[a]=[]),g[a].push(b))}}]),PhonicsApp.service("KeywordMap",["defaults",function(a){var b={name:String,"in":String,description:String,required:String,type:String,format:String},c={".":String},d={description:String,schema:{type:String},headers:{".":String},examples:{".":String}},e={summary:String,description:String,schemes:{".":String},externalDocs:{".":String},operationId:String,produces:{".":String},consumes:{".":String},deprecated:Boolean,security:c,parameters:{".":b},responses:{".":d},tags:{".":String}},f={swagger:String,info:{version:String,title:String,description:String,termsOfService:String,contact:{name:String,url:String,email:String},license:{name:String,url:String}},host:String,schemas:{".":String},basePath:String,produces:{".":String},consumes:{".":String},paths:{".":{parameters:b,".":e}},definitions:{".":{properties:{".":String}}},parameters:{".":b},responses:{".":d},security:{".":{".":String}},securityDefinitions:{".":{".":String}},tags:{".":String},externalDocs:{".":String}};this.get=function(){var b=angular.isObject(a.autocompleteExtension)?a.autocompleteExtension:{};return _.extend(f,b)}}]),PhonicsApp.service("Preferences",["$localStorage",function(a){function b(){a.preferences=d}var c={liveRender:!0},d=a.preferences||c;this.get=function(a){return d[a]},this.set=function(a,c){if(void 0===c)throw new Error("value was undefined");d[a]=c,b()},this.reset=function(){d=c,b()},this.getAll=function(){return d}}]),PhonicsApp.service("AuthManager",function(){var a={};this.basicAuth=function(b,c,d){if(!(angular.isObject(d)&&d.username&&d.password))throw new Error("Can not authenticate with options");d.isAuthenticated=!0,d.base64=window.btoa(d.username+":"+d.password),d.securityName=b,a[b]={type:"basic",security:c,options:d}},this.getAuth=function(b){return a[b]},this.securityIsAuthenticated=function(b){var c=a[b];return c&&c.options&&c.options.isAuthenticated}}),PhonicsApp.config(["$compileProvider","$stateProvider","$urlRouterProvider",function(a,b,c){c.otherwise("/"),b.state("home",{url:"/{mode}?import&tags",views:{"":{templateUrl:function(a){return"edit"===a.mode?"views/main.html":"views/main-preview.html"},controller:"MainCtrl"},"header@home":{templateUrl:"views/header/header.html",controller:"HeaderCtrl"},"editor@home":{templateUrl:"views/editor/editor.html",controller:"EditorCtrl"},"preview@home":{templateUrl:"views/preview/preview.html",controller:"PreviewCtrl"}}}),a.aHrefSanitizationWhitelist(".")}]),function(a){a.fn.scrollIntoView=function(b,c,d){function e(b,c){void 0===c?a.isFunction(f.complete)&&f.complete.call(b):f.smooth?a(b).stop().animate({scrollTop:c},f):(b.scrollTop=c,a.isFunction(f.complete)&&f.complete.call(b))}var f=a.extend({},a.fn.scrollIntoView.defaults);"object"==a.type(b)?a.extend(f,b):"number"==a.type(b)?a.extend(f,{duration:b,easing:c,complete:d}):0==b&&(f.smooth=!1);var g=1/0,h=0;1==this.size()?null==(g=this.get(0).offsetTop)||(h=g+this.get(0).offsetHeight):this.each(function(a,b){b.offsetTop<g?g=b.offsetTop:b.offsetTop+b.offsetHeight>h?h=b.offsetTop+b.offsetHeight:null}),h-=g;for(var i=this.commonAncestor().get(0),j=a(window).height();i;){var k=i.scrollTop,l=i.clientHeight;if(l>j&&(l=j),0==l&&"BODY"==i.tagName&&(l=j),i.scrollTop!=(null==(i.scrollTop+=1)||i.scrollTop)&&null!=(i.scrollTop-=1)||i.scrollTop!=(null==(i.scrollTop-=1)||i.scrollTop)&&null!=(i.scrollTop+=1))return void(k>=g?e(i,g):g+h>k+l?e(i,g+h-l):e(i,void 0));i=i.parentNode}return this},a.fn.scrollIntoView.defaults={smooth:!0,duration:null,easing:a.easing&&a.easing.easeOutExpo?"easeOutExpo":null,complete:a.noop(),step:null,specialEasing:{}},a.fn.isOutOfView=function(a){var b=!0;return this.each(function(){var c=this.parentNode,d=c.scrollTop,e=c.clientHeight,f=this.offsetTop,g=this.offsetHeight;(a?f>d+e:f+g>d+e)||(a?d>f+g:d>f)||(b=!1)}),b},a.fn.commonAncestor=function(){var b=[],c=1/0;a(this).each(function(){var d=a(this).parents();b.push(d),c=Math.min(c,d.length)});for(var d=0;d<b.length;d++)b[d]=b[d].slice(b[d].length-c);for(var d=0;d<b[0].length;d++){var e=!0;for(var f in b)if(b[f][d]!=b[0][d]){e=!1;break}if(e)return a(b[0][d])}return a([])}}(jQuery);