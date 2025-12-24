# # #
# Random Damage Skin Box
# ItemId: 2632129
# Function: Gives a random damage skin to the user
#

from net.swordie.ms.constants import DamageSkinConstants
randomDmgSkinItemId = DamageSkinConstants.getRandomDamageSkinItemId()
if not sm.canHold(randomDmgSkinItemId):
    chr.chatMessage("Make sure you have enough space in both your USE inventory as well as your CASH inventory.")
    sm.dispose()

sm.consumeItem(parentID)
sm.giveItem(randomDmgSkinItemId)