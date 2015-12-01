package com.crmsystem.controller;

import com.crmsystem.enity.Menu;
import com.crmsystem.service.impl.MenuServiceImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * 描述：菜单控制器类
 *
 * @author fan
 * @time 2015/12/1
 */
@Controller
public class MenuController {

    @Resource
    private MenuServiceImpl menuService;
    @RequestMapping("getMenu.do")
    @ResponseBody
    public String menus() {
        //一级菜单
        List<Menu> menusOne = menuService.getFirstMenus();
        //new一个二级菜单
        List<Menu> menusTwo = new ArrayList<Menu>();
        for (Menu menu : menusOne) {
            String menuid = menu.getMenuid();
            menusTwo = menuService.getSecondMenus(menuid);
            menusTwo.remove(0);
            //将二级菜单加入到一级菜单中
            menu.setMenus(menusTwo);
        }
        String str = "";
        String items = "";
        StringBuffer buffer = new StringBuffer();
        StringBuffer buffer2 = null;
        List<Menu> mTwo = new ArrayList<Menu>();
        //遍历一级菜单
        for (Menu m : menusOne) {
            buffer2 = new StringBuffer();
            //取得二级菜单
            mTwo = m.getMenus();
            //遍历二级菜单
            for (Menu m2 : mTwo) {
                //拼接二级菜单的字符串
                buffer2.append("{id:'" + m2.getMenuid() + "',text:'" + m2.getText() + "',href:'" + m2.getUrl() + "'},");
            }
            items = buffer2.toString();
            items = items.substring(0, items.lastIndexOf(","));
            str = buffer.append("{text:'" + m.getText() + "',items:[" + items + "]},").toString();
            str = "["+str.substring(0, str.lastIndexOf(","))+"]";
            System.out.println(str);
            ObjectMapper mapper = new ObjectMapper();
            try {
                str = mapper.writeValueAsString(str);
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
        }
        return str;
    }
}