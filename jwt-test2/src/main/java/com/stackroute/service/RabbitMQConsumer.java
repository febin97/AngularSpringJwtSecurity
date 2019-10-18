package com.stackroute.service;

import com.stackroute.model.UserDTO;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class RabbitMQConsumer {
//    @RabbitListener(queues = "${gamos.rabbitmq.queue}")
//    public void recievedMessage(String str) {
//        System.out.println("Recieved Message From RabbitMQ: " + str);
//    }
//    @RabbitListener(queues = "${gamos.rabbitmq.queue}")
//    public void recievedMessageObj(UserDTO user) {
//        System.out.println("Recieved Message From RabbitMQ: " + user);
//    }
}
