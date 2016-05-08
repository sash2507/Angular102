var myMod = angular.module("MyModule", [])

	.controller("MyController", function(playListFactory) {
		var self = this;
		
		self.musicPlaylist = new playListFactory();

		self.savePlayList = function() {
			self.musicPlaylist.save(self.username, self.age, self.musicPlaylist.copyPlayList);
		}
		
		self.genreRadioButton = function() {
			self.songList = self.songInfo;
		};

		self.abc = self.playListArray;
	});
