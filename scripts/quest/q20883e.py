# 20883 - [Job Adv] (Lv.60)   Cygnus Knight
sm.setSpeakerID(1404009)
sm.sendNext("#h0#，你守护的那本书是非常重要的东西。绝对不能落入黑魔法师之手……虽然你的力量还比较弱，但你和敌人战斗的勇气令人赞叹。具体的内容，我现在还不方便告诉你。")
if sm.sendAskYesNo("你解决了这件事，女皇赐予了你新的爵位。你想现在接受爵位吗？"):
    chrJobID = sm.getChr().getJob()
    sm.jobAdvance(chrJobID+1)
    sm.completeQuest(parentID)
    sm.giveItem(1142068)
    sm.sendSayOkay("#h0#，我任命你为高级骑士。从现在开始，你就是冒险骑士团的高级骑士了。随着地位的提高，你必须承担更困难的任务。希望你能继续努力。")
else:
    sm.sendSayOkay("Let me know when you wish to accept the title.")
