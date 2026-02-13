# Regards, Takeda Shingen (Sengoku Era) Questline (Stage 2) | Near Momiji Hills 1 (811000001)
# Starts stage 2 of pre-quest
# Author: Tiger

TAKEDA = 9000427

ITEMID = 4034128 # Bitter Resurrection Herb
ITEMID_2 = 4009378 # Contaminated Goblin Detritus

MAPID_1 = 811000004 # Hidden Field of Momiji Hills 1
MAPID_2 = 811000005 # Hidden Field of Momiji Hills 2
MAPID_3 = 811000006 # Hidden Field of Momiji Hills 3

MOBID_1 = 9450026 # Contaminated Goblin 1
MOBID_2 = 9450027 # Contaminated Goblin 2

sm.setSpeakerID(TAKEDA)
sm.flipSpeaker()

sm.sendNext("多亏了你搜集到的咒术书，我想起了信上写的解除咒术的方法了。")

response = sm.sendAskYesNo("为了解除这个咒术，还需要一个东西，你能再帮我一下吗？")

if response:
    sm.flipSpeaker()
    sm.sendNext("为了解除这个咒术，需要#i4034128:##t4034128:#。")

    sm.flipSpeaker()
    sm.sendSay("#i4034128:##t4034128:#需要抓住#m811000004:#、#m811000005:#、#m811000006:#的#o9450026:#、#o9450027:#后得到的#i4009286:##t4009286:#作为养分，才能成长。")

    sm.flipSpeaker()
    sm.sendSay("你去#m811000004:#、#m811000005:#、#m811000006:#看看，留心观察，应该就能找到药草的种子，然后用那里的#t4009286:#提供营养就行。")

    sm.flipSpeaker()
    sm.sendSay("#i4034128:##t4034128:#会经历3个成长阶段，每个阶段需要10个#t4009286:#。")
    sm.startQuest(parentID)
