angular.module("MyModule")

.value ("musicPlaylist", [
	{
    	genre: "Rap",
    	songs: [
    	{
    		artist: "Biggie Smalls",
    		song: "Hypnotize Me",
    	},
    	{
    		artist: "Drake",
    		song: "Hotline Bling",
    	},
    	{
    		artist: "50 Cent",
    		song: "In Da Club",
    	}
    	]
    },
    {
    	genre: "Pop",
    	songs: [
    	{
    		artist: "Madonna",
    		song: "Like a Virgin",
    	},
    	{
    		artist: "Taylor Swift",
    		song: "Bad Blood",
    	},
    	{
    		artist: "Miley Cirus",
    		song: "Wrecking Ball",
    	}
    	]
    },
    {
    	genre: "Rock",
    	songs: [
    	{
    		artist: "Pink Floyd",
    		song: "Dark Side of the Moon",
    	},
    	{
    		artist: "Alice in Chains",
    		song: "Down In a Hole",
    	},
    	{
    		artist: "Led Zeppelin",
    		song: "Stairway to Heaven",
 		}
    	]
    }

])

.factory("playListFactory", function(musicPlaylist) {
    // Constructor function
      function playListConstructor () {
       this.copyPlayList = angular.copy(musicPlaylist);
    }
    
    // Prototype function
    playListConstructor.prototype.save = function(username, age, musicArray) 
    {
        // console.log(array);
        this.playListArray = [username, age];
            for (var i = 0; i < musicArray.length; i++) 
            {
                this.someArrayName = musicArray[i].songs;
                for (var j = 0; j < this.someArrayName.length; j++) 
                {
                    this.someOtherArrayName = this.someArrayName[j];
                    if(this.someOtherArrayName.isCheckboxChecked) 
                    {
                        this.playListArray.push(this.someOtherArrayName);
                    }
                };
            };
                console.log(this.playListArray);
    }; 
    return playListConstructor;
}); 
        