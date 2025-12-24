# 34478 - The Harmony of the Forest
sm.setSpeakerID(3003301)
sm.sendNext("Thank you for everything. Because of you, the forest is returning to normal. I want you to have this for all you've done! \r\n\r\n #i1712004# #bArcane Symbol: Arcana")
if sm.canHold(1712004):
    sm.giveItem(1712004)
    sm.completeQuest(parentID)
    sm.sendNext("Farewell friend...")
else:
    sm.sendNext("Please make space in your EQUIP inventory. I have something very special to give to you.")
