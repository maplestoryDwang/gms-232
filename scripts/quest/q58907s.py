# Regards, Takeda Shingen (Sengoku Era) Questline (Stage 3) | Near Momiji Hills 1 (811000001)
# Starts part 3 of prequest
# Author: Tiger

TAKEDA = 9000427
NPCID = 9130006 # Mouri Motonari
ITEMID = 4034129 # Mega Bitter Medicine
MAPID = 807000000 # Momijigaoka

sm.setSpeakerID(TAKEDA)

sm.flipSpeaker()
sm.sendNext("唤醒武将的药做好了。你代我转交给#p9130008:# 吧。")

sm.flipSpeaker()
sm.sendSay("……没什么。反正现在也走不了，你帮我转交一下这个吧。然后告诉他新来的武将是怎么来到这里的。")

sm.flipSpeaker()
sm.sendSay("请你把#i4034129:##t4034129:#交给#m783000000:#的#p9130008:#吧。")

response = sm.sendAskYesNo("其实我要走了……。")

if response:
    sm.giveItem(ITEMID, 1) # give mega bitter medicine
    sm.startQuest(parentID) # start quest #3
