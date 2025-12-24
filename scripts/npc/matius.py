# Matthias
# TODO: these 2 warp to the same map in + out?
if sm.hasQuest(20807):
   if sm.sendAskYesNo("Would you like to attempt the first test?"):
       sm.warpInstanceIn(913070800, 0)
       sm.setInstanceTime(300, 913070800)
else:
    # sm.sendSayOkay("What is it that you want, adventurer?")

    if sm.sendAskYesNo("Would you like to attempt the first test?"):
        sm.warpInstanceIn(913070800)
        sm.setInstanceTime(300, 913070800)