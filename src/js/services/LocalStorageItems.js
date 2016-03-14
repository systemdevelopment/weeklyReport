(function(app){
    var LocalStorageItems = function(){
        this.init();
    };
    var p = LocalStorageItems.prototype;

    p.init = function(){
        this.storage = window.localStorage;
        this.lastIndex = this.storage.getItem("time-index");
        if(!this.lastIndex){
            this.lastIndex = 0;
        }

        this.lastIndex2 = this.storage.getItem("report-index");
        if(!this.lastIndex2){
            this.lastIndex2 = 0;
        }
    };

    p.list = function(){
        var list = [];
        for (var uid in this.storage){
            if(uid.indexOf("time-item-") == 0){
                var _uid = uid.substr(10);
                var data = JSON.parse(this.storage.getItem(uid));
                data.uid = _uid;
                list.push(data);
            }
        }
        return list;
    };

    p.list2 = function(){
        var list = [];
        for (var uid in this.storage){
            if(uid.indexOf("report-item-") == 0){
                var _uid = uid.substr(12);
                var data = JSON.parse(this.storage.getItem(uid));
                data.uid = _uid;
                list.push(data);
            }
        }
        return list;
    };

    p.get = function(uid){
        var key = "time-item-" + uid;
        return JSON.parse(this.storage.getItem(key));
    };

    p.get2 = function(uid){
        var key = "report-item-" + uid;
        return JSON.parse(this.storage.getItem(key));
    };
    
    p.getItemName = function(itemName){
		return JSON.parse(this.storage.getItem(itemName));
	};
	
    p.add = function(item){
        this.lastIndex++;
        var uid = "time-item-" + this.lastIndex;
        this.storage.setItem(uid,JSON.stringify(item));
        this.storage.setItem("time-index",this.lastIndex);
        return uid;
    };

    p.add2 = function(item){
        this.lastIndex2++;
        var uid = "report-item-" + this.lastIndex2;
        this.storage.setItem(uid,JSON.stringify(item));
        this.storage.setItem("report-index",this.lastIndex2);
        return uid;
    };
   
    p.addItem = function(itemName,item){
        this.storage.setItem(itemName,JSON.stringify(item));
        return true;
    };

	p.overwrite = function(uid,item){
		var uid = "time-item-" + uid;
        this.storage.setItem(uid,JSON.stringify(item));
        return uid;
	};

	p.overwrite2 = function(uid,item){
		var uid = "report-item-" + uid;
        this.storage.setItem(uid,JSON.stringify(item));
        return uid;
	};

    app.LocalStorageItems = LocalStorageItems;
}(app));
