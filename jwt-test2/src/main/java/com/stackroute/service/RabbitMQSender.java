package com.stackroute.service;

import com.stackroute.model.DAOUser;
import com.stackroute.model.UserDTO;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class RabbitMQSender {
    @Autowired
    private AmqpTemplate rabbitTemplate;

    @Value("${gamos.rabbitmq.exchange}")
    private String exchange;

    @Value("${gamos.rabbitmq.routingkey}")
    private String routingkey;

    public void send(String token) {
        rabbitTemplate.convertAndSend(exchange, routingkey, token);
        System.out.println("Send msg = " + token);
    }
    public void sendObj(UserDTO user){
        rabbitTemplate.convertAndSend(exchange, routingkey,user);
        System.out.println("Send object:" +user);
    }
}
