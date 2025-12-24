# Rendered Speechless
# 6504
# Betty (1032104)

perion = 102000000
betty = 1032104

speechless = 5160020

sm.setSpeakerID(betty)
sm.sendNext("Yes? I'm happy to talk about my research, but please don't waste my time with anything else.")

sm.setPlayerAsSpeaker()
sm.sendSay(sm.join(["#b(You must horrify Dr. #p", repr(betty), "#. "
"What could you say to Dr. #p", repr(betty), "# to draw that kind of reaction...?)"]))

sm.setSpeakerID(betty)
response = sm.sendNext("#b(What would horrify Dr. Betty?) \r\n\r\n"
"#L0#Do you know Dr. Winston in #m" + repr(perion) + "#?#l\r\n"
"#L1#Please tell me about your research.#l\r\n"
"#L2#Marry me!#l\r\n")
if response == 0:
    sm.sendSayOkay("Yes, I do. Now if you'll excuse me while I get back to work...")
elif response == 1:
    sm.sendSayOkay("Hm...I'd like to, but something just came up in my research. Come back later.")
else:
    sm.sendNext("...Um... I'm sorry, but... Uh... I'm not...erm...interested! "
    "I mean... You think I'm interested?! \r\n\r\n"
    "#fUI/UIWindow2.img/QuestIcon/4/0# \r\n"
    + sm.formatInlineItem(speechless) + " x 1")

    sm.giveItem(speechless)
    sm.completeQuest(parentID)

    sm.setPlayerAsSpeaker()
    sm.sendNext("#b(You learned the Horrified Expression from Dr. Betty!)")