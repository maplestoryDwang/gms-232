package net.swordie.ms.client.blacklist;

/**
 * Created on 05/06/2021.
 *
 * @author Asura
 */
public class BlackListEntry {
    private int id;
    private int tab;
    private String targetName, nickName;
    private int chrId, guildId;

    public BlackListEntry() {
    }

    public BlackListEntry(int tab, String targetName, String nickName, int chrId, int guildId) {
        this.tab = tab;
        this.targetName = targetName;
        this.nickName = nickName;
        this.chrId = chrId;
        this.guildId = guildId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getTab() {
        return tab;
    }

    public void setTab(int tab) {
        this.tab = tab;
    }

    public String getTargetName() {
        return targetName;
    }

    public void setTargetName(String targetName) {
        this.targetName = targetName;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public int getChrId() {
        return chrId;
    }

    public void setChrId(int chrId) {
        this.chrId = chrId;
    }

    public int getGuildId() {
        return guildId;
    }

    public void setGuildId(int guildId) {
        this.guildId = guildId;
    }

    public boolean isIndividualBlackListEntry() {
        return getTab() == 0;
    }

    public boolean isGuildBlackListEntry() {
        return getTab() == 1;
    }

    @Override
    public boolean equals(Object obj) {
        // Not the same Object
        if (!(obj instanceof BlackListEntry)) {
            return false;
        }

        BlackListEntry other = (BlackListEntry) obj;

        // They have different Tabs (Individual | Guild)
        if (getTab() != other.getTab()) {
            return false;
        }

        // Both Individual -> Check ChrId
        if (getTab() == 0) {
            return getChrId() == other.getChrId();
        }

        // Both Guild -> Check GuildId
        if (getTab() == 1) {
            return getGuildId() == other.getGuildId();
        }

        return false;
    }
}
