# id 34264 ([Morass] The Prince and the Princess 3), field 450006300
sm.setSpeakerType(3)
sm.setParam(56)
sm.setColor(1)
sm.sendSay("Yeah, sure. So what's your plan?")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#Simple. We unchain Tana then quickly use the anti-magic stone to get outside.")
sm.sendSay("#face0#They drop the #bmagical barrier#k over the castle when they perform their experiments.")
sm.setParam(56)
sm.sendSay("That barrier really exists?")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#Yeah. If it wasn't for that, I could have gotten her out a long time ago.")
sm.sendSay("#face0#Well, the guards will be hot on our tail, so I've already got a getaway vehicle ready.")
sm.setParam(56)
sm.sendSay("You do?")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#Of course. I've been planning this for a really long time.")
sm.setParam(56)
sm.sendSay("Well, you've thought this through more than I expected.")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#I had to.")
sm.setParam(56)
sm.sendSay("Okay, well, how do we make this happen?")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#The only thing we still need is the #bkey to unchain her#k! I know there's an extra one hidden here in the Restricted Area.")
sm.sendSay("#face0#I'll unlock the door to the next area while you distract the monsters.")
if sm.sendAskYesNo("#face0#I can get it unlocked in the time it takes you to defeat about 200 of them."):
    sm.startQuest(parentID)
