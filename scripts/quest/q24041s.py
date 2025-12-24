# Aftermath of the Curse
# 24041
# No NPC

sm.flipDialoguePlayerAsSpeaker()
sm.removeEscapeButton()
sm.sendNext("Calm down, Mercedes! I just have to think. "
"Okay, let's run down what's going on...")
sm.sendSay("1. The rest of the Elves are still frozen, so the Black Mage's curse is still in place.")
sm.sendSay("2. I'm the only one who's woken up. I don't know why, but I get this feeling... "
"Could the Black Mage's seal be weakening?")
sm.sendSay("3. I want to go outside and check on Maple World, but I'm only level 10. "
"No, I still can't believe it... I can't be level 10!")
sm.sendSay("Brr! I don't know how long I've been asleep, but I'm freezing to death! "
"Just how powerful was that curse?")
sm.sendSay("Okay, so I was injured when I was cursed, and I may have been in the ice for decades. "
"I guess it makes sense that I'd be weaker. But...it's not fair! I'm the ruler of the Elves! "
"I can't be level 10!!")
sm.sendSay("Right, hold it together, hold it together... "
"I need to make sure there's not anything wrong with me.")
sm.lockInGameUI(True)
sm.forcedAction(5, 0)
sm.sendSay("Left arm works...")
sm.forcedAction(6, 0)
sm.sendSay("No problem with my right arm.")
sm.forcedAction(15, 0)
sm.sendSay("Legs are fine, too.")
sm.sendSay("And my wounds are all healed. I guess my level was the only thing affected...")

sm.lockInGameUI(False)
sm.startQuest(parentID)