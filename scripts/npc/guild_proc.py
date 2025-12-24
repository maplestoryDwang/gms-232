from net.swordie.ms.constants import GameConstants

guild = chr.getGuild()

if chr.isGuildMaster():
    sel = sm.sendNext("What would you like to do? \r\n\r\n#L0##bIncrease the guild's capacity#l"
                      "\r\n#L1#Disband the guild#l"
                      "\r\n#L99##kNevermind#l")
    if sel == 0:
        # Increase capacity
        if guild.getMaxMembers() < GameConstants.MAX_GUILD_MEMBERS:
            if sm.sendAskYesNo("Would you like to increase your guild's max capacity? You currently have "
                            + str(guild.getMaxMembers()) + " members, but I can increase it by 10 for 500,000 mesos."):
                if sm.getMesos() < 500000:
                    sm.sendSayOkay("You do not have enough mesos.")
                else:
                    sm.incrementMaxGuildMembers(10)
                    sm.deductMesos(500000)
        else:
            sm.sendSayOkay("Be sure to come back if you change your mind!")
    elif sel == 1:
        # Disband
        text = sm.sendAskText("Are you really sure you want to disband your guild? Everyone will be kicked out, and you"
                              " will be removed from the alliance. If you are the alliance leader, a random guild will be"
                              " the new alliance leader.\r\n\r\nPlease enter your guild name to confirm you want to disband your guild.",
                              "", 4, 20)
        if text == guild.getName():
            guild.disband()
        else:
            sm.sendNext("That name doesn't match your guild name.")
elif guild is None:
    if sm.sendAskYesNo("Would you like to create a guild? This will cost 5 million mesos."):
        if sm.getMesos() < 5000000:
            sm.sendSayOkay("You do not have enough mesos.")
        else:
            sm.showGuildCreateWindow()
else:
    sm.sendSayOkay("Hey there, I'm in charge of everything guild related. If you want anything done to your guild, "
                   "you can ask your guild master to come to me.")
