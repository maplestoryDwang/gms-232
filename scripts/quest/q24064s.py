# Astilda's Call
# 24064
# Astilda (1033102)

astilda = 1033102

sm.setSpeakerID(astilda)
sm.sendNext("Your Majesty...")

sm.setPlayerAsSpeaker()
sm.sendSay("Astilda! Are you all right?")

sm.setSpeakerID(astilda)
sm.sendSay("I'm fine. Just a little fatigued.")

sm.setPlayerAsSpeaker()
sm.sendSay("That's a relief. Philius and Danika were all right, "
"but I was particularly worried about you, Astilda.")

sm.setSpeakerID(astilda)
sm.sendSay("You've been through worse than I, Your Highness!")

sm.setPlayerAsSpeaker()
sm.sendSay("No, I haven't suffered anything compared to what you went through...")

sm.setSpeakerID(astilda)
response = sm.sendAskAccept("You've grown so much, Your Highness. "
"I remember when you were little, and when you went off to fight the Black Mage..."
"You are truly worthy to lead the Elves. \r\n\r\n"
"#fUI/UIWindow2.img/QuestIcon/8/0# 2000 exp")
if response:
    sm.giveExp(2000)
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.sendSayOkay("We three elders have awakened, but the rest of the Elves are still cursed. "
    "But since we have our ruler, we aren't afraid of anything!")