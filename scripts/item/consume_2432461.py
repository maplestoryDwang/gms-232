# Clever Lady Hotline

from net.swordie.ms.constants import FieldConstants
from net.swordie.ms.constants import OzConstants

sm.setSpeakerID(2540000)  # Alicia's Soul
if FieldConstants.isTowerOfOzField(chr.getFieldID()):
    selection = sm.sendNext("#b"
                            "#L0#I like to be teleported to the start of the floor#l\r\n"
                            "#L1#I like to leave Oz#l\r\n")

    if selection == 0:
        sm.teleportToPortal(0)
    elif selection == 1:
        if chr.getInstance() is not None:
            sm.setSpeakerID(2540000)  # Alicia's Soul
            if sm.sendAskYesNo("Are you sure you want to leave?"):
                sm.warpInstanceOut(OzConstants.OZ_LOBBY)
