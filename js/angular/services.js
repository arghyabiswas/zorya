angular.module('devfvApp.services',[])
    // Toolbar Name
    .factory("globalVar",function(){
        var pageTitle = "Page Title";
		var moduleTitle = "Module Title";
		var subModuleTitle = "Sub Module Title";
		var setVersionTitle = "Version"
        return{
            setPageTitle: function(pgTitle){
                pageTitle = pgTitle;
            },
            getPageTitle: function(){
                return pageTitle;
            },
			
			setModuleTitle: function(modTitle){
                moduleTitle = modTitle;
            },
			getModuleTitle: function(){
                return moduleTitle;
            },
			
			setSubModuleTitle: function(submodtitle){
                subModuleTitle = submodtitle;
            },
            getSubModuleTitle: function(){
                return subModuleTitle;
            },
			setVersionTitle: function(versiontitle){
                versionTitle = versiontitle;
            },
            getVersionTitle: function(){
                return versionTitle;
            }
        }
    })
	
	/*.factory("moduleVar",function(){
		var moduleTitle = "Module Title";
        return{
			setModuleTitle: function(moduleTitle){
                modTitle = moduleTitle;
            },
			getModuleTitle: function(){
                return modTitle;
            }
        }
    })*/
