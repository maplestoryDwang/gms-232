# [Commerci Republic] Delfino Deleter 2

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("它们比我们想象中的弱多了。看来传闻有点夸大了。")

response = sm.sendAskYesNo("虽然击退了#o9390808#，但事情好像并没有就此结束。刚刚我接到报告，好像又发现了其他群体。你这次也会帮我的吧？")

if response:
    sm.sendNext("#b#e#o9390811##k#n好像在#b#k#m865020100##k#n。我们这次也来打赌，看谁先击退#b#e30只#k#n吧！我先到#m865020100#等着你！")
    sm.startQuest(parentID)
else:
    sm.sendSayOkay("Oh, I suppose we can rest for a little bit.")
sm.dispose()
