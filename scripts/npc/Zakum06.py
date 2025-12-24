# Amon - (Easy/Chaos) Zakum's Altar
ZAKUM_SPAWNED_KEY = "ZakumSpawned"
EYE_OF_FIRE = 4001017

spawned = field.hasProperty(ZAKUM_SPAWNED_KEY) and field.getProperty(ZAKUM_SPAWNED_KEY)

if not spawned and not sm.getFieldID() == 280020000 and not sm.getFieldID() == 280020001:
    answer = sm.sendSay("#L0#I am ready to take on Zakum.#l\r\n#L1#I want to leave.\r\n#l#L2#Nevermind.#l")
    if answer == 0:
        if not sm.hasItem(EYE_OF_FIRE):
            if sm.sendAskYesNo("Okay, for that you have to drop this #b#i{}##t{}# #kin front of the altar.\r\n\r\nDo you want one?".format(EYE_OF_FIRE, EYE_OF_FIRE)):
                if sm.canHold(EYE_OF_FIRE):
                    sm.giveItem(EYE_OF_FIRE)
                    sm.sendSayOkay("Alright, here you go. Good luck.")
                else:
                    sm.sendSayOkay("Your bags seem a little full for that. Make sure you have space in your ETC inventory.")
            else:
                sm.sendSayOkay("Alright, I'll keep it then.")
        else:
            sm.sendSayOkay("I see that you have an #b#i{}##t{}# #kalready. Drop it in front of the alter and Zakum will be summoned.".format(EYE_OF_FIRE, EYE_OF_FIRE))
    elif answer == 1:
        sm.warpInstanceOut(211042300, 1) # Zakum entrance
elif sm.sendAskYesNo("Do you want to leave?"):
    sm.warpInstanceOut(211042300, 1) # Zakum entrance

