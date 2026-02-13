# id 32120 ([Ellinel Fairy Academy] Dr. Betty's Measures), field 101000000
sm.setSpeakerID(1032104) # Betty
sm.sendNext("我研究的是森林里的各种生物。在森林中，需要精确捕捉所需生命体的声音时，有时也会用上这个工具。只要捕捉到声音的话，就能大致知道方向和距离。\r\n\r\n#i4033830##b#t4033830##k")
if sm.sendAskAccept("虽然不知道是否能派上用场，但总比没有强啊。请把那些不幸的孩子拯救出来吧。\r\n\r\n（接受后，移动到妖精学院艾利涅。）"):
    if sm.canHold(4033830):
        sm.giveItem(4033830)
        sm.startQuest(parentID)
        sm.warp(101071300)
    else:
        sm.sendNext("You don't have enough inventory space to hold this Directional Sonar.")