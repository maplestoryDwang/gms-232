# Lenario - Manager of Guild Union

GUILD_ALLIANCE_COST = 5000000
otherMember = None
chrGuild = chr.getGuild()
chrAlliance = None
if chrGuild is not None:
    chrAlliance = chrGuild.getAlliance()

def show_disband():
    if sm.sendAskYesNo("I see that your alliance only has your guild in it. You can invite other guilds by going to Alliance "
                    "and selecting Invite to Alliance. Or, if you don't want the Alliance to exist anymore, I can help you with that. \r\n\r\n"
                    "Would you like to disband the Alliance?"):
        allyName = sm.sendAskText("Please enter you Alliance name here for confirmation.", "", 4, 20)
        if allyName == chrAlliance.getName():
            chrAlliance.disband()
            sm.sendSayOkay("Your Alliance has been disbanded.")
        else:
            sm.sendSayOkay("That doesn't seem to be the correct Alliance name.")

if chrAlliance is not None and chrAlliance.canBeDisbanded() and chrGuild.isGuildMaster(chr):
    show_disband()
else:
    if chr.getParty() is not None:
        for pm in chr.getParty().getOnlineMembers():
            other = pm.getChr()
            if other is not None and other is not chr and other.getGuild() is not None \
                    and other.getGuild().getAlliance() is None and other.getGuild().isGuildMaster(other):
                otherMember = other
    if chr.getGuild() is None or chr.getGuild().getAlliance() is not None or not chr.getGuild().isGuildMaster(chr) \
        or chr.getParty() is None or otherMember is None:
        sm.sendSayOkay("I'm in charge of guild alliances. If you wish to create an alliance, make a party with another "
                       "guild leader and talk to me again. It will cost you 5 million mesos.")
    elif sm.isPartyLeader():
        # for chr + other: guild exists, has no alliance, and have the party members as masters
        if sm.sendAskYesNo("I see that you have another guild master in your party. Would you like to create an alliance "
                        "with them?"):
            if sm.getMesos() < GUILD_ALLIANCE_COST:
                sm.sendSayOkay("It seems that you're missing some mesos. Make sure you have at least 5 million mesos before "
                               "trying to create a guild alliance.")
            else:
                text = sm.sendAskText("Please input your desired alliance name.", "", 4, 20)
                while not sm.checkAllianceName(text):
                    sm.sendAskText("That alliance name is already in use.", "", 4, 20)
                else:
                    sm.createAlliance(text, otherMember)
                    sm.sendSayOkay("Your alliance has successfully been created!")
    else:
        sm.sendSayOkay("I see you have another guild leader in your party. If you want to make an alliance, your party leader"
                       " has to talk to me.")