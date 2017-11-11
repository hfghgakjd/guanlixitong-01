package com.crmsystem.aops;

import com.crmsystem.annotations.SystemControllerLog;
import com.crmsystem.contants.WebConstants;
import com.crmsystem.enity.User;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.lang.reflect.Method;

/**
 * 切点类
 *
 * @auhtor snowfog shao
 */
@Aspect
@Component
public class SystemLogAspect {

    //本地异常日志记录对象
    private static final Logger logger = LoggerFactory.getLogger(SystemLogAspect.class);


    //service 切点
    @Pointcut("@annotation(com.crmsystem.annotations.SystemServiceLog)")
    public void serviceAspect() {
    }

    //controller 切点
    @Pointcut("@annotation(com.crmsystem.annotations.SystemControllerLog)")
    public void controllerAspect() {
    }

    /**
     * 前置通知 用于拦截Controller层记录用户的操作
     *
     * @param joinPoint 切点
     */
    @Before("controllerAspect()")
    public void doBefore(JoinPoint joinPoint,Throwable e) {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        HttpSession session = request.getSession();
        //读取session中的用户
        User user = (User) session.getAttribute(WebConstants.CURRENT_USER);

        //获取请求ip
        String ip = request.getRemoteAddr();
         try {
              /*========控制台输出=========*/
             System.out.println("=====异常通知开始=====");
             System.out.println("异常代码:" + e.getClass().getName());
             System.out.println("异常信息:" + e.getMessage());
             System.out.println("异常方法:" + (joinPoint.getTarget().getClass().getName() + "." + joinPoint.getSignature().getName() + "()"));
             System.out.println("方法描述:" + getControllerMethodDescription(joinPoint));
             System.out.println("请求人:" + user.getUsername());
             System.out.println("请求IP:" + ip);
         }catch (Exception ex){
             logger.error("异常信息:{}",ex.getMessage());
         }
    }


   public  static String getControllerMethodDescription(JoinPoint joinPoint)  throws Exception {
        String targetName = joinPoint.getTarget().getClass().getName();
        String methodName = joinPoint.getSignature().getName();
        Object[] arguments = joinPoint.getArgs();
        Class targetClass = Class.forName(targetName);
        Method[] methods = targetClass.getMethods();
        String description = "";
         for (Method method : methods) {
             if (method.getName().equals(methodName)) {
                Class[] clazzs = method.getParameterTypes();
                 if (clazzs.length == arguments.length) {
                    description = method.getAnnotation(SystemControllerLog. class).description();
                     break;
                }
            }
        }
         return description;
    }
}
