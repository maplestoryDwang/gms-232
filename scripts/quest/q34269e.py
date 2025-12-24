# id 34264 ([Morass] The Prince and the Princess 3), field 450006300

sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0##h #! Are you awake?")
sm.setParam(56)
sm.sendSay("Ugh... yeah. I guess we're finally out. But your form...")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#Looks like I'm stuck as Jean.")
sm.setParam(56)
sm.sendSay("What about Tana?")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#She must have dropped somewhere else.")
sm.setParam(56)
sm.sendSay("Oh no! We have to persuade her to-")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#Impossible.")
sm.setParam(56)
sm.sendSay("What?")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#You still don't understand her purpose.")
sm.sendSay("#face0#Only one thing can end her pain, and I'm afraid that is-")
sm.setParam(56)
sm.sendSay("Destroying the world?!")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#Yes.")
sm.setParam(56)
sm.sendSay("Are you telling me this was all for nothing?!")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#There's a bigger problem.")
sm.sendSay("#face0#Hang on. What's in my pocket?.")
sm.setParam(56)
sm.sendSay("Isn't that an Arcane Symbol?")
if sm.canHold(1712005):
    sm.giveItem(1712005)
    sm.completeQuest(parentID)
    sm.setParam(36)
    sm.setInnerOverrideSpeakerTemplateID(3003400) # Tana
    sm.sendSay("#face0#If they intend to thwart the Black Mage, I should stop them now.")
    sm.sendSay("#face0#Hmmm....")
    sm.setParam(36)
    sm.setInnerOverrideSpeakerTemplateID(3003404) # Arkarium
    sm.sendSay("#face0#Not... yet...")
    sm.sendSay("#face0#I'm sure the Great One will appear soon. The Goddess Rhinne's power will allow him to travel to the past.")
    sm.sendSay("#face0#He will restore my power...")
    sm.completeQuest(parentID)
else:
    sm.sendSay("Hold on, I can't hold it. I don't have enough Equip inventory space.")
