import { BottomDirectory } from "../../components/CustomerSignUp/BottomDirectory/BottomDirectory";
import { Buttons } from "../../components/CustomerSignUp/Buttons/Buttons";
import { IconInputFields } from "../../components/CustomerSignUp/IconInputFields/IconInputFields";
import { TopBar } from "../../components/CustomerSignUp/TopBar/TopBar";
import "./CustomerSignUp.css";

const CustomerSignUp = () => {
  return (
    <div className="customer-sign-up">
      <div className="div-2">
        <BottomDirectory className="bottom-directory-instance" property1="default" />
        <TopBar
          className="top-bar-instance"
          hasDiv={false}
          hasFrame={false}
          hasFrame1={false}
          hasFrame2={false}
          hasFrame3={false}
          hasImg={false}
          hasShoppingCartWrapper={false}
          property1="default"
          topMenuBarClassName="design-component-instance-node"
          visible={false}
        />
        <div className="frame-12">
          <div className="text-wrapper-18">Create an Account</div>
          <IconInputFields
            frameClassName="icon-input-fields-instance"
            leadingIcon={false}
            state="default"
            text="Enter your first name"
            text1="First Name"
          />
          <IconInputFields
            frameClassName="icon-input-fields-instance"
            leadingIcon={false}
            state="default"
            text="Enter your last name"
            text1="Last Name"
          />
          <IconInputFields
            frameClassName="icon-input-fields-instance"
            leadingIcon={false}
            state="default"
            text="+234 800 000 0000"
            text1="Phone Number"
          />
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
            text="Enter your password"
            text1="Password:"
          />
          <Buttons className="buttons-2" property1="default-filled" text="SIGN UP" />
          <div className="group-2">
            <p className="p">Already have an account ?</p>
            <img className="line" alt="Line" src="/img/line-9.svg" />
            <img className="line-2" alt="Line" src="/img/line-10.svg" />
          </div>
          <img className="buttons-3" alt="Buttons" src="/img/buttons.svg" />
        </div>
      </div>
    </div>
  );
};


export default CustomerSignUp