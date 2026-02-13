# [Shaoling Temple] Elder Jung's Summons

ELDER_JUNG = 9310049
MOUNT_SONG_HAMLET = 701210000

sm.removeEscapeButton()
sm.setBoxChat()
sm.flipBoxChat()
sm.flipBoxChatPlayerNoEscape()
sm.sendNext("#fs25#(嵩山镇的#b#p9310049##k寄来了书信。)")

sm.setSpeakerID(ELDER_JUNG)
sm.setBoxChat()
sm.sendNext("你可能记不得我和#b#m701210000##k了。但是，现在能够帮助我们的人就只有#h0#了。")

response = sm.sendAskYesNo("我希望能够当面和你说说详细情况，你能来#b#m701210000##k吗？")

if response:
    sm.sendNext("谢谢你能这么爽快地答应下来。情况紧急，请你现在就出发吧。请你到#b#m701210000##k来找我吧。")
    sm.warp(MOUNT_SONG_HAMLET)
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.giveExp(505113)
else:
    sm.sendSayOkay("Let me remind you... You're talking to a letter.")