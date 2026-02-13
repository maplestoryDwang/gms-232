# Start of The City of Ereve
KIMU = 1102004
sm.setSpeakerID(KIMU)
sm.removeEscapeButton()

sm.sendNext("欢迎来到圣地！这里是冒险岛世界最和平、最安全的地方。是女皇希纳斯统治的土地！\r\n你的名字是……啊，是叫#b#h0##k吧？很高兴见到你！我一直在等你。你来这里，是想成为#p1101000#骑士团的一员吧？我叫#p1102004#。我奉女皇之名，在这里为像你这样的初心者提供指导。")

sm.sendSay("具体的事情以后再说，你先到新骑士团员欢迎会去看看吧。先去那里和其他修炼教官打个招呼。请跟我来。")

sm.completeQuestNoRewards(parentID)
sm.warp(130030100) # Knight Orientation Area
