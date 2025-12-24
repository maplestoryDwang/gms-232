# [NLC] A Brush with Trouble
# 64810
# Corine (9201094)

corine = 9201094

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("Salu o'kahari! You're here!")
sm.sendNext("Thanks to your help clearing a path in the jungle, I was able to make good headway with #bKhafre#k.")

sm.setParam(57)
sm.sendNext("Khafre? I haven't met them, have I?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("Haha! Sure you have! This orange fluffball next to me is Khafre. "
"He may not look like much, but he's like my soulmate, haha.")
sm.sendNext("Anyway, while I was out there, I saw #rscreamers#k teeming around the waterfall in the jungle.")

sm.setParam(57)
sm.sendNext("What are 'screamers'?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("Well, the people in NLC call them Jungle Monkeys.")
sm.sendNext("I'm not sure they actually fit the classification of real monkeys, "
"but what I DO know is that their barbaric behavior is over the line, even for excitable wildlife.")
sm.sendNext("You might find this shocking but they even throw their poo! Totally gross, right?")
sm.sendNext("Even if it's in defense of their territory, doing something like that defiles the land, "
"and is just terribly unhygenic in general.")
response = sm.sendAskYesNo("Sad though this task may be, I'm asking you to defeat 300 of them, "
"before the entire jungle is spackled in monkey poo.")
if response:
    sm.startQuest(parentID)

    sm.sendNext("Thank you. May the spirits guide your path.")