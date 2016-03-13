(function(app){
    var LocalStorageItems = function(){
        this.init();
    };
    var p = LocalStorageItems.prototype;

    p.init = function(){
        this.storage = window.localStorage;
        this.lastIndex = this.storage.getItem("todo-index");
        if(!this.lastIndex){
            this.lastIndex = 0;
        }

        this.lastIndex2 = this.storage.getItem("todo-index2");
        if(!this.lastIndex2){
            this.lastIndex2 = 0;
        }
    };

    p.list = function(){
        var list = [];
        for (var uid in this.storage){
            if(uid.indexOf("todo-item-") == 0){
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
            if(uid.indexOf("todo2-item-") == 0){
                var _uid = uid.substr(11);
                var data = JSON.parse(this.storage.getItem(uid));
                data.uid = _uid;
                list.push(data);
            }
        }
        return list;
    };

    p.get = function(uid){
        var key = "todo-item-" + uid;
        return JSON.parse(this.storage.getItem(key));
    };

    p.get2 = function(uid){
        var key = "todo2-item-" + uid;
        return JSON.parse(this.storage.getItem(key));
    };
    
    p.getItemName = function(itemName){
		return JSON.parse(this.storage.getItem(itemName));
	};
	
    p.add = function(item){
        this.lastIndex++;
        var uid = "todo-item-" + this.lastIndex;
        this.storage.setItem(uid,JSON.stringify(item));
        this.storage.setItem("todo-index",this.lastIndex);
        return uid;
    };

    p.add2 = function(item){
        this.lastIndex2++;
        var uid = "todo2-item-" + this.lastIndex2;
        this.storage.setItem(uid,JSON.stringify(item));
        this.storage.setItem("todo2-index",this.lastIndex2);
        return uid;
    };
   
    p.addItem = function(itemName,item){
        this.storage.setItem(itemName,JSON.stringify(item));
        return true;
    };

	p.overwrite = function(uid,item){
		var uid = "todo-item-" + uid;
        this.storage.setItem(uid,JSON.stringify(item));
        return uid;
	};

	p.overwrite2 = function(uid,item){
		var uid = "todo2-item-" + uid;
        this.storage.setItem(uid,JSON.stringify(item));
        return uid;
	};

    p.delete = function(uid){
        var _uid = "todo-item-" + uid;
        this.storage.removeItem(_uid);

        return true;
    };

    app.LocalStorageItems = LocalStorageItems;
}(app));
