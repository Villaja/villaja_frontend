import { TopBarSellerSide } from "../../components/Seller Login Page/TopBarSellerSide";
import { IconInputFields } from "../../components/Seller Login Page/IconInputFields";
import { BottomDirectory } from "../../components/Seller Login Page/BottomDirectory";
import { Buttons } from "../../components/Seller Login Page/Buttons";
import "./SellerLogin.css";

export const SellerLogIn = () => {
  return (
    <div className="seller-log-in">
      <div className="div-2">
        <BottomDirectory className="bottom-directory-instance" property1="seller-pov" />
        <TopBarSellerSide
          className="top-bar-seller-side-instance"
          frameClassName="design-component-instance-node"
          hasGroup={false}
          property1="seller-sign-up"
        />
        <div className="frame-6">
          <div className="text-wrapper-9">Welcome, Villajer</div>
          <IconInputFields
            frameClassName="icon-input-fields-instance"
            leadingIcon={false}
            state="default"
            text="jaysmith@example.com"
            text1="E-mail address:"
          />
          <IconInputFields
            frameClassName="icon-input-fields-instance"
            leadingIcon={false}
            state="default"
            text="Enter password"
            text1="Password:"
          />
          <Buttons className="buttons-7" divClassName="buttons-8" property1="default-filled" text="LOG IN" />
          <div className="group-4">
            <p className="text-wrapper-10">Do not have an account?</p>
            <img className="line" alt="Line" src="/img/line-9.svg" />
            <img className="line-2" alt="Line" src="/img/line-10.svg" />
          </div>
          <img className="buttons-9" alt="Buttons" src="/img/buttons.svg" />
        </div>
      </div>
    </div>
  );
};
