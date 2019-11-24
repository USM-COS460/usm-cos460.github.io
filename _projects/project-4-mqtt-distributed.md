---
title: Project 4 - Distributed MQTT Server
permalink: /project-4
---
For this project, instead of writing code, you will design how to extend your broker from `Project 3` as a distributed system. That is, your broker should be able to connect to other brokers to manage a large number of clients. Your broker should still maintain compatibility with [MQTT][mqtt] [v3.1.1][mqtt-spec], so any suggested changes must not break exisitng clients and brokers.

<!--more-->

**NOTE: Your design must not violate the [MQTT][mqtt] [v3.1.1][mqtt-spec] specification!** 

## What is a Distributed Design?

You need to devise, using the existing MQTT specification, how a group of brokers would coordinate the servicing of multiple clients, multiple subscriptions, and publishing.

The requirements below refer to clients as Cn (C1, C2, C3,... Cn) and brokers as Bn (B1, B2, B3, ... Bn).

* A client connected to a broker should be able to subscribe to a topic that is published on any other broker connected to the distributed system.

* Clients are not necesarily connected to the same broker

* Brokers should not have copies of every message published

* There should not be a super-broker or master broker that manages the system. The brokers should coordinate but work independently. Similar to how routers and switches work independently and exchange messages.

* Clients should not need to know which broker received a message that eventually gets published to them.

## What should your design answer?

* How does a message get published to all clients that are subscribed to the topic? Show an example of all the messages involved in the exchange.

* How is each of the MQTT v3.1 messages handled in your design?

* How do brokers pass messages to each other, do they need to?

* How do brokers coordinate?

* How do brokers know about other brokers, do they need to?

* How does your design prevent messages from looping around the network?

* How does your design handle brokers that fall off the network and then rejoin later?

* Can clients connect to multiple brokers at the same time?

* What does the architecture of your design look like, a diagram would be perfect to show how things are potentially connected.

## Some Ideas to Consider

* The `SYS$` topic is reserved by some brokers. Could you use it or a similar topic?

* While you cannot violate the MQTT specification, you could add to it or use the reserved message types.

## What do you hand in?

To fully document your design, I would expect somewhere around 5-10 typewritten pages of text documenting the overall idea and how all the messages work in addition to any diagrams. Include, at least, answers to all the questions above. You should include a brief critique of your design. Keep your work to less than 15 pages in its entirety.

## Reference Materials and Resources

There are a number of documents that will be helpful in understanding the network protocols used by MQTT.

* [MQTT FAQ](https://mqtt.org/faq)  is a great starting place for what MQTT is.
* [MQTT v3.1.1 specification][mqtt-spec] is the formal specification of the protocol
* [MQTT Slides](https://www.slideshare.net/PeterREgli/mq-telemetry-transport) are an excellent overview of MQTT and MQTT packet format (as shown in class).

To facilitate your understanding of the MQTT Protocol these links might help

* [Wireshark](https://www.wireshark.org) for capturing network traffic and looking at captures
* [MQTT Packet Capture and Analysis using Wireshark](https://www.wireshark.org) video walkthrough of wireshark capturing MQTT traffic.
* [MQTT Packet Capture and Analysis using Wireshark](https://iotbytes.wordpress.com/capturing-and-analysing-mqtt-packets/) article from above video with packet capture (for wireshark) data you can load and look at.

To help you test your implementation these might help

* [Eclipse Mosquitto](https://mosquitto.org) free implementation of MQTT with `mosquitto_pub` and `mosquitto_sub` command line clients for publishing and subscribing to topics. Also includes an MQTT server that you can use as a reference implementation.
* [Eclipse paho](https://www.eclipse.org/paho/) free MQTT client libraries for a number of languages. You can also use these to test your server.
* Eclipse also runs a publically accessible sandbox server available at `mqtt.eclipse.org`, port `1883` which you can connect to and test clients against to understand how the protocol and clients work.

## Definitions
The IETF Best Practice Document RFC 2119 Key words for use in RFCs to Indicate Requirement Levels defines several keywords that are used in this assignment and throughout the course. Pay special attention to where they appear in the assignment.

Some keywords used in this assignment are as follows;

**MUST**: This word, or the terms **REQUIRED** or **SHALL**, mean that the definition is an absolute requirement of the specification.

**SHOULD**: This word, or the adjective **RECOMMENDED**, mean that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be under.

**MAY**: This word, or the adjective **OPTIONAL**, mean that an item is truly optional. One vendor may choose to include the item because a particular marketplace requires it or because the vendor feels that it enhances the product while another vendor may omit the same item.

 [mqtt]: http://mqtt.org
 [mqtt-spec]: http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html