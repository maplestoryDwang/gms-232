# After Shedding 2
# 22603
# Mir (1013000)

dragonMaster = 1142157

mir = 1013000

sm.setSpeakerID(mir)
sm.sendNext("Master, look. I think I'm really coming into my own with my strength.")

sm.setPlayerAsSpeaker()
sm.sendSay("#bYou're right. You look quite imposing. "
"Is this the true strength of an Onyx Dragon?")

sm.setSpeakerID(mir)
sm.sendSay("It is the strength of an Onyx Dragon as well as the strength of its master. "
"The Onyx Dragon can only grow when its master is growing stronger. "
"That means your spirit has grown that much, too, master.")

sm.setPlayerAsSpeaker()
sm.sendSay("#bI see you've matured. You even sound different, #p" + repr(mir) + "#.")

sm.setSpeakerID(mir)
response = sm.sendAskAccept("Haha, of course. It would be embarrasing to talk like a child with this elegant bod! "
"Anyway, master, I have another shiny scale that came off when I was shedding. "
"It seems to be even more powerful than the last one I gave you. Here you go.")
if response:
    if sm.canHold(dragonMaster):
        sm.giveItem(dragonMaster)
        sm.startQuest(parentID)
        sm.completeQuest(parentID)
        
        sm.sendSayOkay("Master, you should use this scale to make something useful "
        "that would reduce the damage you take when hit by a monster. "
        "You'll get stronger, which means that I'll get stronger. Sounds good to me!")
    else:
        sm.sendSayOkay("Master, make some space in your Equip inventory first.")