# After Shedding 2
# 22603
# Mir (1013000)

dragonMaster = 1142157

mir = 1013000

sm.setSpeakerID(mir)
sm.sendNext("主人，你看。这次成长之后，我的力量几乎已经完整了。")

sm.setPlayerAsSpeaker()
sm.sendSay("#b嗯，看上去就感觉很有气势。这就是玛瑙龙的真正力量吗？")

sm.setSpeakerID(mir)
sm.sendSay("这是玛瑙龙的力量，同时也是主人的力量。玛瑙龙只有在契约者变强的时候才会成长。也就是说，主人你也同样成长了。")

sm.setPlayerAsSpeaker()
sm.sendSay("#b果然……你现在越来越会说话了，#p1013000#。")

sm.setSpeakerID(mir)
response = sm.sendAskAccept("呵呵，那当然。我这么优雅的外表，如果太轻狂的话，岂不会被人笑掉大牙？对了主人，和上次一样，这次蜕皮之后又留下了一块鳞片。里面含有比以前更强的力量，我想应该会对你有所帮助。来，拿着。")
if response:
    if sm.canHold(dragonMaster):
        sm.giveItem(dragonMaster)
        sm.startQuest(parentID)
        sm.completeQuest(parentID)
        
        sm.sendSayOkay("虽然因为龙神是人类，会受到怪物的攻击，可是说不定那块鳞片可以保护龙神。如果龙神变强，我也会变得更加强大……我们一起强大起来吧，龙神。")
    else:
        sm.sendSayOkay("Master, make some space in your Equip inventory first.")