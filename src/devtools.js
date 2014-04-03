
var element_source = function() {
if(window.jQuery){
	if($0){
		if($0.kendoBindingTarget){
			return $0.kendoBindingTarget.source
		}
	}
}
return "";
}

chrome.devtools.panels.elements.createSidebarPane(
    "Kendo MVVM",
    function(sidebar) {
  function updateElementProperties() {
    sidebar.setExpression("(" + element_source.toString() + ")()");
  }
  updateElementProperties();
  chrome.devtools.panels.elements.onSelectionChanged.addListener(
      updateElementProperties);
});