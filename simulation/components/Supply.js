 /*
	Created by Niek ten Brinke

	Functionallity
	1. Check if it's neccesary to apply the decay. (that is if territory = neutral/enemy || range is updated)
	2. Check whether the values are already modified. (By creating a cache in which modified stats (or differences) are stored 
		and comparing them to the template's values)
	3. Check if entity is in range of a supplygiver.
	4. Finally if 1=true and both 2 and 3 are false then apply the decay and modify the cache accordingly.
	5. OPTIONAL: create a visual effect to display the range of supplygivers.

	Initially only the hitpoints are reduced when moving out of a supply range.
*/

function Supply () {}


Supply.prototype.init = function() {
	this.modificationsCache = {};
	this.modifications = {};
};


Supply.prototype.OnTerritoryPositionChanged = function(msg) {
	this.newTerritory = msg.newTerritory;

	var cmpPlayer = QueryOwnerInterface(this.entity, IID_Player);
	var isOwn = (newTerritory == cmpPlayer.GetPlayerID());
	var isNeutral = (newTerritory == 0);
	var isAlly = !isOwn && cmpPlayer.IsAlly(newTerritory);
	// We count neutral players as enemies, so you can't build in their territory.
	var isEnemy = !isNeutral && (cmpPlayer.IsEnemy(newTerritory) || cmpPlayer.IsNeutral(newTerritory));






};


