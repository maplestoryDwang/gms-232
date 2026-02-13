# Regards, Takeda Shingen (Sengoku Era) Questline (Stage 2) | Near Momiji Hills 1 (811000001)
# Completes stage 2 of prequest
# Author: Tiger

TAKEDA = 9000427
ITEMID = 4034128 # Bitter Resurrection Herb

sm.setSpeakerID(TAKEDA)

sm.flipSpeaker()
sm.sendNext("你拿来#i4034128:##t4034128:#了吗？")

sm.flipSpeaker()
sm.sendSay("为了培育#i4034128:##t4034128:#，真是辛苦你了。多亏了你，我们可以制造唤醒武将的药了。")

sm.flipSpeaker()
sm.sendSay("我要制作治疗药，你能等一下吗？然后再重新和我对话吧。")

sm.completeQuest(parentID) # completes part 2 of Regards, Takeda Shigen quest
sm.consumeItem(ITEMID, 1) # remove the herb
