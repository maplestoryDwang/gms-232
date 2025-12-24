# The Decision
# 24051
# No NPC

sm.flipDialoguePlayerAsSpeaker()
sm.sendNext("He's a crass tree, but maybe he has a point... Perhaps it's time I settle down.")
sm.sendSay("My battle with the Black Mage is ancient history. Nobody cares about what I did in the past.")
sm.sendSay("I lost all the power that I raised to protect Maple World... "
"I can't even fight against Slimes. I am so weak like this...")
sm.sendSay("And I don't have my old friends to rely on anymore. I'm on my own here. "
"What can I do on my own?")
sm.sendSay("But... But... I cannot give up like this!")
sm.sendSay("I'm the sovereign of the Elves! My people are still suffering the Black Mage's curse!")
sm.sendSay("#b...I will NEVER give up!")
sm.sendSay("If I can't give up, then there is only one thing I can do. I may be weak, but I will get stronger. "
"I may not have allies, but I will make them. Who cares if nobody remembers who I am? "
"My only duty is to save my people! "
"Once I get my original strength back, then I should be able to vanquish the Black Mage's curse!")
sm.sendSay("If I keep training, step by step, I'll get my original strength back. "
"It'll take a long time, but if I just do what I can now, eventually I WILL win. \r\n\r\n"
"#fUI/UIWindow2.img/QuestIcon/8/0# 2000 exp")

sm.giveExp(2000)
sm.startQuest(parentID)
sm.completeQuest(parentID)