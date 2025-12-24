# Tory (1012112) | Moon Bunny's Rice Cake Waiting Room
sm.setSpeakerID(parentID)
selection = sm.sendNext("#e<Party Quest: Moon Bunny>#n \r\n Hi I'm Tory! \r\n #b#L0#Go to Primrose Hill.#l \r\n #L1#How many more times can I try Primrose Hill?#l")

if selection == 0:
    sm.warpInstanceIn(910010000, 0, True)
elif selection == 1:
    #TODO finish this
    sm.sendNext("Todo")