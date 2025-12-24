# Pia - Maple World Mini-Game Ambassador
# 9062471
# Neo Castle: Castle Column Exit (993190700)
#
# Sends you into the Castle Column (Neo Castle) Mini-Game
#

neo_castle_column_return_fieldId = 993190700
neo_castle_column_fieldId = 993190400

if chr.getParty() is not None:
    sm.sendSayOkay("You must leave your party before you can play the Castle Column Mini-Game.")
    sm.dispose()

if sm.sendAskYesNo("Would you like to play the Neo Castle Column Mini-Game?"):
    sm.warpInstanceIn(neo_castle_column_fieldId, 0)
    sm.setInstanceTime(5 * 60, neo_castle_column_return_fieldId)