# 20893 - [Job Adv] (Lv.100)   The Empress' Chief Knight
sm.setSpeakerID(1101000)
sm.sendNext("#h0#……这是……？")
sm.setPlayerAsSpeaker()
sm.sendNext("啊，女皇，那是南哈特让我交给你的冒险骑士团活动报告书。")
sm.setSpeakerID(1101000)
sm.sendNext("呵呵，南哈特是那么说的？这是推荐书。他说这段时间你比任何人都努力，变强了不少。还有，他说你为了骑士团尽了自己的全力。内容就是这些。")
sm.setPlayerAsSpeaker()
sm.sendNext("我认可你这段时间以来的努力、成就和功劳……我决定授予你新的职位。希望……你能接受。")
sm.setSpeakerID(1101000)
if sm.sendAskYesNo("#h0#，你拥有面对黑魔法师的勇气。从现在开始，你就是冒险骑士团的信任骑士团长了。希望你能将你的力量用于冒险岛世界的和平……"):
    sm.sendSay("嗯？南哈特大人？")
    if sm.canHold(1142069):
        chrJobID = sm.getChr().getJob()
        sm.jobAdvance(chrJobID+1)

        curJob = sm.getChr().getJob()
        cocSkillID = int(str(curJob) + "1000")
        if cocSkillID != 0:
            sm.giveSkill(cocSkillID, 0, 30)
        sm.giveItem(1142069)
        sm.completeQuest(parentID)
    else:
        sm.sendSay("Please make space in your Equip inventory.")
else:
    sm.sendSay("Please speak to me again when you change your mind.")