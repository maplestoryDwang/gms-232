# WA - End of Knight-in-Training - Start
sm.setSpeakerID(1101002)
if not sm.getFieldID() == 130000000:
    response = sm.sendAskYesNo("#h0#？一转眼你已经等级这么高了，都快认不出来了。任务好像也完成了不少……我觉得你完全有资格参加#b骑士等级考试#k了。怎么样？现在你差不多该从修炼骑士升级为正式骑士了。你说呢？")
    if response:
        sm.warp(130000000)
        sm.dispose()
    else:
        sm.sendSayOkay("如果你想参加骑士等级考试，可以随时来圣地。各个骑士团长会对你的能力进行测试，如果合格，就会任命你为正式骑士。再见……")
if sm.sendAskAccept("#h #? Your level is so much higher! It seems that you finished many quests... what about taking a test for knights? It should be good time to end your trainee life."):
    sm.sendSayOkay("To take the test of knight, Come to Ereve. The captains will test your ability and will appoint you as the knight of the clan if you pass it.")
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
