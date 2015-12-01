package com.crmsystem.enity;

import java.io.Serializable;
import java.util.List;

/**
 * @author fan
 * @描述:
 * @date 2015/11/3014:37
 */
public class Menu implements Serializable{
    private String menuid;
    private String fmenuid;
    private String url;
    private String classes;
    private String typecode;
    private String code;
    private String text;
    private String items;
    private List<Menu> menus;

    public List<Menu> getMenus() {
        return menus;
    }

    public void setMenus(List<Menu> menus) {
        this.menus = menus;
    }

    public String getMenuid() {
        return menuid;
    }

    public void setMenuid(String menuid) {
        this.menuid = menuid;
    }

    public String getFmenuid() {
        return fmenuid;
    }

    public void setFmenuid(String fmenuid) {
        this.fmenuid = fmenuid;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getClasses() {
        return classes;
    }

    public void setClasses(String classes) {
        this.classes = classes;
    }

    public String getTypecode() {
        return typecode;
    }

    public void setTypecode(String typecode) {
        this.typecode = typecode;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getItems() {
        return items;
    }

    public void setItems(String items) {
        this.items = items;
    }
}
