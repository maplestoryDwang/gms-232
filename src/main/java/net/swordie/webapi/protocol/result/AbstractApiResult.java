package net.swordie.webapi.protocol.result;

import org.json.JSONObject;

public abstract class AbstractApiResult {

    public abstract JSONObject toJson();
}
