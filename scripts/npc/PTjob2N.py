# Phantom 2nd job adv
if sm.hasQuest(25101):
    if sm.canHold(1142376):
        sm.giveItem(1142376)
        sm.jobAdvance(2410)
        sm.giveSkill(20031209)
        sm.giveSkill(20031260)
        sm.completeQuest(25101)
        sm.removeEscapeButton()
        sm.setPlayerAsSpeaker()
        sm.sendNext("Let's see... 'A History of Ribbon Pigs' first edition... that's not it. 'The Great Mushroom Uprising'... why did I even steal this? Ah, there we are! I'll be back to my old self in no time!")
        sm.sendSay("Judgment Draw was in here as well? Lucky me! I believe that one will show up in the... Beginner Skill window?")
    else:
        sm.sendSayOkay("Please make some space in your inventory.")
else:
    sm.chat("You are not 1st job Phantom or do not have the 'That's so raven' quest active.")