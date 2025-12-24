# Arec | 2020011
sm.setSpeakerID(2020011)
selection = sm.sendNext("What brings you all the way here? \r\n\r\n #b#L0#I want to challenge Zakum#l \r\n #L1# Nothing, never mind.#l")
if selection == 0:
    sm.sendNext("Then I will send you to #bThe Door to Zakum#k.")
    sm.warp(211042300)