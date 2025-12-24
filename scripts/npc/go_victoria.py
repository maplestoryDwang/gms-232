# Rupi
# 2002000
# Happyville teleports you out to El Nath

if sm.sendAskYesNo("Would you like to return to town?"):
    sm.warp(chr.getPreviousFieldID())
