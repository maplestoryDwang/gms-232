# Manual Labor

# Constants
CYGNUS = 1106001
NEINHEART = 1106003

sm.setSpeakerID(CYGNUS)
sm.sendNext("是的，女皇陛下说的总是对的。虽然还有很多不足之处，但这个少年好像确实继承了光之骑士的血。")
    
sm.setSpeakerID(NEINHEART)
sm.sendSay("我父亲是光之骑士？我会成为光之骑士？我只是个平凡的少年。连名字都没有……")

sm.setPlayerAsSpeaker()
sm.sendSay("选择权在你。但是你生来就带有光明之血，最好不要和自己的命运对抗。为了你，同时也是为了冒险岛世界。\r\n你愿意跟我走吗？")

sm.setSpeakerID(CYGNUS)
if sm.sendAskAccept("你好像需要个名字。就用“从光明中诞生的人”的意思，起名叫#b#e“米哈尔”#k#n如何？好像很适合你。现在和我一起到圣地去吧。没有比那里更适合让你成为光之骑士的了。"):
    sm.sendNext("There has been an incident at the #b Ellinel Fairy Academy#k. A human magician has trespassed in the sacred halls of the fairy school.")
    sm.giveItem(1142399)# Newborn Light (Medal)
    sm.giveItem(1052444)# Apprentice Knight of Light Robe
    sm.giveItem(1302077)# Beginner Warrior's Sword
    sm.giveNewSecondary(1098000)# Soul Shield of Protection
    sm.removeEscapeButton()
    sm.sendNext("You need a name. How about... #b#e'Mihile'#k#n? It means 'Born of Light'? I think it will suit you well, in the end. Let us go to Ereve. A brilliant new life awaits you.")
    sm.addLevel(2)
    sm.setJob(5100)
    sm.addSP(5)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.startQuestNoCheck(29976)
    sm.completeQuestNoRewards(29976)
    sm.completeQuestNoRewards(20036)
    sm.warp(913070071, 0)
else:
    sm.setSpeakerID(CYGNUS)
    sm.sendNext("Why are you refusing destiny?")