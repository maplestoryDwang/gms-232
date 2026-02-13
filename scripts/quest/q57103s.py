# 57103 - Picking up the Pieces

sm.setSpeakerID(9130024)
if sm.sendAskYesNo("我是共同参加本能寺攻略战的尼子家家臣，我名为山中幸盛。在说明事情的来龙去脉之前，可不可以告诉我你的名字呢？"):
    sm.setPlayerAsSpeaker()
    sm.startQuest(parentID)
    sm.sendNext("我是松山家的家臣，姐崎朝信的儿子，名为姐崎剑斗。")
    sm.setSpeakerID(9130024)
    sm.sendNext("#face1#姐崎剑斗……真是久仰了。能见到鼎鼎有名的晓月流剑圣，实在是我的光荣。")
    sm.setPlayerAsSpeaker()
    sm.sendNext("阁下太客气了，能见到人称忠肝义胆的幸盛，才真是我的荣幸呢。如果知道你也参加了本能寺攻略战，我真应该早点过来和你打声招呼了。实在是太遗憾了。")
    sm.setSpeakerID(9130024)
    sm.sendNext("#face0#虽然还有很多话想说，但我现在还是先简单说明一下本能寺攻略战时候发生的问题，以及现在的情况吧。等你做好心理准备之后，再来和我进行对话吧。")
    sm.dispose()
else:
    sm.dispose()