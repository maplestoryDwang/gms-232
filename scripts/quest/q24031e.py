# Friend of the Monarch
# 24031
# Sylvidia (1033240)

unicornMeal = 4032977
mount = 20021160

sylvidia = 1033240

sm.completeQuest(parentID)
sm.giveSkill(mount)
sm.chatScript("You obtained the <Sylvidia> skill.")
sm.consumeItem(unicornMeal)

sm.setSpeakerID(sylvidia)
sm.sendNext("This is... I haven't had this in ages! I missed this so much! "
"We used to have so much fun, didn't we? But then you went off to fight the Black Mage, "
"and left me all alone...")

sm.setPlayerAsSpeaker()
sm.sendSay("I promised you that I'd return.")

sm.setSpeakerID(sylvidia)
sm.sendSay("Yes, so I stayed in Maple World and waited for you and the Elves to come back. "
"I knew you would, that someday we would gallop through Victoria Island again.")

sm.setPlayerAsSpeaker()
sm.sendSay("Not yet. I can't rest until the Black Mage is gone for good. "
"Please wait a little longer, Sylvidia.")

sm.setSpeakerID(sylvidia)
sm.sendSay("I don't want to wait any longer. I told you, Mercedes! "
"I promised myself I'd never let you go away again! "
"You don't know how many times I circled the village, looking for a way to get in, "
"waiting for you to come back.")
sm.sendSay("I should've gone with you to fight the Black Mage in the first place.")
sm.sendPrev("I don't care if you're gonna fight the Black Mage again. "
"You aren't getting rid of me! I'll go with you, no matter what!")