# Regards, Takeda Shingen (Sengoku Era) Questline (Stage 3) | Momijigaoka (807000000)
# Completes part 3 of prequest
# Author: Tiger

MOURI = 9130006 # Mouri Motonari
ITEMID = 4034129 # Mega Bitter Medicine

sm.setSpeakerID(MOURI)

sm.flipSpeaker()
sm.sendNext("嗯？信玄公没来，派你来了？……我还以为信玄公会亲自来呢……")

sm.flipSpeaker()
sm.sendSay("好吧……首先，为了治疗#i4034129:##t4034129:#新来的武将，把这个药交给你。")

sm.flipSpeaker()
sm.sendSay("他应该马上就会醒来的。武将在堂主的房间里，你去看看吧。")

sm.flipSpeaker()
sm.sendSay("堂主的房间在这个地图的左边尽头。\r\n\r\n（#b现在可以通过左边的传送点前往守卫房间了。）")

sm.completeQuest(parentID)
sm.consumeItem(ITEMID) # remove mega Bitter Medicine from user
