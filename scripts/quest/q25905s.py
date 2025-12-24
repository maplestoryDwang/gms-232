# [Temple of Time] A Quick Look Back [Angelic Buster]
# 25905
# No NPC

recoveredMemory = 7081

sm.flipDialoguePlayerAsSpeaker()
sm.sendNext("Back when it all began? "
"I guess that's technically when I met Eskalade, but what about the Heliseum Force? "
"That was the true beginning of my adventures.")
sm.sendSay("Kyle and Veldie were the only ones who treated me like a friend. "
"Everybody else made fun of me for not having magic.")
sm.sendSay("It was so worry-free back then. Now, it's just a lot of fighting and anger.")
sm.sendSay("We used to have so much fun, chasing Limestone Tokkas and running away from Kaloongs...")
sm.sendSay("That's when I wish I could go back to. That's when life was best.")
sm.sendSay("My home will always be the Heliseum Hideout. "
"No matter what paths Velderoth, Kyle, and myself take, the memories of our youth will always remain.")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)