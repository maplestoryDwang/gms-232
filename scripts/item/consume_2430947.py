# id 2430947 (D-03 Transmitter), field 401020300
if sm.getFieldID() == 401020300 and sm.hasQuest(31821):
    sm.setSpeakerID(3001004) # Tonero
    sm.setParam(4)
    sm.setInnerOverrideSpeakerTemplateID(3001004) # Tonero
    sm.sendNext("Who are you? That Transmitter ID code belongs to #b#p3001002##k.")
    sm.setParam(2)
    sm.sendSay("I'm one of the Maple World adventurers that came to help Nova. Are you the Shadowdealer?")
    sm.setParam(4)
    sm.sendSay("Oh, are you from this world? #b#p3001002##k mentioned something about having an uninvited guest. I guess he was talking about you.")
    sm.sendSay("Ugh the static is getting worse. I'll go there myself. Just wait.")
    sm.setParam(2)
    sm.sendSay("(The communication terminated. There's an error message on the D-03 Transmitter.)")
    sm.startQuest(31822)
    sm.setQRValue(31822, "1", False)
    sm.startQuest(31575)
else:
    sm.chat("You aren't using this in the right map.")
