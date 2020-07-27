# Mech App
This is the front-end for Project Mech. This app is a forum where car owners can input their cars' makes and models and search diagnostic trouble codes (DTC) to chat with other car owners for potential solutions.

![Preview01](https://user-images.githubusercontent.com/55764217/84456809-cb1a2380-ac15-11ea-8910-0d487bd3f89d.png)

## Limitations
**Car Makes**<br/>
You can only add **Toyota, Honda, and Chevrolet** cars at the moment to your garage. Technically, you can add any car. There just isn't data to support them outside of the ones mentioned previously. This is because the database isn't fully populated with other cars.

**DTC**<br/>
These are the only codes that will work at the moment. Same reason as above, this is because the database isn't fully populated with other DTCs.<br/><br/>
*Toyota*: **P1100, P1120, P1121, P1125**<br/>
*Honda*: **P1106, P1108, P1121**<br/>
*Chevrolet*: **P1674, P1760, P1273**<br/>
*Universal (Does not require the user to have a specific car to see and post to these comments)*: **P0100, P0101, P0102, P0103**

## Live Link
https://project-mech.now.sh/

## Tech
Reactjs, jQuery, CSS

## npm i
```
npm install moment --save
```

## Routes

```
/WelcomePage
/LoginPage
/ForgotPage
/RegistrationPage
/DtcCommentListPage
/InnerDtcCommentListPage
/GaragePage
/DtcSearchPage
/NotFoundPage
```

## Components

```
/App
/Utility
/Header
/Footer
/LoginForm
/RegistrationForm
/DtcCommentListItem
/InnerDtcCommentListItem
/InnerDtcCommentListItemHeader
/CarForm
/CarListItem
/CarSelectDropdown
/DtcForm
/FilteredDtcCommentListItem
/FilteredDtcCommentListItemHeader
/CommentForm
```
## Next Steps
1. DTC
    - Add more car makes.
    - Add different dtc types, such as C, B, and U type codes.
    - Add solutions to dtc.
  
2. VIN
    - Add car models.
    - Add where car is made in.

## Back-end
https://github.com/peyo/project-mech-api

## Data
This is a collection of DTC by make and VINs that correspond with world manufacturer identifiers (WMI).
https://github.com/peyo/dtc-and-vin-data

## More Preview

![Preview02](https://user-images.githubusercontent.com/55764217/84456812-cce3e700-ac15-11ea-9cac-2a9ff88e80a5.png)
![Preview03](https://user-images.githubusercontent.com/55764217/84456815-ce151400-ac15-11ea-9308-56c144f90276.png)
![Preview04](https://user-images.githubusercontent.com/55764217/84456817-cfded780-ac15-11ea-8102-451b8001f1bd.png)
![Preview05](https://user-images.githubusercontent.com/55764217/84456819-d1100480-ac15-11ea-9ad2-15bc77241792.png)
