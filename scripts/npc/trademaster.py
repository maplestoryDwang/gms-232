# # #
# Maestra Fiametta (9390220)
#


# Start Voyage
def start_voyage():
    if chr.getParty() != None:
        sm.sendSayOkay("This is a solo mission, Samurai. Leave your party!")
        sm.dispose()

    chr.openVesselUI()
    chr.openVoyageUI()
    sm.dispose()


sel = sm.sendNext("Hello #e#b#h0##k#n. Welcome to the Commerci Trade Center.\r\n#b"
                  "#L0#Enter trade#l\r\n")

if sel == 0:
    start_voyage()
