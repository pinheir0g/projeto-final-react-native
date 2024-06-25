import { UserContext } from "../contexts/UserContext";
import DrawerComponent from "./drawer";
import React, { useContext } from "react";
import { AuthStackNavigation } from "./stack";


const Routes = () => {

    const { signed } = useContext(UserContext);
    return (
        <>
            {signed ? <DrawerComponent /> : <AuthStackNavigation />}
        </>
    );
};

export default Routes;