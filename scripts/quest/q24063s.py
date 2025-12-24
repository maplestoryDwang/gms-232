# Danika's Call
# 24063
# Danika (1033101)

danika = 1033101

sm.setSpeakerID(danika)
sm.sendNext("Your Majesty! I missed you so... I've been trying to act normal, "
"but I was afraid I'd never see you again...")

sm.setPlayerAsSpeaker()
sm.sendSay("Danika! Are you okay?")

sm.setSpeakerID(danika)
sm.sendSay("Don't worry about me! I'm fine, compared to the others! "
"I lost my skills, but I'm not hurt.")

sm.setPlayerAsSpeaker()
sm.sendSay("Thank goodness!")

sm.setSpeakerID(danika)
response = sm.sendAskAccept("How did you survive here on your own, Your Majesty? "
"It must have been lonely! Don't worry. I'll be here to keep you company from now on! \r\n\r\n"
"#fUI/UIWindow2.img/QuestIcon/8/0# 1000 exp")
if response:
    sm.giveExp(1000)
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.sendNext("I wish I could go with you, but I'm still too weak from the curse. "
    "I'd only get in your way, Your Majesty. Phillius would eliminate me if I tripped you up...")
    sm.sendPrev("I'll be here, training, for now. "
    "Your Majesty, please promise you'll #btrain really hard and free our people from the ice#k! Okay?")