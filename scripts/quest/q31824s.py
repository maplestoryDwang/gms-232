# id 31824 (Enter Romero), field 401020300
sm.setPlayerAsSpeaker()
if sm.sendAskYesNo("The D-03 transmitter is ringing. Wonder who it is...?"):
    sm.setSpeakerID(3001005) # Romero
    sm.sendNext("Testing, testing. Hey! You hear me?")
    sm.setPlayerAsSpeaker()
    sm.sendNext("#bWho is this? #p3001004#?")
    sm.setSpeakerID(3001005) # Romero
    sm.sendNext("I'm #p3001005#. I'm the top trader and wilderness guide for the Shadowdealers. Meet me over at the #m401020300#!")
    sm.setPlayerAsSpeaker()
    sm.sendNext("#bUh... I guess I'll come meet you then.")
    sm.startQuest(31824)
    sm.completeQuest(31824)
