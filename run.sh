#!/bin/bash
sudo iptables -D INPUT -i enp0s25 -j NODEJS-FUN
sudo iptables -F NODEJS-FUN
sudo iptables -X NODEJS-FUN
sudo iptables -N NODEJS-FUN
sudo iptables -A NODEJS-FUN -i enp0s25 -p tcp -m tcp --dport 3000 -j ACCEPT
sudo iptables -I INPUT -i enp0s25 -j NODEJS-FUN

pkill node
node src/app.js
