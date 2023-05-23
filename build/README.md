# 🛠️ Build Guide

## 🔩 Materials

See the [Bill of Materials](https://docs.google.com/spreadsheets/d/1nTiWtXSQyJkAH41l_2g4mi9BzdMKPcJyHellGAf7hss/edit?usp=sharing)

Everything on this list is required to build the Zen Table.

## 📐 Schematics

- CAD (TODO)
- [Mechanical](https://lh3.googleusercontent.com/pw/AJFCJaWcGGDEbCW-JECHFSvQXr0aiFew4Ojzaiaof6FJbcLLlrXjpg1U5mka-dS66ug3CvenVBsgvKvSr-9evqQ1LxeVMtUV0CJao-qZs3ICAIMMX9ztL6sjeaKiRkIC1O449TltYbkZQQxPGHfiQeUECUjimg=w1256-h835-s-no?authuser=0)
- [Electronics](https://lh3.googleusercontent.com/pw/AJFCJaVVcQhnaN8OWlsrfPG1fsHAAYxBWg9VWe7xsLi4giUIwXpajUtzkfX5BQO6mXMEsX63gnorgK-3sZ9-VyrmaMgrvAsSRZn5A5KI708n37_zNSy_CkHiehAltlSvOgkTNSYYKk2cP7cY6by0r5IIbcxRoQ=w832-h563-s-no?authuser=0)

## 🪵 Wood

First cut the top using a router, (TODO, SPECS/ CAD OF TOP)

<img width="500" alt="top" src="https://lh3.googleusercontent.com/pw/AJFCJaUxRp0kdjih0aqlDdZ24dcfJuQkl4gO1tcdNp-KM0hAr3CgDSA-p-SdK1yjD9iJ9tIgOMubsN-Ff3Y-rur7_E_b04Uel_4EbeQXh48-SpMZA-w3zoLComyWD9ML3-HXsnkj8BIDs3vlptRHJopNSxYLBg=w1264-h949-s-no?authuser=0">

Then cut the sides using a table saw and using mitre joints, glue using biscuits and a web sling, (TODO, SPECS/ CAD OF SIDES)

<img width="500" alt="sides" src="https://lh3.googleusercontent.com/pw/AJFCJaVFtHK0wSrtvtlHcpjCH9hvkt6e7NaVD15FWwdMnfVlqR5WdttpIgh6kyanla0UEl9aRwZQHY8wWxXxVuHAR_wn5XxxeoG3AOswi0VBdQ3vBuif9wixlHbGIylYjfHFVdhYMy8pimAGoBDJI7viLwHNsw=w713-h949-s-no?authuser=0">

Once this is done, cut the holes for the buttons.

Glue rubber onto the top and bottom of the wooden box (this acts as a sound and vibration damper)

Then glue canvas fabric around some thin MDF wood making sure to fold it over the MDF before gluing. This will be the canvas for the sand to sit on, it also acts as a damper and hides any gaps in the sand.

Screw the MDF into the top slab of wood.

<img width="500" alt="wood complete" src="https://lh3.googleusercontent.com/pw/AJFCJaUHuEBIcHt5GylJihQqWX-37eCOLy49LZxg-L4u7f4-wjoNFRyVvmgdhElMx35ohrgIGYEBF4EHa8tkCmoWW-KOOKLgwTxnOj_ZtpG8BAT8uITMVtu_C1A_glS2SwxHMI8FcoLC7Fjw9o4j86yE_vF8cQ=w1264-h949-s-no?authuser=0">

### 📌 Wood work Tips

- TODO

## ⚙️3D Printing

Recommended Settings:

- FDM/FFF Printing
- 30%+ infill
- PLA
- 0.2mm layer height

## 🤖 Mechanical

Bolt the 400mm linear rails to aluminium extrusion. Attach the magnet carriage (3D printed) to the 600mm rail.
The attach the 600mm rail to the 400mm rails using the (water jet cut) rail connector.

Attach 4 pulley holders to each rail connector so they can hold the timing belt. (use m5 bolts and lock tight nuts)

Cut down the aluminium extrusion attached to the 400mm rail to the width of the inside of the box (420mm).
Use L brackets to attach the aluminium extrusion to the wooden box, so that it is aligned with the top of the box. Drill through each and use m3 bolts and lock tight nuts for the aluminium and G screws for the wood.

Attach the stepper motors to the stepper mounts then soft mount this to the wooden box. Making sure their shaft is in line with the the timing belt, so it does not need to bend to get to the pulley.

Alined with the stepper motors and timing belt, on the wall opposite the stepper motors add some idler pulleys, by using the last pulley holder and screwing them into the wood.

This should look like this.

<img width="500" alt="rails" src="https://lh3.googleusercontent.com/pw/AJFCJaV736Dh3dxY6pKuBlzgIQ406TpgawRpB7BUuSl1-BIWeaesSwg0ws2SOq7OrzFAUkJlILxQiavDSLYK6qrdM3JdGENkVRqi60sYbX5DyVBd127HxTpfxA-fdVviH8R7OeGleH74vLJOdmc4lqKloUa3bA=w1265-h949-s-no?authuser=0">

Put the timing belt in. To do this zip tie one end to the carriage on the side opposite the stepper motors, with the teeth facing outwards. You can use the zip time to mesh the belts teeth together so it doesn't slide. follow the path shown in the image below making sure the teeth fit into the stepper motor pulley and the idler pulleys. Then zip tie the other end to the carriage. Make sure the tension is right!

<img width="500" alt="belt" src="https://lh3.googleusercontent.com/pw/AJFCJaWcGGDEbCW-JECHFSvQXr0aiFew4Ojzaiaof6FJbcLLlrXjpg1U5mka-dS66ug3CvenVBsgvKvSr-9evqQ1LxeVMtUV0CJao-qZs3ICAIMMX9ztL6sjeaKiRkIC1O449TltYbkZQQxPGHfiQeUECUjimg=w1256-h835-s-no?authuser=0">

### 📌 Mechanical Tips

- TODO
- Make sure everything is aligned (any angle off axis of the timing belt will cause it to slip, have more tension and make load moises)
- If you here odd noises and the belt is aligned try adjust the tension on the belt
- Do the 3D printing and wood work first.
- Soft mounting is adding some rubber between the joints to reduce the vibrations and sound.

Screw the ESP32 and the arduino mega into some cardboard, then use wood screws to screw the cardboard into the box. This makes sure the joints are not under stress

## 🌩️ Electronics

![Electronics](https://lh3.googleusercontent.com/pw/AJFCJaVVcQhnaN8OWlsrfPG1fsHAAYxBWg9VWe7xsLi4giUIwXpajUtzkfX5BQO6mXMEsX63gnorgK-3sZ9-VyrmaMgrvAsSRZn5A5KI708n37_zNSy_CkHiehAltlSvOgkTNSYYKk2cP7cY6by0r5IIbcxRoQ=w832-h563-s-no?authuser=0)

## 💻 Programming

### ESP32

### Mega