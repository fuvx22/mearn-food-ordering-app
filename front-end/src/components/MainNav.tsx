import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UserNameMenu from "./UserNameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <>
          <Link
            to="/order-status"
            className="font-bold text-lg hover:text-orange-500 hover:bg-white"
          >
            Orders status
          </Link>
          <UserNameMenu />
        </>
      ) : (
        <Button
          variant={"ghost"}
          className="font-bold text-lg hover:text-orange-500 hover:bg-white"
          onClick={async () => loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
