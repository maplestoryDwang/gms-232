# The Unfinished Battle
# 24020
# Great Spirit (1033210)

echo = 20021005
elfRuler = 1142340
sylvidia = 20021160
sylvidiaUpgrade = 20021161

greatSpirit = 1033210

sm.setSpeakerID(greatSpirit)
sm.sendNext("#q" + repr(echo) + "#... Just by being around, you lift the people's spirits. "
"This strength is yours to take.")
response = sm.sendAskYesNo("And please take this special gift for your friend. "
"You know who I mean...")
if response:
    if sm.canHold(elfRuler):
        # Swap out Sylvidia for the armored one
        sm.removeSkill(sylvidia)
        sm.giveSkill(sylvidiaUpgrade)
        sm.giveSkill(echo)
        sm.giveItem(elfRuler)
        sm.completeQuest(parentID)
        
        sm.sendSayOkay("You will bring peace back to the Elves. "
        "We're counting on you, deary.")
    else:
        sm.sendSayOkay("Deary, please make some room in your Equip inventory.")


