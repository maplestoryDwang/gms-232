# Hikari
# 9120003
# Showa Town (801000000)
# Warps to corresponding Spa map for 300 mesos.

gender = chr.getAvatarData().getAvatarLook().getGender()

response = sm.sendAskYesNo("Would you like to enter the bathhouse? That'll be 300 mesos for you. And don't take the towels!")

if response:
    if sm.getMesos() >= 300:
        sm.deductMesos(300)
        if gender == 0:
            sm.warp(801000100)
        else:
            sm.warp(801000200)
    else:
        sm.sendSayOkay("Come back when you have mesos!")