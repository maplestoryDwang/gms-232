# So Gong (2091011) | Mu Lung Dojo Hall
DOJO_QUEST = 3887
dojoHall = 925020001
dojoExit = 925020002
curFloor = ((sm.getFieldID() % 925070000) / 100)

def startRanked():
    sm.setQRValue(DOJO_QUEST, "floor", str(0))
    sm.warpInstanceIn(925070000, 0, False)

if sm.getFieldID() == dojoHall:
    selection = sm.sendNext("My master is the strongest person in Mu Lung, and YOU wish to challenge HIM? I have a feeling you'll regret this.\r\n#b"
                "#L0#I want to challenge Mu Lung Dojo.#l\r\n"
                "#L1#What is Mu Lung Dojo?#l\r\n"
                "#L2#What rewards can I get from Mu Lung Dojo?#l\r\n"
                "#L3#How many attempts do I have left today?#l\r\n"
                "#L4#I'd like to enter the Unity Training Center.#l\r\n")

    if selection == 0: # I want to challenge Mu Lung Dojo
        selection = sm.sendNext("What mode do you want to challenge?\r\n#b"
                                 "#L0#I want to challenge Ranked Mode.#l\r\n")
        if selection == 0:
            startRanked()

    elif selection == 1: # What is Mu Lung Dojo?
        sm.sendSayOkay("#r//TODO")
    elif selection == 2: # What rewards can I get from Mu Lung Dojo?
        sm.sendSayOkay("#r//TODO")
    elif selection == 3: # How many attempts do I have left today?
        sm.sendSayOkay("#r//TODO")
    elif selection == 4: # I'd like to enter the Unity Training Center.
        sm.sendSayOkay("#r//TODO")

elif sm.sendAskYesNo("You have cleared dojo #bfloor "+ str(sm.getQRValue(DOJO_QUEST, "floor")) + "#k within \r\n #b" + str(sm.getQRValue(DOJO_QUEST, "time")) + " seconds#k. Are you giving up already?"):
    sm.warpInstanceOut(dojoExit)


