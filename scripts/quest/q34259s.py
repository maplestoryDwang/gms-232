# id 34259 ([Morass] In Search of the Diary), field 450006240
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3003408) # Researcher
sm.sendNext("#face0#Hm, the Research Journal seems to be missing. One of our researchers recently had a bit of a scare in the lower dungeon. They must have dropped it there before they ran out.")
sm.sendSay("#face0#The flickering torchlight in the corridor plays tricks on your eyes.\r\nOur rather flighty researchers tend to let their imaginations run away with them. After that last incident, I haven't been able to get any of them to go down there anymore.")
res = sm.sendAskYesNo("You're the only one left that will go down there. Would you look for the missing Journal entries?")
sm.setParam(56)
sm.sendNext("Sure.")
sm.setParam(36)
sm.sendSay("#face0#I have the entry for #bHekatonian Year 53, Month 9, Day 18#k. It will be the most helpful, but you'll need the prior entries to get a proper understanding. You'll find them in either #bShadowdance Hall 2 or 3#k.")
sm.startQuest(parentID)
