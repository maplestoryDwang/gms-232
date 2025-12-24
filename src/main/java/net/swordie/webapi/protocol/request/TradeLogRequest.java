package net.swordie.webapi.protocol.request;

import com.sun.xml.fastinfoset.stax.events.Util;
import jakarta.ws.rs.BadRequestException;

public class TradeLogRequest extends ValidatedApiRequest {

    private boolean isUsername;

    private boolean byAccount;

    private String name;

    public TradeLogRequest() {
    }

    public TradeLogRequest(boolean isUsername, boolean byAccount, String name) {
        this.isUsername = isUsername;
        this.byAccount = byAccount;
        this.name = name;
    }

    @Override
    public void validate() {
        if (Util.isEmptyString(name)) {
            throw new BadRequestException("Name cannot be empty.");
        }
    }

    public boolean isUsername() {
        return isUsername;
    }

    public void setUsername(boolean username) {
        isUsername = username;
    }

    public boolean isByAccount() {
        return byAccount;
    }

    public void setByAccount(boolean byAccount) {
        this.byAccount = byAccount;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
