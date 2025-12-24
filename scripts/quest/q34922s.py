# id 34922 (Repair Completed?!), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendNext("#face0#This should be plenty to do the repairs we need. You've been working pretty hard today. Why don't you take a break?")
sm.setSpeakerType(4)
sm.setSpeakerID(3001402) # Ferret
res = sm.sendAskAccept("#face0#Oh, but before you do, could you put the scrap material into storage? We can't afford to waste anything.")
sm.setSpeakerType(3)
sm.sendNext("#face0#Storage is down to your right there. If you've got time, come back, and I'll teach you how to relax caravan style.")
sm.giveItem(4036352)
sm.startQuest(parentID)
