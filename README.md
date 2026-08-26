Just for testing and learning purposes

  - Day 02 of editing this Readme.md
  - hello


hello just updating readme

everyday 4 commits must

hello 

again hello

how to fly the drones in a swarm?

i have implemented the drone models in multi_iris_runway.sdf world and spawned.

and i successfully integrated them with Ardupilot SITL.

the drones are flying well manually 

but when i wrote a mavsdk script to fly all of them concurrently, only one drone fly and the other did not however the telemetry shows that all three flew.

this didn't work so i shifted towards the ROS2 Node

So the ROS2 node will fly all the three drones simultaneously 

I have now instantiated the MAVROS commands for all the three drones 

And write a node code for their fly

but again one problem arises that drones disconnect when i ran command to check their status they connected and again they disconnected 

i am not able to understand what is happening like all the things are correct and everything works fine but the problem of connection one time true and then the next time false.

this causes the node to stuck at the checkout of connection 

i think i should now try mavsdk again to fly all the drones simultaneously 

if that again does not work then?

separately they are flying like manually when i give commands to each drone from its terminal it works but why not concurrently 

i think i should also try to use PYmavlink 

maybe it will work.

yes we have found the problem 

actually we were only using tcp or udp ports in mavsdk

so the solution was gRPC ports

when we configured gRPC ports for each instance then this worked

so first we flew all the 3 drones simultaneously only takeoff and hover for 10 seconds and then land